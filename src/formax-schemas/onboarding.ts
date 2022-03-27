import { Schema } from "../hooks/use-formax";

export const schema: Schema = {
  fields: {
    firstName: {
      label: "First Name",
    },
    lastName: {
      label: "Last Name",
    },
    email: {
      label: "Email Address",
    },
    password: {
      label: "Password",
      tests: [
        {
          exec: (formValues) => formValues.password.length >= 8,
          feedback: "Your password must be at least 8 chatacters long",
        },
        {
          exec: (formValues) => formValues.password.length <= 40,
          feedback: "Your password must not exceed 40 characters long",
        },
        {
          exec: (formValues) => /[a-z]/.test(formValues.password),
          feedback: "Your password must contain at least 1 lowercase letter",
        },
        {
          exec: (formValues) => /[A-Z]/.test(formValues.password),
          feedback: "Your password must contain at least 1 uppercase letter",
        },
        {
          exec: (formValues) => /\d/.test(formValues.password),
          feedback: "Your password must contain at least 1 number",
        },
      ],
      covalidate: ["confirmPassword"],
    },
    confirmPassword: {
      label: "Confirm Password",
      tests: [
        {
          exec: (formValues) =>
            formValues.password === formValues.confirmPassword,
          feedback: "Your passwords must match",
        },
      ],
    },
  },
};
