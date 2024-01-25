import grpc from "grpc";
import mongoose from "mongoose";
import { PostServiceService } from "./protos/out/post/post_grpc_pb";
import { PostService } from "./implementations/post";

require("dotenv").config();

// connect to the db
mongoose
  .connect(process.env.MONGODB as string)
  .then(() => {
    console.log("Succesfully connected to DB!");
    const server = new grpc.Server();
    server.addService(PostServiceService, new PostService());
    server.bind('0.0.0.0:50017', grpc.ServerCredentials.createInsecure());
    console.log('Server now listening on port 50017...');
    server.start()
  })
  .catch((err) => {
    console.log("Error connecting to DB: ", err);
  });
