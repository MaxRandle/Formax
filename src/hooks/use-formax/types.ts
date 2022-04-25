import React, { ChangeEventHandler, ReactNode } from "react";

export interface KeySignature {
  key: string | number | symbol;
}

export interface ValidationTest {
  exec: (fieldValues: FieldValues) => boolean;
  feedback: string;
}

export interface ValidationTestResult {
  isValid: boolean;
  feedback?: string;
}

export interface Field {
  label?: string;
  required?: boolean;
  tests?: ValidationTest[];
  covalidate?: string[];
  component?: ReactNode;
}

export type FieldValues = Record<string, any>;

export interface Schema {
  fields: Record<string, Field>;
  form?: {
    tests?: ValidationTest[];
  };
}

export interface FieldIsTouched {
  [fieldName: string]: boolean;
}

export interface FieldErrors {
  [fieldName: string]: boolean;
}

export interface FieldHelpers {
  [fieldName: string]: string | undefined | null;
}

export interface InitFormax {
  schema: Schema;
  initialValues?: FieldValues;
  onSubmit: Function;
}

export interface FieldProps {
  label: string;
  required: boolean;
  inputProps: {
    name: string;
    value: any;
    onChange: ChangeEventHandler<HTMLInputElement>;
    ref: React.MutableRefObject<null>;
  };
  error: boolean;
  helperText: string;
  Component?: ReactNode;
}
export interface FormaxReturn<IFields = {}> {
  fieldProps: Record<keyof IFields, FieldProps>;
  fieldValues: FieldValues;
  fieldErrors: FieldErrors;
  form: {
    validate: (tests: ValidationTest[]) => ValidationTestResult;
    isSubmitting: boolean;
    reset: () => void;
    submit: (callback: () => void) => void;
  };
}
