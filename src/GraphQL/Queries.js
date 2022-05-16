import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    category {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

export const GET_PRODUCT = gql`
query($productId: String) {
	product(id: $productId) {
    name
    inStock
    gallery
    description
    category
    attributes {
      id
      name
      type
      items {
        displayValue
        value
      }
    }
    prices {
      currency {
        symbol
      }
      amount
    }
    brand
  }
}
`