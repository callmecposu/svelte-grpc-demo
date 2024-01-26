// package: postservice
// file: post/post.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Post extends jspb.Message { 
    getId(): string;
    setId(value: string): Post;
    getTitle(): string;
    setTitle(value: string): Post;
    getBody(): string;
    setBody(value: string): Post;
    getAuthor(): string;
    setAuthor(value: string): Post;
    clearKeywordsList(): void;
    getKeywordsList(): Array<string>;
    setKeywordsList(value: Array<string>): Post;
    addKeywords(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Post.AsObject;
    static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Post;
    static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
    export type AsObject = {
        id: string,
        title: string,
        body: string,
        author: string,
        keywordsList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreatePostRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreatePostRequest;
    getBody(): string;
    setBody(value: string): CreatePostRequest;
    getAuthor(): string;
    setAuthor(value: string): CreatePostRequest;
    clearKeywordsList(): void;
    getKeywordsList(): Array<string>;
    setKeywordsList(value: Array<string>): CreatePostRequest;
    addKeywords(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePostRequest): CreatePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePostRequest;
    static deserializeBinaryFromReader(message: CreatePostRequest, reader: jspb.BinaryReader): CreatePostRequest;
}

export namespace CreatePostRequest {
    export type AsObject = {
        title: string,
        body: string,
        author: string,
        keywordsList: Array<string>,
    }
}

export class CreatePostsBulkRequest extends jspb.Message { 
    clearSourceList(): void;
    getSourceList(): Array<CreatePostRequest>;
    setSourceList(value: Array<CreatePostRequest>): CreatePostsBulkRequest;
    addSource(value?: CreatePostRequest, index?: number): CreatePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePostsBulkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePostsBulkRequest): CreatePostsBulkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePostsBulkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePostsBulkRequest;
    static deserializeBinaryFromReader(message: CreatePostsBulkRequest, reader: jspb.BinaryReader): CreatePostsBulkRequest;
}

export namespace CreatePostsBulkRequest {
    export type AsObject = {
        sourceList: Array<CreatePostRequest.AsObject>,
    }
}

export class CreatePostsBulkResponse extends jspb.Message { 
    clearPostsList(): void;
    getPostsList(): Array<Post>;
    setPostsList(value: Array<Post>): CreatePostsBulkResponse;
    addPosts(value?: Post, index?: number): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePostsBulkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePostsBulkResponse): CreatePostsBulkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePostsBulkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePostsBulkResponse;
    static deserializeBinaryFromReader(message: CreatePostsBulkResponse, reader: jspb.BinaryReader): CreatePostsBulkResponse;
}

export namespace CreatePostsBulkResponse {
    export type AsObject = {
        postsList: Array<Post.AsObject>,
    }
}

export class TimestampFilter extends jspb.Message { 
    getComp(): Comparison;
    setComp(value: Comparison): TimestampFilter;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TimestampFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimestampFilter.AsObject;
    static toObject(includeInstance: boolean, msg: TimestampFilter): TimestampFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimestampFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimestampFilter;
    static deserializeBinaryFromReader(message: TimestampFilter, reader: jspb.BinaryReader): TimestampFilter;
}

export namespace TimestampFilter {
    export type AsObject = {
        comp: Comparison,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetPostsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetPostsRequest;
    getTitle(): string;
    setTitle(value: string): GetPostsRequest;
    getAuthor(): string;
    setAuthor(value: string): GetPostsRequest;

    hasTimestampFilter(): boolean;
    clearTimestampFilter(): void;
    getTimestampFilter(): TimestampFilter | undefined;
    setTimestampFilter(value?: TimestampFilter): GetPostsRequest;
    clearKeywordsList(): void;
    getKeywordsList(): Array<string>;
    setKeywordsList(value: Array<string>): GetPostsRequest;
    addKeywords(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPostsRequest): GetPostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPostsRequest;
    static deserializeBinaryFromReader(message: GetPostsRequest, reader: jspb.BinaryReader): GetPostsRequest;
}

export namespace GetPostsRequest {
    export type AsObject = {
        id: string,
        title: string,
        author: string,
        timestampFilter?: TimestampFilter.AsObject,
        keywordsList: Array<string>,
    }
}

export class GetPostsResponse extends jspb.Message { 
    clearPostsList(): void;
    getPostsList(): Array<Post>;
    setPostsList(value: Array<Post>): GetPostsResponse;
    addPosts(value?: Post, index?: number): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPostsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPostsResponse): GetPostsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPostsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPostsResponse;
    static deserializeBinaryFromReader(message: GetPostsResponse, reader: jspb.BinaryReader): GetPostsResponse;
}

export namespace GetPostsResponse {
    export type AsObject = {
        postsList: Array<Post.AsObject>,
    }
}

export enum Comparison {
    COMP_UNSPECIFIED = 0,
    COMP_GT = 1,
    COMP_LT = 2,
}
