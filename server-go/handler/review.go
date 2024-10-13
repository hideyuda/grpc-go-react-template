package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type ReviewServiceServer struct {
	pb.UnimplementedReviewServiceServer
	ReviewInteractor interactor.ReviewInteractor
	Db               *database.Db
	Firebase         usecase.Firebase
}

func NewReviewSercviceServer(ReviewInteractor interactor.ReviewInteractor) *ReviewServiceServer {
	return &ReviewServiceServer{
		ReviewInteractor: ReviewInteractor,
		Db:               database.NewDb(),
		Firebase:         driver.NewFirebaseImpl(),
	}
}

// create Review group
func (s *ReviewServiceServer) Create(ctx context.Context, req *pb.Review) (*pb.Review, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ReviewInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Review group
func (s *ReviewServiceServer) Update(ctx context.Context, req *pb.Review) (*pb.ReviewBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ReviewInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ReviewBoolResponse{Error: res}, nil
}

// delete Review group
func (s *ReviewServiceServer) Delete(ctx context.Context, req *pb.ReviewIdRequest) (*pb.ReviewBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ReviewInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ReviewBoolResponse{Error: res}, nil
}

// get Review group by id
func (s *ReviewServiceServer) GetById(ctx context.Context, req *pb.ReviewIdRequest) (*pb.Review, error) {

	res, err := s.ReviewInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
// func (s *ReviewServiceServer) GetByUuid(ctx context.Context, req *pb.ReviewUuidRequest) (*pb.Review, error) {

// 	res, err := s.ReviewInteractor.GetByUuid(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return res, nil
// }

// get list by user id
func (s *ReviewServiceServer) GetListByUser(ctx context.Context, req *pb.ReviewUserIdRequest) (*pb.ReviewList, error) {

	res, err := s.ReviewInteractor.GetListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.ReviewList{Review: res}, nil
}

// get list by content
func (s *ReviewServiceServer) GetListByContent(ctx context.Context, req *pb.ReviewContentIdRequest) (*pb.ReviewList, error) {

	res, err := s.ReviewInteractor.GetListByContent(req)
	if err != nil {
		return nil, err
	}

	return &pb.ReviewList{Review: res}, nil
}

// get list by id list
// func (s *ReviewServiceServer) GetListByIdList(ctx context.Context, req *pb.ReviewIdListRequest) (*pb.ReviewList, error) {

// 	res, err := s.ReviewInteractor.GetListByIdList(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &pb.ReviewList{Review: res}, nil
// }
