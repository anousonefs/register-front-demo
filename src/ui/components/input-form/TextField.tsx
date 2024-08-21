import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField';
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
} from 'react-hook-form';

/**
 * Props for the TextField component.
 * @template TFormValues - The type of form values.
 */
export type TextFieldProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>; // The name of the field in the form values.
  rules?: RegisterOptions; // Validation rules for the field.
  control?: Control<TFormValues>; // The form control object.
  error?: FieldError; // The error object for the field.
  defaultValue?: undefined | PathValue<TFormValues, Path<TFormValues>>;
  hidden?: boolean; // Whether the field is hidden.
  numericOnly?: boolean; // Whether the field should only accept numeric input.
} & Omit<MuiTextFieldProps, 'name' | 'error'>;

/**
 * A custom text field component for form inputs.
 *
 * @template TFormValues - The type of form values.
 * @param {TextFieldProps<TFormValues>} props - The props for the text field component.
 * @returns {JSX.Element} - The rendered text field component.
 */
const TextField = <TFormValues extends FieldValues>({
  name,
  rules,
  control,
  error,
  fullWidth = false,
  defaultValue,
  hidden = false,
  numericOnly = false, // Default to false if not provided
  ...props
}: TextFieldProps<TFormValues>) => {
  // Conditionally render null if hidden is true
  if (hidden) {
    return null;
  }

  // Extend rules for numeric validation if numericOnly is true
  const extendedRules = numericOnly
    ? {
        ...rules,
        pattern: {
          value: /^[0-9]*$/,
          message: 'Please input a valid number',
        },
      }
    : rules;

  return (
    <Controller
      name={name}
      control={control}
      rules={extendedRules as Omit<RegisterOptions<TFormValues, Path<TFormValues>>, "setValueAs" | "disabled" | "valueAsNumber" | "valueAsDate"> | undefined}
      defaultValue={defaultValue}
      render={({ field: { value, onChange, ...field } }) => (
        <MuiTextField
          fullWidth={fullWidth}
          defaultValue={defaultValue}
          value={value || ''}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!numericOnly || /^[0-9]*$/.test(newValue)) {
              onChange(e); // Update value if numericOnly is false or the value is numeric
            }
          }}
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
          hidden={hidden}
          inputProps={
            numericOnly ? { inputMode: 'numeric', pattern: '[0-9]*' } : {}
          }
        />
      )}
    />
  );
};

export default TextField;
