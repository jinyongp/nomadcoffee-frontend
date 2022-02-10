import { gql } from '@apollo/client';

gql`
  mutation EditCoffeeShop(
    $editCoffeeShopId: Int!
    $name: String
    $latitude: String
    $longitude: String
    $photos: [String]
    $categories: [String]
  ) {
    editCoffeeShop(
      id: $editCoffeeShopId
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
