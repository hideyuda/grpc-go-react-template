package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type OrderRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewOrderRepositoryImpl(ex SQLExecuter) usecase.OrderRepository {
	return &OrderRepositoryImpl{
		Name:     "OrderRepository",
		executer: ex,
	}
}

// create
func (r *OrderRepositoryImpl) Create(param *pb.Order) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO orders (
			uuid,
			content_id,
			billing_id,
			order_user_id,
			progress,
			service,
			price,
			asp_rate,
			via_asp,
			used_point,
			created_at,
			updated_at,
			is_deleted
			) VALUES (
				?,
				?,
				?, 
				?,
				?,
				?,
				?,
				?,
				?,
				?,
				?,
				?,
				?
		)`,
		utils.CreateUuid(),
		param.ContentId,
		param.BillingId,
		param.OrderUserId,
		param.Progress,
		param.Service,
		param.Price,
		param.AspRate,
		param.ViaAsp,
		param.UsedPoint,
		now,
		now,
		false,
	)

	if err != nil {
		return err
	}

	param.Id = lastId

	return nil
}

// update
func (r *OrderRepositoryImpl) Update(param *pb.Order) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE orders SET
			progress = ?,
			service = ?,
			price = ?,
			asp_rate = ?,
			via_asp = ?,
			used_point = ?,
			updated_at = ?
		WHERE id = ?`,
		param.Progress,
		param.Service,
		param.Price,
		param.AspRate,
		param.ViaAsp,
		param.UsedPoint,
		now,
		param.Id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update content: %w", err)
		log.Println(err)
		return err
	}

	param.Id = lastId

	return nil
}

// delete
func (r *OrderRepositoryImpl) Delete(id int64) error {

	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE orders SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *OrderRepositoryImpl) GetById(id int64) (*pb.Order, error) {
	var (
		content pb.Order
	)

	if err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM orders WHERE id = ?",
		id,
	); err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *OrderRepositoryImpl) GetByUuid(uuid string) (*pb.Order, error) {
	var (
		content pb.Order
	)

	if err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM orders WHERE uuid = ?",
		uuid,
	); err != nil {
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *OrderRepositoryImpl) GetListByUser(userId int64) ([]*pb.Order, error) {
	var (
		orders []*pb.Order
	)

	if err := r.executer.Select(
		r.Name+"GetListByUser",
		&orders,
		"SELECT * FROM orders WHERE user_id = ?",
		userId,
	); err != nil {
		return nil, err
	}

	return orders, nil
}

// get list by category
func (r *OrderRepositoryImpl) GetListByFreeWord(freeWord string) ([]*pb.Order, error) {
	var (
		orders []*pb.Order
	)

	if err := r.executer.Select(
		r.Name+"GetListByFreeWord",
		&orders,
		"SELECT * FROM orders WHERE title LIKE ? OR description LIKE ?",
		"%"+freeWord+"%",
		"%"+freeWord+"%",
	); err != nil {
		return nil, err
	}

	return orders, nil
}

// get by latest id=user_id
func (r *OrderRepositoryImpl) GetLatestList(userId int64) ([]*pb.Order, error) {
	var (
		orders []*pb.Order
	)

	if err := r.executer.Select(
		r.Name+"GetLatestList",
		&orders,
		"SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
		userId,
	); err != nil {
		return nil, err
	}

	return orders, nil
}

// get by sold id=user_id
func (r *OrderRepositoryImpl) GetSoldListByUser(userId int64) ([]*pb.Order, error) {
	var (
		orders []*pb.Order
	)

	if err := r.executer.Select(
		r.Name+"GetSoldListByUser",
		&orders,
		"SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
		userId,
	); err != nil {
		return nil, err
	}

	return orders, nil
}

// get by purchased id=user_id
// GetPurchasedListByUser(userId int64) ([]*pb.Order, error)
func (r *OrderRepositoryImpl) GetPurchasedListByUser(userId int64) ([]*pb.Order, error) {
	var (
		orders []*pb.Order
	)

	if err := r.executer.Select(
		r.Name+"GetPurchasedListByUser",
		&orders,
		"SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
		userId,
	); err != nil {
		return nil, err
	}

	return orders, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.Order, error)
func (r *OrderRepositoryImpl) GetListByIdList(idList string) ([]*pb.Order, error) {
	var (
		orders []*pb.Order = make([]*pb.Order, 0)
	)

	if idList == "" {
		return orders, nil
	}

	if err := r.executer.Select(
		r.Name+"GetListByIdList",
		&orders,
		"SELECT * FROM orders WHERE id IN (?)",
		idList,
	); err != nil {
		return nil, err
	}

	return orders, nil
}

// admin
// getAll
func (r *OrderRepositoryImpl) GetAll() ([]*pb.Order, error) {
	var (
		orders []*pb.Order
	)

	if err := r.executer.Select(
		r.Name+"GetAll",
		&orders,
		"SELECT * FROM orders ORDER BY id DESC",
	); err != nil {
		err = fmt.Errorf("failed to get all orders: %w", err)
		log.Println(err)
		return nil, err
	}

	return orders, nil
}
