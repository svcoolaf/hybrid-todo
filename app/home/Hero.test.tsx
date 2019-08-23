import React from "react";
import renderer from "react-test-renderer";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders", () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
