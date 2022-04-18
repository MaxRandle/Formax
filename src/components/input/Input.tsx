import React from "react";
import styled from "styled-components";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean;
  isError?: boolean;
  isRequired?: boolean;
}

const StyledInput = styled.input<Pick<IInputProps, "isError">>`
  box-sizing: border-box;
  width: 100%;
  outline: 0;
  position: relative;
  appearance: none;
  font-size: 1rem;

  border: 1px solid
    var(
      ${({ isError }) =>
        isError ? `--border-error-color` : `--border-primary-color`}
    );
  border-radius: 4px;
  padding: 0.5rem;

  letter-spacing: 0.025rem;
`;

export const Input: React.FC<IInputProps> = ({ ...props }) => {
  return <StyledInput {...props} />;
};
