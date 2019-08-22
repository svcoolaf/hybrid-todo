import * as React from "react";
import styled from "styled-components";
import theme from "../common/lib/theme";
import Icon from "./Icon";

const RoundButton = styled.button`
  padding: 0;
  border-radius: 50%;
  border: 2px ${theme.colors.dim} solid;
  display: inline-flex;
`;

const Placeholder = styled.div`
  padding: 8px;
`;

const Check = ({ onClick, checked }) => {
  return (
    <RoundButton onClick={onClick}>
      {checked ? <Icon name={"checked"} /> : <Placeholder />}
    </RoundButton>
  );
};

export default Check;
