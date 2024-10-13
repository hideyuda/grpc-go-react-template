package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type LikeServiceServer struct {
	pb.UnimplementedLikeServiceServer
	LikeInteractor interactor.LikeInteractor
	Db             *database.Db
	Firebase       usecase.Firebase
}

func NewLikeSercviceServer(LikeInteractor interactor.LikeInteractor) *LikeServiceServer {
	return &LikeServiceServer{
		LikeInteractor: LikeInteractor,
		Db:             database.NewDb(),
		Firebase:       driver.NewFirebaseImpl(),
	}
}

// create Like group
func (s *LikeServiceServer) Create(ctx context.Context, req *pb.Like) (*pb.Like, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.LikeInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Like group
func (s *LikeServiceServer) Update(ctx context.Context, req *pb.Like) (*pb.LikeBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.LikeInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.LikeBoolResponse{Error: res}, nil
}

// delete Like group
func (s *LikeServiceServer) Delete(ctx context.Context, req *pb.LikeIdRequest) (*pb.LikeBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.LikeInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.LikeBoolResponse{Error: res}, nil
}

// get Like group by id
func (s *LikeServiceServer) GetById(ctx context.Context, req *pb.LikeIdRequest) (*pb.Like, error) {

	res, err := s.LikeInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
// func (s *LikeServiceServer) GetByUuid(ctx context.Context, req *pb.LikeUuidRequest) (*pb.Like, error) {

// 	res, err := s.LikeInteractor.GetByUuid(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return res, nil
// }

// get list by user id
func (s *LikeServiceServer) GetListByUser(ctx context.Context, req *pb.LikeUserIdRequest) (*pb.LikeList, error) {

	res, err := s.LikeInteractor.GetListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.LikeList{Like: res}, nil
}

// get list by content
func (s *LikeServiceServer) GetListByContent(ctx context.Context, req *pb.LikeContentIdRequest) (*pb.LikeList, error) {

	res, err := s.LikeInteractor.GetListByContent(req)
	if err != nil {
		return nil, err
	}

	return &pb.LikeList{Like: res}, nil
}

// get list by id list
// func (s *LikeServiceServer) GetListByIdList(ctx context.Context, req *pb.LikeIdListRequest) (*pb.LikeList, error) {

// 	res, err := s.LikeInteractor.GetListByIdList(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &pb.LikeList{Like: res}, nil
// }
