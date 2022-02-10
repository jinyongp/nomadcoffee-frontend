import { gql } from '@apollo/client';

gql`
  query SeeCoffeeShops($items: Int!, $lastId: Int, $userId: Int) {
    seeCoffeeShops(items: $items, lastId: $lastId, userId: $userId) {
      ok
      error
      coffeeShops {
        id
        name
        isMine
        user {
          id
          name
        }
        photos(items: 10) {
          id
          url
        }
        categories(items: 3) {
          id
          name
        }
        createdAt
      }
    }
  }
`;
