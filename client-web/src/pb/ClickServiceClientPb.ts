/**
 * @fileoverview gRPC-Web generated client stub for click
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.6
// source: click.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as click_pb from './click_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ClickServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/click.ClickService/Create',
    grpcWeb.MethodType.UNARY,
    click_pb.Click,
    click_pb.Click,
    (request: click_pb.Click) => {
      return request.serializeBinary();
    },
    click_pb.Click.deserializeBinary
  );

  create(
    request: click_pb.Click,
    metadata: grpcWeb.Metadata | null): Promise<click_pb.Click>;

  create(
    request: click_pb.Click,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: click_pb.Click) => void): grpcWeb.ClientReadableStream<click_pb.Click>;

  create(
    request: click_pb.Click,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: click_pb.Click) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/click.ClickService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/click.ClickService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/click.ClickService/Update',
    grpcWeb.MethodType.UNARY,
    click_pb.Click,
    click_pb.ClickBoolResponse,
    (request: click_pb.Click) => {
      return request.serializeBinary();
    },
    click_pb.ClickBoolResponse.deserializeBinary
  );

  update(
    request: click_pb.Click,
    metadata: grpcWeb.Metadata | null): Promise<click_pb.ClickBoolResponse>;

  update(
    request: click_pb.Click,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: click_pb.ClickBoolResponse) => void): grpcWeb.ClientReadableStream<click_pb.ClickBoolResponse>;

  update(
    request: click_pb.Click,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: click_pb.ClickBoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/click.ClickService/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/click.ClickService/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/click.ClickService/Delete',
    grpcWeb.MethodType.UNARY,
    click_pb.ClickIdRequest,
    click_pb.ClickBoolResponse,
    (request: click_pb.ClickIdRequest) => {
      return request.serializeBinary();
    },
    click_pb.ClickBoolResponse.deserializeBinary
  );

  delete(
    request: click_pb.ClickIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<click_pb.ClickBoolResponse>;

  delete(
    request: click_pb.ClickIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: click_pb.ClickBoolResponse) => void): grpcWeb.ClientReadableStream<click_pb.ClickBoolResponse>;

  delete(
    request: click_pb.ClickIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: click_pb.ClickBoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/click.ClickService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/click.ClickService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

  methodDescriptorGetById = new grpcWeb.MethodDescriptor(
    '/click.ClickService/GetById',
    grpcWeb.MethodType.UNARY,
    click_pb.ClickIdRequest,
    click_pb.Click,
    (request: click_pb.ClickIdRequest) => {
      return request.serializeBinary();
    },
    click_pb.Click.deserializeBinary
  );

  getById(
    request: click_pb.ClickIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<click_pb.Click>;

  getById(
    request: click_pb.ClickIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: click_pb.Click) => void): grpcWeb.ClientReadableStream<click_pb.Click>;

  getById(
    request: click_pb.ClickIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: click_pb.Click) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/click.ClickService/GetById',
        request,
        metadata || {},
        this.methodDescriptorGetById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/click.ClickService/GetById',
    request,
    metadata || {},
    this.methodDescriptorGetById);
  }

  methodDescriptorGetListByUser = new grpcWeb.MethodDescriptor(
    '/click.ClickService/GetListByUser',
    grpcWeb.MethodType.UNARY,
    click_pb.ClickUserIdRequest,
    click_pb.ClickList,
    (request: click_pb.ClickUserIdRequest) => {
      return request.serializeBinary();
    },
    click_pb.ClickList.deserializeBinary
  );

  getListByUser(
    request: click_pb.ClickUserIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<click_pb.ClickList>;

  getListByUser(
    request: click_pb.ClickUserIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: click_pb.ClickList) => void): grpcWeb.ClientReadableStream<click_pb.ClickList>;

  getListByUser(
    request: click_pb.ClickUserIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: click_pb.ClickList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/click.ClickService/GetListByUser',
        request,
        metadata || {},
        this.methodDescriptorGetListByUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/click.ClickService/GetListByUser',
    request,
    metadata || {},
    this.methodDescriptorGetListByUser);
  }

  methodDescriptorGetListByContent = new grpcWeb.MethodDescriptor(
    '/click.ClickService/GetListByContent',
    grpcWeb.MethodType.UNARY,
    click_pb.ClickContentIdRequest,
    click_pb.ClickList,
    (request: click_pb.ClickContentIdRequest) => {
      return request.serializeBinary();
    },
    click_pb.ClickList.deserializeBinary
  );

  getListByContent(
    request: click_pb.ClickContentIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<click_pb.ClickList>;

  getListByContent(
    request: click_pb.ClickContentIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: click_pb.ClickList) => void): grpcWeb.ClientReadableStream<click_pb.ClickList>;

  getListByContent(
    request: click_pb.ClickContentIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: click_pb.ClickList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/click.ClickService/GetListByContent',
        request,
        metadata || {},
        this.methodDescriptorGetListByContent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/click.ClickService/GetListByContent',
    request,
    metadata || {},
    this.methodDescriptorGetListByContent);
  }

  methodDescriptorGetListByIdList = new grpcWeb.MethodDescriptor(
    '/click.ClickService/GetListByIdList',
    grpcWeb.MethodType.UNARY,
    click_pb.ClickIdListRequest,
    click_pb.ClickList,
    (request: click_pb.ClickIdListRequest) => {
      return request.serializeBinary();
    },
    click_pb.ClickList.deserializeBinary
  );

  getListByIdList(
    request: click_pb.ClickIdListRequest,
    metadata: grpcWeb.Metadata | null): Promise<click_pb.ClickList>;

  getListByIdList(
    request: click_pb.ClickIdListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: click_pb.ClickList) => void): grpcWeb.ClientReadableStream<click_pb.ClickList>;

  getListByIdList(
    request: click_pb.ClickIdListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: click_pb.ClickList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/click.ClickService/GetListByIdList',
        request,
        metadata || {},
        this.methodDescriptorGetListByIdList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/click.ClickService/GetListByIdList',
    request,
    metadata || {},
    this.methodDescriptorGetListByIdList);
  }

  methodDescriptorGetAll = new grpcWeb.MethodDescriptor(
    '/click.ClickService/GetAll',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    click_pb.ClickList,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    click_pb.ClickList.deserializeBinary
  );

  getAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<click_pb.ClickList>;

  getAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: click_pb.ClickList) => void): grpcWeb.ClientReadableStream<click_pb.ClickList>;

  getAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: click_pb.ClickList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/click.ClickService/GetAll',
        request,
        metadata || {},
        this.methodDescriptorGetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/click.ClickService/GetAll',
    request,
    metadata || {},
    this.methodDescriptorGetAll);
  }

}

