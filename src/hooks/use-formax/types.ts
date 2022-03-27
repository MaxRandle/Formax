export interface KeySignature {
  key: string | number | symbol;
}

export interface ValidationTest {
  exec: (fieldValues: FieldValues) => boolean;
  feedback: string;
}

export interface Field {
  label?: string;
  tests?: ValidationTest[];
  covalidate?: string[];
  otherProps?: { [propName: string]: any };
}

export interface FieldValues {
  [fieldName: string]: any;
}

export interface Schema {
  fields: {
    [fieldName: string]: Field;
  };
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

export interface FieldProps {
  name: string;
  label: string;
  value: any;
  onChangeValue: (fieldName: string, value: any) => void;
  error: boolean;
  helperText: string;
  // [propName: string]: any;
}

export interface InitFormax {
  schema: Schema;
  initialValues: FieldValues;
  onSubmit: () => Promise<null>;
}

export interface Formax {
  fields: {
    [fieldName: string]: FieldProps;
  };
  form: {
    isSubmitting: boolean;
    reset: () => void;
    submitForm: (callback: () => void) => void;
    fieldValues: FieldValues;
  };
}
