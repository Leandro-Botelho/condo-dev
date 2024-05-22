

import SmartInput from "@/shared/components/SmartInput";
import useLogin, { LoginFormProps } from "./hooks/useLoginForm";
import { useLoginAuth } from "./hooks/useLoginAuth";
import { useState } from "react";
import { Eye } from "lucide-react";

const LoginPage = () => {
  const { control, handleSubmit, errors } = useLogin();
  const login = useLoginAuth();
  const [showPassword, setShowPassword] = useState(false);
  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (data: LoginFormProps) => {
    login(data);
  };

  return (
    <div className="bg-primaryBg grid place-items-center h-screen">
      <div className="bg-[#f6f6f5] rounded-lg shadow-xl w-[550px] p-4">
        <h1 className="text-5xl mb-8 font-semibold text-primaryBg w-full text-center">
          MyCond
        </h1>
        <form
          className="flex flex-col  gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col relative gap-6">
            <SmartInput name="email" label="Email" control={control} />
            <SmartInput
              name="password"
              label="Senha"
              control={control}
              type={showPassword ? "text" : "password"}
            />
            <span
              onClick={changeShowPassword}
              className={`cursor-pointer absolute ${
                errors.password ? "bottom-10" : "bottom-4"
              } right-6`}
            >
              <Eye color="#3481d9" />
            </span>
          </div>

          <button
            type="submit"
            className="bg-primaryBg transition-all hover:bg-hoverBg font-semibold  p-3 mt-4 self-end rounded-lg text-white w-[120px]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
