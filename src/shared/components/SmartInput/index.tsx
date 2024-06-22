import { Control, Controller, FieldValues, Path } from "react-hook-form";
import "./index.css";

export interface ISmartInputProps<T extends FieldValues> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<T, any>;
  name?: Path<T>;
  style?: React.CSSProperties;
  label: string;
  type?: string;
  icon?: React.ReactNode;
}

const SmartInput = <T extends FieldValues>({
  control,
  label,
  name,
  type,
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
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className="smartInput"
                placeholder=" "
                type={type}
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
