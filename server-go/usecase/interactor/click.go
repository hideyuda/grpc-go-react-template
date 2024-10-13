package interactor

import (
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ClickInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Click) (*pb.Click, error)

	// Update
	Update(param *pb.Click) (bool, error)

	// Delete
	Delete(param *pb.ClickIdRequest) (bool, error)

	// Get
	GetById(param *pb.ClickIdRequest) (*pb.Click, error)

	// get by uuid
	// GetByUuid(param *pb.ClickUuidRequest) (*pb.Click, error)

	// get list by user
	GetListByUser(param *pb.ClickUserIdRequest) ([]*pb.Click, error)

	// get list by content
	GetListByContent(param *pb.ClickContentIdRequest) ([]*pb.Click, error)

	// get list by id list
	// GetListByIdList(param *pb.ClickIdListRequest) ([]*pb.Click, error)
}

type ClickInteractorImpl struct {
	firebase       usecase.Firebase
	viewRepository usecase.ClickRepository
}

func NewClickInteractorImpl(
	fb usecase.Firebase,
	vR usecase.ClickRepository,
) ClickInteractor {
	return &ClickInteractorImpl{
		firebase:       fb,
		viewRepository: vR,
	}
}

func (i *ClickInteractorImpl) Create(param *pb.Click) (*pb.Click, error) {

	err := i.viewRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *ClickInteractorImpl) Update(param *pb.Click) (bool, error) {

	err := i.viewRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *ClickInteractorImpl) Delete(param *pb.ClickIdRequest) (bool, error) {

	err := i.viewRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *ClickInteractorImpl) GetById(param *pb.ClickIdRequest) (*pb.Click, error) {
	var (
		view *pb.Click
		err  error
	)

	view, err = i.viewRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return view, err
	}

	return view, nil
}

// func (i *ClickInteractorImpl) GetByUuid(param *pb.ClickUuidRequest) (*pb.Click, error) {
// 	var (
// 		view *pb.Click
// 		err     error
// 	)

// 	view, err = i.viewRepository.GetByUuid(param.Uuid)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return param, err
// 	}

// 	return param, nil
// }

// get list by user
func (i *ClickInteractorImpl) GetListByUser(param *pb.ClickUserIdRequest) ([]*pb.Click, error) {
	var (
		views []*pb.Click
		err   error
	)

	views, err = i.viewRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return views, err
	}

	return views, nil
}

// get list by content
func (i *ClickInteractorImpl) GetListByContent(param *pb.ClickContentIdRequest) ([]*pb.Click, error) {
	var (
		views []*pb.Click
		err   error
	)

	views, err = i.viewRepository.GetListByContent(param.ContentId)
	if err != nil {
		log.Println("error is:", err)
		return views, err
	}

	return views, nil
}

// // get list by id list
// rpc GetListByIdList (paramIdListRequest) returns (paramList) {}
// func (i *ClickInteractorImpl) GetListByIdList(param *pb.ClickIdListRequest) ([]*pb.Click, error) {
// 	var (
// 		views []*pb.Click
// 		err   error
// 	)

// 	views, err = i.viewRepository.GetListByIdList(param.Id)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return views, err
// 	}

// 	return views, nil
// }

// // admin
// // get all
// func (i *ClickInteractorImpl) GetAll() ([]*pb.Click, error) {
// 	var (
// 		views []*pb.Click
// 		err   error
// 	)

// 	views, err = i.viewRepository.GetAll()
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return views, err
// 	}

// 	return views, nil
// }
