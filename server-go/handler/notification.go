package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type NotificationServiceServer struct {
	pb.UnimplementedNotificationServiceServer
	NotificationInteractor interactor.NotificationInteractor
	Db                     *database.Db
	Firebase               usecase.Firebase
}

func NewNotificationSercviceServer(NotificationInteractor interactor.NotificationInteractor) *NotificationServiceServer {
	return &NotificationServiceServer{
		NotificationInteractor: NotificationInteractor,
		Db:                     database.NewDb(),
		Firebase:               driver.NewFirebaseImpl(),
	}
}

// create Notification group
func (s *NotificationServiceServer) Create(ctx context.Context, req *pb.Notification) (*pb.Notification, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.NotificationInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Notification group
func (s *NotificationServiceServer) Update(ctx context.Context, req *pb.Notification) (*pb.NotificationBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.NotificationInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.NotificationBoolResponse{Error: res}, nil
}

// update is_read when user read notification
func (s *NotificationServiceServer) UpdateIsRead(ctx context.Context, req *pb.NotificationUuidRequest) (*pb.NotificationBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.NotificationInteractor.UpdateIsRead(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}

	tx.Commit()

	return &pb.NotificationBoolResponse{Error: res}, nil
}

// delete Notification group
func (s *NotificationServiceServer) Delete(ctx context.Context, req *pb.NotificationIdRequest) (*pb.NotificationBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.NotificationInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.NotificationBoolResponse{Error: res}, nil
}

// get Notification group by id
func (s *NotificationServiceServer) GetById(ctx context.Context, req *pb.NotificationIdRequest) (*pb.Notification, error) {

	res, err := s.NotificationInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
func (s *NotificationServiceServer) GetByUuid(ctx context.Context, req *pb.NotificationUuidRequest) (*pb.Notification, error) {

	res, err := s.NotificationInteractor.GetByUuid(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get list by receive user id
func (s *NotificationServiceServer) GetListByReceiveUser(ctx context.Context, req *pb.NotificationUserIdRequest) (*pb.NotificationList, error) {

	res, err := s.NotificationInteractor.GetListByReceiveUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.NotificationList{Notification: res}, nil
}

// get unread list by receive user id
func (s *NotificationServiceServer) GetUnreadListByReceiveUser(ctx context.Context, req *pb.NotificationUserIdRequest) (*pb.NotificationList, error) {

	res, err := s.NotificationInteractor.GetUnreadListByReceiveUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.NotificationList{Notification: res}, nil
}

// get list by send user id
func (s *NotificationServiceServer) GetListBySendUser(ctx context.Context, req *pb.NotificationUserIdRequest) (*pb.NotificationList, error) {

	res, err := s.NotificationInteractor.GetListBySendUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.NotificationList{Notification: res}, nil
}

// get list by id list
// func (s *NotificationServiceServer) GetListByIdList(ctx context.Context, req *pb.NotificationIdListRequest) (*pb.NotificationList, error) {

// 	res, err := s.NotificationInteractor.GetListByIdList(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &pb.NotificationList{Notification: res}, nil
// }
