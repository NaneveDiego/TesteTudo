import { connectDb, disconnectDb } from "../../config/database.js";

import Comment from "../../schemas/Comments.js";
import Post from "../../schemas/Post.js";
import User from "../../schemas/User.js";

export const up = async () => {
  await connectDb();

  console.log("Criando dados de exemplo...");

  const user = await User.create({
    name: "Admin",
    email: "admin@email.com",
    password: "123456",
    role: "admin",
    features: ["delete_comments", "ban_user"]
  });

  const post = await Post.create({
    userId: user._id,
    title: "Bem-vindo ao fórum",
    content: "Este é o primeiro post oficial da plataforma.",
    tags: ["introdução", "admin"]
  });

  await Comment.create({
    authorId: user._id,
    postId: post._id,
    content: "Comentário de boas-vindas.",
    likes: 3
  });

  console.log("Dados criados com sucesso!");

  await disconnectDb();
};
