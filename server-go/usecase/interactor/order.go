package interactor

import (
	"fmt"
	"log"
	"strings"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type OrderInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Order) (*pb.Order, error)

	// Update
	Update(param *pb.Order) (bool, error)

	// Delete
	Delete(param *pb.OrderIdRequest) (bool, error)

	// Get
	GetById(param *pb.OrderIdRequest) (*pb.Order, error)

	// get by uuid
	GetByUuid(param *pb.OrderUuidRequest) (*pb.Order, error)

	// get sold list by user id
	GetSoldListByUser(param *pb.OrderUserIdRequest) ([]*pb.Order, error)

	// get purchased list by user id
	GetPurchasedListByUser(param *pb.OrderUserIdRequest) ([]*pb.Order, error)

	// get list by id list
	GetListByIdList(param *pb.OrderIdListRequest) ([]*pb.Order, error)
}

type OrderInteractorImpl struct {
	firebase        usecase.Firebase
	orderRepository usecase.OrderRepository
}

func NewOrderInteractorImpl(
	fb usecase.Firebase,
	oR usecase.OrderRepository,
) OrderInteractor {
	return &OrderInteractorImpl{
		firebase:        fb,
		orderRepository: oR,
	}
}

func (i *OrderInteractorImpl) Create(param *pb.Order) (*pb.Order, error) {

	err := i.orderRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *OrderInteractorImpl) Update(param *pb.Order) (bool, error) {

	err := i.orderRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *OrderInteractorImpl) Delete(param *pb.OrderIdRequest) (bool, error) {

	err := i.orderRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *OrderInteractorImpl) GetById(param *pb.OrderIdRequest) (*pb.Order, error) {
	var (
		order *pb.Order
		err   error
	)

	order, err = i.orderRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return order, err
	}

	return order, nil
}

func (i *OrderInteractorImpl) GetByUuid(param *pb.OrderUuidRequest) (*pb.Order, error) {
	var (
		order *pb.Order
		err   error
	)

	order, err = i.orderRepository.GetByUuid(param.Uuid)
	if err != nil {
		log.Println("error is:", err)
		return order, err
	}

	return order, nil
}

// get sold list by user id
func (i *OrderInteractorImpl) GetSoldListByUser(param *pb.OrderUserIdRequest) ([]*pb.Order, error) {
	var (
		orders []*pb.Order
		err    error
	)

	orders, err = i.orderRepository.GetSoldListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return orders, err
	}

	return orders, nil
}

// get purchased list by user id
func (i *OrderInteractorImpl) GetPurchasedListByUser(param *pb.OrderUserIdRequest) ([]*pb.Order, error) {
	var (
		orders []*pb.Order
		err    error
	)

	orders, err = i.orderRepository.GetPurchasedListByUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return orders, err
	}

	return orders, nil
}

// get list by id list
func (i *OrderInteractorImpl) GetListByIdList(param *pb.OrderIdListRequest) ([]*pb.Order, error) {
	var (
		orders         []*pb.Order
		err            error
		paramIdListStr string
	)

	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(param.Id)), ", "), "[]")

	orders, err = i.orderRepository.GetListByIdList(paramIdListStr)
	if err != nil {
		log.Println("error is:", err)
		return orders, err
	}

	return orders, nil
}

// admin
// get all
func (i *OrderInteractorImpl) GetAll() ([]*pb.Order, error) {
	var (
		orders []*pb.Order
		err    error
	)

	orders, err = i.orderRepository.GetAll()
	if err != nil {
		log.Println("error is:", err)
		return orders, err
	}

	return orders, nil
}
