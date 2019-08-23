import React, { useState } from "react";
import FloatingForm from "./FloatingForm";
import Hero from "./Hero";
import TodoList from "./TodoList";

const Index = () => {
  const [hash, setUpdate] = useState(0);
  const triggerFetch = () => setUpdate(hash + 1);

  return (
    <>
      <Hero />
      <TodoList update={hash} triggerFetch={triggerFetch} />
      <FloatingForm triggerFetch={triggerFetch} />
    </>
  );
};

export default Index;
