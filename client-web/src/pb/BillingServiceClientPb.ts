/**
 * @fileoverview gRPC-Web generated client stub for billing
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.6
// source: billing.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as billing_pb from './billing_pb';


export class BillingServiceClient {
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
    '/billing.BillingService/Create',
    grpcWeb.MethodType.UNARY,
    billing_pb.Billing,
    billing_pb.Billing,
    (request: billing_pb.Billing) => {
      return request.serializeBinary();
    },
    billing_pb.Billing.deserializeBinary
  );

  create(
    request: billing_pb.Billing,
    metadata: grpcWeb.Metadata | null): Promise<billing_pb.Billing>;

  create(
    request: billing_pb.Billing,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: billing_pb.Billing) => void): grpcWeb.ClientReadableStream<billing_pb.Billing>;

  create(
    request: billing_pb.Billing,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: billing_pb.Billing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/billing.BillingService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/billing.BillingService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/billing.BillingService/Update',
    grpcWeb.MethodType.UNARY,
    billing_pb.Billing,
    billing_pb.BillingBoolResponse,
    (request: billing_pb.Billing) => {
      return request.serializeBinary();
    },
    billing_pb.BillingBoolResponse.deserializeBinary
  );

  update(
    request: billing_pb.Billing,
    metadata: grpcWeb.Metadata | null): Promise<billing_pb.BillingBoolResponse>;

  update(
    request: billing_pb.Billing,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: billing_pb.BillingBoolResponse) => void): grpcWeb.ClientReadableStream<billing_pb.BillingBoolResponse>;

  update(
    request: billing_pb.Billing,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: billing_pb.BillingBoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/billing.BillingService/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/billing.BillingService/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorGetById = new grpcWeb.MethodDescriptor(
    '/billing.BillingService/GetById',
    grpcWeb.MethodType.UNARY,
    billing_pb.BillingIdRequest,
    billing_pb.Billing,
    (request: billing_pb.BillingIdRequest) => {
      return request.serializeBinary();
    },
    billing_pb.Billing.deserializeBinary
  );

  getById(
    request: billing_pb.BillingIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<billing_pb.Billing>;

  getById(
    request: billing_pb.BillingIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: billing_pb.Billing) => void): grpcWeb.ClientReadableStream<billing_pb.Billing>;

  getById(
    request: billing_pb.BillingIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: billing_pb.Billing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/billing.BillingService/GetById',
        request,
        metadata || {},
        this.methodDescriptorGetById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/billing.BillingService/GetById',
    request,
    metadata || {},
    this.methodDescriptorGetById);
  }

  methodDescriptorGetByUuid = new grpcWeb.MethodDescriptor(
    '/billing.BillingService/GetByUuid',
    grpcWeb.MethodType.UNARY,
    billing_pb.BillingUuidRequest,
    billing_pb.Billing,
    (request: billing_pb.BillingUuidRequest) => {
      return request.serializeBinary();
    },
    billing_pb.Billing.deserializeBinary
  );

  getByUuid(
    request: billing_pb.BillingUuidRequest,
    metadata: grpcWeb.Metadata | null): Promise<billing_pb.Billing>;

  getByUuid(
    request: billing_pb.BillingUuidRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: billing_pb.Billing) => void): grpcWeb.ClientReadableStream<billing_pb.Billing>;

  getByUuid(
    request: billing_pb.BillingUuidRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: billing_pb.Billing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/billing.BillingService/GetByUuid',
        request,
        metadata || {},
        this.methodDescriptorGetByUuid,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/billing.BillingService/GetByUuid',
    request,
    metadata || {},
    this.methodDescriptorGetByUuid);
  }

  methodDescriptorGetByUserId = new grpcWeb.MethodDescriptor(
    '/billing.BillingService/GetByUserId',
    grpcWeb.MethodType.UNARY,
    billing_pb.BillingUserIdRequest,
    billing_pb.BillingList,
    (request: billing_pb.BillingUserIdRequest) => {
      return request.serializeBinary();
    },
    billing_pb.BillingList.deserializeBinary
  );

  getByUserId(
    request: billing_pb.BillingUserIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<billing_pb.BillingList>;

  getByUserId(
    request: billing_pb.BillingUserIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: billing_pb.BillingList) => void): grpcWeb.ClientReadableStream<billing_pb.BillingList>;

  getByUserId(
    request: billing_pb.BillingUserIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: billing_pb.BillingList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/billing.BillingService/GetByUserId',
        request,
        metadata || {},
        this.methodDescriptorGetByUserId,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/billing.BillingService/GetByUserId',
    request,
    metadata || {},
    this.methodDescriptorGetByUserId);
  }

}

