import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Like extends jspb.Message {
  getId(): number;
  setId(value: number): Like;

  getUuid(): string;
  setUuid(value: string): Like;

  getContentId(): number;
  setContentId(value: number): Like;

  getUserId(): number;
  setUserId(value: number): Like;

  getCreatedAt(): string;
  setCreatedAt(value: string): Like;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Like;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Like.AsObject;
  static toObject(includeInstance: boolean, msg: Like): Like.AsObject;
  static serializeBinaryToWriter(message: Like, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Like;
  static deserializeBinaryFromReader(message: Like, reader: jspb.BinaryReader): Like;
}

export namespace Like {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    userId: number,
    createdAt: string,
    updatedAt: string,
  }
}

export class LikeList extends jspb.Message {
  getLikeList(): Array<Like>;
  setLikeList(value: Array<Like>): LikeList;
  clearLikeList(): LikeList;
  addLike(value?: Like, index?: number): Like;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeList.AsObject;
  static toObject(includeInstance: boolean, msg: LikeList): LikeList.AsObject;
  static serializeBinaryToWriter(message: LikeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeList;
  static deserializeBinaryFromReader(message: LikeList, reader: jspb.BinaryReader): LikeList;
}

export namespace LikeList {
  export type AsObject = {
    likeList: Array<Like.AsObject>,
  }
}

export class LikeIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): LikeIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikeIdRequest): LikeIdRequest.AsObject;
  static serializeBinaryToWriter(message: LikeIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeIdRequest;
  static deserializeBinaryFromReader(message: LikeIdRequest, reader: jspb.BinaryReader): LikeIdRequest;
}

export namespace LikeIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class LikeIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): LikeIdListRequest;
  clearIdList(): LikeIdListRequest;
  addId(value: number, index?: number): LikeIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikeIdListRequest): LikeIdListRequest.AsObject;
  static serializeBinaryToWriter(message: LikeIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeIdListRequest;
  static deserializeBinaryFromReader(message: LikeIdListRequest, reader: jspb.BinaryReader): LikeIdListRequest;
}

export namespace LikeIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class LikeUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): LikeUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikeUserIdRequest): LikeUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: LikeUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeUserIdRequest;
  static deserializeBinaryFromReader(message: LikeUserIdRequest, reader: jspb.BinaryReader): LikeUserIdRequest;
}

export namespace LikeUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class LikeContentIdRequest extends jspb.Message {
  getContentId(): number;
  setContentId(value: number): LikeContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikeContentIdRequest): LikeContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: LikeContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeContentIdRequest;
  static deserializeBinaryFromReader(message: LikeContentIdRequest, reader: jspb.BinaryReader): LikeContentIdRequest;
}

export namespace LikeContentIdRequest {
  export type AsObject = {
    contentId: number,
  }
}

export class LikeUserIdAndContentIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): LikeUserIdAndContentIdRequest;

  getContentId(): number;
  setContentId(value: number): LikeUserIdAndContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeUserIdAndContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikeUserIdAndContentIdRequest): LikeUserIdAndContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: LikeUserIdAndContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeUserIdAndContentIdRequest;
  static deserializeBinaryFromReader(message: LikeUserIdAndContentIdRequest, reader: jspb.BinaryReader): LikeUserIdAndContentIdRequest;
}

export namespace LikeUserIdAndContentIdRequest {
  export type AsObject = {
    userId: number,
    contentId: number,
  }
}

export class LikeBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): LikeBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LikeBoolResponse): LikeBoolResponse.AsObject;
  static serializeBinaryToWriter(message: LikeBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeBoolResponse;
  static deserializeBinaryFromReader(message: LikeBoolResponse, reader: jspb.BinaryReader): LikeBoolResponse;
}

export namespace LikeBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

