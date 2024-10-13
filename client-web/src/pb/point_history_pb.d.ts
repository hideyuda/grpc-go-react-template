import * as jspb from 'google-protobuf'



export class PointHistory extends jspb.Message {
  getId(): number;
  setId(value: number): PointHistory;

  getUuid(): string;
  setUuid(value: string): PointHistory;

  getOrderId(): number;
  setOrderId(value: number): PointHistory;

  getUserId(): number;
  setUserId(value: number): PointHistory;

  getProgress(): PointHistory.Progress;
  setProgress(value: PointHistory.Progress): PointHistory;

  getService(): PointHistory.Service;
  setService(value: PointHistory.Service): PointHistory;

  getUsedPoint(): number;
  setUsedPoint(value: number): PointHistory;

  getCreatedAt(): string;
  setCreatedAt(value: string): PointHistory;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): PointHistory;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): PointHistory;

  getPrice(): number;
  setPrice(value: number): PointHistory;

  getAspRate(): number;
  setAspRate(value: number): PointHistory;

  getViaAsp(): boolean;
  setViaAsp(value: boolean): PointHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointHistory.AsObject;
  static toObject(includeInstance: boolean, msg: PointHistory): PointHistory.AsObject;
  static serializeBinaryToWriter(message: PointHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointHistory;
  static deserializeBinaryFromReader(message: PointHistory, reader: jspb.BinaryReader): PointHistory;
}

export namespace PointHistory {
  export type AsObject = {
    id: number,
    uuid: string,
    orderId: number,
    userId: number,
    progress: PointHistory.Progress,
    service: PointHistory.Service,
    usedPoint: number,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
    price: number,
    aspRate: number,
    viaAsp: boolean,
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

export class PointHistoryList extends jspb.Message {
  getPointHistoryList(): Array<PointHistory>;
  setPointHistoryList(value: Array<PointHistory>): PointHistoryList;
  clearPointHistoryList(): PointHistoryList;
  addPointHistory(value?: PointHistory, index?: number): PointHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointHistoryList.AsObject;
  static toObject(includeInstance: boolean, msg: PointHistoryList): PointHistoryList.AsObject;
  static serializeBinaryToWriter(message: PointHistoryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointHistoryList;
  static deserializeBinaryFromReader(message: PointHistoryList, reader: jspb.BinaryReader): PointHistoryList;
}

export namespace PointHistoryList {
  export type AsObject = {
    pointHistoryList: Array<PointHistory.AsObject>,
  }
}

export class PointHistoryIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): PointHistoryIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointHistoryIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PointHistoryIdRequest): PointHistoryIdRequest.AsObject;
  static serializeBinaryToWriter(message: PointHistoryIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointHistoryIdRequest;
  static deserializeBinaryFromReader(message: PointHistoryIdRequest, reader: jspb.BinaryReader): PointHistoryIdRequest;
}

export namespace PointHistoryIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class PointHistoryUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): PointHistoryUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointHistoryUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PointHistoryUuidRequest): PointHistoryUuidRequest.AsObject;
  static serializeBinaryToWriter(message: PointHistoryUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointHistoryUuidRequest;
  static deserializeBinaryFromReader(message: PointHistoryUuidRequest, reader: jspb.BinaryReader): PointHistoryUuidRequest;
}

export namespace PointHistoryUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class PointHistoryIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): PointHistoryIdListRequest;
  clearIdList(): PointHistoryIdListRequest;
  addId(value: number, index?: number): PointHistoryIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointHistoryIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PointHistoryIdListRequest): PointHistoryIdListRequest.AsObject;
  static serializeBinaryToWriter(message: PointHistoryIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointHistoryIdListRequest;
  static deserializeBinaryFromReader(message: PointHistoryIdListRequest, reader: jspb.BinaryReader): PointHistoryIdListRequest;
}

export namespace PointHistoryIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class PointHistoryUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): PointHistoryUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointHistoryUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PointHistoryUserIdRequest): PointHistoryUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: PointHistoryUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointHistoryUserIdRequest;
  static deserializeBinaryFromReader(message: PointHistoryUserIdRequest, reader: jspb.BinaryReader): PointHistoryUserIdRequest;
}

export namespace PointHistoryUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class PointHistoryBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): PointHistoryBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointHistoryBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PointHistoryBoolResponse): PointHistoryBoolResponse.AsObject;
  static serializeBinaryToWriter(message: PointHistoryBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointHistoryBoolResponse;
  static deserializeBinaryFromReader(message: PointHistoryBoolResponse, reader: jspb.BinaryReader): PointHistoryBoolResponse;
}

export namespace PointHistoryBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

