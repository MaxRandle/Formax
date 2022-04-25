import React from "react";
import { Box, Input, InputHelperText, InputLabel } from "./components";
import { InputControl } from "./components/input/InputControl";
import { useFormax } from "./hooks";
import { schema, IFields } from "./formax-schemas/onboarding";

interface IProps {
  // className?: string;
}

export const OnboardingForm: React.FC<IProps> = ({ ...props }) => {
  const { fieldProps } = useFormax<IFields>({
    schema,
    onSubmit: console.log,
  });

  const {
    firstName,
    preferredName,
    lastName,
    email,
    password,
    confirmPassword,
  } = fieldProps;

  return (
    <Box
      style={{
        display: `grid`,
        gap: `1rem`,
        gridTemplateColumns: `1fr`,
      }}
      md={{
        gridTemplateColumns: `1fr 1fr`,
      }}
      {...props}
    >
      <InputControl isError={firstName.error} isRequired={firstName.required}>
        <InputLabel>{firstName.label}</InputLabel>
        <Input {...firstName.inputProps} />
        <InputHelperText>{firstName.helperText}</InputHelperText>
      </InputControl>

      <InputControl
        isError={preferredName.error}
        isRequired={preferredName.required}
      >
        <InputLabel>{preferredName.label}</InputLabel>
        <Input {...preferredName.inputProps} />
        <InputHelperText>{preferredName.helperText}</InputHelperText>
      </InputControl>

      <InputControl isError={lastName.error} isRequired={lastName.required}>
        <InputLabel>{lastName.label}</InputLabel>
        <Input {...lastName.inputProps} />
        <InputHelperText>{lastName.helperText}</InputHelperText>
      </InputControl>

      <InputControl isError={email.error} isRequired={email.required}>
        <InputLabel>{email.label}</InputLabel>
        <Input {...email.inputProps} />
        <InputHelperText>{email.helperText}</InputHelperText>
      </InputControl>

      <InputControl isError={password.error} isRequired={password.required}>
        <InputLabel>{password.label}</InputLabel>
        <Input {...password.inputProps} />
        <InputHelperText>{password.helperText}</InputHelperText>
      </InputControl>

      <InputControl
        isError={confirmPassword.error}
        isRequired={confirmPassword.required}
      >
        <InputLabel>{confirmPassword.label}</InputLabel>
        <Input {...confirmPassword.inputProps} />
        <InputHelperText>{confirmPassword.helperText}</InputHelperText>
      </InputControl>
    </Box>
  );
};
