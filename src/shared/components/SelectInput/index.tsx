import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Select, SelectContent } from "../ui/select";
import { SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { uf } from "@/templates/users/constants/uf";

interface ISelectInputProps<T extends FieldValues> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<T, any>;
  name: Path<T>;
  className?: string;
}

const SelectInput = <T extends FieldValues>({
  className,
  name,
  control,
}: ISelectInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div className="w-[100px] ">
            <Select onValueChange={onChange} value={value}>
              <SelectTrigger className="">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>

              <SelectContent>
                {uf.map((uf) => (
                  <SelectItem
                    className="hover:bg-gray-100 cursor-pointer transition-all"
                    key={uf}
                    value={uf}
                  >
                    {uf}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {error && <span>{error.message}</span>}
          </div>
        );
      }}
    />
  );
};

export default SelectInput;
