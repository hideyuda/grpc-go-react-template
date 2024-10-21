// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.6
// source: share.proto

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

// ShareServiceClient is the client API for ShareService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ShareServiceClient interface {
	// create
	Create(ctx context.Context, in *Share, opts ...grpc.CallOption) (*Share, error)
	// update
	Update(ctx context.Context, in *Share, opts ...grpc.CallOption) (*ShareBoolResponse, error)
	// delete
	Delete(ctx context.Context, in *ShareIdRequest, opts ...grpc.CallOption) (*ShareBoolResponse, error)
	// get by id
	GetById(ctx context.Context, in *ShareIdRequest, opts ...grpc.CallOption) (*Share, error)
	// get by user
	GetListByUser(ctx context.Context, in *ShareUserIdRequest, opts ...grpc.CallOption) (*ShareList, error)
	// get by content
	GetListByContent(ctx context.Context, in *ShareContentIdRequest, opts ...grpc.CallOption) (*ShareList, error)
	// get list by id list
	GetListByIdList(ctx context.Context, in *ShareIdListRequest, opts ...grpc.CallOption) (*ShareList, error)
	// get all
	GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ShareList, error)
}

type shareServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewShareServiceClient(cc grpc.ClientConnInterface) ShareServiceClient {
	return &shareServiceClient{cc}
}

func (c *shareServiceClient) Create(ctx context.Context, in *Share, opts ...grpc.CallOption) (*Share, error) {
	out := new(Share)
	err := c.cc.Invoke(ctx, "/share.ShareService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shareServiceClient) Update(ctx context.Context, in *Share, opts ...grpc.CallOption) (*ShareBoolResponse, error) {
	out := new(ShareBoolResponse)
	err := c.cc.Invoke(ctx, "/share.ShareService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shareServiceClient) Delete(ctx context.Context, in *ShareIdRequest, opts ...grpc.CallOption) (*ShareBoolResponse, error) {
	out := new(ShareBoolResponse)
	err := c.cc.Invoke(ctx, "/share.ShareService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shareServiceClient) GetById(ctx context.Context, in *ShareIdRequest, opts ...grpc.CallOption) (*Share, error) {
	out := new(Share)
	err := c.cc.Invoke(ctx, "/share.ShareService/GetById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shareServiceClient) GetListByUser(ctx context.Context, in *ShareUserIdRequest, opts ...grpc.CallOption) (*ShareList, error) {
	out := new(ShareList)
	err := c.cc.Invoke(ctx, "/share.ShareService/GetListByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shareServiceClient) GetListByContent(ctx context.Context, in *ShareContentIdRequest, opts ...grpc.CallOption) (*ShareList, error) {
	out := new(ShareList)
	err := c.cc.Invoke(ctx, "/share.ShareService/GetListByContent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shareServiceClient) GetListByIdList(ctx context.Context, in *ShareIdListRequest, opts ...grpc.CallOption) (*ShareList, error) {
	out := new(ShareList)
	err := c.cc.Invoke(ctx, "/share.ShareService/GetListByIdList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shareServiceClient) GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ShareList, error) {
	out := new(ShareList)
	err := c.cc.Invoke(ctx, "/share.ShareService/GetAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ShareServiceServer is the server API for ShareService service.
// All implementations should embed UnimplementedShareServiceServer
// for forward compatibility
type ShareServiceServer interface {
	// create
	Create(context.Context, *Share) (*Share, error)
	// update
	Update(context.Context, *Share) (*ShareBoolResponse, error)
	// delete
	Delete(context.Context, *ShareIdRequest) (*ShareBoolResponse, error)
	// get by id
	GetById(context.Context, *ShareIdRequest) (*Share, error)
	// get by user
	GetListByUser(context.Context, *ShareUserIdRequest) (*ShareList, error)
	// get by content
	GetListByContent(context.Context, *ShareContentIdRequest) (*ShareList, error)
	// get list by id list
	GetListByIdList(context.Context, *ShareIdListRequest) (*ShareList, error)
	// get all
	GetAll(context.Context, *emptypb.Empty) (*ShareList, error)
}

// UnimplementedShareServiceServer should be embedded to have forward compatible implementations.
type UnimplementedShareServiceServer struct {
}

func (UnimplementedShareServiceServer) Create(context.Context, *Share) (*Share, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedShareServiceServer) Update(context.Context, *Share) (*ShareBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedShareServiceServer) Delete(context.Context, *ShareIdRequest) (*ShareBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedShareServiceServer) GetById(context.Context, *ShareIdRequest) (*Share, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetById not implemented")
}
func (UnimplementedShareServiceServer) GetListByUser(context.Context, *ShareUserIdRequest) (*ShareList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByUser not implemented")
}
func (UnimplementedShareServiceServer) GetListByContent(context.Context, *ShareContentIdRequest) (*ShareList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByContent not implemented")
}
func (UnimplementedShareServiceServer) GetListByIdList(context.Context, *ShareIdListRequest) (*ShareList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByIdList not implemented")
}
func (UnimplementedShareServiceServer) GetAll(context.Context, *emptypb.Empty) (*ShareList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAll not implemented")
}

// UnsafeShareServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ShareServiceServer will
// result in compilation errors.
type UnsafeShareServiceServer interface {
	mustEmbedUnimplementedShareServiceServer()
}

func RegisterShareServiceServer(s grpc.ServiceRegistrar, srv ShareServiceServer) {
	s.RegisterService(&ShareService_ServiceDesc, srv)
}

func _ShareService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Share)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShareServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/share.ShareService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShareServiceServer).Create(ctx, req.(*Share))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShareService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Share)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShareServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/share.ShareService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShareServiceServer).Update(ctx, req.(*Share))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShareService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ShareIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShareServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/share.ShareService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShareServiceServer).Delete(ctx, req.(*ShareIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShareService_GetById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ShareIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShareServiceServer).GetById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/share.ShareService/GetById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShareServiceServer).GetById(ctx, req.(*ShareIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShareService_GetListByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ShareUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShareServiceServer).GetListByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/share.ShareService/GetListByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShareServiceServer).GetListByUser(ctx, req.(*ShareUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShareService_GetListByContent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ShareContentIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShareServiceServer).GetListByContent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/share.ShareService/GetListByContent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShareServiceServer).GetListByContent(ctx, req.(*ShareContentIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShareService_GetListByIdList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ShareIdListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShareServiceServer).GetListByIdList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/share.ShareService/GetListByIdList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShareServiceServer).GetListByIdList(ctx, req.(*ShareIdListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShareService_GetAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShareServiceServer).GetAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/share.ShareService/GetAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShareServiceServer).GetAll(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// ShareService_ServiceDesc is the grpc.ServiceDesc for ShareService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ShareService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "share.ShareService",
	HandlerType: (*ShareServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _ShareService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _ShareService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _ShareService_Delete_Handler,
		},
		{
			MethodName: "GetById",
			Handler:    _ShareService_GetById_Handler,
		},
		{
			MethodName: "GetListByUser",
			Handler:    _ShareService_GetListByUser_Handler,
		},
		{
			MethodName: "GetListByContent",
			Handler:    _ShareService_GetListByContent_Handler,
		},
		{
			MethodName: "GetListByIdList",
			Handler:    _ShareService_GetListByIdList_Handler,
		},
		{
			MethodName: "GetAll",
			Handler:    _ShareService_GetAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "share.proto",
}
