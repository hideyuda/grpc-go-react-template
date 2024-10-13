// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.6
// source: notification_setting.proto

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// NotificationSettingServiceClient is the client API for NotificationSettingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NotificationSettingServiceClient interface {
	// create
	Create(ctx context.Context, in *NotificationSetting, opts ...grpc.CallOption) (*NotificationSetting, error)
	// update
	Update(ctx context.Context, in *NotificationSetting, opts ...grpc.CallOption) (*NotificationSettingBoolResponse, error)
	// delete
	Delete(ctx context.Context, in *NotificationSettingIdRequest, opts ...grpc.CallOption) (*NotificationSettingBoolResponse, error)
	// get by id
	GetById(ctx context.Context, in *NotificationSettingIdRequest, opts ...grpc.CallOption) (*NotificationSetting, error)
	// get by uuid
	GetByUuid(ctx context.Context, in *NotificationSettingUuidRequest, opts ...grpc.CallOption) (*NotificationSetting, error)
	// get by receive user
	GetByUser(ctx context.Context, in *NotificationSettingUserIdRequest, opts ...grpc.CallOption) (*NotificationSetting, error)
	// get list by id list
	GetListByIdList(ctx context.Context, in *NotificationSettingIdListRequest, opts ...grpc.CallOption) (*NotificationSettingList, error)
	// get all
	GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*NotificationSettingList, error)
}

type notificationSettingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewNotificationSettingServiceClient(cc grpc.ClientConnInterface) NotificationSettingServiceClient {
	return &notificationSettingServiceClient{cc}
}

func (c *notificationSettingServiceClient) Create(ctx context.Context, in *NotificationSetting, opts ...grpc.CallOption) (*NotificationSetting, error) {
	out := new(NotificationSetting)
	err := c.cc.Invoke(ctx, "/notification_setting.NotificationSettingService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationSettingServiceClient) Update(ctx context.Context, in *NotificationSetting, opts ...grpc.CallOption) (*NotificationSettingBoolResponse, error) {
	out := new(NotificationSettingBoolResponse)
	err := c.cc.Invoke(ctx, "/notification_setting.NotificationSettingService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationSettingServiceClient) Delete(ctx context.Context, in *NotificationSettingIdRequest, opts ...grpc.CallOption) (*NotificationSettingBoolResponse, error) {
	out := new(NotificationSettingBoolResponse)
	err := c.cc.Invoke(ctx, "/notification_setting.NotificationSettingService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationSettingServiceClient) GetById(ctx context.Context, in *NotificationSettingIdRequest, opts ...grpc.CallOption) (*NotificationSetting, error) {
	out := new(NotificationSetting)
	err := c.cc.Invoke(ctx, "/notification_setting.NotificationSettingService/GetById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationSettingServiceClient) GetByUuid(ctx context.Context, in *NotificationSettingUuidRequest, opts ...grpc.CallOption) (*NotificationSetting, error) {
	out := new(NotificationSetting)
	err := c.cc.Invoke(ctx, "/notification_setting.NotificationSettingService/GetByUuid", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationSettingServiceClient) GetByUser(ctx context.Context, in *NotificationSettingUserIdRequest, opts ...grpc.CallOption) (*NotificationSetting, error) {
	out := new(NotificationSetting)
	err := c.cc.Invoke(ctx, "/notification_setting.NotificationSettingService/GetByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationSettingServiceClient) GetListByIdList(ctx context.Context, in *NotificationSettingIdListRequest, opts ...grpc.CallOption) (*NotificationSettingList, error) {
	out := new(NotificationSettingList)
	err := c.cc.Invoke(ctx, "/notification_setting.NotificationSettingService/GetListByIdList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationSettingServiceClient) GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*NotificationSettingList, error) {
	out := new(NotificationSettingList)
	err := c.cc.Invoke(ctx, "/notification_setting.NotificationSettingService/GetAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NotificationSettingServiceServer is the server API for NotificationSettingService service.
// All implementations should embed UnimplementedNotificationSettingServiceServer
// for forward compatibility
type NotificationSettingServiceServer interface {
	// create
	Create(context.Context, *NotificationSetting) (*NotificationSetting, error)
	// update
	Update(context.Context, *NotificationSetting) (*NotificationSettingBoolResponse, error)
	// delete
	Delete(context.Context, *NotificationSettingIdRequest) (*NotificationSettingBoolResponse, error)
	// get by id
	GetById(context.Context, *NotificationSettingIdRequest) (*NotificationSetting, error)
	// get by uuid
	GetByUuid(context.Context, *NotificationSettingUuidRequest) (*NotificationSetting, error)
	// get by receive user
	GetByUser(context.Context, *NotificationSettingUserIdRequest) (*NotificationSetting, error)
	// get list by id list
	GetListByIdList(context.Context, *NotificationSettingIdListRequest) (*NotificationSettingList, error)
	// get all
	GetAll(context.Context, *emptypb.Empty) (*NotificationSettingList, error)
}

// UnimplementedNotificationSettingServiceServer should be embedded to have forward compatible implementations.
type UnimplementedNotificationSettingServiceServer struct {
}

func (UnimplementedNotificationSettingServiceServer) Create(context.Context, *NotificationSetting) (*NotificationSetting, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedNotificationSettingServiceServer) Update(context.Context, *NotificationSetting) (*NotificationSettingBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedNotificationSettingServiceServer) Delete(context.Context, *NotificationSettingIdRequest) (*NotificationSettingBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedNotificationSettingServiceServer) GetById(context.Context, *NotificationSettingIdRequest) (*NotificationSetting, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetById not implemented")
}
func (UnimplementedNotificationSettingServiceServer) GetByUuid(context.Context, *NotificationSettingUuidRequest) (*NotificationSetting, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByUuid not implemented")
}
func (UnimplementedNotificationSettingServiceServer) GetByUser(context.Context, *NotificationSettingUserIdRequest) (*NotificationSetting, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByUser not implemented")
}
func (UnimplementedNotificationSettingServiceServer) GetListByIdList(context.Context, *NotificationSettingIdListRequest) (*NotificationSettingList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByIdList not implemented")
}
func (UnimplementedNotificationSettingServiceServer) GetAll(context.Context, *emptypb.Empty) (*NotificationSettingList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAll not implemented")
}

// UnsafeNotificationSettingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NotificationSettingServiceServer will
// result in compilation errors.
type UnsafeNotificationSettingServiceServer interface {
	mustEmbedUnimplementedNotificationSettingServiceServer()
}

func RegisterNotificationSettingServiceServer(s grpc.ServiceRegistrar, srv NotificationSettingServiceServer) {
	s.RegisterService(&NotificationSettingService_ServiceDesc, srv)
}

func _NotificationSettingService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NotificationSetting)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSettingServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification_setting.NotificationSettingService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSettingServiceServer).Create(ctx, req.(*NotificationSetting))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationSettingService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NotificationSetting)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSettingServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification_setting.NotificationSettingService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSettingServiceServer).Update(ctx, req.(*NotificationSetting))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationSettingService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NotificationSettingIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSettingServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification_setting.NotificationSettingService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSettingServiceServer).Delete(ctx, req.(*NotificationSettingIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationSettingService_GetById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NotificationSettingIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSettingServiceServer).GetById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification_setting.NotificationSettingService/GetById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSettingServiceServer).GetById(ctx, req.(*NotificationSettingIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationSettingService_GetByUuid_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NotificationSettingUuidRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSettingServiceServer).GetByUuid(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification_setting.NotificationSettingService/GetByUuid",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSettingServiceServer).GetByUuid(ctx, req.(*NotificationSettingUuidRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationSettingService_GetByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NotificationSettingUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSettingServiceServer).GetByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification_setting.NotificationSettingService/GetByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSettingServiceServer).GetByUser(ctx, req.(*NotificationSettingUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationSettingService_GetListByIdList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NotificationSettingIdListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSettingServiceServer).GetListByIdList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification_setting.NotificationSettingService/GetListByIdList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSettingServiceServer).GetListByIdList(ctx, req.(*NotificationSettingIdListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationSettingService_GetAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSettingServiceServer).GetAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification_setting.NotificationSettingService/GetAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSettingServiceServer).GetAll(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// NotificationSettingService_ServiceDesc is the grpc.ServiceDesc for NotificationSettingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NotificationSettingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "notification_setting.NotificationSettingService",
	HandlerType: (*NotificationSettingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _NotificationSettingService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _NotificationSettingService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _NotificationSettingService_Delete_Handler,
		},
		{
			MethodName: "GetById",
			Handler:    _NotificationSettingService_GetById_Handler,
		},
		{
			MethodName: "GetByUuid",
			Handler:    _NotificationSettingService_GetByUuid_Handler,
		},
		{
			MethodName: "GetByUser",
			Handler:    _NotificationSettingService_GetByUser_Handler,
		},
		{
			MethodName: "GetListByIdList",
			Handler:    _NotificationSettingService_GetListByIdList_Handler,
		},
		{
			MethodName: "GetAll",
			Handler:    _NotificationSettingService_GetAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "notification_setting.proto",
}
