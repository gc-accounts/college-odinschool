import axiosApi, {backendUrl} from "../apiCall";
import announcementSchema from "./schema/announcement";

function transformAnnouncementData(announcement: any) {
    return {
        text: announcement.text,
        description: announcement.description,
        image: backendUrl + announcement.image.url
    }
}

export const getAnnouncements = async () => {
    const response = await axiosApi.post("", {
        query: `
            query Announcements  {
                announcements (pagination: {page: 1, pageSize: 3} filters: {is_featured: {eq: true}}) {
                    ${announcementSchema}
                }
            }
        `
    });


    return response.data.data.announcements.map(transformAnnouncementData);

}

