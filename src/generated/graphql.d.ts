import { FileUpload } from 'types/graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: FileUpload;
};

export type CategoriesOutput = {
  categories?: Maybe<Array<Maybe<Category>>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Category = {
  id: Scalars['Int'];
  name: Scalars['String'];
  shops: Array<Maybe<CoffeeShop>>;
  slug: Scalars['String'];
  totalShops: Scalars['Int'];
};


export type CategoryShopsArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};

export type CategoryOutput = {
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CoffeeShop = {
  categories: Array<Maybe<Category>>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  isMine: Scalars['Boolean'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos: Array<Maybe<CoffeeShopPhoto>>;
  updatedAt: Scalars['String'];
  user: User;
};


export type CoffeeShopCategoriesArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type CoffeeShopPhotosArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};

export type CoffeeShopOutput = {
  coffeeShop?: Maybe<CoffeeShop>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CoffeeShopPhoto = {
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  shop: CoffeeShop;
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type CoffeeShopsOutput = {
  coffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CommonOutput = {
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Mutation = {
  createAccount: CommonOutput;
  createCoffeeShop: CommonOutput;
  deleteCoffeeShop: CommonOutput;
  editCoffeeShop: CommonOutput;
  editProfile: CommonOutput;
  followUser: CommonOutput;
  login: TokenOutput;
  unfollowUser: CommonOutput;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDeleteCoffeeShopArgs = {
  id: Scalars['Int'];
};


export type MutationEditCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['Int'];
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationEditProfileArgs = {
  avatarURL?: InputMaybe<Scalars['Upload']>;
  email?: InputMaybe<Scalars['String']>;
  githubUsername?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationFollowUserArgs = {
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUnfollowUserArgs = {
  username: Scalars['String'];
};

export type Query = {
  me: UserOutput;
  searchUsers: UsersOutput;
  seeCategories: CategoriesOutput;
  seeCategory: CategoryOutput;
  seeCoffeeShop: CoffeeShopOutput;
  seeCoffeeShops: CoffeeShopsOutput;
  seeUser: UserOutput;
};


export type QuerySearchUsersArgs = {
  items: Scalars['Int'];
  keyword: Scalars['String'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeCategoriesArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeCategoryArgs = {
  id: Scalars['Int'];
};


export type QuerySeeCoffeeShopArgs = {
  id: Scalars['Int'];
};


export type QuerySeeCoffeeShopsArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeUserArgs = {
  username: Scalars['String'];
};

export type TokenOutput = {
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type User = {
  avatarURL?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  followers: Array<Maybe<User>>;
  following: Array<Maybe<User>>;
  githubUsername?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  totalFollowers: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};


export type UserFollowersArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type UserFollowingArgs = {
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};

export type UserOutput = {
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UsersOutput = {
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  users: Array<Maybe<User>>;
};

export type CreateAccountMutationVariables = Exact<{
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { createAccount: { ok: boolean, error?: string | null } };

export type CreateCoffeeShopMutationVariables = Exact<{
  name: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type CreateCoffeeShopMutation = { createCoffeeShop: { ok: boolean, error?: string | null } };

export type DeleteCoffeeShopMutationVariables = Exact<{
  deleteCoffeeShopId: Scalars['Int'];
}>;


export type DeleteCoffeeShopMutation = { deleteCoffeeShop: { ok: boolean, error?: string | null } };

export type EditCoffeeShopMutationVariables = Exact<{
  editCoffeeShopId: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type EditCoffeeShopMutation = { editCoffeeShop: { ok: boolean, error?: string | null } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { login: { ok: boolean, error?: string | null, token?: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me: { ok: boolean, error?: string | null, user?: { id: number, username: string, email: string, name?: string | null } | null } };

export type SeeCoffeeShopsQueryVariables = Exact<{
  items: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
}>;


export type SeeCoffeeShopsQuery = { seeCoffeeShops: { ok: boolean, error?: string | null, coffeeShops?: Array<{ id: number, name: string, isMine: boolean, createdAt: string, user: { id: number, name?: string | null }, photos: Array<{ id: number, url: string } | null>, categories: Array<{ id: number, name: string } | null> } | null> | null } };


export const CreateAccountDocument = gql`
    mutation CreateAccount($name: String!, $username: String!, $email: String!, $password: String!) {
  createAccount(
    name: $name
    username: $username
    email: $email
    password: $password
  ) {
    ok
    error
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      name: // value for 'name'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateCoffeeShopDocument = gql`
    mutation CreateCoffeeShop($name: String!, $latitude: String!, $longitude: String!, $photos: [String], $categories: [String]) {
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
export type CreateCoffeeShopMutationFn = Apollo.MutationFunction<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>;

/**
 * __useCreateCoffeeShopMutation__
 *
 * To run a mutation, you first call `useCreateCoffeeShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCoffeeShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCoffeeShopMutation, { data, loading, error }] = useCreateCoffeeShopMutation({
 *   variables: {
 *      name: // value for 'name'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      photos: // value for 'photos'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useCreateCoffeeShopMutation(baseOptions?: Apollo.MutationHookOptions<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>(CreateCoffeeShopDocument, options);
      }
export type CreateCoffeeShopMutationHookResult = ReturnType<typeof useCreateCoffeeShopMutation>;
export type CreateCoffeeShopMutationResult = Apollo.MutationResult<CreateCoffeeShopMutation>;
export type CreateCoffeeShopMutationOptions = Apollo.BaseMutationOptions<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>;
export const DeleteCoffeeShopDocument = gql`
    mutation DeleteCoffeeShop($deleteCoffeeShopId: Int!) {
  deleteCoffeeShop(id: $deleteCoffeeShopId) {
    ok
    error
  }
}
    `;
export type DeleteCoffeeShopMutationFn = Apollo.MutationFunction<DeleteCoffeeShopMutation, DeleteCoffeeShopMutationVariables>;

/**
 * __useDeleteCoffeeShopMutation__
 *
 * To run a mutation, you first call `useDeleteCoffeeShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCoffeeShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCoffeeShopMutation, { data, loading, error }] = useDeleteCoffeeShopMutation({
 *   variables: {
 *      deleteCoffeeShopId: // value for 'deleteCoffeeShopId'
 *   },
 * });
 */
export function useDeleteCoffeeShopMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCoffeeShopMutation, DeleteCoffeeShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCoffeeShopMutation, DeleteCoffeeShopMutationVariables>(DeleteCoffeeShopDocument, options);
      }
export type DeleteCoffeeShopMutationHookResult = ReturnType<typeof useDeleteCoffeeShopMutation>;
export type DeleteCoffeeShopMutationResult = Apollo.MutationResult<DeleteCoffeeShopMutation>;
export type DeleteCoffeeShopMutationOptions = Apollo.BaseMutationOptions<DeleteCoffeeShopMutation, DeleteCoffeeShopMutationVariables>;
export const EditCoffeeShopDocument = gql`
    mutation EditCoffeeShop($editCoffeeShopId: Int!, $name: String, $latitude: String, $longitude: String, $photos: [String], $categories: [String]) {
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
export type EditCoffeeShopMutationFn = Apollo.MutationFunction<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>;

/**
 * __useEditCoffeeShopMutation__
 *
 * To run a mutation, you first call `useEditCoffeeShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCoffeeShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCoffeeShopMutation, { data, loading, error }] = useEditCoffeeShopMutation({
 *   variables: {
 *      editCoffeeShopId: // value for 'editCoffeeShopId'
 *      name: // value for 'name'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      photos: // value for 'photos'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useEditCoffeeShopMutation(baseOptions?: Apollo.MutationHookOptions<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>(EditCoffeeShopDocument, options);
      }
export type EditCoffeeShopMutationHookResult = ReturnType<typeof useEditCoffeeShopMutation>;
export type EditCoffeeShopMutationResult = Apollo.MutationResult<EditCoffeeShopMutation>;
export type EditCoffeeShopMutationOptions = Apollo.BaseMutationOptions<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ok
    error
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
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

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SeeCoffeeShopsDocument = gql`
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

/**
 * __useSeeCoffeeShopsQuery__
 *
 * To run a query within a React component, call `useSeeCoffeeShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeCoffeeShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeCoffeeShopsQuery({
 *   variables: {
 *      items: // value for 'items'
 *      lastId: // value for 'lastId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSeeCoffeeShopsQuery(baseOptions: Apollo.QueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
      }
export function useSeeCoffeeShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
        }
export type SeeCoffeeShopsQueryHookResult = ReturnType<typeof useSeeCoffeeShopsQuery>;
export type SeeCoffeeShopsLazyQueryHookResult = ReturnType<typeof useSeeCoffeeShopsLazyQuery>;
export type SeeCoffeeShopsQueryResult = Apollo.QueryResult<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>;