package handler

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type BillingServiceServer struct {
	pb.UnimplementedBillingServiceServer
	BillingInteractor interactor.BillingInteractor
	Db                *database.Db
	Firebase          usecase.Firebase
}

func NewBillingSercviceServer(BillingInteractor interactor.BillingInteractor) *BillingServiceServer {
	return &BillingServiceServer{
		BillingInteractor: BillingInteractor,
		Db:                database.NewDb(),
		Firebase:          driver.NewFirebaseImpl(),
	}
}

// create Billing group
func (s *BillingServiceServer) Create(ctx context.Context, req *pb.Billing) (*pb.Billing, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.BillingInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update Billing group
func (s *BillingServiceServer) Update(ctx context.Context, req *pb.Billing) (*pb.BillingBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.BillingInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.BillingBoolResponse{Error: res}, nil
}

// delete Billing group
func (s *BillingServiceServer) Delete(ctx context.Context, req *pb.BillingIdRequest) (*pb.BillingBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.BillingInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.BillingBoolResponse{Error: res}, nil
}

// get Billing group by id
func (s *BillingServiceServer) GetById(ctx context.Context, req *pb.BillingIdRequest) (*pb.Billing, error) {

	res, err := s.BillingInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get by uuid
func (s *BillingServiceServer) GetByUuid(ctx context.Context, req *pb.BillingUuidRequest) (*pb.Billing, error) {

	res, err := s.BillingInteractor.GetByUuid(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// // get list by user id
// func (s *BillingServiceServer) GetListByUser(ctx context.Context, req *pb.BillingUserIdRequest) (*pb.BillingList, error) {

// 	res, err := s.BillingInteractor.GetListByUser(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &pb.BillingList{Billing: res}, nil
// }

// // get list by id list
// func (s *BillingServiceServer) GetListByIdList(ctx context.Context, req *pb.BillingIdListRequest) (*pb.BillingList, error) {

// 	res, err := s.BillingInteractor.GetListByIdList(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &pb.BillingList{Billing: res}, nil
// }
