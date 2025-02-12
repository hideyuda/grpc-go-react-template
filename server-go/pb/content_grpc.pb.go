// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.6
// source: content.proto

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

// ContentServiceClient is the client API for ContentService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ContentServiceClient interface {
	// general
	// create
	Create(ctx context.Context, in *Content, opts ...grpc.CallOption) (*Content, error)
	// update
	Update(ctx context.Context, in *Content, opts ...grpc.CallOption) (*ContentBoolResponse, error)
	// update impression
	UpdateImpressionByIdList(ctx context.Context, in *ContentIdListRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error)
	// update view
	UpdateView(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error)
	// update click
	UpdateClick(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error)
	// delete
	Detaillete(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error)
	// get by id
	GetById(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*Content, error)
	// get by uuid
	GetByUuid(ctx context.Context, in *ContentUuidRequest, opts ...grpc.CallOption) (*Content, error)
	// get by id and user_id with like
	GetByUuidAndUser(ctx context.Context, in *ContentUuidAndUserIdRequest, opts ...grpc.CallOption) (*Content, error)
	// get by user
	GetListByUser(ctx context.Context, in *ContentUserIdRequest, opts ...grpc.CallOption) (*ContentList, error)
	// get by type
	GetListBySearch(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error)
	// get by latest id=user_id
	GetLatestList(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ContentList, error)
	// get by trend id=user_id
	GetTrendList(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ContentList, error)
	// get by recommend id=user_id
	GetRecommendedListByUser(ctx context.Context, in *ContentUserIdRequest, opts ...grpc.CallOption) (*ContentList, error)
	// get by recommend id=content_id
	GetRecommendedListByContent(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*ContentList, error)
	// get by sold id=user_id
	GetSoldListByUser(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error)
	GetPurchasedListByUser(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error)
	// get by liked id=user_id
	GetLikedListByUser(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error)
	// get viewed list by user id
	GetViewedListByUser(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error)
	// get list by id list
	GetListByIdList(ctx context.Context, in *ContentIdListRequest, opts ...grpc.CallOption) (*ContentList, error)
	// admin
	// get all
	GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ContentList, error)
	// like
	// update like
	CreateLike(ctx context.Context, in *ContentIdAndUserIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error)
	// delete like
	DeleteLike(ctx context.Context, in *ContentIdAndUserIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error)
}

type contentServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewContentServiceClient(cc grpc.ClientConnInterface) ContentServiceClient {
	return &contentServiceClient{cc}
}

func (c *contentServiceClient) Create(ctx context.Context, in *Content, opts ...grpc.CallOption) (*Content, error) {
	out := new(Content)
	err := c.cc.Invoke(ctx, "/content.ContentService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) Update(ctx context.Context, in *Content, opts ...grpc.CallOption) (*ContentBoolResponse, error) {
	out := new(ContentBoolResponse)
	err := c.cc.Invoke(ctx, "/content.ContentService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) UpdateImpressionByIdList(ctx context.Context, in *ContentIdListRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error) {
	out := new(ContentBoolResponse)
	err := c.cc.Invoke(ctx, "/content.ContentService/UpdateImpressionByIdList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) UpdateView(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error) {
	out := new(ContentBoolResponse)
	err := c.cc.Invoke(ctx, "/content.ContentService/UpdateView", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) UpdateClick(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error) {
	out := new(ContentBoolResponse)
	err := c.cc.Invoke(ctx, "/content.ContentService/UpdateClick", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) Detaillete(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error) {
	out := new(ContentBoolResponse)
	err := c.cc.Invoke(ctx, "/content.ContentService/Detaillete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetById(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*Content, error) {
	out := new(Content)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetByUuid(ctx context.Context, in *ContentUuidRequest, opts ...grpc.CallOption) (*Content, error) {
	out := new(Content)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetByUuid", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetByUuidAndUser(ctx context.Context, in *ContentUuidAndUserIdRequest, opts ...grpc.CallOption) (*Content, error) {
	out := new(Content)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetByUuidAndUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetListByUser(ctx context.Context, in *ContentUserIdRequest, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetListByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetListBySearch(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetListBySearch", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetLatestList(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetLatestList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetTrendList(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetTrendList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetRecommendedListByUser(ctx context.Context, in *ContentUserIdRequest, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetRecommendedListByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetRecommendedListByContent(ctx context.Context, in *ContentIdRequest, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetRecommendedListByContent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetSoldListByUser(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetSoldListByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetPurchasedListByUser(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetPurchasedListByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetLikedListByUser(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetLikedListByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetViewedListByUser(ctx context.Context, in *ContentSearchRequest, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetViewedListByUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetListByIdList(ctx context.Context, in *ContentIdListRequest, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetListByIdList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) GetAll(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ContentList, error) {
	out := new(ContentList)
	err := c.cc.Invoke(ctx, "/content.ContentService/GetAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) CreateLike(ctx context.Context, in *ContentIdAndUserIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error) {
	out := new(ContentBoolResponse)
	err := c.cc.Invoke(ctx, "/content.ContentService/CreateLike", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contentServiceClient) DeleteLike(ctx context.Context, in *ContentIdAndUserIdRequest, opts ...grpc.CallOption) (*ContentBoolResponse, error) {
	out := new(ContentBoolResponse)
	err := c.cc.Invoke(ctx, "/content.ContentService/DeleteLike", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ContentServiceServer is the server API for ContentService service.
// All implementations should embed UnimplementedContentServiceServer
// for forward compatibility
type ContentServiceServer interface {
	// general
	// create
	Create(context.Context, *Content) (*Content, error)
	// update
	Update(context.Context, *Content) (*ContentBoolResponse, error)
	// update impression
	UpdateImpressionByIdList(context.Context, *ContentIdListRequest) (*ContentBoolResponse, error)
	// update view
	UpdateView(context.Context, *ContentIdRequest) (*ContentBoolResponse, error)
	// update click
	UpdateClick(context.Context, *ContentIdRequest) (*ContentBoolResponse, error)
	// delete
	Detaillete(context.Context, *ContentIdRequest) (*ContentBoolResponse, error)
	// get by id
	GetById(context.Context, *ContentIdRequest) (*Content, error)
	// get by uuid
	GetByUuid(context.Context, *ContentUuidRequest) (*Content, error)
	// get by id and user_id with like
	GetByUuidAndUser(context.Context, *ContentUuidAndUserIdRequest) (*Content, error)
	// get by user
	GetListByUser(context.Context, *ContentUserIdRequest) (*ContentList, error)
	// get by type
	GetListBySearch(context.Context, *ContentSearchRequest) (*ContentList, error)
	// get by latest id=user_id
	GetLatestList(context.Context, *emptypb.Empty) (*ContentList, error)
	// get by trend id=user_id
	GetTrendList(context.Context, *emptypb.Empty) (*ContentList, error)
	// get by recommend id=user_id
	GetRecommendedListByUser(context.Context, *ContentUserIdRequest) (*ContentList, error)
	// get by recommend id=content_id
	GetRecommendedListByContent(context.Context, *ContentIdRequest) (*ContentList, error)
	// get by sold id=user_id
	GetSoldListByUser(context.Context, *ContentSearchRequest) (*ContentList, error)
	GetPurchasedListByUser(context.Context, *ContentSearchRequest) (*ContentList, error)
	// get by liked id=user_id
	GetLikedListByUser(context.Context, *ContentSearchRequest) (*ContentList, error)
	// get viewed list by user id
	GetViewedListByUser(context.Context, *ContentSearchRequest) (*ContentList, error)
	// get list by id list
	GetListByIdList(context.Context, *ContentIdListRequest) (*ContentList, error)
	// admin
	// get all
	GetAll(context.Context, *emptypb.Empty) (*ContentList, error)
	// like
	// update like
	CreateLike(context.Context, *ContentIdAndUserIdRequest) (*ContentBoolResponse, error)
	// delete like
	DeleteLike(context.Context, *ContentIdAndUserIdRequest) (*ContentBoolResponse, error)
}

// UnimplementedContentServiceServer should be embedded to have forward compatible implementations.
type UnimplementedContentServiceServer struct {
}

func (UnimplementedContentServiceServer) Create(context.Context, *Content) (*Content, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedContentServiceServer) Update(context.Context, *Content) (*ContentBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedContentServiceServer) UpdateImpressionByIdList(context.Context, *ContentIdListRequest) (*ContentBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateImpressionByIdList not implemented")
}
func (UnimplementedContentServiceServer) UpdateView(context.Context, *ContentIdRequest) (*ContentBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateView not implemented")
}
func (UnimplementedContentServiceServer) UpdateClick(context.Context, *ContentIdRequest) (*ContentBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateClick not implemented")
}
func (UnimplementedContentServiceServer) Detaillete(context.Context, *ContentIdRequest) (*ContentBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Detaillete not implemented")
}
func (UnimplementedContentServiceServer) GetById(context.Context, *ContentIdRequest) (*Content, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetById not implemented")
}
func (UnimplementedContentServiceServer) GetByUuid(context.Context, *ContentUuidRequest) (*Content, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByUuid not implemented")
}
func (UnimplementedContentServiceServer) GetByUuidAndUser(context.Context, *ContentUuidAndUserIdRequest) (*Content, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByUuidAndUser not implemented")
}
func (UnimplementedContentServiceServer) GetListByUser(context.Context, *ContentUserIdRequest) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByUser not implemented")
}
func (UnimplementedContentServiceServer) GetListBySearch(context.Context, *ContentSearchRequest) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListBySearch not implemented")
}
func (UnimplementedContentServiceServer) GetLatestList(context.Context, *emptypb.Empty) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLatestList not implemented")
}
func (UnimplementedContentServiceServer) GetTrendList(context.Context, *emptypb.Empty) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTrendList not implemented")
}
func (UnimplementedContentServiceServer) GetRecommendedListByUser(context.Context, *ContentUserIdRequest) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRecommendedListByUser not implemented")
}
func (UnimplementedContentServiceServer) GetRecommendedListByContent(context.Context, *ContentIdRequest) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRecommendedListByContent not implemented")
}
func (UnimplementedContentServiceServer) GetSoldListByUser(context.Context, *ContentSearchRequest) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSoldListByUser not implemented")
}
func (UnimplementedContentServiceServer) GetPurchasedListByUser(context.Context, *ContentSearchRequest) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPurchasedListByUser not implemented")
}
func (UnimplementedContentServiceServer) GetLikedListByUser(context.Context, *ContentSearchRequest) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLikedListByUser not implemented")
}
func (UnimplementedContentServiceServer) GetViewedListByUser(context.Context, *ContentSearchRequest) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetViewedListByUser not implemented")
}
func (UnimplementedContentServiceServer) GetListByIdList(context.Context, *ContentIdListRequest) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListByIdList not implemented")
}
func (UnimplementedContentServiceServer) GetAll(context.Context, *emptypb.Empty) (*ContentList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAll not implemented")
}
func (UnimplementedContentServiceServer) CreateLike(context.Context, *ContentIdAndUserIdRequest) (*ContentBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateLike not implemented")
}
func (UnimplementedContentServiceServer) DeleteLike(context.Context, *ContentIdAndUserIdRequest) (*ContentBoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteLike not implemented")
}

// UnsafeContentServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ContentServiceServer will
// result in compilation errors.
type UnsafeContentServiceServer interface {
	mustEmbedUnimplementedContentServiceServer()
}

func RegisterContentServiceServer(s grpc.ServiceRegistrar, srv ContentServiceServer) {
	s.RegisterService(&ContentService_ServiceDesc, srv)
}

func _ContentService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Content)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).Create(ctx, req.(*Content))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Content)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).Update(ctx, req.(*Content))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_UpdateImpressionByIdList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentIdListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).UpdateImpressionByIdList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/UpdateImpressionByIdList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).UpdateImpressionByIdList(ctx, req.(*ContentIdListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_UpdateView_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).UpdateView(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/UpdateView",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).UpdateView(ctx, req.(*ContentIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_UpdateClick_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).UpdateClick(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/UpdateClick",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).UpdateClick(ctx, req.(*ContentIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_Detaillete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).Detaillete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/Detaillete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).Detaillete(ctx, req.(*ContentIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetById(ctx, req.(*ContentIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetByUuid_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentUuidRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetByUuid(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetByUuid",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetByUuid(ctx, req.(*ContentUuidRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetByUuidAndUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentUuidAndUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetByUuidAndUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetByUuidAndUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetByUuidAndUser(ctx, req.(*ContentUuidAndUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetListByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetListByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetListByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetListByUser(ctx, req.(*ContentUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetListBySearch_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentSearchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetListBySearch(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetListBySearch",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetListBySearch(ctx, req.(*ContentSearchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetLatestList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetLatestList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetLatestList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetLatestList(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetTrendList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetTrendList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetTrendList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetTrendList(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetRecommendedListByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetRecommendedListByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetRecommendedListByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetRecommendedListByUser(ctx, req.(*ContentUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetRecommendedListByContent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetRecommendedListByContent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetRecommendedListByContent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetRecommendedListByContent(ctx, req.(*ContentIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetSoldListByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentSearchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetSoldListByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetSoldListByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetSoldListByUser(ctx, req.(*ContentSearchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetPurchasedListByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentSearchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetPurchasedListByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetPurchasedListByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetPurchasedListByUser(ctx, req.(*ContentSearchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetLikedListByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentSearchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetLikedListByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetLikedListByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetLikedListByUser(ctx, req.(*ContentSearchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetViewedListByUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentSearchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetViewedListByUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetViewedListByUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetViewedListByUser(ctx, req.(*ContentSearchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetListByIdList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentIdListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetListByIdList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetListByIdList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetListByIdList(ctx, req.(*ContentIdListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_GetAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).GetAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/GetAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).GetAll(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_CreateLike_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentIdAndUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).CreateLike(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/CreateLike",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).CreateLike(ctx, req.(*ContentIdAndUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContentService_DeleteLike_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContentIdAndUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContentServiceServer).DeleteLike(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/content.ContentService/DeleteLike",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContentServiceServer).DeleteLike(ctx, req.(*ContentIdAndUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ContentService_ServiceDesc is the grpc.ServiceDesc for ContentService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ContentService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "content.ContentService",
	HandlerType: (*ContentServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _ContentService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _ContentService_Update_Handler,
		},
		{
			MethodName: "UpdateImpressionByIdList",
			Handler:    _ContentService_UpdateImpressionByIdList_Handler,
		},
		{
			MethodName: "UpdateView",
			Handler:    _ContentService_UpdateView_Handler,
		},
		{
			MethodName: "UpdateClick",
			Handler:    _ContentService_UpdateClick_Handler,
		},
		{
			MethodName: "Detaillete",
			Handler:    _ContentService_Detaillete_Handler,
		},
		{
			MethodName: "GetById",
			Handler:    _ContentService_GetById_Handler,
		},
		{
			MethodName: "GetByUuid",
			Handler:    _ContentService_GetByUuid_Handler,
		},
		{
			MethodName: "GetByUuidAndUser",
			Handler:    _ContentService_GetByUuidAndUser_Handler,
		},
		{
			MethodName: "GetListByUser",
			Handler:    _ContentService_GetListByUser_Handler,
		},
		{
			MethodName: "GetListBySearch",
			Handler:    _ContentService_GetListBySearch_Handler,
		},
		{
			MethodName: "GetLatestList",
			Handler:    _ContentService_GetLatestList_Handler,
		},
		{
			MethodName: "GetTrendList",
			Handler:    _ContentService_GetTrendList_Handler,
		},
		{
			MethodName: "GetRecommendedListByUser",
			Handler:    _ContentService_GetRecommendedListByUser_Handler,
		},
		{
			MethodName: "GetRecommendedListByContent",
			Handler:    _ContentService_GetRecommendedListByContent_Handler,
		},
		{
			MethodName: "GetSoldListByUser",
			Handler:    _ContentService_GetSoldListByUser_Handler,
		},
		{
			MethodName: "GetPurchasedListByUser",
			Handler:    _ContentService_GetPurchasedListByUser_Handler,
		},
		{
			MethodName: "GetLikedListByUser",
			Handler:    _ContentService_GetLikedListByUser_Handler,
		},
		{
			MethodName: "GetViewedListByUser",
			Handler:    _ContentService_GetViewedListByUser_Handler,
		},
		{
			MethodName: "GetListByIdList",
			Handler:    _ContentService_GetListByIdList_Handler,
		},
		{
			MethodName: "GetAll",
			Handler:    _ContentService_GetAll_Handler,
		},
		{
			MethodName: "CreateLike",
			Handler:    _ContentService_CreateLike_Handler,
		},
		{
			MethodName: "DeleteLike",
			Handler:    _ContentService_DeleteLike_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "content.proto",
}
