import axiosApi, { backendUrl } from "../apiCall";
import organisationSchema from "./schema/organisation";

function modifyOrganisation(organisation: any) {
    return {
        id: organisation.documentId,
        name: organisation.name,
        logo: backendUrl + organisation.logo.url,
        is_featured: organisation.is_featured,
        documentId: organisation.documentId,
    };
}

export const getOrganisations = async () => {
    const response = await axiosApi.post("", {
        query: `
            query Organisations {
                organisations (pagination: {page: 1, pageSize: 100}) {
                    ${organisationSchema}
                }
            }
        `
    });
    return response.data.data.organisations.map(modifyOrganisation);
};
