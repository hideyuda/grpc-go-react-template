import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Share extends jspb.Message {
  getId(): number;
  setId(value: number): Share;

  getUuid(): string;
  setUuid(value: string): Share;

  getContentId(): number;
  setContentId(value: number): Share;

  getUserId(): number;
  setUserId(value: number): Share;

  getServiceList(): Array<Share.Service>;
  setServiceList(value: Array<Share.Service>): Share;
  clearServiceList(): Share;
  addService(value: Share.Service, index?: number): Share;

  getCreatedAt(): string;
  setCreatedAt(value: string): Share;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Share;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Share.AsObject;
  static toObject(includeInstance: boolean, msg: Share): Share.AsObject;
  static serializeBinaryToWriter(message: Share, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Share;
  static deserializeBinaryFromReader(message: Share, reader: jspb.BinaryReader): Share;
}

export namespace Share {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    userId: number,
    serviceList: Array<Share.Service>,
    createdAt: string,
    updatedAt: string,
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

export class ShareList extends jspb.Message {
  getShareList(): Array<Share>;
  setShareList(value: Array<Share>): ShareList;
  clearShareList(): ShareList;
  addShare(value?: Share, index?: number): Share;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareList.AsObject;
  static toObject(includeInstance: boolean, msg: ShareList): ShareList.AsObject;
  static serializeBinaryToWriter(message: ShareList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareList;
  static deserializeBinaryFromReader(message: ShareList, reader: jspb.BinaryReader): ShareList;
}

export namespace ShareList {
  export type AsObject = {
    shareList: Array<Share.AsObject>,
  }
}

export class ShareIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ShareIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareIdRequest): ShareIdRequest.AsObject;
  static serializeBinaryToWriter(message: ShareIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareIdRequest;
  static deserializeBinaryFromReader(message: ShareIdRequest, reader: jspb.BinaryReader): ShareIdRequest;
}

export namespace ShareIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class ShareIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): ShareIdListRequest;
  clearIdList(): ShareIdListRequest;
  addId(value: number, index?: number): ShareIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareIdListRequest): ShareIdListRequest.AsObject;
  static serializeBinaryToWriter(message: ShareIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareIdListRequest;
  static deserializeBinaryFromReader(message: ShareIdListRequest, reader: jspb.BinaryReader): ShareIdListRequest;
}

export namespace ShareIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class ShareUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ShareUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareUserIdRequest): ShareUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ShareUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareUserIdRequest;
  static deserializeBinaryFromReader(message: ShareUserIdRequest, reader: jspb.BinaryReader): ShareUserIdRequest;
}

export namespace ShareUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class ShareContentIdRequest extends jspb.Message {
  getContentId(): number;
  setContentId(value: number): ShareContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareContentIdRequest): ShareContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: ShareContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareContentIdRequest;
  static deserializeBinaryFromReader(message: ShareContentIdRequest, reader: jspb.BinaryReader): ShareContentIdRequest;
}

export namespace ShareContentIdRequest {
  export type AsObject = {
    contentId: number,
  }
}

export class ShareBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): ShareBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareBoolResponse): ShareBoolResponse.AsObject;
  static serializeBinaryToWriter(message: ShareBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareBoolResponse;
  static deserializeBinaryFromReader(message: ShareBoolResponse, reader: jspb.BinaryReader): ShareBoolResponse;
}

export namespace ShareBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

