import React from "react";
import styled from "styled-components";
import { Box, Input, InputHelperText, InputLabel } from "./components";

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
      <div>
        <InputLabel isRequired>{`something`}</InputLabel>
        <StyledInput />
        <StyledInputHelperText isError>something else</StyledInputHelperText>
      </div>
      <Input />
      <Input />
      <Input />
    </Box>
  );
};
