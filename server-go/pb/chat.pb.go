// Specify the version of the protocol

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: chat.proto

// Specify package name to avoid name collision

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// ユーザー情報を表すメッセージ型
type ChatGroup struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int64       `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Uuid        string      `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty"`
	UserId      int64       `protobuf:"varint,3,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Title       string      `protobuf:"bytes,4,opt,name=title,proto3" json:"title,omitempty"`
	Description string      `protobuf:"bytes,5,opt,name=description,proto3" json:"description,omitempty"`
	CreatedAt   string      `protobuf:"bytes,6,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt   string      `protobuf:"bytes,7,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	IsDeleted   bool        `protobuf:"varint,8,opt,name=is_deleted,json=isDeleted,proto3" json:"is_deleted,omitempty"`
	Chat        []*Chat     `protobuf:"bytes,9,rep,name=chat,proto3" json:"chat,omitempty"`
	ChatUser    []*ChatUser `protobuf:"bytes,10,rep,name=chat_user,json=chatUser,proto3" json:"chat_user,omitempty"`
}

func (x *ChatGroup) Reset() {
	*x = ChatGroup{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatGroup) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatGroup) ProtoMessage() {}

func (x *ChatGroup) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatGroup.ProtoReflect.Descriptor instead.
func (*ChatGroup) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{0}
}

func (x *ChatGroup) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ChatGroup) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ChatGroup) GetUserId() int64 {
	if x != nil {
		return x.UserId
	}
	return 0
}

func (x *ChatGroup) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *ChatGroup) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *ChatGroup) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *ChatGroup) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

func (x *ChatGroup) GetIsDeleted() bool {
	if x != nil {
		return x.IsDeleted
	}
	return false
}

func (x *ChatGroup) GetChat() []*Chat {
	if x != nil {
		return x.Chat
	}
	return nil
}

func (x *ChatGroup) GetChatUser() []*ChatUser {
	if x != nil {
		return x.ChatUser
	}
	return nil
}

type ChatGroupList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Error     string       `protobuf:"bytes,1,opt,name=error,proto3" json:"error,omitempty"`
	ChatGroup []*ChatGroup `protobuf:"bytes,2,rep,name=chat_group,json=chatGroup,proto3" json:"chat_group,omitempty"`
}

func (x *ChatGroupList) Reset() {
	*x = ChatGroupList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatGroupList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatGroupList) ProtoMessage() {}

func (x *ChatGroupList) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatGroupList.ProtoReflect.Descriptor instead.
func (*ChatGroupList) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{1}
}

func (x *ChatGroupList) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

func (x *ChatGroupList) GetChatGroup() []*ChatGroup {
	if x != nil {
		return x.ChatGroup
	}
	return nil
}

type Chat struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        int64  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Uuid      string `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty"`
	GroupId   int64  `protobuf:"varint,3,opt,name=group_id,json=groupId,proto3" json:"group_id,omitempty"`
	Title     string `protobuf:"bytes,4,opt,name=title,proto3" json:"title,omitempty"`
	From      int64  `protobuf:"varint,5,opt,name=from,proto3" json:"from,omitempty"`
	To        int64  `protobuf:"varint,6,opt,name=to,proto3" json:"to,omitempty"`
	Content   string `protobuf:"bytes,7,opt,name=content,proto3" json:"content,omitempty"`
	CreatedAt string `protobuf:"bytes,8,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt string `protobuf:"bytes,9,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	IsDeleted bool   `protobuf:"varint,10,opt,name=is_deleted,json=isDeleted,proto3" json:"is_deleted,omitempty"`
}

func (x *Chat) Reset() {
	*x = Chat{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Chat) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Chat) ProtoMessage() {}

func (x *Chat) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Chat.ProtoReflect.Descriptor instead.
func (*Chat) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{2}
}

func (x *Chat) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Chat) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Chat) GetGroupId() int64 {
	if x != nil {
		return x.GroupId
	}
	return 0
}

func (x *Chat) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Chat) GetFrom() int64 {
	if x != nil {
		return x.From
	}
	return 0
}

func (x *Chat) GetTo() int64 {
	if x != nil {
		return x.To
	}
	return 0
}

func (x *Chat) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

func (x *Chat) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *Chat) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

func (x *Chat) GetIsDeleted() bool {
	if x != nil {
		return x.IsDeleted
	}
	return false
}

type ChatUser struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        int64  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Uuid      string `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty"`
	GroupId   int64  `protobuf:"varint,3,opt,name=group_id,json=groupId,proto3" json:"group_id,omitempty"`
	UserId    int64  `protobuf:"varint,4,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	CreatedAt string `protobuf:"bytes,5,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt string `protobuf:"bytes,6,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
}

func (x *ChatUser) Reset() {
	*x = ChatUser{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatUser) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatUser) ProtoMessage() {}

func (x *ChatUser) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatUser.ProtoReflect.Descriptor instead.
func (*ChatUser) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{3}
}

func (x *ChatUser) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ChatUser) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ChatUser) GetGroupId() int64 {
	if x != nil {
		return x.GroupId
	}
	return 0
}

func (x *ChatUser) GetUserId() int64 {
	if x != nil {
		return x.UserId
	}
	return 0
}

func (x *ChatUser) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *ChatUser) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

type ChatList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Chat []*Chat `protobuf:"bytes,1,rep,name=chat,proto3" json:"chat,omitempty"`
}

func (x *ChatList) Reset() {
	*x = ChatList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatList) ProtoMessage() {}

func (x *ChatList) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatList.ProtoReflect.Descriptor instead.
func (*ChatList) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{4}
}

func (x *ChatList) GetChat() []*Chat {
	if x != nil {
		return x.Chat
	}
	return nil
}

// req
type ChatRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Chat *Chat `protobuf:"bytes,1,opt,name=chat,proto3" json:"chat,omitempty"`
}

func (x *ChatRequest) Reset() {
	*x = ChatRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatRequest) ProtoMessage() {}

func (x *ChatRequest) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatRequest.ProtoReflect.Descriptor instead.
func (*ChatRequest) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{5}
}

func (x *ChatRequest) GetChat() *Chat {
	if x != nil {
		return x.Chat
	}
	return nil
}

type ChatIdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *ChatIdRequest) Reset() {
	*x = ChatIdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatIdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatIdRequest) ProtoMessage() {}

func (x *ChatIdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatIdRequest.ProtoReflect.Descriptor instead.
func (*ChatIdRequest) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{6}
}

func (x *ChatIdRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type ChatUuidRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *ChatUuidRequest) Reset() {
	*x = ChatUuidRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatUuidRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatUuidRequest) ProtoMessage() {}

func (x *ChatUuidRequest) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatUuidRequest.ProtoReflect.Descriptor instead.
func (*ChatUuidRequest) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{7}
}

func (x *ChatUuidRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type ChatGroupIdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GroupId int64 `protobuf:"varint,1,opt,name=group_id,json=groupId,proto3" json:"group_id,omitempty"`
}

func (x *ChatGroupIdRequest) Reset() {
	*x = ChatGroupIdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatGroupIdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatGroupIdRequest) ProtoMessage() {}

func (x *ChatGroupIdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatGroupIdRequest.ProtoReflect.Descriptor instead.
func (*ChatGroupIdRequest) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{8}
}

func (x *ChatGroupIdRequest) GetGroupId() int64 {
	if x != nil {
		return x.GroupId
	}
	return 0
}

type ChatUserIdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId int64 `protobuf:"varint,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
}

func (x *ChatUserIdRequest) Reset() {
	*x = ChatUserIdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatUserIdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatUserIdRequest) ProtoMessage() {}

func (x *ChatUserIdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatUserIdRequest.ProtoReflect.Descriptor instead.
func (*ChatUserIdRequest) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{9}
}

func (x *ChatUserIdRequest) GetUserId() int64 {
	if x != nil {
		return x.UserId
	}
	return 0
}

// res
type ChatBoolResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Error bool `protobuf:"varint,1,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *ChatBoolResponse) Reset() {
	*x = ChatBoolResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatBoolResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatBoolResponse) ProtoMessage() {}

func (x *ChatBoolResponse) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatBoolResponse.ProtoReflect.Descriptor instead.
func (*ChatBoolResponse) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{10}
}

func (x *ChatBoolResponse) GetError() bool {
	if x != nil {
		return x.Error
	}
	return false
}

var File_chat_proto protoreflect.FileDescriptor

var file_chat_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x63, 0x68,
	0x61, 0x74, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0xaa, 0x02, 0x0a, 0x09, 0x43, 0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a,
	0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69,
	0x74, 0x6c, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65,
	0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41,
	0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18,
	0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74,
	0x12, 0x1d, 0x0a, 0x0a, 0x69, 0x73, 0x5f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x08,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x09, 0x69, 0x73, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x12,
	0x1e, 0x0a, 0x04, 0x63, 0x68, 0x61, 0x74, 0x18, 0x09, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e,
	0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x52, 0x04, 0x63, 0x68, 0x61, 0x74, 0x12,
	0x2b, 0x0a, 0x09, 0x63, 0x68, 0x61, 0x74, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x18, 0x0a, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x55, 0x73,
	0x65, 0x72, 0x52, 0x08, 0x63, 0x68, 0x61, 0x74, 0x55, 0x73, 0x65, 0x72, 0x22, 0x55, 0x0a, 0x0d,
	0x43, 0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x14, 0x0a,
	0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x72,
	0x72, 0x6f, 0x72, 0x12, 0x2e, 0x0a, 0x0a, 0x63, 0x68, 0x61, 0x74, 0x5f, 0x67, 0x72, 0x6f, 0x75,
	0x70, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43,
	0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x52, 0x09, 0x63, 0x68, 0x61, 0x74, 0x47, 0x72,
	0x6f, 0x75, 0x70, 0x22, 0xf6, 0x01, 0x0a, 0x04, 0x43, 0x68, 0x61, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x12, 0x19, 0x0a, 0x08, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x07, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x74,
	0x69, 0x74, 0x6c, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x66, 0x72, 0x6f, 0x6d, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x04, 0x66, 0x72, 0x6f, 0x6d, 0x12, 0x0e, 0x0a, 0x02, 0x74, 0x6f, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x02, 0x74, 0x6f, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x12,
	0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d,
	0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x09, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a,
	0x0a, 0x69, 0x73, 0x5f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x0a, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x09, 0x69, 0x73, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x22, 0xa0, 0x01, 0x0a,
	0x08, 0x43, 0x68, 0x61, 0x74, 0x55, 0x73, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x19, 0x0a,
	0x08, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x07, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49,
	0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74,
	0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x06,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x22,
	0x2a, 0x0a, 0x08, 0x43, 0x68, 0x61, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x1e, 0x0a, 0x04, 0x63,
	0x68, 0x61, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x63, 0x68, 0x61, 0x74,
	0x2e, 0x43, 0x68, 0x61, 0x74, 0x52, 0x04, 0x63, 0x68, 0x61, 0x74, 0x22, 0x2d, 0x0a, 0x0b, 0x43,
	0x68, 0x61, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1e, 0x0a, 0x04, 0x63, 0x68,
	0x61, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e,
	0x43, 0x68, 0x61, 0x74, 0x52, 0x04, 0x63, 0x68, 0x61, 0x74, 0x22, 0x1f, 0x0a, 0x0d, 0x43, 0x68,
	0x61, 0x74, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x22, 0x25, 0x0a, 0x0f, 0x43,
	0x68, 0x61, 0x74, 0x55, 0x75, 0x69, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75,
	0x69, 0x64, 0x22, 0x2f, 0x0a, 0x12, 0x43, 0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x49,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x67, 0x72, 0x6f, 0x75,
	0x70, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x07, 0x67, 0x72, 0x6f, 0x75,
	0x70, 0x49, 0x64, 0x22, 0x2c, 0x0a, 0x11, 0x43, 0x68, 0x61, 0x74, 0x55, 0x73, 0x65, 0x72, 0x49,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49,
	0x64, 0x22, 0x28, 0x0a, 0x10, 0x43, 0x68, 0x61, 0x74, 0x42, 0x6f, 0x6f, 0x6c, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x32, 0x84, 0x03, 0x0a, 0x10,
	0x43, 0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x2a, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x0f, 0x2e, 0x63, 0x68, 0x61,
	0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x1a, 0x0f, 0x2e, 0x63, 0x68,
	0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x31, 0x0a, 0x06,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x0f, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68,
	0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x1a, 0x16, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43,
	0x68, 0x61, 0x74, 0x42, 0x6f, 0x6f, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x35, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x13, 0x2e, 0x63, 0x68, 0x61, 0x74,
	0x2e, 0x43, 0x68, 0x61, 0x74, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16,
	0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x42, 0x6f, 0x6f, 0x6c, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2f, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x42, 0x79, 0x49,
	0x64, 0x12, 0x13, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x49, 0x64, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0f, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68,
	0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x33, 0x0a, 0x09, 0x47, 0x65, 0x74, 0x42, 0x79,
	0x55, 0x75, 0x69, 0x64, 0x12, 0x15, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74,
	0x55, 0x75, 0x69, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0f, 0x2e, 0x63, 0x68,
	0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x3d, 0x0a, 0x0d,
	0x47, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x55, 0x73, 0x65, 0x72, 0x12, 0x17, 0x2e,
	0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x55, 0x73, 0x65, 0x72, 0x49, 0x64, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68,
	0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x35, 0x0a, 0x06, 0x47,
	0x65, 0x74, 0x41, 0x6c, 0x6c, 0x12, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x13, 0x2e,
	0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x4c, 0x69,
	0x73, 0x74, 0x32, 0xf6, 0x02, 0x0a, 0x0b, 0x43, 0x68, 0x61, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x12, 0x20, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x0a, 0x2e, 0x63,
	0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x1a, 0x0a, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e,
	0x43, 0x68, 0x61, 0x74, 0x12, 0x2c, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x0a,
	0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x1a, 0x16, 0x2e, 0x63, 0x68, 0x61,
	0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x42, 0x6f, 0x6f, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x35, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x13, 0x2e, 0x63,
	0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x16, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x42, 0x6f, 0x6f,
	0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2a, 0x0a, 0x07, 0x47, 0x65, 0x74,
	0x42, 0x79, 0x49, 0x64, 0x12, 0x13, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74,
	0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0a, 0x2e, 0x63, 0x68, 0x61, 0x74,
	0x2e, 0x43, 0x68, 0x61, 0x74, 0x12, 0x3a, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74,
	0x42, 0x79, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x18, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43,
	0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x0e, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x4c, 0x69, 0x73,
	0x74, 0x12, 0x3a, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x42, 0x79,
	0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x18, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61,
	0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x0a, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x30, 0x01, 0x12, 0x3c, 0x0a,
	0x13, 0x47, 0x65, 0x74, 0x4c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x43, 0x68, 0x61, 0x74, 0x42, 0x79,
	0x55, 0x73, 0x65, 0x72, 0x12, 0x17, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74,
	0x55, 0x73, 0x65, 0x72, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0a, 0x2e,
	0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x30, 0x01, 0x42, 0x11, 0x5a, 0x0f, 0x2e,
	0x2e, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x2d, 0x67, 0x6f, 0x2f, 0x70, 0x62, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_chat_proto_rawDescOnce sync.Once
	file_chat_proto_rawDescData = file_chat_proto_rawDesc
)

func file_chat_proto_rawDescGZIP() []byte {
	file_chat_proto_rawDescOnce.Do(func() {
		file_chat_proto_rawDescData = protoimpl.X.CompressGZIP(file_chat_proto_rawDescData)
	})
	return file_chat_proto_rawDescData
}

var file_chat_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_chat_proto_goTypes = []interface{}{
	(*ChatGroup)(nil),          // 0: chat.ChatGroup
	(*ChatGroupList)(nil),      // 1: chat.ChatGroupList
	(*Chat)(nil),               // 2: chat.Chat
	(*ChatUser)(nil),           // 3: chat.ChatUser
	(*ChatList)(nil),           // 4: chat.ChatList
	(*ChatRequest)(nil),        // 5: chat.ChatRequest
	(*ChatIdRequest)(nil),      // 6: chat.ChatIdRequest
	(*ChatUuidRequest)(nil),    // 7: chat.ChatUuidRequest
	(*ChatGroupIdRequest)(nil), // 8: chat.ChatGroupIdRequest
	(*ChatUserIdRequest)(nil),  // 9: chat.ChatUserIdRequest
	(*ChatBoolResponse)(nil),   // 10: chat.ChatBoolResponse
	(*emptypb.Empty)(nil),      // 11: google.protobuf.Empty
}
var file_chat_proto_depIdxs = []int32{
	2,  // 0: chat.ChatGroup.chat:type_name -> chat.Chat
	3,  // 1: chat.ChatGroup.chat_user:type_name -> chat.ChatUser
	0,  // 2: chat.ChatGroupList.chat_group:type_name -> chat.ChatGroup
	2,  // 3: chat.ChatList.chat:type_name -> chat.Chat
	2,  // 4: chat.ChatRequest.chat:type_name -> chat.Chat
	0,  // 5: chat.ChatGroupService.Create:input_type -> chat.ChatGroup
	0,  // 6: chat.ChatGroupService.Update:input_type -> chat.ChatGroup
	6,  // 7: chat.ChatGroupService.Delete:input_type -> chat.ChatIdRequest
	6,  // 8: chat.ChatGroupService.GetById:input_type -> chat.ChatIdRequest
	7,  // 9: chat.ChatGroupService.GetByUuid:input_type -> chat.ChatUuidRequest
	9,  // 10: chat.ChatGroupService.GetListByUser:input_type -> chat.ChatUserIdRequest
	11, // 11: chat.ChatGroupService.GetAll:input_type -> google.protobuf.Empty
	2,  // 12: chat.ChatService.Create:input_type -> chat.Chat
	2,  // 13: chat.ChatService.Update:input_type -> chat.Chat
	6,  // 14: chat.ChatService.Delete:input_type -> chat.ChatIdRequest
	6,  // 15: chat.ChatService.GetById:input_type -> chat.ChatIdRequest
	8,  // 16: chat.ChatService.GetListByGroup:input_type -> chat.ChatGroupIdRequest
	8,  // 17: chat.ChatService.GetStreamByGroup:input_type -> chat.ChatGroupIdRequest
	9,  // 18: chat.ChatService.GetLatestChatByUser:input_type -> chat.ChatUserIdRequest
	0,  // 19: chat.ChatGroupService.Create:output_type -> chat.ChatGroup
	10, // 20: chat.ChatGroupService.Update:output_type -> chat.ChatBoolResponse
	10, // 21: chat.ChatGroupService.Delete:output_type -> chat.ChatBoolResponse
	0,  // 22: chat.ChatGroupService.GetById:output_type -> chat.ChatGroup
	0,  // 23: chat.ChatGroupService.GetByUuid:output_type -> chat.ChatGroup
	1,  // 24: chat.ChatGroupService.GetListByUser:output_type -> chat.ChatGroupList
	1,  // 25: chat.ChatGroupService.GetAll:output_type -> chat.ChatGroupList
	2,  // 26: chat.ChatService.Create:output_type -> chat.Chat
	10, // 27: chat.ChatService.Update:output_type -> chat.ChatBoolResponse
	10, // 28: chat.ChatService.Delete:output_type -> chat.ChatBoolResponse
	2,  // 29: chat.ChatService.GetById:output_type -> chat.Chat
	4,  // 30: chat.ChatService.GetListByGroup:output_type -> chat.ChatList
	2,  // 31: chat.ChatService.GetStreamByGroup:output_type -> chat.Chat
	2,  // 32: chat.ChatService.GetLatestChatByUser:output_type -> chat.Chat
	19, // [19:33] is the sub-list for method output_type
	5,  // [5:19] is the sub-list for method input_type
	5,  // [5:5] is the sub-list for extension type_name
	5,  // [5:5] is the sub-list for extension extendee
	0,  // [0:5] is the sub-list for field type_name
}

func init() { file_chat_proto_init() }
func file_chat_proto_init() {
	if File_chat_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_chat_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatGroup); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatGroupList); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Chat); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatUser); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatList); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatIdRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatUuidRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatGroupIdRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatUserIdRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatBoolResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_chat_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_chat_proto_goTypes,
		DependencyIndexes: file_chat_proto_depIdxs,
		MessageInfos:      file_chat_proto_msgTypes,
	}.Build()
	File_chat_proto = out.File
	file_chat_proto_rawDesc = nil
	file_chat_proto_goTypes = nil
	file_chat_proto_depIdxs = nil
}
