import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";

const WithApollo = ({ children }) => (
  <ApolloProvider client={new ApolloClient({ uri: "/graphql" })}>
    {children}
  </ApolloProvider>
);

export default WithApollo;
