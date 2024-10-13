package interactor

import (
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ViewInteractor interface {
	// Gest API
	// Create
	Create(param *pb.View) (*pb.View, error)

	// Update
	Update(param *pb.View) (bool, error)

	// Delete
	Delete(param *pb.ViewIdRequest) (bool, error)

	// Get
	GetById(param *pb.ViewIdRequest) (*pb.View, error)

	// get by uuid
	// GetByUuid(param *pb.ViewUuidRequest) (*pb.View, error)

	// get list by user
	GetListByUser(param *pb.ViewUserIdRequest) ([]*pb.View, error)

	// get list by content
	GetListByContent(param *pb.ViewContentIdRequest) ([]*pb.View, error)

	// get list by id list
	// GetListByIdList(param *pb.ViewIdListRequest) ([]*pb.View, error)
}

type ViewInteractorImpl struct {
	firebase       usecase.Firebase
	viewRepository usecase.ViewRepository
}

func NewViewInteractorImpl(
	fb usecase.Firebase,
	vR usecase.ViewRepository,
) ViewInteractor {
	return &ViewInteractorImpl{
		firebase:       fb,
		viewRepository: vR,
	}
}

func (i *ViewInteractorImpl) Create(param *pb.View) (*pb.View, error) {

	err := i.viewRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *ViewInteractorImpl) Update(param *pb.View) (bool, error) {

	err := i.viewRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *ViewInteractorImpl) Delete(param *pb.ViewIdRequest) (bool, error) {

	err := i.viewRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *ViewInteractorImpl) GetById(param *pb.ViewIdRequest) (*pb.View, error) {
	var (
		view *pb.View
		err  error
	)

	view, err = i.viewRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return view, err
	}

	return view, nil
}

// func (i *ViewInteractorImpl) GetByUuid(param *pb.ViewUuidRequest) (*pb.View, error) {
// 	var (
// 		view *pb.View
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
func (i *ViewInteractorImpl) GetListByUser(param *pb.ViewUserIdRequest) ([]*pb.View, error) {
	var (
		views []*pb.View
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
func (i *ViewInteractorImpl) GetListByContent(param *pb.ViewContentIdRequest) ([]*pb.View, error) {
	var (
		views []*pb.View
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
// func (i *ViewInteractorImpl) GetListByIdList(param *pb.ViewIdListRequest) ([]*pb.View, error) {
// 	var (
// 		views []*pb.View
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
// func (i *ViewInteractorImpl) GetAll() ([]*pb.View, error) {
// 	var (
// 		views []*pb.View
// 		err   error
// 	)

// 	views, err = i.viewRepository.GetAll()
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return views, err
// 	}

// 	return views, nil
// }
