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
  DateTime: any;
};

export type Dataset = {
  __typename?: 'Dataset';
  description: Scalars['String'];
  images: Array<Image>;
  name: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  acquisitionDate?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  originalFile?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ensureOmeroUser: OmeroUser;
};


export type MutationEnsureOmeroUserArgs = {
  input: OmerUserInput;
};

export type OmerUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type OmeroUser = {
  __typename?: 'OmeroUser';
  id: Scalars['ID'];
  omeroPassword: Scalars['String'];
  omeroUsername: Scalars['String'];
  user: User;
};

export type Project = {
  __typename?: 'Project';
  datasets: Array<Dataset>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me: User;
  omeroUsers: Array<OmeroUser>;
  projects: Array<Project>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  sub: Scalars['String'];
  username: Scalars['String'];
};

export type EnsureOmeroUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type EnsureOmeroUserMutation = { __typename?: 'Mutation', ensureOmeroUser: { __typename?: 'OmeroUser', id: string, omeroUsername: string, omeroPassword: string, user: { __typename?: 'User', id: string, sub: string } } };

export type ListProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', name: string, description: string, datasets: Array<{ __typename?: 'Dataset', name: string, description: string, images: Array<{ __typename?: 'Image', name: string, acquisitionDate?: any | null }> }> }> };


export const EnsureOmeroUserDocument = gql`
    mutation EnsureOmeroUser($username: String!, $password: String!) {
  ensureOmeroUser(input: {username: $username, password: $password}) {
    id
    omeroUsername
    omeroPassword
    user {
      id
      sub
    }
  }
}
    `;
export type EnsureOmeroUserMutationFn = Apollo.MutationFunction<EnsureOmeroUserMutation, EnsureOmeroUserMutationVariables>;

/**
 * __useEnsureOmeroUserMutation__
 *
 * To run a mutation, you first call `useEnsureOmeroUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnsureOmeroUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ensureOmeroUserMutation, { data, loading, error }] = useEnsureOmeroUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useEnsureOmeroUserMutation(baseOptions?: Apollo.MutationHookOptions<EnsureOmeroUserMutation, EnsureOmeroUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnsureOmeroUserMutation, EnsureOmeroUserMutationVariables>(EnsureOmeroUserDocument, options);
      }
export type EnsureOmeroUserMutationHookResult = ReturnType<typeof useEnsureOmeroUserMutation>;
export type EnsureOmeroUserMutationResult = Apollo.MutationResult<EnsureOmeroUserMutation>;
export type EnsureOmeroUserMutationOptions = Apollo.BaseMutationOptions<EnsureOmeroUserMutation, EnsureOmeroUserMutationVariables>;
export const ListProjectsDocument = gql`
    query ListProjects {
  projects {
    name
    description
    datasets {
      name
      description
      images {
        name
        acquisitionDate
      }
    }
  }
}
    `;

/**
 * __useListProjectsQuery__
 *
 * To run a query within a React component, call `useListProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ListProjectsQuery, ListProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProjectsQuery, ListProjectsQueryVariables>(ListProjectsDocument, options);
      }
export function useListProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProjectsQuery, ListProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProjectsQuery, ListProjectsQueryVariables>(ListProjectsDocument, options);
        }
export type ListProjectsQueryHookResult = ReturnType<typeof useListProjectsQuery>;
export type ListProjectsLazyQueryHookResult = ReturnType<typeof useListProjectsLazyQuery>;
export type ListProjectsQueryResult = Apollo.QueryResult<ListProjectsQuery, ListProjectsQueryVariables>;