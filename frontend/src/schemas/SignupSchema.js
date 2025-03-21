import  z  from "zod";

export const signupSchema = z.object({
    name: z.string().nonempty("o nome é obrigatório"),
    email: z.string().nonempty("o email é obrigatório").email("email inválido").toLowerCase(),
    password: z.string().min(6,"a senha deve ter no mínimo 6 caracteres"),
    confirmpass: z.string().min(6,"a senha deve ter no mínimo 6 caracteres").refine(data => data !== data.password, {message: "as senhas não são iguais"})
  });