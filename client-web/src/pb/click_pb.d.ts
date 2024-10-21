import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Click extends jspb.Message {
  getId(): number;
  setId(value: number): Click;

  getUuid(): string;
  setUuid(value: string): Click;

  getContentId(): number;
  setContentId(value: number): Click;

  getUserId(): number;
  setUserId(value: number): Click;

  getCreatedAt(): string;
  setCreatedAt(value: string): Click;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Click;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Click.AsObject;
  static toObject(includeInstance: boolean, msg: Click): Click.AsObject;
  static serializeBinaryToWriter(message: Click, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Click;
  static deserializeBinaryFromReader(message: Click, reader: jspb.BinaryReader): Click;
}

export namespace Click {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    userId: number,
    createdAt: string,
    updatedAt: string,
  }
}

export class ClickList extends jspb.Message {
  getClickList(): Array<Click>;
  setClickList(value: Array<Click>): ClickList;
  clearClickList(): ClickList;
  addClick(value?: Click, index?: number): Click;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickList.AsObject;
  static toObject(includeInstance: boolean, msg: ClickList): ClickList.AsObject;
  static serializeBinaryToWriter(message: ClickList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickList;
  static deserializeBinaryFromReader(message: ClickList, reader: jspb.BinaryReader): ClickList;
}

export namespace ClickList {
  export type AsObject = {
    clickList: Array<Click.AsObject>,
  }
}

export class ClickIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ClickIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClickIdRequest): ClickIdRequest.AsObject;
  static serializeBinaryToWriter(message: ClickIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickIdRequest;
  static deserializeBinaryFromReader(message: ClickIdRequest, reader: jspb.BinaryReader): ClickIdRequest;
}

export namespace ClickIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class ClickIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): ClickIdListRequest;
  clearIdList(): ClickIdListRequest;
  addId(value: number, index?: number): ClickIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClickIdListRequest): ClickIdListRequest.AsObject;
  static serializeBinaryToWriter(message: ClickIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickIdListRequest;
  static deserializeBinaryFromReader(message: ClickIdListRequest, reader: jspb.BinaryReader): ClickIdListRequest;
}

export namespace ClickIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class ClickUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ClickUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClickUserIdRequest): ClickUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ClickUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickUserIdRequest;
  static deserializeBinaryFromReader(message: ClickUserIdRequest, reader: jspb.BinaryReader): ClickUserIdRequest;
}

export namespace ClickUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class ClickContentIdRequest extends jspb.Message {
  getContentId(): number;
  setContentId(value: number): ClickContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClickContentIdRequest): ClickContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: ClickContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickContentIdRequest;
  static deserializeBinaryFromReader(message: ClickContentIdRequest, reader: jspb.BinaryReader): ClickContentIdRequest;
}

export namespace ClickContentIdRequest {
  export type AsObject = {
    contentId: number,
  }
}

export class ClickBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): ClickBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClickBoolResponse): ClickBoolResponse.AsObject;
  static serializeBinaryToWriter(message: ClickBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickBoolResponse;
  static deserializeBinaryFromReader(message: ClickBoolResponse, reader: jspb.BinaryReader): ClickBoolResponse;
}

export namespace ClickBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

