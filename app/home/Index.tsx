import React, { useState } from "react";
import FloatingForm from "./FloatingForm";
import Hero from "./Hero";
import TodoList from "./TodoList";

const Index = () => {
  const [fetchHash, setUpdate] = useState(0);
  const triggerFetch = () => setUpdate(fetchHash + 1);

  return (
    <>
      <Hero />
      <TodoList fetchHash={fetchHash} triggerFetch={triggerFetch} />
      <FloatingForm triggerFetch={triggerFetch} />
    </>
  );
};

export default Index;
