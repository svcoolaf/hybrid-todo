import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";

const getPostgraphileClient = (uri: string) =>
  new ApolloClient({
    uri
  });

const WithApollo = ({ children }) => (
  <ApolloProvider client={getPostgraphileClient("/graphql")}>
    {children}
  </ApolloProvider>
);

export default WithApollo;
