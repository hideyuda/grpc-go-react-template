package interactor

import (
	"fmt"
	"log"
	"strings"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type PointHistoryInteractor interface {
	// Gest API
	// Create
	Create(param *pb.PointHistory) (*pb.PointHistory, error)

	// Update
	Update(param *pb.PointHistory) (bool, error)

	// Delete
	Delete(param *pb.PointHistoryIdRequest) (bool, error)

	// Get
	GetById(param *pb.PointHistoryIdRequest) (*pb.PointHistory, error)

	// get by uuid
	GetByUuid(param *pb.PointHistoryUuidRequest) (*pb.PointHistory, error)

	// get purchased list by user id
	GetPurchasedListByUser(param *pb.PointHistoryUserIdRequest) ([]*pb.PointHistory, error)

	// get list by id list
	GetListByIdList(param *pb.PointHistoryIdListRequest) ([]*pb.PointHistory, error)
}

type PointHistoryInteractorImpl struct {
	firebase              usecase.Firebase
	pointHitoryRepository usecase.PointHistoryRepository
}

func NewPointHistoryInteractorImpl(
	fb usecase.Firebase,
	phR usecase.PointHistoryRepository,
) PointHistoryInteractor {
	return &PointHistoryInteractorImpl{
		firebase:              fb,
		pointHitoryRepository: phR,
	}
}

func (i *PointHistoryInteractorImpl) Create(param *pb.PointHistory) (*pb.PointHistory, error) {

	err := i.pointHitoryRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *PointHistoryInteractorImpl) Update(param *pb.PointHistory) (bool, error) {

	err := i.pointHitoryRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *PointHistoryInteractorImpl) Delete(param *pb.PointHistoryIdRequest) (bool, error) {

	err := i.pointHitoryRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *PointHistoryInteractorImpl) GetById(param *pb.PointHistoryIdRequest) (*pb.PointHistory, error) {
	var (
		pointHitory *pb.PointHistory
		err         error
	)

	pointHitory, err = i.pointHitoryRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return pointHitory, err
	}

	return pointHitory, nil
}

func (i *PointHistoryInteractorImpl) GetByUuid(param *pb.PointHistoryUuidRequest) (*pb.PointHistory, error) {
	var (
		pointHitory *pb.PointHistory
		err         error
	)

	pointHitory, err = i.pointHitoryRepository.GetByUuid(param.Uuid)
	if err != nil {
		log.Println("error is:", err)
		return pointHitory, err
	}

	return pointHitory, nil
}

// rpc GetPurchasedListByUser(paramIdRequest) returns (paramList) {}
func (i *PointHistoryInteractorImpl) GetPurchasedListByUser(param *pb.PointHistoryUserIdRequest) ([]*pb.PointHistory, error) {
	var (
		pointHitorys []*pb.PointHistory
		err          error
	)

	pointHitorys, err = i.pointHitoryRepository.GetPurchasedListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return pointHitorys, err
	}

	return pointHitorys, nil
}

// // get list by id list
// rpc GetListByIdList (paramIdListRequest) returns (paramList) {}
func (i *PointHistoryInteractorImpl) GetListByIdList(param *pb.PointHistoryIdListRequest) ([]*pb.PointHistory, error) {
	var (
		pointHitorys   []*pb.PointHistory
		err            error
		paramIdListStr string
	)

	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(param.Id)), ", "), "[]")

	pointHitorys, err = i.pointHitoryRepository.GetListByIdList(paramIdListStr)
	if err != nil {
		log.Println("error is:", err)
		return pointHitorys, err
	}

	return pointHitorys, nil
}

// admin
// get all
func (i *PointHistoryInteractorImpl) GetAll() ([]*pb.PointHistory, error) {
	var (
		pointHitorys []*pb.PointHistory
		err          error
	)

	pointHitorys, err = i.pointHitoryRepository.GetAll()
	if err != nil {
		log.Println("error is:", err)
		return pointHitorys, err
	}

	return pointHitorys, nil
}
