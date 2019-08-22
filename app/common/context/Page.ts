import React from "react";

export interface BaseExpectedQuery {}

export interface PageContext<T extends BaseExpectedQuery> {
  query: T;
  page: string;
}

const DEFAULT: PageContext<BaseExpectedQuery> = {
  page: "404",
  query: {}
};

const Page = React.createContext(DEFAULT);

export default Page;
