import React from "react";
import theme from "../common/lib/theme";

const Icon = ({
  name,
  width = theme.sizes.icon,
  height = theme.sizes.icon
}) => (
  <img
    src={`/static/icons/${name}.svg`}
    width={width}
    height={height}
    alt={name}
  />
);

export default Icon;
