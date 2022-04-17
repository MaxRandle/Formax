import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IProps {
  className?: string;
}

export const OnboardingForm: React.FC<IProps> = ({ ...props }) => {
  return <div {...props}>yo</div>;
};
