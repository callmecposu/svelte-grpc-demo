// package: postservice
// file: post/post.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as post_post_pb from "../post/post_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IPostServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPost: IPostServiceService_ICreatePost;
    getPosts: IPostServiceService_IGetPosts;
}

interface IPostServiceService_ICreatePost extends grpc.MethodDefinition<post_post_pb.CreatePostRequest, post_post_pb.Post> {
    path: "/postservice.PostService/CreatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_post_pb.CreatePostRequest>;
    requestDeserialize: grpc.deserialize<post_post_pb.CreatePostRequest>;
    responseSerialize: grpc.serialize<post_post_pb.Post>;
    responseDeserialize: grpc.deserialize<post_post_pb.Post>;
}
interface IPostServiceService_IGetPosts extends grpc.MethodDefinition<post_post_pb.GetPostsRequest, post_post_pb.GetPostsResponse> {
    path: "/postservice.PostService/GetPosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_post_pb.GetPostsRequest>;
    requestDeserialize: grpc.deserialize<post_post_pb.GetPostsRequest>;
    responseSerialize: grpc.serialize<post_post_pb.GetPostsResponse>;
    responseDeserialize: grpc.deserialize<post_post_pb.GetPostsResponse>;
}

export const PostServiceService: IPostServiceService;

export interface IPostServiceServer {
    createPost: grpc.handleUnaryCall<post_post_pb.CreatePostRequest, post_post_pb.Post>;
    getPosts: grpc.handleUnaryCall<post_post_pb.GetPostsRequest, post_post_pb.GetPostsResponse>;
}

export interface IPostServiceClient {
    createPost(request: post_post_pb.CreatePostRequest, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: post_post_pb.CreatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: post_post_pb.CreatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    getPosts(request: post_post_pb.GetPostsRequest, callback: (error: grpc.ServiceError | null, response: post_post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    getPosts(request: post_post_pb.GetPostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    getPosts(request: post_post_pb.GetPostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
}

export class PostServiceClient extends grpc.Client implements IPostServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPost(request: post_post_pb.CreatePostRequest, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: post_post_pb.CreatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: post_post_pb.CreatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    public getPosts(request: post_post_pb.GetPostsRequest, callback: (error: grpc.ServiceError | null, response: post_post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    public getPosts(request: post_post_pb.GetPostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
    public getPosts(request: post_post_pb.GetPostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_post_pb.GetPostsResponse) => void): grpc.ClientUnaryCall;
}
