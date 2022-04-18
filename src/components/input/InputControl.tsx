import React, { useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { IInputProps, Input } from "./Input";
import { IInputHelperTextProps, InputHelperText } from "./InputHelperText";
import { IInputLabelProps, InputLabel } from "./InputLabel";

type ISubProps = IInputHelperTextProps & IInputLabelProps & IInputProps;

interface IInputControlProps extends ISubProps {
  forwardedRef: React.Ref<unknown>;
}

const StyledInput = styled(Input)`
  margin-top: 0.25rem;
`;

const StyledInputHelperText = styled(InputHelperText)`
  margin-top: 0.125rem;
`;

export const InputControl = React.forwardRef(
  ({ ...props }: IInputControlProps, ref) => {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);

    return (
      <div {...props}>
        <InputLabel {...props} />
        <StyledInput ref={innerRef} {...props} />
        <StyledInputHelperText {...props} />
      </div>
    );
  }
);
