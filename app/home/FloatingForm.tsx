import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import styled from "styled-components";
import theme from "../common/lib/theme";
import { Todo } from "../common/models/Todo";
import Icon from "./Icon";

const Form = styled.form`
  line-height: ${theme.sizes.form}px;
  width: 100vw;
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  padding-left: ${theme.sizes.quadruple}px;
`;

const Input = styled.input`
  margin: 0 0 0 ${theme.sizes.double}px;
  padding: ${theme.sizes.double}px;
  border: 0;
  flex-grow: 1;
  line-height: ${theme.sizes.form}px;
`;

const Floating = styled.div`
  position: fixed;
  bottom: 0;
  border-top: 1px ${theme.colors.light} solid;
`;

const Clickable = styled.button`
  cursor: pointer;
  padding: 0;
  border: 0;
  background: transparent;
`;

const FloatingForm = ({ triggerFetch }) => {
  const [createJob] = useMutation<any, Partial<Todo>>(Todo.create);
  const [content, setContent] = useState("");
  const onFormSubmit = e => {
    e.preventDefault();
    if (!content) {
      return;
    }
    createJob({
      variables: { content }
    }).then(() => {
      setContent("");
      triggerFetch();
    });
  };
  return (
    <Floating>
      <Form onSubmit={onFormSubmit}>
        <Clickable onClick={onFormSubmit}>
          <Icon name="plus" />
        </Clickable>
        <Input
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
          placeholder="Add todo"
        />
      </Form>
    </Floating>
  );
};

export default FloatingForm;
