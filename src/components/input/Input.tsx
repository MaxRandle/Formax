import React, { useImperativeHandle, useRef } from "react";
import styled from "styled-components";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean;
  isError?: boolean;
  isRequired?: boolean;
}

const StyledInput = styled.input<Pick<IInputProps, "isError">>`
  background-color: transparent;
  color: var(--text-base-color);
  box-sizing: border-box;
  width: 100%;
  outline: 0;
  position: relative;
  appearance: none;
  font-size: 1rem;

  border: 2px solid;
  border-color: var(--border-base-color);
  ${({ isError }) => isError && `border-color: var(--border-error-color);`}

  &:focus {
    border-color: var(--border-focus-color);
  }
  border-radius: 6px;
  padding: 0.5rem;

  letter-spacing: 0.025rem;
`;

export const Input = React.forwardRef(({ ...props }: IInputProps, ref) => {
  const innerRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);
  return <StyledInput ref={innerRef} {...props} />;
});
