/**
 * @fileoverview gRPC-Web generated client stub for asp
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.6
// source: asp.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as asp_pb from './asp_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class AspServiceClient {
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
    '/asp.AspService/Create',
    grpcWeb.MethodType.UNARY,
    asp_pb.Asp,
    asp_pb.Asp,
    (request: asp_pb.Asp) => {
      return request.serializeBinary();
    },
    asp_pb.Asp.deserializeBinary
  );

  create(
    request: asp_pb.Asp,
    metadata: grpcWeb.Metadata | null): Promise<asp_pb.Asp>;

  create(
    request: asp_pb.Asp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: asp_pb.Asp) => void): grpcWeb.ClientReadableStream<asp_pb.Asp>;

  create(
    request: asp_pb.Asp,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: asp_pb.Asp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/asp.AspService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/asp.AspService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/asp.AspService/Update',
    grpcWeb.MethodType.UNARY,
    asp_pb.Asp,
    asp_pb.AspBoolResponse,
    (request: asp_pb.Asp) => {
      return request.serializeBinary();
    },
    asp_pb.AspBoolResponse.deserializeBinary
  );

  update(
    request: asp_pb.Asp,
    metadata: grpcWeb.Metadata | null): Promise<asp_pb.AspBoolResponse>;

  update(
    request: asp_pb.Asp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: asp_pb.AspBoolResponse) => void): grpcWeb.ClientReadableStream<asp_pb.AspBoolResponse>;

  update(
    request: asp_pb.Asp,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: asp_pb.AspBoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/asp.AspService/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/asp.AspService/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/asp.AspService/Delete',
    grpcWeb.MethodType.UNARY,
    asp_pb.AspIdRequest,
    asp_pb.AspBoolResponse,
    (request: asp_pb.AspIdRequest) => {
      return request.serializeBinary();
    },
    asp_pb.AspBoolResponse.deserializeBinary
  );

  delete(
    request: asp_pb.AspIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<asp_pb.AspBoolResponse>;

  delete(
    request: asp_pb.AspIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: asp_pb.AspBoolResponse) => void): grpcWeb.ClientReadableStream<asp_pb.AspBoolResponse>;

  delete(
    request: asp_pb.AspIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: asp_pb.AspBoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/asp.AspService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/asp.AspService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

  methodDescriptorGetById = new grpcWeb.MethodDescriptor(
    '/asp.AspService/GetById',
    grpcWeb.MethodType.UNARY,
    asp_pb.AspIdRequest,
    asp_pb.Asp,
    (request: asp_pb.AspIdRequest) => {
      return request.serializeBinary();
    },
    asp_pb.Asp.deserializeBinary
  );

  getById(
    request: asp_pb.AspIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<asp_pb.Asp>;

  getById(
    request: asp_pb.AspIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: asp_pb.Asp) => void): grpcWeb.ClientReadableStream<asp_pb.Asp>;

  getById(
    request: asp_pb.AspIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: asp_pb.Asp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/asp.AspService/GetById',
        request,
        metadata || {},
        this.methodDescriptorGetById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/asp.AspService/GetById',
    request,
    metadata || {},
    this.methodDescriptorGetById);
  }

  methodDescriptorGetByUuid = new grpcWeb.MethodDescriptor(
    '/asp.AspService/GetByUuid',
    grpcWeb.MethodType.UNARY,
    asp_pb.AspUuidRequest,
    asp_pb.Asp,
    (request: asp_pb.AspUuidRequest) => {
      return request.serializeBinary();
    },
    asp_pb.Asp.deserializeBinary
  );

  getByUuid(
    request: asp_pb.AspUuidRequest,
    metadata: grpcWeb.Metadata | null): Promise<asp_pb.Asp>;

  getByUuid(
    request: asp_pb.AspUuidRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: asp_pb.Asp) => void): grpcWeb.ClientReadableStream<asp_pb.Asp>;

  getByUuid(
    request: asp_pb.AspUuidRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: asp_pb.Asp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/asp.AspService/GetByUuid',
        request,
        metadata || {},
        this.methodDescriptorGetByUuid,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/asp.AspService/GetByUuid',
    request,
    metadata || {},
    this.methodDescriptorGetByUuid);
  }

  methodDescriptorGetListByUser = new grpcWeb.MethodDescriptor(
    '/asp.AspService/GetListByUser',
    grpcWeb.MethodType.UNARY,
    asp_pb.AspUserIdRequest,
    asp_pb.AspList,
    (request: asp_pb.AspUserIdRequest) => {
      return request.serializeBinary();
    },
    asp_pb.AspList.deserializeBinary
  );

  getListByUser(
    request: asp_pb.AspUserIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<asp_pb.AspList>;

  getListByUser(
    request: asp_pb.AspUserIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: asp_pb.AspList) => void): grpcWeb.ClientReadableStream<asp_pb.AspList>;

  getListByUser(
    request: asp_pb.AspUserIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: asp_pb.AspList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/asp.AspService/GetListByUser',
        request,
        metadata || {},
        this.methodDescriptorGetListByUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/asp.AspService/GetListByUser',
    request,
    metadata || {},
    this.methodDescriptorGetListByUser);
  }

  methodDescriptorGetListByContent = new grpcWeb.MethodDescriptor(
    '/asp.AspService/GetListByContent',
    grpcWeb.MethodType.UNARY,
    asp_pb.AspContentIdRequest,
    asp_pb.AspList,
    (request: asp_pb.AspContentIdRequest) => {
      return request.serializeBinary();
    },
    asp_pb.AspList.deserializeBinary
  );

  getListByContent(
    request: asp_pb.AspContentIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<asp_pb.AspList>;

  getListByContent(
    request: asp_pb.AspContentIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: asp_pb.AspList) => void): grpcWeb.ClientReadableStream<asp_pb.AspList>;

  getListByContent(
    request: asp_pb.AspContentIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: asp_pb.AspList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/asp.AspService/GetListByContent',
        request,
        metadata || {},
        this.methodDescriptorGetListByContent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/asp.AspService/GetListByContent',
    request,
    metadata || {},
    this.methodDescriptorGetListByContent);
  }

  methodDescriptorGetListByService = new grpcWeb.MethodDescriptor(
    '/asp.AspService/GetListByService',
    grpcWeb.MethodType.UNARY,
    asp_pb.AspServiceRequest,
    asp_pb.AspList,
    (request: asp_pb.AspServiceRequest) => {
      return request.serializeBinary();
    },
    asp_pb.AspList.deserializeBinary
  );

  getListByService(
    request: asp_pb.AspServiceRequest,
    metadata: grpcWeb.Metadata | null): Promise<asp_pb.AspList>;

  getListByService(
    request: asp_pb.AspServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: asp_pb.AspList) => void): grpcWeb.ClientReadableStream<asp_pb.AspList>;

  getListByService(
    request: asp_pb.AspServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: asp_pb.AspList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/asp.AspService/GetListByService',
        request,
        metadata || {},
        this.methodDescriptorGetListByService,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/asp.AspService/GetListByService',
    request,
    metadata || {},
    this.methodDescriptorGetListByService);
  }

  methodDescriptorGetAll = new grpcWeb.MethodDescriptor(
    '/asp.AspService/GetAll',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    asp_pb.AspList,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    asp_pb.AspList.deserializeBinary
  );

  getAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<asp_pb.AspList>;

  getAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: asp_pb.AspList) => void): grpcWeb.ClientReadableStream<asp_pb.AspList>;

  getAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: asp_pb.AspList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/asp.AspService/GetAll',
        request,
        metadata || {},
        this.methodDescriptorGetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/asp.AspService/GetAll',
    request,
    metadata || {},
    this.methodDescriptorGetAll);
  }

}
