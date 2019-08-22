import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { getCookie } from "./common/lib/cookies";

const authLink = token =>
  setContext((_, { headers }) => ({
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  }));

const getPostgraphileClient = (uri: string, token: string) =>
  new ApolloClient({
    link: authLink(token).concat(createHttpLink({ uri })),
    cache: new InMemoryCache()
  });

const WithApollo = ({ children }) => (
  <ApolloProvider
    client={getPostgraphileClient("/graphql", getCookie("jwt_token"))}
  >
    {children}
  </ApolloProvider>
);

export default WithApollo;
