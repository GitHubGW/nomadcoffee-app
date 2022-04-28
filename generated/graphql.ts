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
  Upload: any;
};

export type Category = {
  __typename?: 'Category';
  coffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  totalCoffeeShops?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['String'];
};

export type CoffeeShop = {
  __typename?: 'CoffeeShop';
  categories?: Maybe<Array<Maybe<Category>>>;
  coffeeShopPhotos?: Maybe<Array<Maybe<CoffeeShopPhoto>>>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  latitude?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type CoffeeShopPhoto = {
  __typename?: 'CoffeeShopPhoto';
  coffeeShop: CoffeeShop;
  coffeeShopId: Scalars['Int'];
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type CommonResult = {
  __typename?: 'CommonResult';
  id?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CommonResult;
  createCoffeeShop: CommonResult;
  editCoffeeShop: CommonResult;
  editProfile: CommonResult;
  login: LoginResult;
  toggleFollowUser: CommonResult;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCoffeeShopArgs = {
  category?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  latitude?: InputMaybe<Scalars['Int']>;
  longitude?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};


export type MutationEditCoffeeShopArgs = {
  category?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  id: Scalars['Int'];
  latitude?: InputMaybe<Scalars['Int']>;
  longitude?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationEditProfileArgs = {
  avatarUrl?: InputMaybe<Scalars['Upload']>;
  email?: InputMaybe<Scalars['String']>;
  githubUsername?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationToggleFollowUserArgs = {
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  searchCoffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  searchUsers: SearchUsersResult;
  seeCategories: SeeCategoriesResult;
  seeCategory: SeeCategoryResult;
  seeCoffeeShop: SeeCoffeeShopResult;
  seeCoffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  seeFollowers: SeeFollowResult;
  seeFollowing: SeeFollowResult;
  seeMe?: Maybe<User>;
  seeProfile: SeeProfileResult;
};


export type QuerySearchCoffeeShopsArgs = {
  keyword?: InputMaybe<Scalars['String']>;
};


export type QuerySearchUsersArgs = {
  username: Scalars['String'];
};


export type QuerySeeCategoriesArgs = {
  cursorId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeCategoryArgs = {
  name: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeCoffeeShopArgs = {
  name: Scalars['String'];
};


export type QuerySeeCoffeeShopsArgs = {
  offset: Scalars['Int'];
};


export type QuerySeeFollowersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type QuerySeeFollowingArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type QuerySeeProfileArgs = {
  username: Scalars['String'];
};

export type SearchUsersResult = {
  __typename?: 'SearchUsersResult';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type SeeCategoriesResult = {
  __typename?: 'SeeCategoriesResult';
  categories?: Maybe<Array<Maybe<Category>>>;
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type SeeCategoryResult = {
  __typename?: 'SeeCategoryResult';
  coffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type SeeCoffeeShopResult = {
  __typename?: 'SeeCoffeeShopResult';
  coffeeShop?: Maybe<CoffeeShop>;
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type SeeFollowResult = {
  __typename?: 'SeeFollowResult';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  totalFollow?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type SeeProfileResult = {
  __typename?: 'SeeProfileResult';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  githubUsername?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isFollowing: Scalars['Boolean'];
  isMe: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  totalFollowers: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type CreateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'CommonResult', ok: boolean, message: string, id?: number | null } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResult', ok: boolean, message: string, token?: string | null } };

export type SearchCoffeeShopsQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']>;
}>;


export type SearchCoffeeShopsQuery = { __typename?: 'Query', searchCoffeeShops?: Array<{ __typename?: 'CoffeeShop', id: number, name: string, latitude?: number | null, longitude?: number | null, coffeeShopPhotos?: Array<{ __typename?: 'CoffeeShopPhoto', id: number, url: string } | null> | null, user: { __typename?: 'User', id: number, username: string, avatarUrl?: string | null }, categories?: Array<{ __typename?: 'Category', id: number, name: string, slug: string } | null> | null } | null> | null };

export type SeeCoffeeShopsQueryVariables = Exact<{
  offset: Scalars['Int'];
}>;


export type SeeCoffeeShopsQuery = { __typename?: 'Query', seeCoffeeShops?: Array<{ __typename?: 'CoffeeShop', id: number, name: string, latitude?: number | null, longitude?: number | null, user: { __typename?: 'User', id: number, username: string, avatarUrl?: string | null }, coffeeShopPhotos?: Array<{ __typename?: 'CoffeeShopPhoto', id: number, url: string } | null> | null, categories?: Array<{ __typename?: 'Category', id: number, name: string, slug: string } | null> | null } | null> | null };

export type SeeMeQueryVariables = Exact<{ [key: string]: never; }>;


export type SeeMeQuery = { __typename?: 'Query', seeMe?: { __typename?: 'User', id: number, email: string, username: string, name?: string | null, location?: string | null, avatarUrl?: string | null, githubUsername?: string | null, isMe: boolean, totalFollowing: number, totalFollowers: number, createdAt: string, updatedAt: string } | null };


export const CreateAccountDocument = gql`
    mutation CreateAccount($email: String!, $username: String!, $password: String!, $name: String) {
  createAccount(
    email: $email
    username: $username
    password: $password
    name: $name
  ) {
    ok
    message
    id
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
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      name: // value for 'name'
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
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ok
    message
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
export const SearchCoffeeShopsDocument = gql`
    query SearchCoffeeShops($keyword: String) {
  searchCoffeeShops(keyword: $keyword) {
    id
    name
    latitude
    longitude
    coffeeShopPhotos {
      id
      url
    }
    user {
      id
      username
      avatarUrl
    }
    categories {
      id
      name
      slug
    }
  }
}
    `;

/**
 * __useSearchCoffeeShopsQuery__
 *
 * To run a query within a React component, call `useSearchCoffeeShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCoffeeShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCoffeeShopsQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchCoffeeShopsQuery(baseOptions?: Apollo.QueryHookOptions<SearchCoffeeShopsQuery, SearchCoffeeShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCoffeeShopsQuery, SearchCoffeeShopsQueryVariables>(SearchCoffeeShopsDocument, options);
      }
export function useSearchCoffeeShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCoffeeShopsQuery, SearchCoffeeShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCoffeeShopsQuery, SearchCoffeeShopsQueryVariables>(SearchCoffeeShopsDocument, options);
        }
export type SearchCoffeeShopsQueryHookResult = ReturnType<typeof useSearchCoffeeShopsQuery>;
export type SearchCoffeeShopsLazyQueryHookResult = ReturnType<typeof useSearchCoffeeShopsLazyQuery>;
export type SearchCoffeeShopsQueryResult = Apollo.QueryResult<SearchCoffeeShopsQuery, SearchCoffeeShopsQueryVariables>;
export const SeeCoffeeShopsDocument = gql`
    query SeeCoffeeShops($offset: Int!) {
  seeCoffeeShops(offset: $offset) {
    id
    name
    latitude
    longitude
    user {
      id
      username
      avatarUrl
    }
    coffeeShopPhotos {
      id
      url
    }
    categories {
      id
      name
      slug
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
 *      offset: // value for 'offset'
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
export const SeeMeDocument = gql`
    query SeeMe {
  seeMe {
    id
    email
    username
    name
    location
    avatarUrl
    githubUsername
    isMe
    totalFollowing
    totalFollowers
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSeeMeQuery__
 *
 * To run a query within a React component, call `useSeeMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeeMeQuery(baseOptions?: Apollo.QueryHookOptions<SeeMeQuery, SeeMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeMeQuery, SeeMeQueryVariables>(SeeMeDocument, options);
      }
export function useSeeMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeMeQuery, SeeMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeMeQuery, SeeMeQueryVariables>(SeeMeDocument, options);
        }
export type SeeMeQueryHookResult = ReturnType<typeof useSeeMeQuery>;
export type SeeMeLazyQueryHookResult = ReturnType<typeof useSeeMeLazyQuery>;
export type SeeMeQueryResult = Apollo.QueryResult<SeeMeQuery, SeeMeQueryVariables>;