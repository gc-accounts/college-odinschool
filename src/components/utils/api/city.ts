import { citySchema } from "./schema/cities";
import axiosApi, { backendUrl } from '../apiCall';


export const getCities = async ({pageNumber = 1, pageSize = 10, search = '', isFeatured = undefined}) => {

    let filterObj: any = {}
    let paginationObj: any = {
        pageSize: pageSize,
        page: pageNumber
    }
    
    if (search !== "") {
        filterObj.or = [
            { name: { containsi: search } },
            { description: { containsi: search } }
        ]
    }
    if(isFeatured != undefined){
        filterObj.is_featured = { eq: isFeatured }
    }
    
    const response = await axiosApi.post('', {
        query: `
            query Cities (
                $filters: CityFiltersInput
                $pagination: PaginationArg
            ) {
                cities(
                    filters: $filters,
                    pagination: $pagination
                ) {
                    ${citySchema}
                }
            }
        `,
        variables: {
            filters: filterObj,
            pagination: paginationObj
        }
    });

    return response.data.data.cities;
};
