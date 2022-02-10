import { gql } from '@apollo/client';

gql`
  mutation DeleteCoffeeShop($deleteCoffeeShopId: Int!) {
    deleteCoffeeShop(id: $deleteCoffeeShopId) {
      ok
      error
    }
  }
`;
