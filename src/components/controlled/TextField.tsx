import { InputAdornment, useTheme } from "@mui/material";
import { FC } from "react";
import { Controller, useFormState } from "react-hook-form";
import { TextField as T, TextFieldProps as TProps } from "../TextField";

export type TextFieldProps = Omit<TProps, "name" | "label" | "placeholder"> & {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
};

export const TextField: FC<TextFieldProps> = ({
  name,
  control,
  sx,
  label,
  placeholder,
  ...props
}) => {
  const { errors } = useFormState({ control, name: name });
  const error = errors[name]?.message;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <T
          size="small"
          {...props}
          {...field}
          error={error ? true : false}
          //   helperText={errors[name]?.message}
          sx={{ width: "100%", ...(sx || {}) }}
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};
