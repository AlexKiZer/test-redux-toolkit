import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = 'https://metaphysics-staging.artsy.net/';

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});