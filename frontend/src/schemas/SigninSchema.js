import z from "zod";

export const signinSchema = z.object({
    email: z.string().nonempty("o email é obrigatório").email("email inválido").toLowerCase(),
    password: z.string().min(3,"a senha deve ter no mínimo 6 caracteres"),
  });