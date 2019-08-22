import React from "react";

const Icon = ({ name, width = 16, height = 16 }) => (
  <img
    src={`/static/icons/${name}.svg`}
    width={width}
    height={height}
    alt={name}
  />
);

export default Icon;
