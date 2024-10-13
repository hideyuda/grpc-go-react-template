package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type AspServiceServer struct {
	pb.UnimplementedAspServiceServer
	AspInteractor interactor.AspInteractor
	Db            *database.Db
	Firebase      usecase.Firebase
}

func NewAspSercviceServer(AspInteractor interactor.AspInteractor) *AspServiceServer {
	return &AspServiceServer{
		AspInteractor: AspInteractor,
		Db:            database.NewDb(),
		Firebase:      driver.NewFirebaseImpl(),
	}
}

// create Asp group
func (s *AspServiceServer) Create(ctx context.Context, req *pb.Asp) (*pb.Asp, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.AspInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Asp group
func (s *AspServiceServer) Update(ctx context.Context, req *pb.Asp) (*pb.AspBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.AspInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.AspBoolResponse{Error: res}, nil
}

// delete Asp group
func (s *AspServiceServer) Delete(ctx context.Context, req *pb.AspIdRequest) (*pb.AspBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.AspInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.AspBoolResponse{Error: res}, nil
}

// get Asp group by id
func (s *AspServiceServer) GetById(ctx context.Context, req *pb.AspIdRequest) (*pb.Asp, error) {

	res, err := s.AspInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
// func (s *AspServiceServer) GetByUuid(ctx context.Context, req *pb.AspUuidRequest) (*pb.Asp, error) {

// 	res, err := s.AspInteractor.GetByUuid(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return res, nil
// }

// get list by user id
func (s *AspServiceServer) GetListByUser(ctx context.Context, req *pb.AspUserIdRequest) (*pb.AspList, error) {

	res, err := s.AspInteractor.GetListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.AspList{Asp: res}, nil
}

// get list by content
func (s *AspServiceServer) GetListByContent(ctx context.Context, req *pb.AspContentIdRequest) (*pb.AspList, error) {

	res, err := s.AspInteractor.GetListByContent(req)
	if err != nil {
		return nil, err
	}

	return &pb.AspList{Asp: res}, nil
}

// get list by id list
// func (s *AspServiceServer) GetListByIdList(ctx context.Context, req *pb.AspIdListRequest) (*pb.AspList, error) {

// 	res, err := s.AspInteractor.GetListByIdList(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &pb.AspList{Asp: res}, nil
// }
