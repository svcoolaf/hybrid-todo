import { noop } from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import FloatingForm from "./FloatingForm";

describe("FloatingForm", () => {
  it("renders", () => {
    const tree = renderer.create(<FloatingForm triggerFetch={noop} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
