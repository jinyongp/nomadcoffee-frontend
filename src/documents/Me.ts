import { gql } from '@apollo/client';

gql`
  query Me {
    me {
      ok
      error
      user {
        id
        username
        email
        name
      }
    }
  }
`;
