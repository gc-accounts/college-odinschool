import axiosApi, { backendUrl } from "../apiCall";
import dsBook from "./schema/dsBook";


export const getDsBook = async () => {
    const response = await axiosApi.post('', {
        query: `
            query Query {
                dataScienceBook {
                    ${dsBook}
                }
            }
        `
    });

    console.log(response.data.data);

    return {
        ...response.data.data.dataScienceBook,
        chapters: response.data.data.dataScienceBook.chapers
    };
}



