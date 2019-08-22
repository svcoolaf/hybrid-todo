import React from "react";
import AppLayout from "../app/AppLayout";
import { PAGES_MAP } from "../app/common/pages";
import Home from "../app/home/Home";

export default () => (
  <AppLayout {...PAGES_MAP.home}>
    <Home />
  </AppLayout>
);
