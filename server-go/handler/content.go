package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"

	"google.golang.org/protobuf/types/known/emptypb"
)

type ContentServiceServer struct {
	pb.UnimplementedContentServiceServer
	ContentInteractor interactor.ContentInteractor
	Db                *database.Db
	Firebase          usecase.Firebase
}

func NewContentSercviceServer(ContentInteractor interactor.ContentInteractor) *ContentServiceServer {
	return &ContentServiceServer{
		ContentInteractor: ContentInteractor,
		Db:                database.NewDb(),
		Firebase:          driver.NewFirebaseImpl(),
	}
}

// create Content group
func (s *ContentServiceServer) Create(ctx context.Context, req *pb.Content) (*pb.Content, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ContentInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Content group
func (s *ContentServiceServer) Update(ctx context.Context, req *pb.Content) (*pb.ContentBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ContentInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ContentBoolResponse{Error: res}, nil
}

// update impression
func (s *ContentServiceServer) UpdateImpressionByIdList(ctx context.Context, req *pb.ContentIdListRequest) (*pb.ContentBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ContentInteractor.UpdateImpressionByIdList(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}

	tx.Commit()

	return &pb.ContentBoolResponse{Error: res}, nil
}

// update view
func (s *ContentServiceServer) UpdateView(ctx context.Context, req *pb.ContentIdRequest) (*pb.ContentBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ContentInteractor.UpdateView(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}

	tx.Commit()

	return &pb.ContentBoolResponse{Error: res}, nil
}

// update click
func (s *ContentServiceServer) UpdateClick(ctx context.Context, req *pb.ContentIdRequest) (*pb.ContentBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ContentInteractor.UpdateClick(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}

	tx.Commit()

	return &pb.ContentBoolResponse{Error: res}, nil
}

// update like
func (s *ContentServiceServer) CreateLike(ctx context.Context, req *pb.ContentIdAndUserIdRequest) (*pb.ContentBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ContentInteractor.CreateLike(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}

	tx.Commit()

	return &pb.ContentBoolResponse{Error: res}, nil
}

// update like
func (s *ContentServiceServer) DeleteLike(ctx context.Context, req *pb.ContentIdAndUserIdRequest) (*pb.ContentBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ContentInteractor.DeleteLike(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}

	tx.Commit()

	return &pb.ContentBoolResponse{Error: res}, nil
}

// delete Content group
func (s *ContentServiceServer) Delete(ctx context.Context, req *pb.ContentIdRequest) (*pb.ContentBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ContentInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ContentBoolResponse{Error: res}, nil
}

// get Content group by id
func (s *ContentServiceServer) GetById(ctx context.Context, req *pb.ContentIdRequest) (*pb.Content, error) {

	res, err := s.ContentInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
func (s *ContentServiceServer) GetByUuid(ctx context.Context, req *pb.ContentUuidRequest) (*pb.Content, error) {

	res, err := s.ContentInteractor.GetByUuid(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid and user
func (s *ContentServiceServer) GetByUuidAndUser(ctx context.Context, req *pb.ContentUuidAndUserIdRequest) (*pb.Content, error) {

	res, err := s.ContentInteractor.GetByUuidAndUser(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get Content group by user id
func (s *ContentServiceServer) GetListByUser(ctx context.Context, req *pb.ContentUserIdRequest) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}

// get list by search
func (s *ContentServiceServer) GetListBySearch(ctx context.Context, req *pb.ContentSearchRequest) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetListBySearch(req)
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}

// get latest id=user_id
func (s *ContentServiceServer) GetLatestList(ctx context.Context, req *emptypb.Empty) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetLatestList()
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}

// get trend list by user id
func (s *ContentServiceServer) GetTrendList(ctx context.Context, req *emptypb.Empty) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetTrendList()
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}

// get recommended list by user id
func (s *ContentServiceServer) GetRecommendedListByUser(ctx context.Context, req *pb.ContentUserIdRequest) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetRecommendedListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}

// get recommended list by content id
func (s *ContentServiceServer) GetRecommendedListByContent(ctx context.Context, req *pb.ContentIdRequest) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetRecommendedListByContent(req)
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}

// get sold list by user id
func (s *ContentServiceServer) GetSoldListByUser(ctx context.Context, req *pb.ContentSearchRequest) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetSoldListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}

// get purchased list by user id
func (s *ContentServiceServer) GetPurchasedListByUser(ctx context.Context, req *pb.ContentSearchRequest) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetPurchasedListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}

// get liked list by user id
func (s *ContentServiceServer) GetLikedListByUser(ctx context.Context, req *pb.ContentSearchRequest) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetLikedListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}

// get list by id list
func (s *ContentServiceServer) GetListByIdList(ctx context.Context, req *pb.ContentIdListRequest) (*pb.ContentList, error) {

	res, err := s.ContentInteractor.GetListByIdList(req)
	if err != nil {
		return nil, err
	}

	return &pb.ContentList{Content: res}, nil
}
