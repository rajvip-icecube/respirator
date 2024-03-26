import { gql } from "@apollo/client";

export const GET_SEARCH_PRODUCTS = gql`
  query Products($searchTerm: String) {
    products(filter: { name: { match: $searchTerm } }) {
      total_count
      items {
        id
        name
        brand
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
