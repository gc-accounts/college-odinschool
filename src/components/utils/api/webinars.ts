import axiosApi, { backendUrl } from '../apiCall';
import webinarSchema from './schema/webinars';

const transformWebinarData = (webinar: any) => {
    return {
        id: webinar.documentId || `web-${Math.random().toString(36).substr(2, 9)}`,
        title: webinar.title,
        description: webinar.description,
        date: webinar.date,
        time: webinar.time,
        duration: webinar.duration,
        instructor: webinar.Instructor,
        about_instructor: webinar.about_instructor,
        price: webinar.price || 0,
        image: webinar.image_url ?? backendUrl + webinar.poster_url[0]?.url,
        category: webinar.category || "Web Development",
        tags: webinar.tags?.split(',') || [],
        isFeatured: webinar.is_featured || false,
        isPaid: (webinar.price && webinar.price > 0) ? true : false,
        status: new Date(webinar.date) < new Date() ? "past" : "upcoming",
        isOdintalk: webinar.is_odin_talk || false,
        url_slug: webinar.slug,
        is_html: webinar.is_html || false,
    };
};

export const getWebinars = async ({
    pageNumber = 1,
    pageSize = 10,
    search = '',
    isOdintalk = undefined,
    isFeatured = undefined,
    time = 'all', // upcoming, past, all
    isPaid = undefined,
}) => {
    let filterObj: any = {};

    if (isFeatured != undefined) {
        filterObj.is_featured = { eq: isFeatured };
    }

    if (search != '') {
        filterObj.title = { containsi: search };
    }
    if (isOdintalk != undefined) {
        if (isOdintalk == true) {
            filterObj.is_odin_talk = { eq: true };
        } else {
            filterObj.or = [
                { "is_odin_talk": { "eq": false } },
                { "is_odin_talk": { "null": true } }
            ]
        }
    }
    if (time != 'all') {
        const currentDate = new Date();
        const currentDateString = currentDate.toISOString().split('T')[0]; // Get only the date part
        if (time == 'upcoming') {
            filterObj.date = { gt: currentDateString };
        } else if (time == 'past') {
            filterObj.date = { lt: currentDateString };
        }
    }
    if (isPaid != undefined) {
        filterObj.price = isPaid ? { gt: 0 } : { eq: 0 };
    }
    const response = await axiosApi.post('', {
        query: `    
            query Webinars($filters: WebinarFiltersInput, $pagination: PaginationArg) {
                webinars(filters: $filters, pagination: $pagination) {
                    ${webinarSchema}
                }
            }
        `,
        variables: {
            filters: filterObj,
            pagination: {
                page: pageNumber,
                pageSize: pageSize
            }
        }
    });

    return response.data.data.webinars.map(transformWebinarData);
};

export const getWebinar = async (id: string, url_slug: string = "") => {
    let webinarItem = null;
    if (id != "") {
        const response = await axiosApi.post('', {
            query: `
                query Webinar($documentId: ID!) {
                    webinar(documentId: $documentId) {
                    ${webinarSchema}
                }
            }
        `,
            variables: { documentId: id }
        });
        webinarItem = response.data.data.webinar;
    } else {
        const response = await axiosApi.post('', {
            query: `
                query Webinar($filters: WebinarFiltersInput) {
                    webinars(filters: $filters) {
                        ${webinarSchema}
                    }
                }
            `,
            variables: { filters: { slug: { eq: url_slug } } }
        });
        webinarItem = response.data.data.webinars[0];
    }


    return transformWebinarData(webinarItem);
};

