import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "isomorphic-fetch";
import React from "react";

const postgraphileClient = new ApolloClient({ uri: "/graphql" });

const WithApollo = ({ children }) => (
  <ApolloProvider client={postgraphileClient}>{children}</ApolloProvider>
);

export default WithApollo;
