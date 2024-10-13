package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
	// "google.golang.org/protobuf/types/known/emptypb"
)

// server is used to implement helloworld.GreeterServer.
type UserServiceServer struct {
	pb.UnimplementedUserServiceServer
	UserInteractor interactor.UserInteractor
	Db             *database.Db
	Firebase       usecase.Firebase
}

func NewUserSercviceServer(userInteractor interactor.UserInteractor) *UserServiceServer {
	return &UserServiceServer{
		UserInteractor: userInteractor,
		Db:             database.NewDb(),
		Firebase:       driver.NewFirebaseImpl(),
	}
}

// create user
func (s *UserServiceServer) Create(ctx context.Context, req *pb.User) (*pb.User, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, handleError(err)
	}

	res, err := s.UserInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, handleError(err)
	}

	tx.Commit()

	return res, nil

}

// update user
func (s *UserServiceServer) Update(ctx context.Context, req *pb.User) (*pb.UserBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, handleError(err)
	}

	res, err := s.UserInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, handleError(err)
	}

	tx.Commit()

	return &pb.UserBoolResponse{Error: res}, nil
}

// delete user
func (s *UserServiceServer) Delete(ctx context.Context, req *pb.UserIdRequest) (*pb.UserBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, handleError(err)
	}

	res, err := s.UserInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, handleError(err)
	}

	tx.Commit()

	return &pb.UserBoolResponse{Error: res}, nil
}

// get user by id
func (s *UserServiceServer) GetById(ctx context.Context, req *pb.UserIdRequest) (*pb.User, error) {

	res, err := s.UserInteractor.GetById(req)
	if err != nil {
		return nil, handleError(err)
	}

	return res, nil
}

// get user by uuid
func (s *UserServiceServer) GetByUuid(ctx context.Context, req *pb.UserUuidRequest) (*pb.User, error) {

	res, err := s.UserInteractor.GetByUuid(req)
	if err != nil {
		return nil, handleError(err)
	}

	return res, nil
}

// admin
// get all user
// func (s *UserServiceServer) GetAll(ctx context.Context, req *emptypb.Empty) (*pb.UserList, error) {

// 	res, err := s.UserInteractor.GetAll()
// 	if err != nil {
// 		return nil, handleError(err)
// 	}

// 	return &pb.UserList{User: res}, nil
// }

// auth
// sign in
func (s *UserServiceServer) SignIn(ctx context.Context, req *pb.SignInRequest) (*pb.User, error) {

	res, err := s.UserInteractor.SignIn(req)
	if err != nil {
		return nil, handleError(err)
	}

	return res, nil
}

// sign in with google
func (s *UserServiceServer) SignInWithGoogle(ctx context.Context, req *pb.User) (*pb.User, error) {

	res, err := s.UserInteractor.SignInWithGoogle(req)
	if err != nil {
		return nil, handleError(err)
	}

	return res, nil
}
