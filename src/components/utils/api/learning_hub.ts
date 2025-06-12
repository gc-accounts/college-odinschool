import axiosApi, { backendUrl } from "../apiCall";
import learning_hub from "./schema/learning_hub";


function modifyCourseModules(courseModules: any) {
    return courseModules.map((module: any) => {
        return {
            ...module,
            image: module.image?.url ? backendUrl + module.image?.url : module.image_url,
            video: module.video?.url ? backendUrl + module.video?.url : module.video_slug,
            isYoutube: module.video?.url ? false : module.video_slug ? true : false,
            id: module.documentId
        }
    })
}


export const getLearningHubCourses = async ({ pageNumber = 1, city = '', isFeatured = undefined, search = '', category = '', level = '' }) => {

    let filterObj: any = {}
    let paginationObj: any = {
        pageSize: 10,
        page: pageNumber
    }
    if (city !== "") {
        filterObj.city = { name: { eq: city } }
    }

    if (isFeatured != undefined) {
        filterObj.is_featured = { eq: isFeatured }
    }
    if (search !== "") {
        filterObj.or = [
            { title: { containsi: search } },
            { description: { containsi: search } }
        ]
    }
    filterObj.is_learning_hub = { eq: true }

    // if (category !== "") {
    //     filterObj.category = { containsi: category }
    // }

    if (level !== "") {
        filterObj.level = { eq: level }
    }

    const response = await axiosApi.post('', {
        query: `
            query Courses (
                $filters: CourseFiltersInput
                $pagination: PaginationArg
            ) {
                courses(
                    pagination: $pagination,
                    filters: $filters
                ) {
                    ${learning_hub}
                }
            }
        `,
        variables: {
            filters: filterObj,
            pagination: paginationObj
        }
    });


    const data = response.data.data.courses.map((course: any) => {
        return {
            documentId: course.documentId,
            title: course.title,
            description: course.description,
            level: course.level,
            on_sale: course.on_sale,
            has_certificate: course.has_certificate,
            overview: course.overview,
            slug: course.slug,
            createdAt: course.createdAt,
            updatedAt: course.updatedAt,
            publishedAt: course.publishedAt,
            url_slug: course.url_slug,
            image: course.image_url_string ? course.image_url_string : backendUrl + course.image_url?.url,
            rating: course.rating?.overall_rating,
            total_enrolled: course.enrolled_students?.total_enrolled,
            curriculum: course.curriculum,
            modules: modifyCourseModules(course.course_modules)
        }
    });
    return data;
}


export const getLearningHubCourse = async (id: string, url_slug: string = "") => {
    let courseItem = null;
    if (url_slug === "") {
        const response = await axiosApi.post('', {
            query: `
            query Course($documentId: ID!) {
                course(documentId: $documentId) {
                    ${learning_hub}
                }
            }
        `,
            variables: {
                documentId: id
            }
        });
        courseItem = response.data.data.course;
    } else {
        const response = await axiosApi.post('', {
            query: `
            query Courses($filters: CourseFiltersInput) {
                courses(filters: $filters) {
                    ${learning_hub}
                }
            }
        `,
            variables: {
                filters: {
                    url_slug: { eq: url_slug }
                }
            }
        });
        courseItem = response.data.data.courses[0];
    }
    return {
        documentId: courseItem.documentId,
        title: courseItem.title,
        description: courseItem.description,
        level: courseItem.level,
        on_sale: courseItem.on_sale,
        publishedAt: courseItem.publishedAt,
        url_slug: courseItem.url_slug,
        image: courseItem.image_url_string ? courseItem.image_url_string : backendUrl + courseItem.image_url?.url,
        curriculum: courseItem.curriculum,
        modules: modifyCourseModules(courseItem.course_modules)
    }
}


