import * as React from "react";
import styled, { StyledProps } from "styled-components";
import theme from "../common/lib/theme";
import Icon from "./Icon";

type Props = StyledProps<{ checked: boolean }>;

const RoundButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin: ${theme.sizes.double}px;
  border-radius: 50%;
  border: ${(props: Props) =>
      props.checked ? "0 transparent" : `2px ${theme.colors.dim}`}
    solid;
  display: inline-flex;
  background: transparent;
`;

const Placeholder = styled.div`
  padding: ${theme.sizes.icon / 2 - 2}px;
`;

const Check = ({ onClick, checked }) => {
  return (
    <RoundButton checked={checked} onClick={onClick} tabIndex={0}>
      {checked ? (
        <Icon
          name={"checked"}
          height={theme.sizes.icon}
          width={theme.sizes.icon}
        />
      ) : (
        <Placeholder />
      )}
    </RoundButton>
  );
};

export default Check;
