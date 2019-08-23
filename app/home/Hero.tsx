import React from "react";
import styled from "styled-components";
import theme from "../common/lib/theme";

const Background = styled.div`
  padding: ${2 * theme.sizes.form}px ${theme.sizes.quadruple}px
    ${theme.sizes.quadruple}px;
  background-size: cover;
  background: linear-gradient(#7d8ca0, #506eb4);
  color: ${theme.colors.lightest};
  line-height: ${theme.sizes.h1}px;
`;

const H1 = styled.h1`
  font-weight: 200;
  font-size: ${theme.sizes.h1}px;
  padding: ${theme.sizes.half}px;
`;

const H2 = styled.h2`
  font-weight: 200;
  font-size: ${theme.sizes.h2}px;
  padding: ${theme.sizes.half}px;
`;

const Hero = () => (
  <Background>
    <H1>Today</H1>
    <H2>
      {new Intl.DateTimeFormat("en-ca", {
        weekday: "long",
        month: "long",
        day: "numeric"
      }).format(new Date())}
    </H2>
  </Background>
);

export default Hero;
