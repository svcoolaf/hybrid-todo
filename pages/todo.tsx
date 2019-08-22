import React from "react";
import AppLayout from "../app/AppLayout";
import { PAGES_MAP } from "../app/common/pages";
import Todo from "../app/todo/Todo";

export default () => (
  <AppLayout {...PAGES_MAP.todo}>
    <Todo />
  </AppLayout>
);
