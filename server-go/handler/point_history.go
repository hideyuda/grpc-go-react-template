package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type PointHistoryServiceServer struct {
	pb.UnimplementedPointHistoryServiceServer
	PointHistoryInteractor interactor.PointHistoryInteractor
	Db                     *database.Db
	Firebase               usecase.Firebase
}

func NewPointHistorySercviceServer(PointHistoryInteractor interactor.PointHistoryInteractor) *PointHistoryServiceServer {
	return &PointHistoryServiceServer{
		PointHistoryInteractor: PointHistoryInteractor,
		Db:                     database.NewDb(),
		Firebase:               driver.NewFirebaseImpl(),
	}
}

// create PointHistory group
func (s *PointHistoryServiceServer) Create(ctx context.Context, req *pb.PointHistory) (*pb.PointHistory, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.PointHistoryInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update PointHistory group
func (s *PointHistoryServiceServer) Update(ctx context.Context, req *pb.PointHistory) (*pb.PointHistoryBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.PointHistoryInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.PointHistoryBoolResponse{Error: res}, nil
}

// delete PointHistory group
func (s *PointHistoryServiceServer) Delete(ctx context.Context, req *pb.PointHistoryIdRequest) (*pb.PointHistoryBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.PointHistoryInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.PointHistoryBoolResponse{Error: res}, nil
}

// get PointHistory group by id
func (s *PointHistoryServiceServer) GetById(ctx context.Context, req *pb.PointHistoryIdRequest) (*pb.PointHistory, error) {

	res, err := s.PointHistoryInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
func (s *PointHistoryServiceServer) GetByUuid(ctx context.Context, req *pb.PointHistoryUuidRequest) (*pb.PointHistory, error) {

	res, err := s.PointHistoryInteractor.GetByUuid(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get purchased list by user
func (s *PointHistoryServiceServer) GetPurchasedListByUser(ctx context.Context, req *pb.PointHistoryUserIdRequest) (*pb.PointHistoryList, error) {

	res, err := s.PointHistoryInteractor.GetPurchasedListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.PointHistoryList{PointHistory: res}, nil
}

// get list by id list
func (s *PointHistoryServiceServer) GetListByIdList(ctx context.Context, req *pb.PointHistoryIdListRequest) (*pb.PointHistoryList, error) {

	res, err := s.PointHistoryInteractor.GetListByIdList(req)
	if err != nil {
		return nil, err
	}

	return &pb.PointHistoryList{PointHistory: res}, nil
}
