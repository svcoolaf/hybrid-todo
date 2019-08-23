import "isomorphic-fetch";
import Head from "next/head";
import React from "react";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import Page, { BaseExpectedQuery } from "./common/context/Page";
import { capitalize } from "./common/lib/string-utils";
import theme from "./common/lib/theme";

interface Props {
  title?: string;
  children?: React.ReactNode;
  page: string;
  query?: BaseExpectedQuery;
}
const Background = styled.div`
  background: ${theme.colors.lightest};
  min-height: 100vh;
  margin-bottom: ${theme.sizes.form + 2 * theme.sizes.double}px;
`;

function AppLayout({ page, title = "404", children, query }: Props) {
  return (
    <Background>
      <Head>
        <title>{capitalize(title)}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="/static/reset.css" />
        <link rel="stylesheet" href="/static/main.css" />
      </Head>
      <ApolloProvider client={new ApolloClient({ uri: "/graphql" })}>
        <ThemeProvider theme={theme}>
          <Page.Provider value={{ page, query }}>{children}</Page.Provider>
        </ThemeProvider>
      </ApolloProvider>
    </Background>
  );
}

export default AppLayout;
