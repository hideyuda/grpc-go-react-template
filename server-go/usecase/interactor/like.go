package interactor

import (
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type LikeInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Like) (*pb.Like, error)

	// Update
	Update(param *pb.Like) (bool, error)

	// Delete
	Delete(param *pb.LikeIdRequest) (bool, error)

	// Get
	GetById(param *pb.LikeIdRequest) (*pb.Like, error)

	// get by uuid
	// GetByUuid(param *pb.LikeUuidRequest) (*pb.Like, error)

	// get list by user
	GetListByUser(param *pb.LikeUserIdRequest) ([]*pb.Like, error)

	// get list by content
	GetListByContent(param *pb.LikeContentIdRequest) ([]*pb.Like, error)

	// get list by id list
	// GetListByIdList(param *pb.LikeIdListRequest) ([]*pb.Like, error)
}

type LikeInteractorImpl struct {
	firebase       usecase.Firebase
	likeRepository usecase.LikeRepository
}

func NewLikeInteractorImpl(
	fb usecase.Firebase,
	lR usecase.LikeRepository,
) LikeInteractor {
	return &LikeInteractorImpl{
		firebase:       fb,
		likeRepository: lR,
	}
}

func (i *LikeInteractorImpl) Create(param *pb.Like) (*pb.Like, error) {

	err := i.likeRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *LikeInteractorImpl) Update(param *pb.Like) (bool, error) {

	err := i.likeRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *LikeInteractorImpl) Delete(param *pb.LikeIdRequest) (bool, error) {

	err := i.likeRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *LikeInteractorImpl) GetById(param *pb.LikeIdRequest) (*pb.Like, error) {
	var (
		like *pb.Like
		err  error
	)

	like, err = i.likeRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return like, err
	}

	return like, nil
}

// func (i *LikeInteractorImpl) GetByUuid(param *pb.LikeUuidRequest) (*pb.Like, error) {
// 	var (
// 		like *pb.Like
// 		err     error
// 	)

// 	like, err = i.likeRepository.GetByUuid(param.Uuid)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return param, err
// 	}

// 	return param, nil
// }

// get list by user
func (i *LikeInteractorImpl) GetListByUser(param *pb.LikeUserIdRequest) ([]*pb.Like, error) {
	var (
		likes []*pb.Like
		err   error
	)

	likes, err = i.likeRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return likes, err
	}

	return likes, nil
}

// get list by content
func (i *LikeInteractorImpl) GetListByContent(param *pb.LikeContentIdRequest) ([]*pb.Like, error) {
	var (
		likes []*pb.Like
		err   error
	)

	likes, err = i.likeRepository.GetListByContent(param.ContentId)
	if err != nil {
		log.Println("error is:", err)
		return likes, err
	}

	return likes, nil
}

// // get list by id list
// rpc GetListByIdList (paramIdListRequest) returns (paramList) {}
// func (i *LikeInteractorImpl) GetListByIdList(param *pb.LikeIdListRequest) ([]*pb.Like, error) {
// 	var (
// 		likes []*pb.Like
// 		err   error
// 	)

// 	likes, err = i.likeRepository.GetListByIdList(param.Id)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return likes, err
// 	}

// 	return likes, nil
// }

// // admin
// // get all
// func (i *LikeInteractorImpl) GetAll() ([]*pb.Like, error) {
// 	var (
// 		likes []*pb.Like
// 		err   error
// 	)

// 	likes, err = i.likeRepository.GetAll()
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return likes, err
// 	}

// 	return likes, nil
// }
