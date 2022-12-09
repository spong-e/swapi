/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};

export type Film = {
  __typename?: 'Film';
  characters: Array<Scalars['String']>;
  created: Scalars['DateTime'];
  director: Scalars['String'];
  edited: Scalars['DateTime'];
  episodeId: Scalars['Int'];
  openingCrawl: Scalars['String'];
  planets: Array<Scalars['String']>;
  producer: Scalars['String'];
  releaseDate: Scalars['String'];
  species: Array<Scalars['String']>;
  starships: Array<Scalars['String']>;
  title: Scalars['String'];
  uid: Scalars['String'];
  url: Scalars['String'];
  vehicles: Array<Scalars['String']>;
};

export type Films = {
  __typename?: 'Films';
  message: Scalars['String'];
  results: Array<Film>;
};

export type People = {
  __typename?: 'People';
  message: Scalars['String'];
  next: Scalars['String'];
  results: Array<Person>;
  totalPages: Scalars['Int'];
  totalRecords: Scalars['Int'];
};

export type Person = {
  __typename?: 'Person';
  birthYear: Scalars['String'];
  created: Scalars['DateTime'];
  edited: Scalars['DateTime'];
  eyeColor: Scalars['String'];
  filmIds: Array<Scalars['String']>;
  films?: Maybe<Array<Maybe<Film>>>;
  gender: Scalars['String'];
  hairColor: Scalars['String'];
  height: Scalars['String'];
  homeworld: Scalars['String'];
  mass: Scalars['String'];
  name: Scalars['String'];
  skinColor: Scalars['String'];
  species: Array<Scalars['String']>;
  starships: Array<Scalars['String']>;
  uid: Scalars['String'];
  vehicles: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  film?: Maybe<Film>;
  films?: Maybe<Films>;
  people?: Maybe<People>;
  person?: Maybe<Person>;
};


export type QueryFilmArgs = {
  id: Scalars['Int'];
};


export type QueryPeopleArgs = {
  page: Scalars['Int'];
};


export type QueryPersonArgs = {
  id: Scalars['Int'];
};

export type GetPersonQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPersonQueryQuery = { __typename?: 'Query', person?: { __typename?: 'Person', name: string, homeworld: string, birthYear: string, hairColor: string, eyeColor: string, gender: string, height: string, mass: string, skinColor: string, films?: Array<{ __typename?: 'Film', uid: string, title: string } | null> | null } | null };

export type GetPeopleQueryQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetPeopleQueryQuery = { __typename?: 'Query', people?: { __typename?: 'People', message: string, totalRecords: number, totalPages: number, results: Array<{ __typename?: 'Person', name: string, uid: string }> } | null };

export type GetFilmQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetFilmQueryQuery = { __typename?: 'Query', film?: { __typename?: 'Film', title: string, openingCrawl: string } | null };


export const GetPersonQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPersonQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"person"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"homeworld"}},{"kind":"Field","name":{"kind":"Name","value":"birthYear"}},{"kind":"Field","name":{"kind":"Name","value":"hairColor"}},{"kind":"Field","name":{"kind":"Name","value":"eyeColor"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mass"}},{"kind":"Field","name":{"kind":"Name","value":"skinColor"}},{"kind":"Field","name":{"kind":"Name","value":"films"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonQueryQuery, GetPersonQueryQueryVariables>;
export const GetPeopleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPeopleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"totalRecords"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]} as unknown as DocumentNode<GetPeopleQueryQuery, GetPeopleQueryQueryVariables>;
export const GetFilmQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFilmQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"film"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"openingCrawl"}}]}}]}}]} as unknown as DocumentNode<GetFilmQueryQuery, GetFilmQueryQueryVariables>;