// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.6
// source: billing.proto

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// BillingServiceClient is the client API for BillingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BillingServiceClient interface {
	// create
	Create(ctx context.Context, in *Billing, opts ...grpc.CallOption) (*Billing, error)
	// update
	Update(ctx context.Context, in *Billing, opts ...grpc.CallOption) (*BillingBoolResponse, error)
	// get by id
	GetById(ctx context.Context, in *BillingIdRequest, opts ...grpc.CallOption) (*Billing, error)
	// get by uuid
	GetByUuid(ctx context.Context, in *BillingUuidRequest, opts ...grpc.CallOption) (*Billing, error)
	// get by user id
	GetByUserId(ctx context.Context, in *BillingUserIdRequest, opts ...grpc.CallOption) (*BillingList, error)
}

type billingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBillingServiceClient(cc grpc.ClientConnInterface) BillingServiceClient {
	return &billingServiceClient{cc}
}

func (c *billingServiceClient) Create(ctx context.Context, in *Billing, opts ...grpc.CallOption) (*Billing, error) {
	out := new(Billing)
	err := c.cc.Invoke(ctx, "/billing.BillingService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *billingServiceClient) Update(ctx context.Context, in *Billing, opts ...grpc.CallOption) (*BillingBoolResponse, error) {
	out := new(BillingBoolResponse)
	err := c.cc.Invoke(ctx, "/billing.BillingService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *billingServiceClient) GetById(ctx context.Context, in *BillingIdRequest, opts ...grpc.CallOption) (*Billing, error) {
	out := new(Billing)
	err := c.cc.Invoke(ctx, "/billing.BillingService/GetById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *billingServiceClient) GetByUuid(ctx context.Context, in *BillingUuidRequest, opts ...grpc.CallOption) (*Billing, error) {
	out := new(Billing)
	err := c.cc.Invoke(ctx, "/billing.BillingService/GetByUuid", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *billingServiceClient) GetByUserId(ctx context.Context, in *BillingUserIdRequest, opts ...grpc.CallOption) (*BillingList, error) {
	out := new(BillingList)
	err := c.cc.Invoke(ctx, "/billing.BillingService/GetByUserId", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BillingServiceServer is the server API for BillingService service.
// All implementations should embed UnimplementedBillingServiceServer
// for forward compatibility
type BillingServiceServer interface {
	// create
	Create(context.Context, *Billing) (*Billing, error)
	// update
	Update(context.Context, *Billing) (*BillingBoolResponse, error)
	// get by id
	GetById(context.Context, *BillingIdRequest) (*Billing, error)
	// get by uuid
	GetByUuid(context.Context, *BillingUuidRequest) (*Billing, error)
	// get by user id
	GetByUserId(context.Context, *BillingUserIdRequest) (*BillingList, error)
}

// UnimplementedBillingServiceServer should be embedded to have forward compatible implementations.
type UnimplementedBillingServiceServer struct {
}

func (UnimplementedBillingServiceServer) Create(context.Context, *Billing) (*Billing, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedBillingServiceServer) Update(context.Context, *Billing) (*BillingBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedBillingServiceServer) GetById(context.Context, *BillingIdRequest) (*Billing, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetById not implemented")
}
func (UnimplementedBillingServiceServer) GetByUuid(context.Context, *BillingUuidRequest) (*Billing, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByUuid not implemented")
}
func (UnimplementedBillingServiceServer) GetByUserId(context.Context, *BillingUserIdRequest) (*BillingList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByUserId not implemented")
}

// UnsafeBillingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BillingServiceServer will
// result in compilation errors.
type UnsafeBillingServiceServer interface {
	mustEmbedUnimplementedBillingServiceServer()
}

func RegisterBillingServiceServer(s grpc.ServiceRegistrar, srv BillingServiceServer) {
	s.RegisterService(&BillingService_ServiceDesc, srv)
}

func _BillingService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Billing)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillingServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/billing.BillingService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillingServiceServer).Create(ctx, req.(*Billing))
	}
	return interceptor(ctx, in, info, handler)
}

func _BillingService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Billing)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillingServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/billing.BillingService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillingServiceServer).Update(ctx, req.(*Billing))
	}
	return interceptor(ctx, in, info, handler)
}

func _BillingService_GetById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BillingIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillingServiceServer).GetById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/billing.BillingService/GetById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillingServiceServer).GetById(ctx, req.(*BillingIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BillingService_GetByUuid_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BillingUuidRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillingServiceServer).GetByUuid(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/billing.BillingService/GetByUuid",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillingServiceServer).GetByUuid(ctx, req.(*BillingUuidRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BillingService_GetByUserId_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BillingUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillingServiceServer).GetByUserId(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/billing.BillingService/GetByUserId",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillingServiceServer).GetByUserId(ctx, req.(*BillingUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BillingService_ServiceDesc is the grpc.ServiceDesc for BillingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BillingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "billing.BillingService",
	HandlerType: (*BillingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _BillingService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _BillingService_Update_Handler,
		},
		{
			MethodName: "GetById",
			Handler:    _BillingService_GetById_Handler,
		},
		{
			MethodName: "GetByUuid",
			Handler:    _BillingService_GetByUuid_Handler,
		},
		{
			MethodName: "GetByUserId",
			Handler:    _BillingService_GetByUserId_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "billing.proto",
}
