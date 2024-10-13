import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ChatGroup extends jspb.Message {
  getId(): number;
  setId(value: number): ChatGroup;

  getUuid(): string;
  setUuid(value: string): ChatGroup;

  getUserId(): number;
  setUserId(value: number): ChatGroup;

  getTitle(): string;
  setTitle(value: string): ChatGroup;

  getDescription(): string;
  setDescription(value: string): ChatGroup;

  getCreatedAt(): string;
  setCreatedAt(value: string): ChatGroup;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): ChatGroup;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): ChatGroup;

  getChatList(): Array<Chat>;
  setChatList(value: Array<Chat>): ChatGroup;
  clearChatList(): ChatGroup;
  addChat(value?: Chat, index?: number): Chat;

  getChatUserList(): Array<ChatUser>;
  setChatUserList(value: Array<ChatUser>): ChatGroup;
  clearChatUserList(): ChatGroup;
  addChatUser(value?: ChatUser, index?: number): ChatUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ChatGroup): ChatGroup.AsObject;
  static serializeBinaryToWriter(message: ChatGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatGroup;
  static deserializeBinaryFromReader(message: ChatGroup, reader: jspb.BinaryReader): ChatGroup;
}

export namespace ChatGroup {
  export type AsObject = {
    id: number,
    uuid: string,
    userId: number,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
    chatList: Array<Chat.AsObject>,
    chatUserList: Array<ChatUser.AsObject>,
  }
}

export class ChatGroupList extends jspb.Message {
  getError(): string;
  setError(value: string): ChatGroupList;

  getChatGroupList(): Array<ChatGroup>;
  setChatGroupList(value: Array<ChatGroup>): ChatGroupList;
  clearChatGroupList(): ChatGroupList;
  addChatGroup(value?: ChatGroup, index?: number): ChatGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatGroupList.AsObject;
  static toObject(includeInstance: boolean, msg: ChatGroupList): ChatGroupList.AsObject;
  static serializeBinaryToWriter(message: ChatGroupList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatGroupList;
  static deserializeBinaryFromReader(message: ChatGroupList, reader: jspb.BinaryReader): ChatGroupList;
}

export namespace ChatGroupList {
  export type AsObject = {
    error: string,
    chatGroupList: Array<ChatGroup.AsObject>,
  }
}

export class Chat extends jspb.Message {
  getId(): number;
  setId(value: number): Chat;

  getUuid(): string;
  setUuid(value: string): Chat;

  getGroupId(): number;
  setGroupId(value: number): Chat;

  getTitle(): string;
  setTitle(value: string): Chat;

  getFrom(): number;
  setFrom(value: number): Chat;

  getTo(): number;
  setTo(value: number): Chat;

  getContent(): string;
  setContent(value: string): Chat;

  getCreatedAt(): string;
  setCreatedAt(value: string): Chat;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Chat;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Chat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chat.AsObject;
  static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
  static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chat;
  static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
}

export namespace Chat {
  export type AsObject = {
    id: number,
    uuid: string,
    groupId: number,
    title: string,
    from: number,
    to: number,
    content: string,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  }
}

export class ChatUser extends jspb.Message {
  getId(): number;
  setId(value: number): ChatUser;

  getUuid(): string;
  setUuid(value: string): ChatUser;

  getGroupId(): number;
  setGroupId(value: number): ChatUser;

  getUserId(): number;
  setUserId(value: number): ChatUser;

  getCreatedAt(): string;
  setCreatedAt(value: string): ChatUser;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): ChatUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatUser.AsObject;
  static toObject(includeInstance: boolean, msg: ChatUser): ChatUser.AsObject;
  static serializeBinaryToWriter(message: ChatUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatUser;
  static deserializeBinaryFromReader(message: ChatUser, reader: jspb.BinaryReader): ChatUser;
}

export namespace ChatUser {
  export type AsObject = {
    id: number,
    uuid: string,
    groupId: number,
    userId: number,
    createdAt: string,
    updatedAt: string,
  }
}

export class ChatList extends jspb.Message {
  getChatList(): Array<Chat>;
  setChatList(value: Array<Chat>): ChatList;
  clearChatList(): ChatList;
  addChat(value?: Chat, index?: number): Chat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatList.AsObject;
  static toObject(includeInstance: boolean, msg: ChatList): ChatList.AsObject;
  static serializeBinaryToWriter(message: ChatList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatList;
  static deserializeBinaryFromReader(message: ChatList, reader: jspb.BinaryReader): ChatList;
}

export namespace ChatList {
  export type AsObject = {
    chatList: Array<Chat.AsObject>,
  }
}

export class ChatRequest extends jspb.Message {
  getChat(): Chat | undefined;
  setChat(value?: Chat): ChatRequest;
  hasChat(): boolean;
  clearChat(): ChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRequest): ChatRequest.AsObject;
  static serializeBinaryToWriter(message: ChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRequest;
  static deserializeBinaryFromReader(message: ChatRequest, reader: jspb.BinaryReader): ChatRequest;
}

export namespace ChatRequest {
  export type AsObject = {
    chat?: Chat.AsObject,
  }
}

export class ChatIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ChatIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatIdRequest): ChatIdRequest.AsObject;
  static serializeBinaryToWriter(message: ChatIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatIdRequest;
  static deserializeBinaryFromReader(message: ChatIdRequest, reader: jspb.BinaryReader): ChatIdRequest;
}

export namespace ChatIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class ChatUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ChatUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatUuidRequest): ChatUuidRequest.AsObject;
  static serializeBinaryToWriter(message: ChatUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatUuidRequest;
  static deserializeBinaryFromReader(message: ChatUuidRequest, reader: jspb.BinaryReader): ChatUuidRequest;
}

export namespace ChatUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class ChatGroupIdRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): ChatGroupIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatGroupIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatGroupIdRequest): ChatGroupIdRequest.AsObject;
  static serializeBinaryToWriter(message: ChatGroupIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatGroupIdRequest;
  static deserializeBinaryFromReader(message: ChatGroupIdRequest, reader: jspb.BinaryReader): ChatGroupIdRequest;
}

export namespace ChatGroupIdRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class ChatUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ChatUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatUserIdRequest): ChatUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ChatUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatUserIdRequest;
  static deserializeBinaryFromReader(message: ChatUserIdRequest, reader: jspb.BinaryReader): ChatUserIdRequest;
}

export namespace ChatUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class ChatBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): ChatBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChatBoolResponse): ChatBoolResponse.AsObject;
  static serializeBinaryToWriter(message: ChatBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatBoolResponse;
  static deserializeBinaryFromReader(message: ChatBoolResponse, reader: jspb.BinaryReader): ChatBoolResponse;
}

export namespace ChatBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

