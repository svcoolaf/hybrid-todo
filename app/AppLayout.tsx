import "isomorphic-fetch";
import Head from "next/head";
import React from "react";

import Page, { BaseExpectedQuery } from "./common/context/Page";
import { capitalize } from "./common/lib/string-utils";
import WithApollo from "./WithApollo";

interface Props {
  title?: string;
  children?: React.ReactNode;
  page: string;
  query?: BaseExpectedQuery;
}

function AppLayout({ page, title = "404", children, query }: Props) {
  return (
    <>
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
      <WithApollo>
        <Page.Provider value={{ page, query }}>{children}</Page.Provider>
      </WithApollo>
    </>
  );
}

export default AppLayout;
