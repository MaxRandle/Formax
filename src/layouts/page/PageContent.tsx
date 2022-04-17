import React from "react";
import styled from "styled-components";

export interface IPageContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const StyledPageContent = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
`;

export const PageContent: React.FC<IPageContentProps> = ({
  children,
  ...props
}: IPageContentProps) => {
  return <StyledPageContent {...props}>{children}</StyledPageContent>;
};
