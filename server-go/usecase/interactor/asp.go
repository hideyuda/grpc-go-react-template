package interactor

import (
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type AspInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Asp) (*pb.Asp, error)

	// Update
	Update(param *pb.Asp) (bool, error)

	// Delete
	Delete(param *pb.AspIdRequest) (bool, error)

	// Get
	GetById(param *pb.AspIdRequest) (*pb.Asp, error)

	// get by uuid
	// GetByUuid(param *pb.AspUuidRequest) (*pb.Asp, error)

	// get list by user
	GetListByUser(param *pb.AspUserIdRequest) ([]*pb.Asp, error)

	// get list by content
	GetListByContent(param *pb.AspContentIdRequest) ([]*pb.Asp, error)

	// get list by id list
	// GetListByIdList(param *pb.AspIdListRequest) ([]*pb.Asp, error)
}

type AspInteractorImpl struct {
	firebase      usecase.Firebase
	aspRepository usecase.AspRepository
}

func NewAspInteractorImpl(
	fb usecase.Firebase,
	aR usecase.AspRepository,
) AspInteractor {
	return &AspInteractorImpl{
		firebase:      fb,
		aspRepository: aR,
	}
}

func (i *AspInteractorImpl) Create(param *pb.Asp) (*pb.Asp, error) {

	err := i.aspRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *AspInteractorImpl) Update(param *pb.Asp) (bool, error) {

	err := i.aspRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *AspInteractorImpl) Delete(param *pb.AspIdRequest) (bool, error) {

	err := i.aspRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *AspInteractorImpl) GetById(param *pb.AspIdRequest) (*pb.Asp, error) {
	var (
		asp *pb.Asp
		err error
	)

	asp, err = i.aspRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return asp, err
	}

	return asp, nil
}

// func (i *AspInteractorImpl) GetByUuid(param *pb.AspUuidRequest) (*pb.Asp, error) {
// 	var (
// 		asp *pb.Asp
// 		err     error
// 	)

// 	asp, err = i.aspRepository.GetByUuid(param.Uuid)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return param, err
// 	}

// 	return param, nil
// }

// get list by user
func (i *AspInteractorImpl) GetListByUser(param *pb.AspUserIdRequest) ([]*pb.Asp, error) {
	var (
		asps []*pb.Asp
		err  error
	)

	asps, err = i.aspRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return asps, err
	}

	return asps, nil
}

// get list by content
func (i *AspInteractorImpl) GetListByContent(param *pb.AspContentIdRequest) ([]*pb.Asp, error) {
	var (
		asps []*pb.Asp
		err  error
	)

	asps, err = i.aspRepository.GetListByContent(param.ContentId)
	if err != nil {
		log.Println("error is:", err)
		return asps, err
	}

	return asps, nil
}

// // get list by id list
// rpc GetListByIdList (paramIdListRequest) returns (paramList) {}
// func (i *AspInteractorImpl) GetListByIdList(param *pb.AspIdListRequest) ([]*pb.Asp, error) {
// 	var (
// 		asps []*pb.Asp
// 		err   error
// 	)

// 	asps, err = i.aspRepository.GetListByIdList(param.Id)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return asps, err
// 	}

// 	return asps, nil
// }

// // admin
// // get all
// func (i *AspInteractorImpl) GetAll() ([]*pb.Asp, error) {
// 	var (
// 		asps []*pb.Asp
// 		err   error
// 	)

// 	asps, err = i.aspRepository.GetAll()
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return asps, err
// 	}

// 	return asps, nil
// }
