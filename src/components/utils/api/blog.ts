import axiosApi, { backendUrl } from '../apiCall';
import blog from './schema/blog';


function modifyBlog(blog: any) {
    return {
        id: blog?.documentId,
        title: blog?.title,
        slug: blog?.post_old_url,
        url_slug: blog?.url_slug,
        excerpt: blog?.meta_description,
        content: blog?.post_body,

        author: {
            name: blog?.author,
        },

        coverImage: blog?.image_url ? blog?.image_url : backendUrl + blog?.image?.url,
        // readTime: 6,
        publishedAt: blog?.publishedAt,
        tags: blog?.tags?.split(','),
        head_html: blog?.head_html,
    }
}

export const getBlogs = async ({ page = 1, search = '' }) => {

    let filterObj: any = {}
    let paginationObj: any = {
        pageSize: 10,
        page: page
    }
    if (search !== "") {
        filterObj.meta_description = {
            containsi: search
        }
    }

    const response = await axiosApi.post('', {
        query: `
            query Blogs (
                $filters: BlogFiltersInput
                $pagination: PaginationArg
            ) {
                blogs(
                    pagination: $pagination,
                    filters: $filters
                ) {
                    ${blog}
                }
            }
        `,
        variables: {
            filters: filterObj,
            pagination: paginationObj
        }
    });

    return response.data.data.blogs.map(modifyBlog);
};


export const getBlog = async (id: string, url_slug: string = "") => {
    let blogItem = null;
    if (url_slug === "") {
        const response = await axiosApi.post('', {
            query: `
                query Blog($documentId: ID!) {
                blog(documentId: $documentId) {
                    ${blog}
                }
            }
        `,
            variables: {
                documentId: id
            }
        });

        blogItem = modifyBlog(response.data.data.blog);
    } else {
        const response = await axiosApi.post('', {
            query: `
                query Blogs($filters: BlogFiltersInput) {
                    blogs(filters: $filters) {
                        ${blog}
                    }
                }
            `,
            variables: {
                filters: {
                    url_slug: { eq: url_slug }
                }
            }
        });

        blogItem = modifyBlog(response.data.data.blogs[0]);
    }

    return blogItem;
};


