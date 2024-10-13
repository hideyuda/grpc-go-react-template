package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type PointServiceServer struct {
	pb.UnimplementedPointServiceServer
	PointInteractor interactor.PointInteractor
	Db              *database.Db
	Firebase        usecase.Firebase
}

func NewPointSercviceServer(PointInteractor interactor.PointInteractor) *PointServiceServer {
	return &PointServiceServer{
		PointInteractor: PointInteractor,
		Db:              database.NewDb(),
		Firebase:        driver.NewFirebaseImpl(),
	}
}

// create Point group
func (s *PointServiceServer) Create(ctx context.Context, req *pb.Point) (*pb.Point, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.PointInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Point group
func (s *PointServiceServer) Update(ctx context.Context, req *pb.Point) (*pb.PointBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.PointInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.PointBoolResponse{Error: res}, nil
}

// delete Point group
func (s *PointServiceServer) Delete(ctx context.Context, req *pb.PointIdRequest) (*pb.PointBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.PointInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.PointBoolResponse{Error: res}, nil
}

// get Point group by id
func (s *PointServiceServer) GetById(ctx context.Context, req *pb.PointIdRequest) (*pb.Point, error) {

	res, err := s.PointInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
func (s *PointServiceServer) GetByUuid(ctx context.Context, req *pb.PointUuidRequest) (*pb.Point, error) {

	res, err := s.PointInteractor.GetByUuid(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get list by user id
func (s *PointServiceServer) GetListByUser(ctx context.Context, req *pb.PointUserIdRequest) (*pb.PointList, error) {

	res, err := s.PointInteractor.GetListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.PointList{Point: res}, nil
}

// get list by id list
func (s *PointServiceServer) GetListByIdList(ctx context.Context, req *pb.PointIdListRequest) (*pb.PointList, error) {

	res, err := s.PointInteractor.GetListByIdList(req)
	if err != nil {
		return nil, err
	}

	return &pb.PointList{Point: res}, nil
}
