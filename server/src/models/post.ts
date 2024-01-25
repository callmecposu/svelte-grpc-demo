import mongoose, { Schema, Document } from "mongoose";

export interface PostDocument extends Document {
  title: string;
  body: string;
  author: string;
  keywordsList: string[];
  createdAt: Date
}

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      default: "This Post is empty.",
    },
    author: {
      type: String,
      required: true,
    },
    keywordsList: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const PostModel = mongoose.model<PostDocument>("Post", postSchema);
