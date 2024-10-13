package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type ViewServiceServer struct {
	pb.UnimplementedViewServiceServer
	ViewInteractor interactor.ViewInteractor
	Db             *database.Db
	Firebase       usecase.Firebase
}

func NewViewSercviceServer(ViewInteractor interactor.ViewInteractor) *ViewServiceServer {
	return &ViewServiceServer{
		ViewInteractor: ViewInteractor,
		Db:             database.NewDb(),
		Firebase:       driver.NewFirebaseImpl(),
	}
}

// create View group
func (s *ViewServiceServer) Create(ctx context.Context, req *pb.View) (*pb.View, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ViewInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update View group
func (s *ViewServiceServer) Update(ctx context.Context, req *pb.View) (*pb.ViewBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ViewInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ViewBoolResponse{Error: res}, nil
}

// delete View group
func (s *ViewServiceServer) Delete(ctx context.Context, req *pb.ViewIdRequest) (*pb.ViewBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ViewInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ViewBoolResponse{Error: res}, nil
}

// get View group by id
func (s *ViewServiceServer) GetById(ctx context.Context, req *pb.ViewIdRequest) (*pb.View, error) {

	res, err := s.ViewInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
// func (s *ViewServiceServer) GetByUuid(ctx context.Context, req *pb.ViewUuidRequest) (*pb.View, error) {

// 	res, err := s.ViewInteractor.GetByUuid(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return res, nil
// }

// get list by user id
func (s *ViewServiceServer) GetListByUser(ctx context.Context, req *pb.ViewUserIdRequest) (*pb.ViewList, error) {

	res, err := s.ViewInteractor.GetListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.ViewList{View: res}, nil
}

// get list by content
func (s *ViewServiceServer) GetListByContent(ctx context.Context, req *pb.ViewContentIdRequest) (*pb.ViewList, error) {

	res, err := s.ViewInteractor.GetListByContent(req)
	if err != nil {
		return nil, err
	}

	return &pb.ViewList{View: res}, nil
}

// get list by id list
// func (s *ViewServiceServer) GetListByIdList(ctx context.Context, req *pb.ViewIdListRequest) (*pb.ViewList, error) {

// 	res, err := s.ViewInteractor.GetListByIdList(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &pb.ViewList{View: res}, nil
// }
