// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.6
// source: like.proto

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

// LikeServiceClient is the client API for LikeService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LikeServiceClient interface {
	// create
	Create(ctx context.Context, in *Like, opts ...grpc.CallOption) (*Like, error)
	// update
	Update(ctx context.Context, in *Like, opts ...grpc.CallOption) (*LikeBoolResponse, error)
	// delete
	Delete(ctx context.Context, in *LikeIdRequest, opts ...grpc.CallOption) (*LikeBoolResponse, error)
	// get by id
	GetById(ctx context.Context, in *LikeIdRequest, opts ...grpc.CallOption) (*Like, error)
	// get by user
	GetListByUser(ctx context.Context, in *LikeUserIdRequest, opts ...grpc.CallOption) (*LikeList, error)
	// get by content
	GetListByContent(ctx context.Context, in *LikeContentIdRequest, opts ...grpc.CallOption) (*LikeList, error)
	// get list by id list
	GetListByIdList(ctx context.Context, in *LikeIdListRequest, opts ...grpc.CallOption) (*LikeList, error)
	// get all
	GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*LikeList, error)
}

type likeServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewLikeServiceClient(cc grpc.ClientConnInterface) LikeServiceClient {
	return &likeServiceClient{cc}
}

func (c *likeServiceClient) Create(ctx context.Context, in *Like, opts ...grpc.CallOption) (*Like, error) {
	out := new(Like)
	err := c.cc.Invoke(ctx, "/like.LikeService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *likeServiceClient) Update(ctx context.Context, in *Like, opts ...grpc.CallOption) (*LikeBoolResponse, error) {
	out := new(LikeBoolResponse)
	err := c.cc.Invoke(ctx, "/like.LikeService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *likeServiceClient) Delete(ctx context.Context, in *LikeIdRequest, opts ...grpc.CallOption) (*LikeBoolResponse, error) {
	out := new(LikeBoolResponse)
	err := c.cc.Invoke(ctx, "/like.LikeService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *likeServiceClient) GetById(ctx context.Context, in *LikeIdRequest, opts ...grpc.CallOption) (*Like, error) {
	out := new(Like)
	err := c.cc.Invoke(ctx, "/like.LikeService/GetById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *likeServiceClient) GetListByUser(ctx context.Context, in *LikeUserIdRequest, opts ...grpc.CallOption) (*LikeList, error) {
	out := new(LikeList)
	err := c.cc.Invoke(ctx, "/like.LikeService/GetListByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *likeServiceClient) GetListByContent(ctx context.Context, in *LikeContentIdRequest, opts ...grpc.CallOption) (*LikeList, error) {
	out := new(LikeList)
	err := c.cc.Invoke(ctx, "/like.LikeService/GetListByContent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *likeServiceClient) GetListByIdList(ctx context.Context, in *LikeIdListRequest, opts ...grpc.CallOption) (*LikeList, error) {
	out := new(LikeList)
	err := c.cc.Invoke(ctx, "/like.LikeService/GetListByIdList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *likeServiceClient) GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*LikeList, error) {
	out := new(LikeList)
	err := c.cc.Invoke(ctx, "/like.LikeService/GetAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LikeServiceServer is the server API for LikeService service.
// All implementations should embed UnimplementedLikeServiceServer
// for forward compatibility
type LikeServiceServer interface {
	// create
	Create(context.Context, *Like) (*Like, error)
	// update
	Update(context.Context, *Like) (*LikeBoolResponse, error)
	// delete
	Delete(context.Context, *LikeIdRequest) (*LikeBoolResponse, error)
	// get by id
	GetById(context.Context, *LikeIdRequest) (*Like, error)
	// get by user
	GetListByUser(context.Context, *LikeUserIdRequest) (*LikeList, error)
	// get by content
	GetListByContent(context.Context, *LikeContentIdRequest) (*LikeList, error)
	// get list by id list
	GetListByIdList(context.Context, *LikeIdListRequest) (*LikeList, error)
	// get all
	GetAll(context.Context, *emptypb.Empty) (*LikeList, error)
}

// UnimplementedLikeServiceServer should be embedded to have forward compatible implementations.
type UnimplementedLikeServiceServer struct {
}

func (UnimplementedLikeServiceServer) Create(context.Context, *Like) (*Like, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedLikeServiceServer) Update(context.Context, *Like) (*LikeBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedLikeServiceServer) Delete(context.Context, *LikeIdRequest) (*LikeBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedLikeServiceServer) GetById(context.Context, *LikeIdRequest) (*Like, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetById not implemented")
}
func (UnimplementedLikeServiceServer) GetListByUser(context.Context, *LikeUserIdRequest) (*LikeList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByUser not implemented")
}
func (UnimplementedLikeServiceServer) GetListByContent(context.Context, *LikeContentIdRequest) (*LikeList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByContent not implemented")
}
func (UnimplementedLikeServiceServer) GetListByIdList(context.Context, *LikeIdListRequest) (*LikeList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByIdList not implemented")
}
func (UnimplementedLikeServiceServer) GetAll(context.Context, *emptypb.Empty) (*LikeList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAll not implemented")
}

// UnsafeLikeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LikeServiceServer will
// result in compilation errors.
type UnsafeLikeServiceServer interface {
	mustEmbedUnimplementedLikeServiceServer()
}

func RegisterLikeServiceServer(s grpc.ServiceRegistrar, srv LikeServiceServer) {
	s.RegisterService(&LikeService_ServiceDesc, srv)
}

func _LikeService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Like)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LikeServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/like.LikeService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LikeServiceServer).Create(ctx, req.(*Like))
	}
	return interceptor(ctx, in, info, handler)
}

func _LikeService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Like)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LikeServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/like.LikeService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LikeServiceServer).Update(ctx, req.(*Like))
	}
	return interceptor(ctx, in, info, handler)
}

func _LikeService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LikeIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LikeServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/like.LikeService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LikeServiceServer).Delete(ctx, req.(*LikeIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LikeService_GetById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LikeIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LikeServiceServer).GetById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/like.LikeService/GetById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LikeServiceServer).GetById(ctx, req.(*LikeIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LikeService_GetListByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LikeUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LikeServiceServer).GetListByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/like.LikeService/GetListByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LikeServiceServer).GetListByUser(ctx, req.(*LikeUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LikeService_GetListByContent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LikeContentIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LikeServiceServer).GetListByContent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/like.LikeService/GetListByContent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LikeServiceServer).GetListByContent(ctx, req.(*LikeContentIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LikeService_GetListByIdList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LikeIdListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LikeServiceServer).GetListByIdList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/like.LikeService/GetListByIdList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LikeServiceServer).GetListByIdList(ctx, req.(*LikeIdListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LikeService_GetAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LikeServiceServer).GetAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/like.LikeService/GetAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LikeServiceServer).GetAll(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// LikeService_ServiceDesc is the grpc.ServiceDesc for LikeService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LikeService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "like.LikeService",
	HandlerType: (*LikeServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _LikeService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _LikeService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _LikeService_Delete_Handler,
		},
		{
			MethodName: "GetById",
			Handler:    _LikeService_GetById_Handler,
		},
		{
			MethodName: "GetListByUser",
			Handler:    _LikeService_GetListByUser_Handler,
		},
		{
			MethodName: "GetListByContent",
			Handler:    _LikeService_GetListByContent_Handler,
		},
		{
			MethodName: "GetListByIdList",
			Handler:    _LikeService_GetListByIdList_Handler,
		},
		{
			MethodName: "GetAll",
			Handler:    _LikeService_GetAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "like.proto",
}