import * as jspb from 'google-protobuf'



export class Point extends jspb.Message {
  getId(): number;
  setId(value: number): Point;

  getUuid(): string;
  setUuid(value: string): Point;

  getUserId(): number;
  setUserId(value: number): Point;

  getPoint(): number;
  setPoint(value: number): Point;

  getCreatedAt(): string;
  setCreatedAt(value: string): Point;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Point;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    id: number,
    uuid: string,
    userId: number,
    point: number,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  }
}

export class PointList extends jspb.Message {
  getPointList(): Array<Point>;
  setPointList(value: Array<Point>): PointList;
  clearPointList(): PointList;
  addPoint(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointList.AsObject;
  static toObject(includeInstance: boolean, msg: PointList): PointList.AsObject;
  static serializeBinaryToWriter(message: PointList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointList;
  static deserializeBinaryFromReader(message: PointList, reader: jspb.BinaryReader): PointList;
}

export namespace PointList {
  export type AsObject = {
    pointList: Array<Point.AsObject>,
  }
}

export class PointIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): PointIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PointIdRequest): PointIdRequest.AsObject;
  static serializeBinaryToWriter(message: PointIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointIdRequest;
  static deserializeBinaryFromReader(message: PointIdRequest, reader: jspb.BinaryReader): PointIdRequest;
}

export namespace PointIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class PointUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): PointUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PointUuidRequest): PointUuidRequest.AsObject;
  static serializeBinaryToWriter(message: PointUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointUuidRequest;
  static deserializeBinaryFromReader(message: PointUuidRequest, reader: jspb.BinaryReader): PointUuidRequest;
}

export namespace PointUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class PointIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): PointIdListRequest;
  clearIdList(): PointIdListRequest;
  addId(value: number, index?: number): PointIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PointIdListRequest): PointIdListRequest.AsObject;
  static serializeBinaryToWriter(message: PointIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointIdListRequest;
  static deserializeBinaryFromReader(message: PointIdListRequest, reader: jspb.BinaryReader): PointIdListRequest;
}

export namespace PointIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class PointUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): PointUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PointUserIdRequest): PointUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: PointUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointUserIdRequest;
  static deserializeBinaryFromReader(message: PointUserIdRequest, reader: jspb.BinaryReader): PointUserIdRequest;
}

export namespace PointUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class PointBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): PointBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PointBoolResponse): PointBoolResponse.AsObject;
  static serializeBinaryToWriter(message: PointBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointBoolResponse;
  static deserializeBinaryFromReader(message: PointBoolResponse, reader: jspb.BinaryReader): PointBoolResponse;
}

export namespace PointBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

