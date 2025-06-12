export default `
        documentId
    createdAt
    publishedAt
    updatedAt
    chapers (pagination: {page: 1, pageSize: 100}) {
      content
      id
      is_html
      title
      url_slug
      children (pagination: {page: 1, pageSize: 100}) {
        id
        title
        url_slug
      }
    }
`