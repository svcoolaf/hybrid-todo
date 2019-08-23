import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useEffect } from "react";
import styled from "styled-components";
import theme from "../common/lib/theme";
import { Model } from "../common/models/Model";
import { Todo } from "../common/models/Todo";
import Check from "./Check";
import Icon from "./Icon";

const DeleteButton = styled.button`
  display: block;
  background: transparent;
  border: none;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: ${theme.sizes.double}px;
  border-bottom: 1px ${theme.colors.light} solid;

  .delete-button {
    cursor: pointer;
    opacity: 0;
    transition: opacity ${theme.animation.time} ease-out;
  }
  &:hover {
    .delete-button {
      opacity: 1;
    }
  }
`;

const Content = styled.span`
  padding: ${theme.sizes.double}px;
  display: block;
`;
const TodoList = ({ triggerFetch, update }) => {
  const [updateTodo] = useMutation<any, Partial<Todo>>(Todo.update);
  const [deleteJob] = useMutation<any, Model>(Todo.delete);
  const { loading, data, error, refetch } = useQuery(Todo.getAll);
  const todos = (data.allJobs || {}).nodes;

  useEffect(() => {
    refetch();
  }, [update]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const getAddTodoHandler = job => e => {
    e.preventDefault();
    if (e.key === "d") {
      return getDeleteHandler(job)();
    }
    updateTodo({
      variables: { id: job.id, complete: !job.complete }
    }).then(triggerFetch);
  };

  const getDeleteHandler = job => () => {
    deleteJob({
      variables: job
    }).then(triggerFetch);
  };

  return todos.map((job: Todo) => (
    <TodoItem
      key={job.id}
      onClick={getAddTodoHandler(job)}
      onKeyPress={getAddTodoHandler(job)}
      tabIndex={0}
    >
      <Left>
        <Check onClick={getAddTodoHandler(job)} checked={job.complete} />
        <Content>{job.content}</Content>
      </Left>
      <DeleteButton
        className="delete-button"
        onClick={getDeleteHandler(job)}
        tabIndex={0}
      >
        <Icon name="cross" />
      </DeleteButton>
    </TodoItem>
  ));
};

export default TodoList;
