import React from "react";
import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

interface IProps {
  children: JSX.Element;
}

export const Page: React.FC<IProps> = ({ children, ...props }) => {
  return <StyledPage {...props}>{children}</StyledPage>;
};
