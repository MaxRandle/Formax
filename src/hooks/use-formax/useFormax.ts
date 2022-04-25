import { useState } from "react";
import { mapObjectToObject, runValidationTests } from "./helpers";
import {
  FieldErrors,
  FieldHelpers,
  FieldIsTouched,
  FieldProps,
  FieldValues,
  FormaxReturn,
  InitFormax,
  ValidationTestResult,
} from "./types";

export function useFormax<IFields>({
  schema,
  initialValues = {},
  onSubmit,
}: InitFormax): FormaxReturn<IFields> {
  const fieldsFalse = Object.keys(schema.fields).reduce<FieldIsTouched>(
    (acc, cur) => ({
      ...acc,
      [cur]: false,
    }),
    {}
  );

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [fieldValues, setFieldValues] = useState<FieldValues>(initialValues);

  const [fieldIsTouched, setFieldIsTouched] =
    useState<FieldIsTouched>(fieldsFalse);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>(fieldsFalse);

  const [fieldHelpers, setFieldHelpers] = useState<FieldHelpers>({});

  const handleChangeValue = (fieldName: string, fieldValue: any) => {
    const currentField = schema.fields[fieldName];
    // first time a field value changes it will be allowed to be errored
    setFieldIsTouched((s) => ({ ...s, [fieldName]: true }));

    // update form values
    setFieldValues((s) => ({ ...s, [fieldName]: fieldValue }));

    // validate appropriate fields
    const fieldNamesToValidate = [
      fieldName,
      ...(currentField.covalidate || []),
    ];

    const newFieldErrors: FieldErrors = {};
    const newFieldHelpers: FieldHelpers = {};

    fieldNamesToValidate.forEach((fieldNameToValidate) => {
      // goes through all the validation tests and returns feedback for the first test that fails
      const { isValid, feedback } = runValidationTests(
        schema.fields[fieldNameToValidate].tests || [],
        fieldValues
      );
      newFieldErrors[fieldNameToValidate] = isValid;
      newFieldHelpers[fieldNameToValidate] = feedback;
    });

    // update form errors and form helpers
    setFieldErrors((s) => ({ ...s, ...newFieldErrors }));
    setFieldHelpers((s) => ({ ...s, ...newFieldHelpers }));
  };

  const globalValidation = (): ValidationTestResult =>
    runValidationTests(schema.form?.tests || [], fieldValues);

  const resetForm = () => {
    setFieldValues(initialValues);
    setFieldIsTouched(fieldsFalse);
    setFieldErrors(fieldsFalse);
    setFieldHelpers({});
  };

  const submitForm = async (callback: () => void) => {
    setIsSubmitting(true);
    try {
      await onSubmit();
      callback();
    } catch (err: unknown) {
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    fieldProps: mapObjectToObject(
      schema.fields,
      (fieldName, field): FieldProps => ({
        label: field.label,
        required: Boolean(field.required),
        inputProps: {
          name: fieldName,
          value: fieldValues[fieldName],
          onChange: (event) => handleChangeValue(fieldName, event.target.value),
        },
        error: fieldIsTouched[fieldName] && fieldErrors[fieldName],
        helperText: fieldHelpers[fieldName],
        ...field.otherProps,
      })
    ),
    fieldValues,
    fieldErrors,
    form: {
      validate: globalValidation,
      isSubmitting,
      reset: resetForm,
      submit: submitForm,
    },
  };
}
