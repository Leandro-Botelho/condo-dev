import { Control, Controller, FieldValues, Path } from "react-hook-form";
import "./index.css";
import React from "react";
import { addMask } from "@/shared/utils/addMask";

export interface ISmartInputProps<T extends FieldValues> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<T, any>;
  name?: Path<T>;
  style?: React.CSSProperties;
  label: string;
  type?: string;
  icon?: React.ReactNode;
  mask?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SmartInput = <T extends FieldValues>({
  control,
  label,
  name,
  type,
  style,
  mask,
  onChange: onChangeProp,
}: ISmartInputProps<T>) => {
  return (
    <Controller
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <div className="inputBox">
            <div>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const newEvent = {
                    ...e,
                    target: {
                      ...e.target,
                      value: mask
                        ? addMask(e.target.value, mask)
                        : e.target.value,
                    },
                  };
                  onChange(newEvent);
                  onChangeProp && onChangeProp(newEvent);
                }}
                onBlur={onBlur}
                value={value}
                className="smartInput"
                placeholder=" "
                type={type}
                style={{ borderColor: "#ccc", ...style }}
              />
              <span className="label">{label}</span>
            </div>
            {error && (
              <span className="text-red-500 text-xs">{error.message}</span>
            )}
          </div>
        );
      }}
      name={name}
    />
  );
};

export default SmartInput;
