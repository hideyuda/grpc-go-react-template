import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as content_pb from './content_pb';
import * as like_pb from './like_pb';
import * as chat_pb from './chat_pb';
import * as following_pb from './following_pb';
import * as point_pb from './point_pb';
import * as point_history_pb from './point_history_pb';
import * as view_pb from './view_pb';
import * as notification_setting_pb from './notification_setting_pb';


export class User extends jspb.Message {
  getId(): number;
  setId(value: number): User;

  getUuid(): string;
  setUuid(value: string): User;

  getFirebaseId(): string;
  setFirebaseId(value: string): User;

  getName(): string;
  setName(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getType(): User.Type;
  setType(value: User.Type): User;

  getCreatedAt(): string;
  setCreatedAt(value: string): User;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): User;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): User;

  getContentList(): Array<content_pb.Content>;
  setContentList(value: Array<content_pb.Content>): User;
  clearContentList(): User;
  addContent(value?: content_pb.Content, index?: number): content_pb.Content;

  getChatGroupList(): Array<chat_pb.ChatGroup>;
  setChatGroupList(value: Array<chat_pb.ChatGroup>): User;
  clearChatGroupList(): User;
  addChatGroup(value?: chat_pb.ChatGroup, index?: number): chat_pb.ChatGroup;

  getPoint(): point_pb.Point | undefined;
  setPoint(value?: point_pb.Point): User;
  hasPoint(): boolean;
  clearPoint(): User;

  getPointHistoryList(): Array<point_history_pb.PointHistory>;
  setPointHistoryList(value: Array<point_history_pb.PointHistory>): User;
  clearPointHistoryList(): User;
  addPointHistory(value?: point_history_pb.PointHistory, index?: number): point_history_pb.PointHistory;

  getFollowingList(): Array<following_pb.Following>;
  setFollowingList(value: Array<following_pb.Following>): User;
  clearFollowingList(): User;
  addFollowing(value?: following_pb.Following, index?: number): following_pb.Following;

  getFollowerList(): Array<following_pb.Following>;
  setFollowerList(value: Array<following_pb.Following>): User;
  clearFollowerList(): User;
  addFollower(value?: following_pb.Following, index?: number): following_pb.Following;

  getLikeList(): Array<like_pb.Like>;
  setLikeList(value: Array<like_pb.Like>): User;
  clearLikeList(): User;
  addLike(value?: like_pb.Like, index?: number): like_pb.Like;

  getViewList(): Array<view_pb.View>;
  setViewList(value: Array<view_pb.View>): User;
  clearViewList(): User;
  addView(value?: view_pb.View, index?: number): view_pb.View;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): User;

  getPhotoUrl(): string;
  setPhotoUrl(value: string): User;

  getDescription(): string;
  setDescription(value: string): User;

  getMediaList(): Array<UserMedia>;
  setMediaList(value: Array<UserMedia>): User;
  clearMediaList(): User;
  addMedia(value?: UserMedia, index?: number): UserMedia;

  getNotificationSetting(): notification_setting_pb.NotificationSetting | undefined;
  setNotificationSetting(value?: notification_setting_pb.NotificationSetting): User;
  hasNotificationSetting(): boolean;
  clearNotificationSetting(): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    uuid: string,
    firebaseId: string,
    name: string,
    email: string,
    password: string,
    type: User.Type,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
    contentList: Array<content_pb.Content.AsObject>,
    chatGroupList: Array<chat_pb.ChatGroup.AsObject>,
    point?: point_pb.Point.AsObject,
    pointHistoryList: Array<point_history_pb.PointHistory.AsObject>,
    followingList: Array<following_pb.Following.AsObject>,
    followerList: Array<following_pb.Following.AsObject>,
    likeList: Array<like_pb.Like.AsObject>,
    viewList: Array<view_pb.View.AsObject>,
    phoneNumber: string,
    photoUrl: string,
    description: string,
    mediaList: Array<UserMedia.AsObject>,
    notificationSetting?: notification_setting_pb.NotificationSetting.AsObject,
  }

  export enum Type { 
    NONE = 0,
    NORMAL = 1,
    ADMIN = 2,
    GUEST = 3,
    DISABLED = 4,
  }
}

export class UserMedia extends jspb.Message {
  getId(): number;
  setId(value: number): UserMedia;

  getUuid(): string;
  setUuid(value: string): UserMedia;

  getUserId(): number;
  setUserId(value: number): UserMedia;

  getType(): UserMedia.MediaType;
  setType(value: UserMedia.MediaType): UserMedia;

  getUrl(): string;
  setUrl(value: string): UserMedia;

  getCreatedAt(): string;
  setCreatedAt(value: string): UserMedia;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): UserMedia;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMedia.AsObject;
  static toObject(includeInstance: boolean, msg: UserMedia): UserMedia.AsObject;
  static serializeBinaryToWriter(message: UserMedia, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMedia;
  static deserializeBinaryFromReader(message: UserMedia, reader: jspb.BinaryReader): UserMedia;
}

export namespace UserMedia {
  export type AsObject = {
    id: number,
    uuid: string,
    userId: number,
    type: UserMedia.MediaType,
    url: string,
    createdAt: string,
    updatedAt: string,
  }

  export enum MediaType { 
    NONE = 0,
    IMAGE = 1,
    VIDEO = 2,
  }
}

export class UserList extends jspb.Message {
  getUserList(): Array<User>;
  setUserList(value: Array<User>): UserList;
  clearUserList(): UserList;
  addUser(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserList.AsObject;
  static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
  static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserList;
  static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
  export type AsObject = {
    userList: Array<User.AsObject>,
  }
}

export class UserIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserIdRequest): UserIdRequest.AsObject;
  static serializeBinaryToWriter(message: UserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserIdRequest;
  static deserializeBinaryFromReader(message: UserIdRequest, reader: jspb.BinaryReader): UserIdRequest;
}

export namespace UserIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class UserUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): UserUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserUuidRequest): UserUuidRequest.AsObject;
  static serializeBinaryToWriter(message: UserUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUuidRequest;
  static deserializeBinaryFromReader(message: UserUuidRequest, reader: jspb.BinaryReader): UserUuidRequest;
}

export namespace UserUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class UserIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): UserIdListRequest;
  clearIdList(): UserIdListRequest;
  addId(value: number, index?: number): UserIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserIdListRequest): UserIdListRequest.AsObject;
  static serializeBinaryToWriter(message: UserIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserIdListRequest;
  static deserializeBinaryFromReader(message: UserIdListRequest, reader: jspb.BinaryReader): UserIdListRequest;
}

export namespace UserIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class UserTypeRequest extends jspb.Message {
  getType(): User.Type;
  setType(value: User.Type): UserTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserTypeRequest): UserTypeRequest.AsObject;
  static serializeBinaryToWriter(message: UserTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTypeRequest;
  static deserializeBinaryFromReader(message: UserTypeRequest, reader: jspb.BinaryReader): UserTypeRequest;
}

export namespace UserTypeRequest {
  export type AsObject = {
    type: User.Type,
  }
}

export class UserSearchRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserSearchRequest;

  getFreeWord(): string;
  setFreeWord(value: string): UserSearchRequest;

  getTool(): content_pb.ContentTool | undefined;
  setTool(value?: content_pb.ContentTool): UserSearchRequest;
  hasTool(): boolean;
  clearTool(): UserSearchRequest;

  getCategory(): content_pb.ContentCategory | undefined;
  setCategory(value?: content_pb.ContentCategory): UserSearchRequest;
  hasCategory(): boolean;
  clearCategory(): UserSearchRequest;

  getSubCategory(): content_pb.ContentSubCategory | undefined;
  setSubCategory(value?: content_pb.ContentSubCategory): UserSearchRequest;
  hasSubCategory(): boolean;
  clearSubCategory(): UserSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserSearchRequest): UserSearchRequest.AsObject;
  static serializeBinaryToWriter(message: UserSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSearchRequest;
  static deserializeBinaryFromReader(message: UserSearchRequest, reader: jspb.BinaryReader): UserSearchRequest;
}

export namespace UserSearchRequest {
  export type AsObject = {
    userId: number,
    freeWord: string,
    tool?: content_pb.ContentTool.AsObject,
    category?: content_pb.ContentCategory.AsObject,
    subCategory?: content_pb.ContentSubCategory.AsObject,
  }
}

export class UserBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): UserBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserBoolResponse): UserBoolResponse.AsObject;
  static serializeBinaryToWriter(message: UserBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserBoolResponse;
  static deserializeBinaryFromReader(message: UserBoolResponse, reader: jspb.BinaryReader): UserBoolResponse;
}

export namespace UserBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

export class SignInRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): SignInRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
  static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInRequest;
  static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
  export type AsObject = {
    token: string,
  }
}

