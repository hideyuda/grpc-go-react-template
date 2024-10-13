package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type OrderServiceServer struct {
	pb.UnimplementedOrderServiceServer
	OrderInteractor interactor.OrderInteractor
	Db              *database.Db
	Firebase        usecase.Firebase
}

func NewOrderSercviceServer(OrderInteractor interactor.OrderInteractor) *OrderServiceServer {
	return &OrderServiceServer{
		OrderInteractor: OrderInteractor,
		Db:              database.NewDb(),
		Firebase:        driver.NewFirebaseImpl(),
	}
}

// create Order group
func (s *OrderServiceServer) Create(ctx context.Context, req *pb.Order) (*pb.Order, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.OrderInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Order group
func (s *OrderServiceServer) Update(ctx context.Context, req *pb.Order) (*pb.OrderBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.OrderInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.OrderBoolResponse{Error: res}, nil
}

// delete Order group
func (s *OrderServiceServer) Delete(ctx context.Context, req *pb.OrderIdRequest) (*pb.OrderBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.OrderInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.OrderBoolResponse{Error: res}, nil
}

// get Order group by id
func (s *OrderServiceServer) GetById(ctx context.Context, req *pb.OrderIdRequest) (*pb.Order, error) {

	res, err := s.OrderInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
func (s *OrderServiceServer) GetByUuid(ctx context.Context, req *pb.OrderUuidRequest) (*pb.Order, error) {

	res, err := s.OrderInteractor.GetByUuid(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get sold list by user
func (s *OrderServiceServer) GetSoldListByUser(ctx context.Context, req *pb.OrderUserIdRequest) (*pb.OrderList, error) {

	res, err := s.OrderInteractor.GetSoldListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.OrderList{Order: res}, nil
}

// get purchased list by user
func (s *OrderServiceServer) GetPurchasedListByUser(ctx context.Context, req *pb.OrderUserIdRequest) (*pb.OrderList, error) {

	res, err := s.OrderInteractor.GetPurchasedListByUser(req)
	if err != nil {
		return nil, err
	}

	return &pb.OrderList{Order: res}, nil
}

// get list by id list
func (s *OrderServiceServer) GetListByIdList(ctx context.Context, req *pb.OrderIdListRequest) (*pb.OrderList, error) {

	res, err := s.OrderInteractor.GetListByIdList(req)
	if err != nil {
		return nil, err
	}

	return &pb.OrderList{Order: res}, nil
}
