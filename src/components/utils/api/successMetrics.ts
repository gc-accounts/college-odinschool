import axiosApi, { backendUrl } from '../apiCall';
import { successMetrics, successStories } from './schema/successMetrics';



export const getSuccessMetrics = async () => {
    const response = await axiosApi.post('', {
        query: `
            query SuccessStoryMetric($pagination: PaginationArg) {
                successStoryMetric {
                    ${successMetrics}
                }
                testimonials(pagination: $pagination) {
                    ${successStories}
                }
            }
        `,
        variables: {
            pagination: {
                pageSize: 6,
            }
        }
    });
    const data = response.data.data.successStoryMetric;
    const successStoriesItems = data.success_stories.map((story: any) => {
        return {
            name: story.name,
            role: story.current_position,
            image: backendUrl + story.image_url?.url,
            story: story.description,
            title: story.title,
            course: story.description_course,
            metrics: [
                { label: "Salary Increase", value: story.salary_increase + "%" },
                { label: "Time to Job", value: story.time_to_job },
                { label: "ROI", value: story.investment_roi + "x" }
            ],
            tags: story.skills?.split(',')
        }
    })

    const modifiedTestimonials = response.data.data.testimonials.map((story: any) => {
        return {
            id: story.documentId,
            name: story.user,
            role: story.current_position,
            company: story.company,
            quote: story.description,
            image: backendUrl + story.image_url?.url,
        }
    })



    return {
        successStories: successStoriesItems,
        placementRate: data.placement_rate,
        studentSatisfaction: data.student_satisfaction,
        salaryIncrease: data.salary_increase,
        testimonials: modifiedTestimonials
    }
}




