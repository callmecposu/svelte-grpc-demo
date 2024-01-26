import { handleUnaryCall } from "grpc";
import { IPostServiceServer } from "../protos/out/post/post_grpc_pb";
import {
  Comparison,
  CreatePostRequest,
  CreatePostsBulkRequest,
  CreatePostsBulkResponse,
  GetPostsRequest,
  GetPostsResponse,
  Post,
} from "../protos/out/post/post_pb";
import { PostModel } from "../models/post";
import { status } from "grpc";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import mongoose, { mongo } from "mongoose";

export class PostService implements IPostServiceServer {
  createPost: handleUnaryCall<CreatePostRequest, Post> = async (
    call,
    callback
  ) => {
    const request = call.request.toObject();
    console.log("createPost req: ", request);
    try {
      const newPost = new PostModel({
        title: request.title,
        body: request.body,
        author: request.author,
        keywordsList: request.keywordsList,
      });
      const savedPost = await newPost.save();
      console.log(savedPost);
      const response = new Post();
      response.setId(savedPost._id);
      response.setTitle(savedPost.title);
      response.setBody(savedPost.body);
      response.setAuthor(savedPost.author);
      response.setKeywordsList(savedPost.keywordsList);
      const timestamp = new google_protobuf_timestamp_pb.Timestamp();
      timestamp.fromDate(savedPost.createdAt);
      response.setCreatedAt(timestamp);
      callback(null, response);
    } catch (err) {
      console.log(err);
      callback(
        { code: status.INTERNAL, name: "", message: (err as any).message },
        null
      );
    }
  };

  getPosts: handleUnaryCall<GetPostsRequest, GetPostsResponse> = async (
    call,
    callback
  ) => {
    const request = call.request.toObject();
    console.log("getPosts req: ", request);
    console.log(
      "getPosts req timestamp: ",
      call.request.getTimestampFilter()?.getTimestamp()?.toDate()
    );
    const aggrOpts = [
      // id filters
      request.id
        ? { $match: { _id: new mongoose.Types.ObjectId(request.id) } }
        : { $match: {} },
      // title filters
      request.title ? { $match: { title: request.title } } : { $match: {} },
      //   author filters
      request.author ? { $match: { author: request.author } } : { $match: {} },
      // timestamp filters
      request.timestampFilter?.comp == Comparison.COMP_GT
        ? {
            $match: {
              $expr: {
                $gt: [
                  "$createdAt",
                  call.request.getTimestampFilter()?.getTimestamp()?.toDate(),
                ],
              },
            },
          }
        : request.timestampFilter?.comp == Comparison.COMP_LT
        ? {
            $match: {
              $expr: {
                $lt: [
                  "$createdAt",
                  call.request.getTimestampFilter()?.getTimestamp()?.toDate(),
                ],
              },
            },
          }
        : { $match: {} },
    ];
    const results = await PostModel.aggregate(aggrOpts);
    console.log(results);
    const posts = results.map((x) => {
      const post = new Post();
      post.setId(x._id.toString());
      post.setTitle(x.title);
      post.setBody(x.body);
      post.setAuthor(x.author);
      post.setKeywordsList(x.keywordsList);
      const timestamp = new google_protobuf_timestamp_pb.Timestamp();
      timestamp.fromDate(x.createdAt);
      post.setCreatedAt(timestamp);
      return post;
    });
    const response = new GetPostsResponse();
    response.setPostsList(posts);
    callback(null, response);
  };

  createPostsBulk: handleUnaryCall<
    CreatePostsBulkRequest,
    CreatePostsBulkResponse
  > = async (call, callback) => {
    const request = call.request.toObject();
    console.log("createPostsBulk req: ", request);
    try {
      const result = await PostModel.insertMany(request.sourceList);
      console.log(result);
      callback(null, new CreatePostsBulkResponse());
    } catch (err) {
      console.log(err);
      callback(
        { code: status.INTERNAL, name: "", message: (err as any).message },
        null
      );
    }
  };
}
