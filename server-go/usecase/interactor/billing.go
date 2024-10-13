package interactor

import (
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type BillingInteractor interface {
	// Gest API
	// Create
	Create(billing *pb.Billing) (*pb.Billing, error)

	// Update
	Update(billing *pb.Billing) (bool, error)

	// Delete
	Delete(param *pb.BillingIdRequest) (bool, error)

	// Get
	GetById(param *pb.BillingIdRequest) (*pb.Billing, error)

	// get by uuid
	GetByUuid(param *pb.BillingUuidRequest) (*pb.Billing, error)

	// get list by user

	// get list by id list
	// GetListByIdList(param *pb.BillingIdListRequest) ([]*pb.Billing, error)
}

type BillingInteractorImpl struct {
	firebase          usecase.Firebase
	billingRepository usecase.BillingRepository
}

func NewBillingInteractorImpl(
	fb usecase.Firebase,
	bR usecase.BillingRepository,
) BillingInteractor {
	return &BillingInteractorImpl{
		firebase:          fb,
		billingRepository: bR,
	}
}

func (i *BillingInteractorImpl) Create(billing *pb.Billing) (*pb.Billing, error) {

	err := i.billingRepository.Create(billing)
	if err != nil {
		return billing, err
	}

	return billing, nil
}

func (i *BillingInteractorImpl) Update(billing *pb.Billing) (bool, error) {

	err := i.billingRepository.Update(billing)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *BillingInteractorImpl) Delete(param *pb.BillingIdRequest) (bool, error) {

	err := i.billingRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *BillingInteractorImpl) GetById(param *pb.BillingIdRequest) (*pb.Billing, error) {
	var (
		billing *pb.Billing
		err     error
	)

	billing, err = i.billingRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return billing, err
	}

	return billing, nil
}

func (i *BillingInteractorImpl) GetByUuid(param *pb.BillingUuidRequest) (*pb.Billing, error) {
	var (
		billing *pb.Billing
		err     error
	)

	billing, err = i.billingRepository.GetByUuid(param.Uuid)
	if err != nil {
		log.Println("error is:", err)
		return billing, err
	}

	return billing, nil
}

// get list by user
func (i *BillingInteractorImpl) GetListByUser(param *pb.BillingUserIdRequest) ([]*pb.Billing, error) {
	var (
		billings []*pb.Billing
		err      error
	)

	billings, err = i.billingRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return billings, err
	}

	return billings, nil
}

// // get list by id list
// rpc GetListByIdList (billingIdListRequest) returns (billingList) {}
// func (i *BillingInteractorImpl) GetListByIdList(param *pb.BillingIdListRequest) ([]*pb.Billing, error) {
// 	var (
// 		billings []*pb.Billing
// 		err   error
// 	)

// 	billings, err = i.billingRepository.GetListByIdList(param.Id)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return billings, err
// 	}

// 	return billings, nil
// }

// // admin
// // get all
// func (i *BillingInteractorImpl) GetAll() ([]*pb.Billing, error) {
// 	var (
// 		billings []*pb.Billing
// 		err   error
// 	)

// 	billings, err = i.billingRepository.GetAll()
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return billings, err
// 	}

// 	return billings, nil
// }
