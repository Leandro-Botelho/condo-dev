import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(1),
});

export type LoginFormProps = z.infer<typeof loginFormSchema>;

const useLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  return { control, handleSubmit, errors };
};

export default useLogin;
