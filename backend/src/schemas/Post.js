import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, require: true, ref: "users" },
  createdAt: { type: Date, default: Date.now() },
  tags: [
    {name: {type: String,required: true}}
  ]
  
});

export default model("posts", PostSchema);
