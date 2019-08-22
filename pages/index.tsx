import React from "react";
import AppLayout from "../app/AppLayout";
import { PAGES_MAP } from "../app/common/pages";
import TodoList from "../app/home/TodoList";

export default () => (
  <AppLayout {...PAGES_MAP.home}>
    <TodoList />
  </AppLayout>
);
