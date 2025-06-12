export default `

                    documentId
                    title
                    description
                    level
                    on_sale
                    has_certificate

                    course_modules {
      description
      display_order
      documentId
      image {
        url
      }
      image_url
      name
      old_id
      rich_description
      slug
      title
      video {
        url
      }
      video_slug
      is_rich_text_markdown
    }
                    rating {
                        id
                        overall_rating
                        total_rated
                    }
                    enrolled_students {
                        id
                        total_enrolled
                    }
                    overview
                    curriculum {
                        id
                        heading
                        lessons
                        description
                    }
                    slug
                    url_slug
                    image_url {
                        url
                    }
                    createdAt
                    updatedAt
                    publishedAt
                    image_url_string
        `