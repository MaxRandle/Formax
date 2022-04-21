import React from "react";
import styled from "styled-components";
import { Box, Input, InputHelperText, InputLabel } from "./components";
import { InputControl } from "./components/input/InputControl";

interface IProps {
  // className?: string;
}

const StyledInput = styled(Input)`
  margin-top: 0.25rem;
`;

const StyledInputHelperText = styled(InputHelperText)`
  margin-top: 0.125rem;
`;

export const OnboardingForm: React.FC<IProps> = ({ ...props }) => {
  return (
    <Box
      style={{
        "> * + *": {
          marginTop: `1rem`,
        },
      }}
      {...props}
    >
      <InputControl isRequired isError>
        <InputLabel>{`something`}</InputLabel>
        <StyledInput />
        <StyledInputHelperText>something else</StyledInputHelperText>
      </InputControl>
      <Input />
      <Input />
      <Input />
    </Box>
  );
};
