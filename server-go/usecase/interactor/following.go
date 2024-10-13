package interactor

import (
	"fmt"
	"log"
	"strings"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type FollowingInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Following) (*pb.Following, error)

	// Update
	Update(param *pb.Following) (bool, error)

	// Delete
	Delete(param *pb.FollowingIdRequest) (bool, error)

	// Get
	GetById(param *pb.FollowingIdRequest) (*pb.Following, error)

	// get by uuid
	// GetByUuid(param *pb.FollowingUuidRequest) (*pb.Following, error)

	// get followinglist by user
	GetFollowingListByUser(param *pb.FollowingUserIdRequest) ([]*pb.Following, error)

	// get followed list by user
	GetFollowedListByUser(param *pb.FollowingUserIdRequest) ([]*pb.Following, error)

	// get list by id list
	GetListByIdList(param *pb.FollowingIdListRequest) ([]*pb.Following, error)
}

type FollowingInteractorImpl struct {
	firebase        usecase.Firebase
	pointRepository usecase.FollowingRepository
}

func NewFollowingInteractorImpl(
	fb usecase.Firebase,
	pR usecase.FollowingRepository,
) FollowingInteractor {
	return &FollowingInteractorImpl{
		firebase:        fb,
		pointRepository: pR,
	}
}

func (i *FollowingInteractorImpl) Create(param *pb.Following) (*pb.Following, error) {

	err := i.pointRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *FollowingInteractorImpl) Update(param *pb.Following) (bool, error) {

	err := i.pointRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *FollowingInteractorImpl) Delete(param *pb.FollowingIdRequest) (bool, error) {

	err := i.pointRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *FollowingInteractorImpl) GetById(param *pb.FollowingIdRequest) (*pb.Following, error) {
	var (
		point *pb.Following
		err   error
	)

	point, err = i.pointRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return point, err
	}

	return point, nil
}

// func (i *FollowingInteractorImpl) GetByUuid(param *pb.FollowingUuidRequest) (*pb.Following, error) {
// 	var (
// 		point *pb.Following
// 		err   error
// 	)

// 	point, err = i.pointRepository.GetByUuid(param.Uuid)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return point, err
// 	}

// 	return point, nil
// }

// get following list by user
func (i *FollowingInteractorImpl) GetFollowingListByUser(param *pb.FollowingUserIdRequest) ([]*pb.Following, error) {
	var (
		points []*pb.Following
		err    error
	)

	points, err = i.pointRepository.GetFollowingListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return points, err
	}

	return points, nil
}

// get followed list by user
func (i *FollowingInteractorImpl) GetFollowedListByUser(param *pb.FollowingUserIdRequest) ([]*pb.Following, error) {
	var (
		points []*pb.Following
		err    error
	)

	points, err = i.pointRepository.GetFollowedListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return points, err
	}

	return points, nil
}

// get list by id list
func (i *FollowingInteractorImpl) GetListByIdList(param *pb.FollowingIdListRequest) ([]*pb.Following, error) {
	var (
		points         []*pb.Following
		err            error
		paramIdListStr string
	)
	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(param.Id)), ", "), "[]")

	points, err = i.pointRepository.GetListByIdList(paramIdListStr)
	if err != nil {
		log.Println("error is:", err)
		return points, err
	}

	return points, nil
}

// admin
// get all
func (i *FollowingInteractorImpl) GetAll() ([]*pb.Following, error) {
	var (
		points []*pb.Following
		err    error
	)

	points, err = i.pointRepository.GetAll()
	if err != nil {
		log.Println("error is:", err)
		return points, err
	}

	return points, nil
}
