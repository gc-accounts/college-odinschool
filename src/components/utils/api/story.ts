import axiosApi, { backendUrl } from "../apiCall";
import storySchema from "./schema/story";

const modifyStory = (story: any) => {
    return {
        ...story,
        avatar: story.avatar_url ?? backendUrl + story.avatar?.url,
        current_company_image: story.current_company_image_url ?? backendUrl + story.current_company_image?.url,
        testimonial_video: story.testimonial_video_link ?? backendUrl + story.testimonial_video?.url,
        testimonial_video_thumbnail: story.testimonial_video_thumbnail_link ?? backendUrl + story.testimonial_video_thumbnail?.url,
    }
}


export const getStories = async ({
    pageNumber = 1,
    pageSize = 10,
    isFeatured = undefined,
    remarks = "",
}) => {

    let filterObj: any = {};

    if(isFeatured != undefined && isFeatured != false){
        filterObj.is_featured = { eq: isFeatured };
    }
    if(remarks != ""){
        filterObj.student_remark = { containsi: remarks };
    }
    let newFilterObj = {
        ...filterObj,
    }
    newFilterObj.and = [
        {testimonial_video_link: {ne: null}},
        {testimonial_video_thumbnail_link: {ne: null}},
        
        
    ]
    const pageiationObj = {
        page: pageNumber,
        pageSize: pageSize,
    }
    const response = await axiosApi.post('', {
        query: `
            query Stories($filters1: StoryFiltersInput, $filters2: StoryFiltersInput, $pagination: PaginationArg) {
                stories(filters: $filters1, pagination: $pagination) {
                    ${storySchema}
                }
                    storiesFiltered1: stories(filters: $filters1, pagination: $pagination) {
                        ${storySchema}
                    }
                    storiesFiltered2: stories(filters: $filters2, pagination: $pagination) {
                        ${storySchema}
                    }
            }
        `,
        variables: {
            filters1: filterObj,
            filters2: newFilterObj,
            pagination: pageiationObj,
        }
    });

    const obj = {
        stories: response.data?.data?.storiesFiltered1?.map(modifyStory),
        videoStories: response.data?.data?.storiesFiltered2?.map(modifyStory),
    }
    return obj;

}
