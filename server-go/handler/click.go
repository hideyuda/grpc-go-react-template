package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type ClickServiceServer struct {
	pb.UnimplementedClickServiceServer
	ClickInteractor interactor.ClickInteractor
	Db              *database.Db
	Firebase        usecase.Firebase
}

func NewClickSercviceServer(ClickInteractor interactor.ClickInteractor) *ClickServiceServer {
	return &ClickServiceServer{
		ClickInteractor: ClickInteractor,
		Db:              database.NewDb(),
		Firebase:        driver.NewFirebaseImpl(),
	}
}

// create Click group
func (s *ClickServiceServer) Create(ctx context.Context, req *pb.Click) (*pb.Click, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ClickInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Click group
func (s *ClickServiceServer) Update(ctx context.Context, req *pb.Click) (*pb.ClickBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ClickInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ClickBoolResponse{Error: res}, nil
}

// delete Click group
func (s *ClickServiceServer) Delete(ctx context.Context, req *pb.ClickIdRequest) (*pb.ClickBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ClickInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ClickBoolResponse{Error: res}, nil
}

// get Click group by id
func (s *ClickServiceServer) GetById(ctx context.Context, req *pb.ClickIdRequest) (*pb.Click, error) {

	res, err := s.ClickInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
// func (s *ClickServiceServer) GetByUuid(ctx context.Context, req *pb.ClickUuidRequest) (*pb.Click, error) {

// 	res, err := s.ClickInteractor.GetByUuid(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return res, nil
// }

// get list by user id
func (s *ClickServiceServer) GetListByUser(ctx context.Context, req *pb.ClickUserIdRequest) (*pb.ClickList, error) {

	res, err := s.ClickInteractor.GetListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.ClickList{Click: res}, nil
}

// get list by content
func (s *ClickServiceServer) GetListByContent(ctx context.Context, req *pb.ClickContentIdRequest) (*pb.ClickList, error) {

	res, err := s.ClickInteractor.GetListByContent(req)
	if err != nil {
		return nil, err
	}

	return &pb.ClickList{Click: res}, nil
}

// get list by id list
// func (s *ClickServiceServer) GetListByIdList(ctx context.Context, req *pb.ClickIdListRequest) (*pb.ClickList, error) {

// 	res, err := s.ClickInteractor.GetListByIdList(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &pb.ClickList{Click: res}, nil
// }
