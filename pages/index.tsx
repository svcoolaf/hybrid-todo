import React from "react";
import AppLayout from "../app/AppLayout";
import { PAGES_MAP } from "../app/common/pages";
import Index from "../app/home/Index";

export default () => (
  <AppLayout {...PAGES_MAP.home}>
    <Index />
  </AppLayout>
);
