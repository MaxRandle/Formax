import React from "react";
import styled from "styled-components";
import { IInputProps } from "./Input";
import { IInputHelperTextProps } from "./InputHelperText";
import { IInputLabelProps } from "./InputLabel";

type IInputControlProps = IInputHelperTextProps &
  IInputLabelProps &
  IInputProps;

const StyledInputControl = styled.div`
  width: 100%;
  position: relative;
`;

export const InputControl: React.FC<IInputControlProps> = ({
  children,
  isDisabled,
  isError,
  isRequired,
  ...props
}: IInputControlProps) => {
  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactNode) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child as React.ReactElement<IInputControlProps>,
          {
            isDisabled,
            isError,
            isRequired,
          }
        );
      } else {
        return child;
      }
    }
  );

  return (
    <StyledInputControl {...props}>{childrenWithProps}</StyledInputControl>
  );
};
