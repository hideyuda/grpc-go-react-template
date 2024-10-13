package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type FollowingServiceServer struct {
	pb.UnimplementedFollowingServiceServer
	FollowingInteractor interactor.FollowingInteractor
	Db                  *database.Db
	Firebase            usecase.Firebase
}

func NewFollowingSercviceServer(FollowingInteractor interactor.FollowingInteractor) *FollowingServiceServer {
	return &FollowingServiceServer{
		FollowingInteractor: FollowingInteractor,
		Db:                  database.NewDb(),
		Firebase:            driver.NewFirebaseImpl(),
	}
}

// create Following group
func (s *FollowingServiceServer) Create(ctx context.Context, req *pb.Following) (*pb.Following, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.FollowingInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Following group
func (s *FollowingServiceServer) Update(ctx context.Context, req *pb.Following) (*pb.FollowingBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.FollowingInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.FollowingBoolResponse{Error: res}, nil
}

// delete Following group
func (s *FollowingServiceServer) Delete(ctx context.Context, req *pb.FollowingIdRequest) (*pb.FollowingBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.FollowingInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.FollowingBoolResponse{Error: res}, nil
}

// get Following group by id
func (s *FollowingServiceServer) GetById(ctx context.Context, req *pb.FollowingIdRequest) (*pb.Following, error) {

	res, err := s.FollowingInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
// func (s *FollowingServiceServer) GetByUuid(ctx context.Context, req *pb.FollowingUuidRequest) (*pb.Following, error) {

// 	res, err := s.FollowingInteractor.GetByUuid(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return res, nil
// }

// get following list by user id
func (s *FollowingServiceServer) GetFollowingListByUser(ctx context.Context, req *pb.FollowingUserIdRequest) (*pb.FollowingList, error) {

	res, err := s.FollowingInteractor.GetFollowingListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.FollowingList{Following: res}, nil
}

// get follwed list by user id
func (s *FollowingServiceServer) GetFollowedListByUser(ctx context.Context, req *pb.FollowingUserIdRequest) (*pb.FollowingList, error) {

	res, err := s.FollowingInteractor.GetFollowedListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.FollowingList{Following: res}, nil
}

// get list by id list
// func (s *FollowingServiceServer) GetListByIdList(ctx context.Context, req *pb.FollowingIdListRequest) (*pb.FollowingList, error) {

// 	res, err := s.FollowingInteractor.GetListByIdList(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &pb.FollowingList{Following: res}, nil
// }
