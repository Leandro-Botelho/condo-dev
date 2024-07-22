import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  condominium: z.string().min(3),
  apartment: z.string().min(1),
  town: z.string().min(1),
  contact: z.string().min(3),
  created_at: z.string(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;

export const useHandleSubmitCreateUser = () => {
  const { control, handleSubmit } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      condominium: "",
      apartment: "",
      town: "",
      contact: "",
      created_at: "",
    },
  });

  return { control, handleSubmit };
};
