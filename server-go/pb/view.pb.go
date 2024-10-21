// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: view.proto

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
type View struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        int64  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Uuid      string `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty"`
	ContentId int64  `protobuf:"varint,3,opt,name=content_id,json=contentId,proto3" json:"content_id,omitempty"`
	UserId    int64  `protobuf:"varint,4,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	CreatedAt string `protobuf:"bytes,5,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt string `protobuf:"bytes,6,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
}

func (x *View) Reset() {
	*x = View{}
	if protoimpl.UnsafeEnabled {
		mi := &file_view_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *View) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*View) ProtoMessage() {}

func (x *View) ProtoReflect() protoreflect.Message {
	mi := &file_view_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use View.ProtoReflect.Descriptor instead.
func (*View) Descriptor() ([]byte, []int) {
	return file_view_proto_rawDescGZIP(), []int{0}
}

func (x *View) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *View) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *View) GetContentId() int64 {
	if x != nil {
		return x.ContentId
	}
	return 0
}

func (x *View) GetUserId() int64 {
	if x != nil {
		return x.UserId
	}
	return 0
}

func (x *View) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *View) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

type ViewList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	View []*View `protobuf:"bytes,1,rep,name=view,proto3" json:"view,omitempty"`
}

func (x *ViewList) Reset() {
	*x = ViewList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_view_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ViewList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ViewList) ProtoMessage() {}

func (x *ViewList) ProtoReflect() protoreflect.Message {
	mi := &file_view_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ViewList.ProtoReflect.Descriptor instead.
func (*ViewList) Descriptor() ([]byte, []int) {
	return file_view_proto_rawDescGZIP(), []int{1}
}

func (x *ViewList) GetView() []*View {
	if x != nil {
		return x.View
	}
	return nil
}

// request
type ViewIdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *ViewIdRequest) Reset() {
	*x = ViewIdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_view_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ViewIdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ViewIdRequest) ProtoMessage() {}

func (x *ViewIdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_view_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ViewIdRequest.ProtoReflect.Descriptor instead.
func (*ViewIdRequest) Descriptor() ([]byte, []int) {
	return file_view_proto_rawDescGZIP(), []int{2}
}

func (x *ViewIdRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type ViewIdListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id []int64 `protobuf:"varint,1,rep,packed,name=id,proto3" json:"id,omitempty"`
}

func (x *ViewIdListRequest) Reset() {
	*x = ViewIdListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_view_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ViewIdListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ViewIdListRequest) ProtoMessage() {}

func (x *ViewIdListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_view_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ViewIdListRequest.ProtoReflect.Descriptor instead.
func (*ViewIdListRequest) Descriptor() ([]byte, []int) {
	return file_view_proto_rawDescGZIP(), []int{3}
}

func (x *ViewIdListRequest) GetId() []int64 {
	if x != nil {
		return x.Id
	}
	return nil
}

type ViewUserIdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId int64 `protobuf:"varint,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
}

func (x *ViewUserIdRequest) Reset() {
	*x = ViewUserIdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_view_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ViewUserIdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ViewUserIdRequest) ProtoMessage() {}

func (x *ViewUserIdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_view_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ViewUserIdRequest.ProtoReflect.Descriptor instead.
func (*ViewUserIdRequest) Descriptor() ([]byte, []int) {
	return file_view_proto_rawDescGZIP(), []int{4}
}

func (x *ViewUserIdRequest) GetUserId() int64 {
	if x != nil {
		return x.UserId
	}
	return 0
}

type ViewContentIdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ContentId int64 `protobuf:"varint,1,opt,name=content_id,json=contentId,proto3" json:"content_id,omitempty"`
}

func (x *ViewContentIdRequest) Reset() {
	*x = ViewContentIdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_view_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ViewContentIdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ViewContentIdRequest) ProtoMessage() {}

func (x *ViewContentIdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_view_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ViewContentIdRequest.ProtoReflect.Descriptor instead.
func (*ViewContentIdRequest) Descriptor() ([]byte, []int) {
	return file_view_proto_rawDescGZIP(), []int{5}
}

func (x *ViewContentIdRequest) GetContentId() int64 {
	if x != nil {
		return x.ContentId
	}
	return 0
}

// response
type ViewBoolResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Error bool `protobuf:"varint,1,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *ViewBoolResponse) Reset() {
	*x = ViewBoolResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_view_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ViewBoolResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ViewBoolResponse) ProtoMessage() {}

func (x *ViewBoolResponse) ProtoReflect() protoreflect.Message {
	mi := &file_view_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ViewBoolResponse.ProtoReflect.Descriptor instead.
func (*ViewBoolResponse) Descriptor() ([]byte, []int) {
	return file_view_proto_rawDescGZIP(), []int{6}
}

func (x *ViewBoolResponse) GetError() bool {
	if x != nil {
		return x.Error
	}
	return false
}

var File_view_proto protoreflect.FileDescriptor

var file_view_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x76, 0x69, 0x65, 0x77, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x76, 0x69,
	0x65, 0x77, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0xa0, 0x01, 0x0a, 0x04, 0x56, 0x69, 0x65, 0x77, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a,
	0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x09, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x75,
	0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x75, 0x73,
	0x65, 0x72, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f,
	0x61, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61,
	0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64,
	0x41, 0x74, 0x22, 0x2a, 0x0a, 0x08, 0x56, 0x69, 0x65, 0x77, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x1e,
	0x0a, 0x04, 0x76, 0x69, 0x65, 0x77, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x76,
	0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x52, 0x04, 0x76, 0x69, 0x65, 0x77, 0x22, 0x1f,
	0x0a, 0x0d, 0x56, 0x69, 0x65, 0x77, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x22,
	0x23, 0x0a, 0x11, 0x56, 0x69, 0x65, 0x77, 0x49, 0x64, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x03, 0x28, 0x03,
	0x52, 0x02, 0x69, 0x64, 0x22, 0x2c, 0x0a, 0x11, 0x56, 0x69, 0x65, 0x77, 0x55, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x22, 0x35, 0x0a, 0x14, 0x56, 0x69, 0x65, 0x77, 0x43, 0x6f, 0x6e, 0x74, 0x65, 0x6e,
	0x74, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x6f,
	0x6e, 0x74, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09,
	0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x22, 0x28, 0x0a, 0x10, 0x56, 0x69, 0x65,
	0x77, 0x42, 0x6f, 0x6f, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a,
	0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x65, 0x72,
	0x72, 0x6f, 0x72, 0x32, 0xb8, 0x03, 0x0a, 0x0b, 0x56, 0x69, 0x65, 0x77, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x22, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x0a, 0x2e,
	0x76, 0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x1a, 0x0a, 0x2e, 0x76, 0x69, 0x65, 0x77,
	0x2e, 0x56, 0x69, 0x65, 0x77, 0x22, 0x00, 0x12, 0x2e, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x12, 0x0a, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x1a, 0x16, 0x2e,
	0x76, 0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x42, 0x6f, 0x6f, 0x6c, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x37, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x12, 0x13, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x49, 0x64, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x2e, 0x56, 0x69,
	0x65, 0x77, 0x42, 0x6f, 0x6f, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x12, 0x2c, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x42, 0x79, 0x49, 0x64, 0x12, 0x13, 0x2e, 0x76, 0x69,
	0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x0a, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x22, 0x00, 0x12, 0x3a,
	0x0a, 0x0d, 0x47, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x55, 0x73, 0x65, 0x72, 0x12,
	0x17, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x55, 0x73, 0x65, 0x72, 0x49,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0e, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x2e,
	0x56, 0x69, 0x65, 0x77, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x00, 0x12, 0x40, 0x0a, 0x10, 0x47, 0x65,
	0x74, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x43, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x12, 0x1a,
	0x2e, 0x76, 0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x43, 0x6f, 0x6e, 0x74, 0x65, 0x6e,
	0x74, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0e, 0x2e, 0x76, 0x69, 0x65,
	0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x00, 0x12, 0x3c, 0x0a, 0x0f,
	0x47, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x49, 0x64, 0x4c, 0x69, 0x73, 0x74, 0x12,
	0x17, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x49, 0x64, 0x4c, 0x69, 0x73,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0e, 0x2e, 0x76, 0x69, 0x65, 0x77, 0x2e,
	0x56, 0x69, 0x65, 0x77, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x00, 0x12, 0x32, 0x0a, 0x06, 0x47, 0x65,
	0x74, 0x41, 0x6c, 0x6c, 0x12, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x0e, 0x2e, 0x76,
	0x69, 0x65, 0x77, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x00, 0x42, 0x11,
	0x5a, 0x0f, 0x2e, 0x2e, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x2d, 0x67, 0x6f, 0x2f, 0x70,
	0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_view_proto_rawDescOnce sync.Once
	file_view_proto_rawDescData = file_view_proto_rawDesc
)

func file_view_proto_rawDescGZIP() []byte {
	file_view_proto_rawDescOnce.Do(func() {
		file_view_proto_rawDescData = protoimpl.X.CompressGZIP(file_view_proto_rawDescData)
	})
	return file_view_proto_rawDescData
}

var file_view_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_view_proto_goTypes = []interface{}{
	(*View)(nil),                 // 0: view.View
	(*ViewList)(nil),             // 1: view.ViewList
	(*ViewIdRequest)(nil),        // 2: view.ViewIdRequest
	(*ViewIdListRequest)(nil),    // 3: view.ViewIdListRequest
	(*ViewUserIdRequest)(nil),    // 4: view.ViewUserIdRequest
	(*ViewContentIdRequest)(nil), // 5: view.ViewContentIdRequest
	(*ViewBoolResponse)(nil),     // 6: view.ViewBoolResponse
	(*emptypb.Empty)(nil),        // 7: google.protobuf.Empty
}
var file_view_proto_depIdxs = []int32{
	0, // 0: view.ViewList.view:type_name -> view.View
	0, // 1: view.ViewService.Create:input_type -> view.View
	0, // 2: view.ViewService.Update:input_type -> view.View
	2, // 3: view.ViewService.Delete:input_type -> view.ViewIdRequest
	2, // 4: view.ViewService.GetById:input_type -> view.ViewIdRequest
	4, // 5: view.ViewService.GetListByUser:input_type -> view.ViewUserIdRequest
	5, // 6: view.ViewService.GetListByContent:input_type -> view.ViewContentIdRequest
	3, // 7: view.ViewService.GetListByIdList:input_type -> view.ViewIdListRequest
	7, // 8: view.ViewService.GetAll:input_type -> google.protobuf.Empty
	0, // 9: view.ViewService.Create:output_type -> view.View
	6, // 10: view.ViewService.Update:output_type -> view.ViewBoolResponse
	6, // 11: view.ViewService.Delete:output_type -> view.ViewBoolResponse
	0, // 12: view.ViewService.GetById:output_type -> view.View
	1, // 13: view.ViewService.GetListByUser:output_type -> view.ViewList
	1, // 14: view.ViewService.GetListByContent:output_type -> view.ViewList
	1, // 15: view.ViewService.GetListByIdList:output_type -> view.ViewList
	1, // 16: view.ViewService.GetAll:output_type -> view.ViewList
	9, // [9:17] is the sub-list for method output_type
	1, // [1:9] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_view_proto_init() }
func file_view_proto_init() {
	if File_view_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_view_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*View); i {
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
		file_view_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ViewList); i {
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
		file_view_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ViewIdRequest); i {
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
		file_view_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ViewIdListRequest); i {
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
		file_view_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ViewUserIdRequest); i {
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
		file_view_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ViewContentIdRequest); i {
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
		file_view_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ViewBoolResponse); i {
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
			RawDescriptor: file_view_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_view_proto_goTypes,
		DependencyIndexes: file_view_proto_depIdxs,
		MessageInfos:      file_view_proto_msgTypes,
	}.Build()
	File_view_proto = out.File
	file_view_proto_rawDesc = nil
	file_view_proto_goTypes = nil
	file_view_proto_depIdxs = nil
}
