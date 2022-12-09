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
  DateTime: any;
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
  films: Array<Scalars['String']>;
  gender: Scalars['String'];
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
  people?: Maybe<People>;
};


export type QueryPeopleArgs = {
  page?: Scalars['Int'];
};
