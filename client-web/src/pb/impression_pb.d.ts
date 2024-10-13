import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Impression extends jspb.Message {
  getId(): number;
  setId(value: number): Impression;

  getUuid(): string;
  setUuid(value: string): Impression;

  getContentId(): number;
  setContentId(value: number): Impression;

  getUserId(): number;
  setUserId(value: number): Impression;

  getCreatedAt(): string;
  setCreatedAt(value: string): Impression;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Impression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Impression.AsObject;
  static toObject(includeInstance: boolean, msg: Impression): Impression.AsObject;
  static serializeBinaryToWriter(message: Impression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Impression;
  static deserializeBinaryFromReader(message: Impression, reader: jspb.BinaryReader): Impression;
}

export namespace Impression {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    userId: number,
    createdAt: string,
    updatedAt: string,
  }
}

export class ImpressionList extends jspb.Message {
  getImpressionList(): Array<Impression>;
  setImpressionList(value: Array<Impression>): ImpressionList;
  clearImpressionList(): ImpressionList;
  addImpression(value?: Impression, index?: number): Impression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImpressionList.AsObject;
  static toObject(includeInstance: boolean, msg: ImpressionList): ImpressionList.AsObject;
  static serializeBinaryToWriter(message: ImpressionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImpressionList;
  static deserializeBinaryFromReader(message: ImpressionList, reader: jspb.BinaryReader): ImpressionList;
}

export namespace ImpressionList {
  export type AsObject = {
    impressionList: Array<Impression.AsObject>,
  }
}

export class ImpressionIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ImpressionIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImpressionIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImpressionIdRequest): ImpressionIdRequest.AsObject;
  static serializeBinaryToWriter(message: ImpressionIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImpressionIdRequest;
  static deserializeBinaryFromReader(message: ImpressionIdRequest, reader: jspb.BinaryReader): ImpressionIdRequest;
}

export namespace ImpressionIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class ImpressionIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): ImpressionIdListRequest;
  clearIdList(): ImpressionIdListRequest;
  addId(value: number, index?: number): ImpressionIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImpressionIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImpressionIdListRequest): ImpressionIdListRequest.AsObject;
  static serializeBinaryToWriter(message: ImpressionIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImpressionIdListRequest;
  static deserializeBinaryFromReader(message: ImpressionIdListRequest, reader: jspb.BinaryReader): ImpressionIdListRequest;
}

export namespace ImpressionIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class ImpressionUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ImpressionUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImpressionUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImpressionUserIdRequest): ImpressionUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ImpressionUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImpressionUserIdRequest;
  static deserializeBinaryFromReader(message: ImpressionUserIdRequest, reader: jspb.BinaryReader): ImpressionUserIdRequest;
}

export namespace ImpressionUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class ImpressionContentIdRequest extends jspb.Message {
  getContentId(): number;
  setContentId(value: number): ImpressionContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImpressionContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImpressionContentIdRequest): ImpressionContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: ImpressionContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImpressionContentIdRequest;
  static deserializeBinaryFromReader(message: ImpressionContentIdRequest, reader: jspb.BinaryReader): ImpressionContentIdRequest;
}

export namespace ImpressionContentIdRequest {
  export type AsObject = {
    contentId: number,
  }
}

export class ImpressionBoolResponse extends jspb.Message {
  getEror(): boolean;
  setEror(value: boolean): ImpressionBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImpressionBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImpressionBoolResponse): ImpressionBoolResponse.AsObject;
  static serializeBinaryToWriter(message: ImpressionBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImpressionBoolResponse;
  static deserializeBinaryFromReader(message: ImpressionBoolResponse, reader: jspb.BinaryReader): ImpressionBoolResponse;
}

export namespace ImpressionBoolResponse {
  export type AsObject = {
    eror: boolean,
  }
}

