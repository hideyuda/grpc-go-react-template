import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Notification extends jspb.Message {
  getId(): number;
  setId(value: number): Notification;

  getUuid(): string;
  setUuid(value: string): Notification;

  getSendUserId(): number;
  setSendUserId(value: number): Notification;

  getReceiveUserId(): number;
  setReceiveUserId(value: number): Notification;

  getType(): Notification.Type;
  setType(value: Notification.Type): Notification;

  getTopic(): string;
  setTopic(value: string): Notification;

  getContent(): string;
  setContent(value: string): Notification;

  getIsRead(): boolean;
  setIsRead(value: boolean): Notification;

  getCreatedAt(): string;
  setCreatedAt(value: string): Notification;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    id: number,
    uuid: string,
    sendUserId: number,
    receiveUserId: number,
    type: Notification.Type,
    topic: string,
    content: string,
    isRead: boolean,
    createdAt: string,
    updatedAt: string,
  }

  export enum Type { 
    LIKE = 0,
    COMMENT = 1,
  }
}

export class NotificationList extends jspb.Message {
  getNotificationList(): Array<Notification>;
  setNotificationList(value: Array<Notification>): NotificationList;
  clearNotificationList(): NotificationList;
  addNotification(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationList.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationList): NotificationList.AsObject;
  static serializeBinaryToWriter(message: NotificationList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationList;
  static deserializeBinaryFromReader(message: NotificationList, reader: jspb.BinaryReader): NotificationList;
}

export namespace NotificationList {
  export type AsObject = {
    notificationList: Array<Notification.AsObject>,
  }
}

export class NotificationIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): NotificationIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationIdRequest): NotificationIdRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationIdRequest;
  static deserializeBinaryFromReader(message: NotificationIdRequest, reader: jspb.BinaryReader): NotificationIdRequest;
}

export namespace NotificationIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class NotificationIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): NotificationIdListRequest;
  clearIdList(): NotificationIdListRequest;
  addId(value: number, index?: number): NotificationIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationIdListRequest): NotificationIdListRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationIdListRequest;
  static deserializeBinaryFromReader(message: NotificationIdListRequest, reader: jspb.BinaryReader): NotificationIdListRequest;
}

export namespace NotificationIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class NotificationUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): NotificationUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationUserIdRequest): NotificationUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationUserIdRequest;
  static deserializeBinaryFromReader(message: NotificationUserIdRequest, reader: jspb.BinaryReader): NotificationUserIdRequest;
}

export namespace NotificationUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class NotificationContentIdRequest extends jspb.Message {
  getContentId(): number;
  setContentId(value: number): NotificationContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationContentIdRequest): NotificationContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationContentIdRequest;
  static deserializeBinaryFromReader(message: NotificationContentIdRequest, reader: jspb.BinaryReader): NotificationContentIdRequest;
}

export namespace NotificationContentIdRequest {
  export type AsObject = {
    contentId: number,
  }
}

export class NotificationUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): NotificationUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationUuidRequest): NotificationUuidRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationUuidRequest;
  static deserializeBinaryFromReader(message: NotificationUuidRequest, reader: jspb.BinaryReader): NotificationUuidRequest;
}

export namespace NotificationUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class NotificationUserIdAndContentIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): NotificationUserIdAndContentIdRequest;

  getContentId(): number;
  setContentId(value: number): NotificationUserIdAndContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationUserIdAndContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationUserIdAndContentIdRequest): NotificationUserIdAndContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationUserIdAndContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationUserIdAndContentIdRequest;
  static deserializeBinaryFromReader(message: NotificationUserIdAndContentIdRequest, reader: jspb.BinaryReader): NotificationUserIdAndContentIdRequest;
}

export namespace NotificationUserIdAndContentIdRequest {
  export type AsObject = {
    userId: number,
    contentId: number,
  }
}

export class NotificationBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): NotificationBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationBoolResponse): NotificationBoolResponse.AsObject;
  static serializeBinaryToWriter(message: NotificationBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationBoolResponse;
  static deserializeBinaryFromReader(message: NotificationBoolResponse, reader: jspb.BinaryReader): NotificationBoolResponse;
}

export namespace NotificationBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

