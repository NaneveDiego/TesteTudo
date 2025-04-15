import { Schema, model } from "mongoose";

const CommentsSchema = new Schema({
  authorId: { type: Schema.Types.ObjectId, require: true, ref: "users" },
  postId: { type: Schema.Types.ObjectId, require: true, ref: "posts" },
  parentId: { type: Schema.Types.ObjectId, ref: "users" },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  likes: { type: Number, required: true },
  
});

export default model("comments", CommentsSchema);
