import axiosApi, { backendUrl } from "../apiCall";
import mentorSchema from "./schema/mentor";


function modifyMentor(mentor: any) {
    return {
        id: mentor.documentId,
        name: mentor.name,
        title: mentor.designation,
        bio: mentor.description,
        avatar: backendUrl + mentor.photo?.url,
        companies: mentor?.companies?.map((company: any) => ({
            name: company.name,
            logo: backendUrl + company.logo.url
        })),
        featured: mentor.is_featured,
        expertise: mentor.tags?.split(',') || [],
        education: mentor?.education?.map((education: any) => ({
            degree: education.degree,
            institution: education.school,
            year: education.graduating_year
        })),
        // courses: mentor.courses
    }
}

export const getMentors = async (pageSize: number = 10, pageNumber: number = 1) => {
    const response = await axiosApi.post('', {
        query: `
            query Mentors {
                mentors(pagination: {pageSize: ${pageSize}, page: ${pageNumber}}) {
                    ${mentorSchema}
                }
            }
        `
    });
    return response.data.data.mentors?.map(modifyMentor) || [];
};


export const getMentorById = async (id: string) => {
    const response = await axiosApi.post('', {
        query: `
            query Mentor($documentId:ID!) {
                mentor(documentId: $documentId) {   
                    ${mentorSchema}
                }
            }
        `,
        variables: {
            documentId: id
        }
    });
    return modifyMentor(response.data.data.mentor) || null;
};

