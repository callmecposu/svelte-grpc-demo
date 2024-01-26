// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var post_post_pb = require('../post/post_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_postservice_CreatePostRequest(arg) {
  if (!(arg instanceof post_post_pb.CreatePostRequest)) {
    throw new Error('Expected argument of type postservice.CreatePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postservice_CreatePostRequest(buffer_arg) {
  return post_post_pb.CreatePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postservice_CreatePostsBulkRequest(arg) {
  if (!(arg instanceof post_post_pb.CreatePostsBulkRequest)) {
    throw new Error('Expected argument of type postservice.CreatePostsBulkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postservice_CreatePostsBulkRequest(buffer_arg) {
  return post_post_pb.CreatePostsBulkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postservice_CreatePostsBulkResponse(arg) {
  if (!(arg instanceof post_post_pb.CreatePostsBulkResponse)) {
    throw new Error('Expected argument of type postservice.CreatePostsBulkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postservice_CreatePostsBulkResponse(buffer_arg) {
  return post_post_pb.CreatePostsBulkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postservice_GetPostsRequest(arg) {
  if (!(arg instanceof post_post_pb.GetPostsRequest)) {
    throw new Error('Expected argument of type postservice.GetPostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postservice_GetPostsRequest(buffer_arg) {
  return post_post_pb.GetPostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postservice_GetPostsResponse(arg) {
  if (!(arg instanceof post_post_pb.GetPostsResponse)) {
    throw new Error('Expected argument of type postservice.GetPostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postservice_GetPostsResponse(buffer_arg) {
  return post_post_pb.GetPostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postservice_Post(arg) {
  if (!(arg instanceof post_post_pb.Post)) {
    throw new Error('Expected argument of type postservice.Post');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postservice_Post(buffer_arg) {
  return post_post_pb.Post.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostServiceService = exports.PostServiceService = {
  createPost: {
    path: '/postservice.PostService/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: post_post_pb.CreatePostRequest,
    responseType: post_post_pb.Post,
    requestSerialize: serialize_postservice_CreatePostRequest,
    requestDeserialize: deserialize_postservice_CreatePostRequest,
    responseSerialize: serialize_postservice_Post,
    responseDeserialize: deserialize_postservice_Post,
  },
  createPostsBulk: {
    path: '/postservice.PostService/CreatePostsBulk',
    requestStream: false,
    responseStream: false,
    requestType: post_post_pb.CreatePostsBulkRequest,
    responseType: post_post_pb.CreatePostsBulkResponse,
    requestSerialize: serialize_postservice_CreatePostsBulkRequest,
    requestDeserialize: deserialize_postservice_CreatePostsBulkRequest,
    responseSerialize: serialize_postservice_CreatePostsBulkResponse,
    responseDeserialize: deserialize_postservice_CreatePostsBulkResponse,
  },
  getPosts: {
    path: '/postservice.PostService/GetPosts',
    requestStream: false,
    responseStream: false,
    requestType: post_post_pb.GetPostsRequest,
    responseType: post_post_pb.GetPostsResponse,
    requestSerialize: serialize_postservice_GetPostsRequest,
    requestDeserialize: deserialize_postservice_GetPostsRequest,
    responseSerialize: serialize_postservice_GetPostsResponse,
    responseDeserialize: deserialize_postservice_GetPostsResponse,
  },
};

exports.PostServiceClient = grpc.makeGenericClientConstructor(PostServiceService);
