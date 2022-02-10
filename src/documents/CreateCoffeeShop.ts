import { gql } from '@apollo/client';

gql`
  mutation CreateCoffeeShop(
    $name: String!
    $latitude: String!
    $longitude: String!
    $photos: [String]
    $categories: [String]
  ) {
    createCoffeeShop(
      name: $name
      latitude: $latitude
      longitude: $longitude
      photos: $photos
      categories: $categories
    ) {
      ok
      error
    }
  }
`;
