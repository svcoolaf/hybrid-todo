import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";
import { Model } from "../common/models/Model";
import { Todo } from "../common/models/Todo";
import Check from "./Check";

const TodoList = () => {
  const [createJob] = useMutation<any, Partial<Todo>>(Todo.create);
  const [markAsComplete] = useMutation<any, Partial<Todo>>(Todo.update);
  const [deleteJob] = useMutation<any, Model>(Todo.delete);
  const [update, setUpdate] = useState(0);
  const [content, setContent] = useState("");

  const {
    loading,
    data: { allJobs },
    error,
    refetch
  } = useQuery(Todo.getAll);

  useEffect(() => {
    refetch();
  }, [update]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          createJob({
            variables: { content }
          }).then(() => {
            setContent("");
            setUpdate(update + 1);
          });
        }}
      >
        Content to encode:
        <input
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
        />
      </form>
      {allJobs.nodes.map((job: Todo, i) => (
        <div key={job.id}>
          {i + 1}:
          <Check
            onClick={() => {
              markAsComplete({
                variables: { id: job.id, complete: !job.complete }
              }).then(() => setUpdate(update + 1));
            }}
            checked={job.complete}
          />
          {job.content}
          <button
            onClick={() => {
              deleteJob({
                variables: { id: job.id }
              }).then(() => setUpdate(update + 1));
            }}
          >
            x
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
