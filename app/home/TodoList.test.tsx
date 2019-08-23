import { MockedProvider, wait } from "@apollo/react-testing";
import { noop } from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { Todo } from "../common/models/Todo";
import TodoList from "./TodoList";

const mocks = [
  {
    request: {
      query: Todo.getAll
    },
    result: {
      data: {
        allJobs: {
          nodes: [
            {
              id: 13,
              content: "1",
              complete: false
            },
            {
              id: 19,
              content: "2",
              complete: false
            },
            {
              id: 23,
              content: "3",
              complete: false
            }
          ]
        }
      }
    }
  }
];

describe("TodoList", () => {
  it("renders", async () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TodoList triggerFetch={noop} fetchHash={0} />
      </MockedProvider>
    );
    await wait(0);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
