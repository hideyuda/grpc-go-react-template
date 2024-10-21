import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class View extends jspb.Message {
  getId(): number;
  setId(value: number): View;

  getUuid(): string;
  setUuid(value: string): View;

  getContentId(): number;
  setContentId(value: number): View;

  getUserId(): number;
  setUserId(value: number): View;

  getCreatedAt(): string;
  setCreatedAt(value: string): View;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): View;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): View.AsObject;
  static toObject(includeInstance: boolean, msg: View): View.AsObject;
  static serializeBinaryToWriter(message: View, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): View;
  static deserializeBinaryFromReader(message: View, reader: jspb.BinaryReader): View;
}

export namespace View {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    userId: number,
    createdAt: string,
    updatedAt: string,
  }
}

export class ViewList extends jspb.Message {
  getViewList(): Array<View>;
  setViewList(value: Array<View>): ViewList;
  clearViewList(): ViewList;
  addView(value?: View, index?: number): View;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewList.AsObject;
  static toObject(includeInstance: boolean, msg: ViewList): ViewList.AsObject;
  static serializeBinaryToWriter(message: ViewList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewList;
  static deserializeBinaryFromReader(message: ViewList, reader: jspb.BinaryReader): ViewList;
}

export namespace ViewList {
  export type AsObject = {
    viewList: Array<View.AsObject>,
  }
}

export class ViewIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ViewIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ViewIdRequest): ViewIdRequest.AsObject;
  static serializeBinaryToWriter(message: ViewIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewIdRequest;
  static deserializeBinaryFromReader(message: ViewIdRequest, reader: jspb.BinaryReader): ViewIdRequest;
}

export namespace ViewIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class ViewIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): ViewIdListRequest;
  clearIdList(): ViewIdListRequest;
  addId(value: number, index?: number): ViewIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ViewIdListRequest): ViewIdListRequest.AsObject;
  static serializeBinaryToWriter(message: ViewIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewIdListRequest;
  static deserializeBinaryFromReader(message: ViewIdListRequest, reader: jspb.BinaryReader): ViewIdListRequest;
}

export namespace ViewIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class ViewUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ViewUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ViewUserIdRequest): ViewUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ViewUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewUserIdRequest;
  static deserializeBinaryFromReader(message: ViewUserIdRequest, reader: jspb.BinaryReader): ViewUserIdRequest;
}

export namespace ViewUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class ViewContentIdRequest extends jspb.Message {
  getContentId(): number;
  setContentId(value: number): ViewContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ViewContentIdRequest): ViewContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: ViewContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewContentIdRequest;
  static deserializeBinaryFromReader(message: ViewContentIdRequest, reader: jspb.BinaryReader): ViewContentIdRequest;
}

export namespace ViewContentIdRequest {
  export type AsObject = {
    contentId: number,
  }
}

export class ViewBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): ViewBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ViewBoolResponse): ViewBoolResponse.AsObject;
  static serializeBinaryToWriter(message: ViewBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewBoolResponse;
  static deserializeBinaryFromReader(message: ViewBoolResponse, reader: jspb.BinaryReader): ViewBoolResponse;
}

export namespace ViewBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

