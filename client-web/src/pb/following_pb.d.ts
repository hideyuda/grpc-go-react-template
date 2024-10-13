import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Following extends jspb.Message {
  getId(): number;
  setId(value: number): Following;

  getUuid(): string;
  setUuid(value: string): Following;

  getFollowingUserId(): number;
  setFollowingUserId(value: number): Following;

  getFollowedUserId(): number;
  setFollowedUserId(value: number): Following;

  getCreatedAt(): string;
  setCreatedAt(value: string): Following;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Following;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Following.AsObject;
  static toObject(includeInstance: boolean, msg: Following): Following.AsObject;
  static serializeBinaryToWriter(message: Following, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Following;
  static deserializeBinaryFromReader(message: Following, reader: jspb.BinaryReader): Following;
}

export namespace Following {
  export type AsObject = {
    id: number,
    uuid: string,
    followingUserId: number,
    followedUserId: number,
    createdAt: string,
    updatedAt: string,
  }
}

export class FollowingList extends jspb.Message {
  getFollowingList(): Array<Following>;
  setFollowingList(value: Array<Following>): FollowingList;
  clearFollowingList(): FollowingList;
  addFollowing(value?: Following, index?: number): Following;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowingList.AsObject;
  static toObject(includeInstance: boolean, msg: FollowingList): FollowingList.AsObject;
  static serializeBinaryToWriter(message: FollowingList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowingList;
  static deserializeBinaryFromReader(message: FollowingList, reader: jspb.BinaryReader): FollowingList;
}

export namespace FollowingList {
  export type AsObject = {
    followingList: Array<Following.AsObject>,
  }
}

export class FollowingIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): FollowingIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowingIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FollowingIdRequest): FollowingIdRequest.AsObject;
  static serializeBinaryToWriter(message: FollowingIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowingIdRequest;
  static deserializeBinaryFromReader(message: FollowingIdRequest, reader: jspb.BinaryReader): FollowingIdRequest;
}

export namespace FollowingIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class FollowingIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): FollowingIdListRequest;
  clearIdList(): FollowingIdListRequest;
  addId(value: number, index?: number): FollowingIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowingIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FollowingIdListRequest): FollowingIdListRequest.AsObject;
  static serializeBinaryToWriter(message: FollowingIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowingIdListRequest;
  static deserializeBinaryFromReader(message: FollowingIdListRequest, reader: jspb.BinaryReader): FollowingIdListRequest;
}

export namespace FollowingIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class FollowingUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): FollowingUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowingUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FollowingUserIdRequest): FollowingUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: FollowingUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowingUserIdRequest;
  static deserializeBinaryFromReader(message: FollowingUserIdRequest, reader: jspb.BinaryReader): FollowingUserIdRequest;
}

export namespace FollowingUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class FollowingBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): FollowingBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowingBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FollowingBoolResponse): FollowingBoolResponse.AsObject;
  static serializeBinaryToWriter(message: FollowingBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowingBoolResponse;
  static deserializeBinaryFromReader(message: FollowingBoolResponse, reader: jspb.BinaryReader): FollowingBoolResponse;
}

export namespace FollowingBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

