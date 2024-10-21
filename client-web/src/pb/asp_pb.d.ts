import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Asp extends jspb.Message {
  getId(): number;
  setId(value: number): Asp;

  getUuid(): string;
  setUuid(value: string): Asp;

  getContentId(): number;
  setContentId(value: number): Asp;

  getUserId(): number;
  setUserId(value: number): Asp;

  getServiceList(): Array<Asp.Service>;
  setServiceList(value: Array<Asp.Service>): Asp;
  clearServiceList(): Asp;
  addService(value: Asp.Service, index?: number): Asp;

  getCreatedAt(): string;
  setCreatedAt(value: string): Asp;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Asp;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Asp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asp.AsObject;
  static toObject(includeInstance: boolean, msg: Asp): Asp.AsObject;
  static serializeBinaryToWriter(message: Asp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asp;
  static deserializeBinaryFromReader(message: Asp, reader: jspb.BinaryReader): Asp;
}

export namespace Asp {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    userId: number,
    serviceList: Array<Asp.Service>,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  }

  export enum Service { 
    YOUTUBE = 0,
    TWITTER = 1,
    INSTAGRAM = 2,
    FACEBOOK = 3,
    LINKEDIN = 4,
    TIKTOK = 5,
    PINTEREST = 6,
    REDDIT = 7,
    SNAPCHAT = 8,
    TUMBLR = 9,
    TWITCH = 10,
    WEIBO = 11,
    WECHAT = 12,
    WHATSAPP = 13,
    LINE = 14,
    TELEGRAM = 15,
    VK = 16,
    YAHOO = 17,
    OTHER = 18,
  }
}

export class AspList extends jspb.Message {
  getAspList(): Array<Asp>;
  setAspList(value: Array<Asp>): AspList;
  clearAspList(): AspList;
  addAsp(value?: Asp, index?: number): Asp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AspList.AsObject;
  static toObject(includeInstance: boolean, msg: AspList): AspList.AsObject;
  static serializeBinaryToWriter(message: AspList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AspList;
  static deserializeBinaryFromReader(message: AspList, reader: jspb.BinaryReader): AspList;
}

export namespace AspList {
  export type AsObject = {
    aspList: Array<Asp.AsObject>,
  }
}

export class AspIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): AspIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AspIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AspIdRequest): AspIdRequest.AsObject;
  static serializeBinaryToWriter(message: AspIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AspIdRequest;
  static deserializeBinaryFromReader(message: AspIdRequest, reader: jspb.BinaryReader): AspIdRequest;
}

export namespace AspIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class AspUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): AspUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AspUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AspUuidRequest): AspUuidRequest.AsObject;
  static serializeBinaryToWriter(message: AspUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AspUuidRequest;
  static deserializeBinaryFromReader(message: AspUuidRequest, reader: jspb.BinaryReader): AspUuidRequest;
}

export namespace AspUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class AspIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): AspIdListRequest;
  clearIdList(): AspIdListRequest;
  addId(value: number, index?: number): AspIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AspIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AspIdListRequest): AspIdListRequest.AsObject;
  static serializeBinaryToWriter(message: AspIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AspIdListRequest;
  static deserializeBinaryFromReader(message: AspIdListRequest, reader: jspb.BinaryReader): AspIdListRequest;
}

export namespace AspIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class AspUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): AspUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AspUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AspUserIdRequest): AspUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: AspUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AspUserIdRequest;
  static deserializeBinaryFromReader(message: AspUserIdRequest, reader: jspb.BinaryReader): AspUserIdRequest;
}

export namespace AspUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class AspContentIdRequest extends jspb.Message {
  getContentId(): number;
  setContentId(value: number): AspContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AspContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AspContentIdRequest): AspContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: AspContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AspContentIdRequest;
  static deserializeBinaryFromReader(message: AspContentIdRequest, reader: jspb.BinaryReader): AspContentIdRequest;
}

export namespace AspContentIdRequest {
  export type AsObject = {
    contentId: number,
  }
}

export class AspServiceRequest extends jspb.Message {
  getAspType(): AspServiceRequest.AspService;
  setAspType(value: AspServiceRequest.AspService): AspServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AspServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AspServiceRequest): AspServiceRequest.AsObject;
  static serializeBinaryToWriter(message: AspServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AspServiceRequest;
  static deserializeBinaryFromReader(message: AspServiceRequest, reader: jspb.BinaryReader): AspServiceRequest;
}

export namespace AspServiceRequest {
  export type AsObject = {
    aspType: AspServiceRequest.AspService,
  }

  export enum AspService { 
    YOUTUBE = 0,
    TWITTER = 1,
    INSTAGRAM = 2,
    FACEBOOK = 3,
    LINKEDIN = 4,
    TIKTOK = 5,
    PINTEREST = 6,
    REDDIT = 7,
    SNAPCHAT = 8,
    TUMBLR = 9,
    TWITCH = 10,
    WEIBO = 11,
    WECHAT = 12,
    WHATSAPP = 13,
    LINE = 14,
    TELEGRAM = 15,
    VK = 16,
    YAHOO = 17,
    OTHER = 18,
  }
}

export class AspBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): AspBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AspBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AspBoolResponse): AspBoolResponse.AsObject;
  static serializeBinaryToWriter(message: AspBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AspBoolResponse;
  static deserializeBinaryFromReader(message: AspBoolResponse, reader: jspb.BinaryReader): AspBoolResponse;
}

export namespace AspBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

