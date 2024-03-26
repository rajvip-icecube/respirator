import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products($id: String!) {
    products(filter: { category_id: { eq: $id } }) {
      total_count
      items {
        id
        name
        brand
        clothingcolour
        clothingsize
        color
        sku
        price {
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
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
      }
    }
  }
`;
