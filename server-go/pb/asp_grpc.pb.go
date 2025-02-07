// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.6
// source: asp.proto

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

// AspServiceClient is the client API for AspService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AspServiceClient interface {
	// general
	// create
	Create(ctx context.Context, in *Asp, opts ...grpc.CallOption) (*Asp, error)
	// update
	Update(ctx context.Context, in *Asp, opts ...grpc.CallOption) (*AspBoolResponse, error)
	// delete
	Delete(ctx context.Context, in *AspIdRequest, opts ...grpc.CallOption) (*AspBoolResponse, error)
	// get by id
	GetById(ctx context.Context, in *AspIdRequest, opts ...grpc.CallOption) (*Asp, error)
	// get by uuid
	GetByUuid(ctx context.Context, in *AspUuidRequest, opts ...grpc.CallOption) (*Asp, error)
	// get by user
	GetListByUser(ctx context.Context, in *AspUserIdRequest, opts ...grpc.CallOption) (*AspList, error)
	// get by content
	GetListByContent(ctx context.Context, in *AspContentIdRequest, opts ...grpc.CallOption) (*AspList, error)
	// get by service
	GetListByService(ctx context.Context, in *AspServiceRequest, opts ...grpc.CallOption) (*AspList, error)
	// get list by id list
	GetListByIdList(ctx context.Context, opts ...grpc.CallOption) (AspService_GetListByIdListClient, error)
	// admin
	// get all
	GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*AspList, error)
}

type aspServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAspServiceClient(cc grpc.ClientConnInterface) AspServiceClient {
	return &aspServiceClient{cc}
}

func (c *aspServiceClient) Create(ctx context.Context, in *Asp, opts ...grpc.CallOption) (*Asp, error) {
	out := new(Asp)
	err := c.cc.Invoke(ctx, "/asp.AspService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aspServiceClient) Update(ctx context.Context, in *Asp, opts ...grpc.CallOption) (*AspBoolResponse, error) {
	out := new(AspBoolResponse)
	err := c.cc.Invoke(ctx, "/asp.AspService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aspServiceClient) Delete(ctx context.Context, in *AspIdRequest, opts ...grpc.CallOption) (*AspBoolResponse, error) {
	out := new(AspBoolResponse)
	err := c.cc.Invoke(ctx, "/asp.AspService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aspServiceClient) GetById(ctx context.Context, in *AspIdRequest, opts ...grpc.CallOption) (*Asp, error) {
	out := new(Asp)
	err := c.cc.Invoke(ctx, "/asp.AspService/GetById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aspServiceClient) GetByUuid(ctx context.Context, in *AspUuidRequest, opts ...grpc.CallOption) (*Asp, error) {
	out := new(Asp)
	err := c.cc.Invoke(ctx, "/asp.AspService/GetByUuid", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aspServiceClient) GetListByUser(ctx context.Context, in *AspUserIdRequest, opts ...grpc.CallOption) (*AspList, error) {
	out := new(AspList)
	err := c.cc.Invoke(ctx, "/asp.AspService/GetListByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aspServiceClient) GetListByContent(ctx context.Context, in *AspContentIdRequest, opts ...grpc.CallOption) (*AspList, error) {
	out := new(AspList)
	err := c.cc.Invoke(ctx, "/asp.AspService/GetListByContent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aspServiceClient) GetListByService(ctx context.Context, in *AspServiceRequest, opts ...grpc.CallOption) (*AspList, error) {
	out := new(AspList)
	err := c.cc.Invoke(ctx, "/asp.AspService/GetListByService", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aspServiceClient) GetListByIdList(ctx context.Context, opts ...grpc.CallOption) (AspService_GetListByIdListClient, error) {
	stream, err := c.cc.NewStream(ctx, &AspService_ServiceDesc.Streams[0], "/asp.AspService/GetListByIdList", opts...)
	if err != nil {
		return nil, err
	}
	x := &aspServiceGetListByIdListClient{stream}
	return x, nil
}

type AspService_GetListByIdListClient interface {
	Send(*AspIdListRequest) error
	CloseAndRecv() (*AspList, error)
	grpc.ClientStream
}

type aspServiceGetListByIdListClient struct {
	grpc.ClientStream
}

func (x *aspServiceGetListByIdListClient) Send(m *AspIdListRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *aspServiceGetListByIdListClient) CloseAndRecv() (*AspList, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(AspList)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *aspServiceClient) GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*AspList, error) {
	out := new(AspList)
	err := c.cc.Invoke(ctx, "/asp.AspService/GetAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AspServiceServer is the server API for AspService service.
// All implementations should embed UnimplementedAspServiceServer
// for forward compatibility
type AspServiceServer interface {
	// general
	// create
	Create(context.Context, *Asp) (*Asp, error)
	// update
	Update(context.Context, *Asp) (*AspBoolResponse, error)
	// delete
	Delete(context.Context, *AspIdRequest) (*AspBoolResponse, error)
	// get by id
	GetById(context.Context, *AspIdRequest) (*Asp, error)
	// get by uuid
	GetByUuid(context.Context, *AspUuidRequest) (*Asp, error)
	// get by user
	GetListByUser(context.Context, *AspUserIdRequest) (*AspList, error)
	// get by content
	GetListByContent(context.Context, *AspContentIdRequest) (*AspList, error)
	// get by service
	GetListByService(context.Context, *AspServiceRequest) (*AspList, error)
	// get list by id list
	GetListByIdList(AspService_GetListByIdListServer) error
	// admin
	// get all
	GetAll(context.Context, *emptypb.Empty) (*AspList, error)
}

// UnimplementedAspServiceServer should be embedded to have forward compatible implementations.
type UnimplementedAspServiceServer struct {
}

func (UnimplementedAspServiceServer) Create(context.Context, *Asp) (*Asp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedAspServiceServer) Update(context.Context, *Asp) (*AspBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedAspServiceServer) Delete(context.Context, *AspIdRequest) (*AspBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedAspServiceServer) GetById(context.Context, *AspIdRequest) (*Asp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetById not implemented")
}
func (UnimplementedAspServiceServer) GetByUuid(context.Context, *AspUuidRequest) (*Asp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByUuid not implemented")
}
func (UnimplementedAspServiceServer) GetListByUser(context.Context, *AspUserIdRequest) (*AspList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByUser not implemented")
}
func (UnimplementedAspServiceServer) GetListByContent(context.Context, *AspContentIdRequest) (*AspList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByContent not implemented")
}
func (UnimplementedAspServiceServer) GetListByService(context.Context, *AspServiceRequest) (*AspList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByService not implemented")
}
func (UnimplementedAspServiceServer) GetListByIdList(AspService_GetListByIdListServer) error {
	return status.Errorf(codes.Unimplemented, "method GetListByIdList not implemented")
}
func (UnimplementedAspServiceServer) GetAll(context.Context, *emptypb.Empty) (*AspList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAll not implemented")
}

// UnsafeAspServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AspServiceServer will
// result in compilation errors.
type UnsafeAspServiceServer interface {
	mustEmbedUnimplementedAspServiceServer()
}

func RegisterAspServiceServer(s grpc.ServiceRegistrar, srv AspServiceServer) {
	s.RegisterService(&AspService_ServiceDesc, srv)
}

func _AspService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Asp)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AspServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asp.AspService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AspServiceServer).Create(ctx, req.(*Asp))
	}
	return interceptor(ctx, in, info, handler)
}

func _AspService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Asp)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AspServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asp.AspService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AspServiceServer).Update(ctx, req.(*Asp))
	}
	return interceptor(ctx, in, info, handler)
}

func _AspService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AspIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AspServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asp.AspService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AspServiceServer).Delete(ctx, req.(*AspIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AspService_GetById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AspIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AspServiceServer).GetById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asp.AspService/GetById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AspServiceServer).GetById(ctx, req.(*AspIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AspService_GetByUuid_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AspUuidRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AspServiceServer).GetByUuid(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asp.AspService/GetByUuid",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AspServiceServer).GetByUuid(ctx, req.(*AspUuidRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AspService_GetListByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AspUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AspServiceServer).GetListByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asp.AspService/GetListByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AspServiceServer).GetListByUser(ctx, req.(*AspUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AspService_GetListByContent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AspContentIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AspServiceServer).GetListByContent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asp.AspService/GetListByContent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AspServiceServer).GetListByContent(ctx, req.(*AspContentIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AspService_GetListByService_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AspServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AspServiceServer).GetListByService(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asp.AspService/GetListByService",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AspServiceServer).GetListByService(ctx, req.(*AspServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AspService_GetListByIdList_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(AspServiceServer).GetListByIdList(&aspServiceGetListByIdListServer{stream})
}

type AspService_GetListByIdListServer interface {
	SendAndClose(*AspList) error
	Recv() (*AspIdListRequest, error)
	grpc.ServerStream
}

type aspServiceGetListByIdListServer struct {
	grpc.ServerStream
}

func (x *aspServiceGetListByIdListServer) SendAndClose(m *AspList) error {
	return x.ServerStream.SendMsg(m)
}

func (x *aspServiceGetListByIdListServer) Recv() (*AspIdListRequest, error) {
	m := new(AspIdListRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _AspService_GetAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AspServiceServer).GetAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/asp.AspService/GetAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AspServiceServer).GetAll(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// AspService_ServiceDesc is the grpc.ServiceDesc for AspService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AspService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "asp.AspService",
	HandlerType: (*AspServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _AspService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _AspService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _AspService_Delete_Handler,
		},
		{
			MethodName: "GetById",
			Handler:    _AspService_GetById_Handler,
		},
		{
			MethodName: "GetByUuid",
			Handler:    _AspService_GetByUuid_Handler,
		},
		{
			MethodName: "GetListByUser",
			Handler:    _AspService_GetListByUser_Handler,
		},
		{
			MethodName: "GetListByContent",
			Handler:    _AspService_GetListByContent_Handler,
		},
		{
			MethodName: "GetListByService",
			Handler:    _AspService_GetListByService_Handler,
		},
		{
			MethodName: "GetAll",
			Handler:    _AspService_GetAll_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetListByIdList",
			Handler:       _AspService_GetListByIdList_Handler,
			ClientStreams: true,
		},
	},
	Metadata: "asp.proto",
}
