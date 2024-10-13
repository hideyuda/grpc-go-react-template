package interactor

import (
	"fmt"
	"log"
	"strings"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type PointInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Point) (*pb.Point, error)

	// Update
	Update(param *pb.Point) (bool, error)

	// Delete
	Delete(param *pb.PointIdRequest) (bool, error)

	// Get
	GetById(param *pb.PointIdRequest) (*pb.Point, error)

	// get by uuid
	GetByUuid(param *pb.PointUuidRequest) (*pb.Point, error)

	// get list by user
	GetListByUser(param *pb.PointUserIdRequest) ([]*pb.Point, error)

	// get list by id list
	GetListByIdList(param *pb.PointIdListRequest) ([]*pb.Point, error)
}

type PointInteractorImpl struct {
	firebase        usecase.Firebase
	pointRepository usecase.PointRepository
}

func NewPointInteractorImpl(
	fb usecase.Firebase,
	pR usecase.PointRepository,
) PointInteractor {
	return &PointInteractorImpl{
		firebase:        fb,
		pointRepository: pR,
	}
}

func (i *PointInteractorImpl) Create(param *pb.Point) (*pb.Point, error) {

	err := i.pointRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *PointInteractorImpl) Update(param *pb.Point) (bool, error) {

	err := i.pointRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *PointInteractorImpl) Delete(param *pb.PointIdRequest) (bool, error) {

	err := i.pointRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *PointInteractorImpl) GetById(param *pb.PointIdRequest) (*pb.Point, error) {
	var (
		point *pb.Point
		err   error
	)

	point, err = i.pointRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return point, err
	}

	return point, nil
}

func (i *PointInteractorImpl) GetByUuid(param *pb.PointUuidRequest) (*pb.Point, error) {
	var (
		point *pb.Point
		err   error
	)

	point, err = i.pointRepository.GetByUuid(param.Uuid)
	if err != nil {
		log.Println("error is:", err)
		return point, err
	}

	return point, nil
}

// get list by user
func (i *PointInteractorImpl) GetListByUser(param *pb.PointUserIdRequest) ([]*pb.Point, error) {
	var (
		points []*pb.Point
		err    error
	)

	points, err = i.pointRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return points, err
	}

	return points, nil
}

// get list by id list
func (i *PointInteractorImpl) GetListByIdList(param *pb.PointIdListRequest) ([]*pb.Point, error) {
	var (
		points         []*pb.Point
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
func (i *PointInteractorImpl) GetAll() ([]*pb.Point, error) {
	var (
		points []*pb.Point
		err    error
	)

	points, err = i.pointRepository.GetAll()
	if err != nil {
		log.Println("error is:", err)
		return points, err
	}

	return points, nil
}
