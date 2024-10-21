import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class NotificationSetting extends jspb.Message {
  getId(): number;
  setId(value: number): NotificationSetting;

  getUuid(): string;
  setUuid(value: string): NotificationSetting;

  getUserId(): number;
  setUserId(value: number): NotificationSetting;

  getCreatedAt(): string;
  setCreatedAt(value: string): NotificationSetting;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): NotificationSetting;

  getFollowed(): boolean;
  setFollowed(value: boolean): NotificationSetting;

  getLiked(): boolean;
  setLiked(value: boolean): NotificationSetting;

  getCommented(): boolean;
  setCommented(value: boolean): NotificationSetting;

  getChated(): boolean;
  setChated(value: boolean): NotificationSetting;

  getLikingContentDiscounted(): boolean;
  setLikingContentDiscounted(value: boolean): NotificationSetting;

  getLikingContentCommented(): boolean;
  setLikingContentCommented(value: boolean): NotificationSetting;

  getFollowingUserNew(): boolean;
  setFollowingUserNew(value: boolean): NotificationSetting;

  getNews(): boolean;
  setNews(value: boolean): NotificationSetting;

  getEvent(): boolean;
  setEvent(value: boolean): NotificationSetting;

  getCoupon(): boolean;
  setCoupon(value: boolean): NotificationSetting;

  getUpdate(): boolean;
  setUpdate(value: boolean): NotificationSetting;

  getEmailFollowed(): boolean;
  setEmailFollowed(value: boolean): NotificationSetting;

  getEmailLiked(): boolean;
  setEmailLiked(value: boolean): NotificationSetting;

  getEmailCommented(): boolean;
  setEmailCommented(value: boolean): NotificationSetting;

  getEmailChated(): boolean;
  setEmailChated(value: boolean): NotificationSetting;

  getEmailLikingContentDiscounted(): boolean;
  setEmailLikingContentDiscounted(value: boolean): NotificationSetting;

  getEmailLikingContentCommented(): boolean;
  setEmailLikingContentCommented(value: boolean): NotificationSetting;

  getEmailFollowingUserNew(): boolean;
  setEmailFollowingUserNew(value: boolean): NotificationSetting;

  getEmailNews(): boolean;
  setEmailNews(value: boolean): NotificationSetting;

  getEmailEvent(): boolean;
  setEmailEvent(value: boolean): NotificationSetting;

  getEmailCoupon(): boolean;
  setEmailCoupon(value: boolean): NotificationSetting;

  getEmailUpdate(): boolean;
  setEmailUpdate(value: boolean): NotificationSetting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSetting.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSetting): NotificationSetting.AsObject;
  static serializeBinaryToWriter(message: NotificationSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSetting;
  static deserializeBinaryFromReader(message: NotificationSetting, reader: jspb.BinaryReader): NotificationSetting;
}

export namespace NotificationSetting {
  export type AsObject = {
    id: number,
    uuid: string,
    userId: number,
    createdAt: string,
    updatedAt: string,
    followed: boolean,
    liked: boolean,
    commented: boolean,
    chated: boolean,
    likingContentDiscounted: boolean,
    likingContentCommented: boolean,
    followingUserNew: boolean,
    news: boolean,
    event: boolean,
    coupon: boolean,
    update: boolean,
    emailFollowed: boolean,
    emailLiked: boolean,
    emailCommented: boolean,
    emailChated: boolean,
    emailLikingContentDiscounted: boolean,
    emailLikingContentCommented: boolean,
    emailFollowingUserNew: boolean,
    emailNews: boolean,
    emailEvent: boolean,
    emailCoupon: boolean,
    emailUpdate: boolean,
  }
}

export class NotificationSettingList extends jspb.Message {
  getNotificationList(): Array<NotificationSetting>;
  setNotificationList(value: Array<NotificationSetting>): NotificationSettingList;
  clearNotificationList(): NotificationSettingList;
  addNotification(value?: NotificationSetting, index?: number): NotificationSetting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingList.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingList): NotificationSettingList.AsObject;
  static serializeBinaryToWriter(message: NotificationSettingList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingList;
  static deserializeBinaryFromReader(message: NotificationSettingList, reader: jspb.BinaryReader): NotificationSettingList;
}

export namespace NotificationSettingList {
  export type AsObject = {
    notificationList: Array<NotificationSetting.AsObject>,
  }
}

export class NotificationSettingIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): NotificationSettingIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingIdRequest): NotificationSettingIdRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationSettingIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingIdRequest;
  static deserializeBinaryFromReader(message: NotificationSettingIdRequest, reader: jspb.BinaryReader): NotificationSettingIdRequest;
}

export namespace NotificationSettingIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class NotificationSettingIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): NotificationSettingIdListRequest;
  clearIdList(): NotificationSettingIdListRequest;
  addId(value: number, index?: number): NotificationSettingIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingIdListRequest): NotificationSettingIdListRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationSettingIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingIdListRequest;
  static deserializeBinaryFromReader(message: NotificationSettingIdListRequest, reader: jspb.BinaryReader): NotificationSettingIdListRequest;
}

export namespace NotificationSettingIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class NotificationSettingUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): NotificationSettingUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingUserIdRequest): NotificationSettingUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationSettingUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingUserIdRequest;
  static deserializeBinaryFromReader(message: NotificationSettingUserIdRequest, reader: jspb.BinaryReader): NotificationSettingUserIdRequest;
}

export namespace NotificationSettingUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class NotificationSettingContentIdRequest extends jspb.Message {
  getContentId(): number;
  setContentId(value: number): NotificationSettingContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingContentIdRequest): NotificationSettingContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationSettingContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingContentIdRequest;
  static deserializeBinaryFromReader(message: NotificationSettingContentIdRequest, reader: jspb.BinaryReader): NotificationSettingContentIdRequest;
}

export namespace NotificationSettingContentIdRequest {
  export type AsObject = {
    contentId: number,
  }
}

export class NotificationSettingUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): NotificationSettingUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingUuidRequest): NotificationSettingUuidRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationSettingUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingUuidRequest;
  static deserializeBinaryFromReader(message: NotificationSettingUuidRequest, reader: jspb.BinaryReader): NotificationSettingUuidRequest;
}

export namespace NotificationSettingUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class NotificationSettingUserIdAndContentIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): NotificationSettingUserIdAndContentIdRequest;

  getContentId(): number;
  setContentId(value: number): NotificationSettingUserIdAndContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingUserIdAndContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingUserIdAndContentIdRequest): NotificationSettingUserIdAndContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationSettingUserIdAndContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingUserIdAndContentIdRequest;
  static deserializeBinaryFromReader(message: NotificationSettingUserIdAndContentIdRequest, reader: jspb.BinaryReader): NotificationSettingUserIdAndContentIdRequest;
}

export namespace NotificationSettingUserIdAndContentIdRequest {
  export type AsObject = {
    userId: number,
    contentId: number,
  }
}

export class NotificationSettingBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): NotificationSettingBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingBoolResponse): NotificationSettingBoolResponse.AsObject;
  static serializeBinaryToWriter(message: NotificationSettingBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingBoolResponse;
  static deserializeBinaryFromReader(message: NotificationSettingBoolResponse, reader: jspb.BinaryReader): NotificationSettingBoolResponse;
}

export namespace NotificationSettingBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

