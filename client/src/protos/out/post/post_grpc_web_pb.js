/**
 * @fileoverview gRPC-Web generated client stub for postservice
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.19.1
// source: post/post.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.postservice = require('./post_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.postservice.PostServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.postservice.PostServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.postservice.CreatePostRequest,
 *   !proto.postservice.Post>}
 */
const methodDescriptor_PostService_CreatePost = new grpc.web.MethodDescriptor(
  '/postservice.PostService/CreatePost',
  grpc.web.MethodType.UNARY,
  proto.postservice.CreatePostRequest,
  proto.postservice.Post,
  /**
   * @param {!proto.postservice.CreatePostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.postservice.Post.deserializeBinary
);


/**
 * @param {!proto.postservice.CreatePostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.postservice.Post)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.postservice.Post>|undefined}
 *     The XHR Node Readable Stream
 */
proto.postservice.PostServiceClient.prototype.createPost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/postservice.PostService/CreatePost',
      request,
      metadata || {},
      methodDescriptor_PostService_CreatePost,
      callback);
};


/**
 * @param {!proto.postservice.CreatePostRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.postservice.Post>}
 *     Promise that resolves to the response
 */
proto.postservice.PostServicePromiseClient.prototype.createPost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/postservice.PostService/CreatePost',
      request,
      metadata || {},
      methodDescriptor_PostService_CreatePost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.postservice.GetPostsRequest,
 *   !proto.postservice.GetPostsResponse>}
 */
const methodDescriptor_PostService_GetPosts = new grpc.web.MethodDescriptor(
  '/postservice.PostService/GetPosts',
  grpc.web.MethodType.UNARY,
  proto.postservice.GetPostsRequest,
  proto.postservice.GetPostsResponse,
  /**
   * @param {!proto.postservice.GetPostsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.postservice.GetPostsResponse.deserializeBinary
);


/**
 * @param {!proto.postservice.GetPostsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.postservice.GetPostsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.postservice.GetPostsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.postservice.PostServiceClient.prototype.getPosts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/postservice.PostService/GetPosts',
      request,
      metadata || {},
      methodDescriptor_PostService_GetPosts,
      callback);
};


/**
 * @param {!proto.postservice.GetPostsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.postservice.GetPostsResponse>}
 *     Promise that resolves to the response
 */
proto.postservice.PostServicePromiseClient.prototype.getPosts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/postservice.PostService/GetPosts',
      request,
      metadata || {},
      methodDescriptor_PostService_GetPosts);
};


module.exports = proto.postservice;
