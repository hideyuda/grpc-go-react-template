package interactor

import (
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ReviewInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Review) (*pb.Review, error)

	// Update
	Update(param *pb.Review) (bool, error)

	// Delete
	Delete(param *pb.ReviewIdRequest) (bool, error)

	// Get
	GetById(param *pb.ReviewIdRequest) (*pb.Review, error)

	// get by uuid
	// GetByUuid(param *pb.ReviewUuidRequest) (*pb.Review, error)

	// get list by user
	GetListByUser(param *pb.ReviewUserIdRequest) ([]*pb.Review, error)

	// get list by content
	GetListByContent(param *pb.ReviewContentIdRequest) ([]*pb.Review, error)

	// get list by id list
	// GetListByIdList(param *pb.ReviewIdListRequest) ([]*pb.Review, error)
}

type ReviewInteractorImpl struct {
	firebase         usecase.Firebase
	reviewRepository usecase.ReviewRepository
}

func NewReviewInteractorImpl(
	fb usecase.Firebase,
	rR usecase.ReviewRepository,
) ReviewInteractor {
	return &ReviewInteractorImpl{
		firebase:         fb,
		reviewRepository: rR,
	}
}

func (i *ReviewInteractorImpl) Create(param *pb.Review) (*pb.Review, error) {

	err := i.reviewRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *ReviewInteractorImpl) Update(param *pb.Review) (bool, error) {

	err := i.reviewRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *ReviewInteractorImpl) Delete(param *pb.ReviewIdRequest) (bool, error) {

	err := i.reviewRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *ReviewInteractorImpl) GetById(param *pb.ReviewIdRequest) (*pb.Review, error) {
	var (
		review *pb.Review
		err    error
	)

	review, err = i.reviewRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return review, err
	}

	return review, nil
}

// func (i *ReviewInteractorImpl) GetByUuid(param *pb.ReviewUuidRequest) (*pb.Review, error) {
// 	var (
// 		review *pb.Review
// 		err     error
// 	)

// 	review, err = i.reviewRepository.GetByUuid(param.Uuid)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return param, err
// 	}

// 	return param, nil
// }

// get list by user
func (i *ReviewInteractorImpl) GetListByUser(param *pb.ReviewUserIdRequest) ([]*pb.Review, error) {
	var (
		reviews []*pb.Review
		err     error
	)

	reviews, err = i.reviewRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return reviews, err
	}

	return reviews, nil
}

// get list by content
func (i *ReviewInteractorImpl) GetListByContent(param *pb.ReviewContentIdRequest) ([]*pb.Review, error) {
	var (
		reviews []*pb.Review
		err     error
	)

	reviews, err = i.reviewRepository.GetListByContent(param.ContentId)
	if err != nil {
		log.Println("error is:", err)
		return reviews, err
	}

	return reviews, nil
}

// // get list by id list
// rpc GetListByIdList (paramIdListRequest) returns (paramList) {}
// func (i *ReviewInteractorImpl) GetListByIdList(param *pb.ReviewIdListRequest) ([]*pb.Review, error) {
// 	var (
// 		reviews []*pb.Review
// 		err   error
// 	)

// 	reviews, err = i.reviewRepository.GetListByIdList(param.Id)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return reviews, err
// 	}

// 	return reviews, nil
// }

// // admin
// // get all
// func (i *ReviewInteractorImpl) GetAll() ([]*pb.Review, error) {
// 	var (
// 		reviews []*pb.Review
// 		err   error
// 	)

// 	reviews, err = i.reviewRepository.GetAll()
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return reviews, err
// 	}

// 	return reviews, nil
// }
