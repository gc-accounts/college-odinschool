export default `

                    documentId
                    title
                    description
                    is_learning_hub


                    level
                    on_sale
                    has_certificate
                    
                    cohortDates{
                     id
                     cohort1
                     cohort2
                    }

                    rating {
                        id
                        overall_rating
                        total_rated
                    }
                    enrolled_students {
                        id
                        total_enrolled
                        enrolled_avatars_connection {
                            nodes {
                                url
                            }
                        }
                        enrolled_avatars {
                            url
                            name
                        }
                    }
                    overview
                    curriculum {
                        id
                        heading
                        lessons
                        description
                    }
                    slug
                    resources_connection {
                        nodes {
                            downloads
                            file {
                                url
                            }
                        }
                    }
                    resources {
                        downloads
                        file {
                            url
                        }
                        tags
                        slug
                        title
                        type
                        description
                        documentId
                    }
                    url_slug
                    image_url {
                        url
                    }
                    createdAt
                    updatedAt
                    publishedAt
                    price
                    final_price
                    image_url_string
                    longDescription
               
        `