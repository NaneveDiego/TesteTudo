import { connectDb, disconnectDb } from "../../config/database.js";

import Comment from "../../schemas/Comments.js";
import Post from "../../schemas/Post.js";
import User from "../../schemas/User.js";

export const down = async () => {
  await connectDb();

  console.log("Limpando banco de dados...");

  await Comment.deleteMany({});
  await Post.deleteMany({});
  await User.deleteMany({});

  console.log("Banco limpo com sucesso!");

  await disconnectDb();
};
