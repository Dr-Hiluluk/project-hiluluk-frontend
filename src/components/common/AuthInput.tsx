import React, { InputHTMLAttributes } from "react";

import { Controller, RegisterOptions } from "react-hook-form";

interface ControlTextInput extends InputHTMLAttributes<HTMLInputElement> {
  control: any;
  name: string;
  defaultValue?: string;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  refName?: React.Ref<HTMLInputElement>;
}

export default function AuthTextInput({
  control,
  name,
  defaultValue,
  refName,
  rules,
  ...rest
}: ControlTextInput) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <input
          onBlur={onBlur}
          name={name}
          onChange={(value) => onChange(value)}
          value={value}
          ref={refName}
          {...rest}
        />
      )}
      rules={rules}
      name={name}
    />
  );
}
