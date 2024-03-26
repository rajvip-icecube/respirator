import { useQuery, gql } from '@apollo/client';
export const GET_PRODUCTS_BY_ID = gql`
query GetProductById($id: String!){
    products(filter: { sku: { eq: $id } }) {
        items {
            id
            name
            brand
            sku
            boxquantity            
            manufacturer
            meta_description
            meta_keyword
            meta_title
            new_from_date
            new_to_date
            stock_status
            swatch_image
            small_image {
                url
                label
                position
                disabled
            }
            thumbnail {
                url
                label
                position
                disabled
            }
            image {
                url
                label
                position
                disabled
            }
            media_gallery {
            url
                label
                position
                disabled
            }
            description {
                html
            }
            price {
                regularPrice {
                    amount {
                        currency
                        value
                    }
                }
            }                        
        }
    }
}
`;