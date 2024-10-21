import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Order extends jspb.Message {
  getId(): number;
  setId(value: number): Order;

  getUuid(): string;
  setUuid(value: string): Order;

  getContentId(): number;
  setContentId(value: number): Order;

  getBillingId(): number;
  setBillingId(value: number): Order;

  getOrderUserId(): number;
  setOrderUserId(value: number): Order;

  getProgress(): Order.Progress;
  setProgress(value: Order.Progress): Order;

  getService(): Order.Service;
  setService(value: Order.Service): Order;

  getPrice(): number;
  setPrice(value: number): Order;

  getAspRate(): number;
  setAspRate(value: number): Order;

  getViaAsp(): boolean;
  setViaAsp(value: boolean): Order;

  getUsedPoint(): number;
  setUsedPoint(value: number): Order;

  getCreatedAt(): string;
  setCreatedAt(value: string): Order;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Order;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    billingId: number,
    orderUserId: number,
    progress: Order.Progress,
    service: Order.Service,
    price: number,
    aspRate: number,
    viaAsp: boolean,
    usedPoint: number,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  }

  export enum Progress { 
    REQUESTED = 0,
    PAID = 1,
    PENDED = 2,
    CANCELED = 3,
    REFUNDED = 4,
  }

  export enum Service { 
    POINT = 0,
    CASH = 1,
    CREDIT = 2,
  }
}

export class OrderList extends jspb.Message {
  getOrderList(): Array<Order>;
  setOrderList(value: Array<Order>): OrderList;
  clearOrderList(): OrderList;
  addOrder(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderList.AsObject;
  static toObject(includeInstance: boolean, msg: OrderList): OrderList.AsObject;
  static serializeBinaryToWriter(message: OrderList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderList;
  static deserializeBinaryFromReader(message: OrderList, reader: jspb.BinaryReader): OrderList;
}

export namespace OrderList {
  export type AsObject = {
    orderList: Array<Order.AsObject>,
  }
}

export class OrderIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): OrderIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderIdRequest): OrderIdRequest.AsObject;
  static serializeBinaryToWriter(message: OrderIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderIdRequest;
  static deserializeBinaryFromReader(message: OrderIdRequest, reader: jspb.BinaryReader): OrderIdRequest;
}

export namespace OrderIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class OrderUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): OrderUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderUuidRequest): OrderUuidRequest.AsObject;
  static serializeBinaryToWriter(message: OrderUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderUuidRequest;
  static deserializeBinaryFromReader(message: OrderUuidRequest, reader: jspb.BinaryReader): OrderUuidRequest;
}

export namespace OrderUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class OrderIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): OrderIdListRequest;
  clearIdList(): OrderIdListRequest;
  addId(value: number, index?: number): OrderIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderIdListRequest): OrderIdListRequest.AsObject;
  static serializeBinaryToWriter(message: OrderIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderIdListRequest;
  static deserializeBinaryFromReader(message: OrderIdListRequest, reader: jspb.BinaryReader): OrderIdListRequest;
}

export namespace OrderIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class OrderUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): OrderUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderUserIdRequest): OrderUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: OrderUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderUserIdRequest;
  static deserializeBinaryFromReader(message: OrderUserIdRequest, reader: jspb.BinaryReader): OrderUserIdRequest;
}

export namespace OrderUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class OrderBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): OrderBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBoolResponse): OrderBoolResponse.AsObject;
  static serializeBinaryToWriter(message: OrderBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBoolResponse;
  static deserializeBinaryFromReader(message: OrderBoolResponse, reader: jspb.BinaryReader): OrderBoolResponse;
}

export namespace OrderBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

