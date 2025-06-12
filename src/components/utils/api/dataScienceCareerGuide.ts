import axiosApi, { backendUrl } from "../apiCall";
import dataScienceCareerGuideSchema from "./schema/dataScienceCareerGuide";


function modifyDataScienceCareerGuide(dataScienceCareerGuide: any) {
    return {
        ...dataScienceCareerGuide,
        author:{
            ...dataScienceCareerGuide.author,
            avatar: backendUrl + dataScienceCareerGuide.author?.avatar?.url,
        },
        content: dataScienceCareerGuide.content.map((content: any) => ({
            ...content,
            file: backendUrl + content?.file?.url,
        })),
        file: backendUrl + dataScienceCareerGuide?.file?.url,
        poster: backendUrl + dataScienceCareerGuide?.poster?.url,
    }
}

export const getDataScienceCareerGuide = async () => {
    const response = await axiosApi.post("", {
        query: `
            query DataScienceCareerGuide {
                dataScienceCareerGuide {
                    ${dataScienceCareerGuideSchema}
                }
            }
        `
    });

    return modifyDataScienceCareerGuide(response.data.data.dataScienceCareerGuide);
}

