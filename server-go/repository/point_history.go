package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type PointHistoryRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewPointHistoryRepositoryImpl(ex SQLExecuter) usecase.PointHistoryRepository {
	return &PointHistoryRepositoryImpl{
		Name:     "PointHistoryRepository",
		executer: ex,
	}
}

// create
func (r *PointHistoryRepositoryImpl) Create(param *pb.PointHistory) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO point_histories (
			uuid,
			order_id,
			user_id,
			progress,
			service,
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
				?
		)`,
		utils.CreateUuid(),
		param.OrderId,
		param.UserId,
		param.Progress,
		param.Service,
		param.UsedPoint,
		now,
		now,
		false,
	)

	if err != nil {
		return err
	}

	return nil
}

// update
func (r *PointHistoryRepositoryImpl) Update(param *pb.PointHistory) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE point_histories SET
			progress = ?,
			service = ?,
			used_point = ?,
			updated_at = ?
		WHERE id = ?`,
		param.Progress,
		param.Service,
		param.UsedPoint,
		now,
		param.Id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update content: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// delete
func (r *PointHistoryRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE point_histories SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *PointHistoryRepositoryImpl) GetById(id int64) (*pb.PointHistory, error) {
	var (
		content pb.PointHistory
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM point_histories WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *PointHistoryRepositoryImpl) GetByUuid(uuid string) (*pb.PointHistory, error) {
	var (
		content pb.PointHistory
	)

	err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM point_histories WHERE uuid = ?",
		uuid,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *PointHistoryRepositoryImpl) GetListByUser(userId int64) ([]*pb.PointHistory, error) {
	var (
		pointHistories []*pb.PointHistory
	)

	err := r.executer.Select(
		r.Name+"GetListByUser",
		&pointHistories,
		"SELECT * FROM point_histories WHERE user_id = ?",
		userId,
	)

	if err != nil {
		return nil, err
	}

	return pointHistories, nil
}

// get list by category
func (r *PointHistoryRepositoryImpl) GetListByFreeWord(freeWord string) ([]*pb.PointHistory, error) {
	var (
		pointHistories []*pb.PointHistory
	)

	err := r.executer.Select(
		r.Name+"GetListByFreeWord",
		&pointHistories,
		"SELECT * FROM point_histories WHERE title LIKE ? OR description LIKE ?",
		"%"+freeWord+"%",
		"%"+freeWord+"%",
	)

	if err != nil {
		return nil, err
	}

	return pointHistories, nil
}

// get by latest id=user_id
func (r *PointHistoryRepositoryImpl) GetLatestList(userId int64) ([]*pb.PointHistory, error) {
	var (
		pointHistories []*pb.PointHistory
	)

	err := r.executer.Select(
		r.Name+"GetLatestList",
		&pointHistories,
		"SELECT * FROM point_histories WHERE user_id = ? ORDER BY created_at DESC",
		userId,
	)

	if err != nil {
		return nil, err
	}

	return pointHistories, nil
}

// get by sold id=user_id
func (r *PointHistoryRepositoryImpl) GetSoldListByUser(userId int64) ([]*pb.PointHistory, error) {
	var (
		pointHistories []*pb.PointHistory
	)

	err := r.executer.Select(
		r.Name+"GetSoldListByUser",
		&pointHistories,
		"SELECT * FROM point_histories WHERE user_id = ? ORDER BY created_at DESC",
		userId,
	)

	if err != nil {
		return nil, err
	}

	return pointHistories, nil
}

// get by purchased id=user_id
// GetPurchasedListByUser(userId int64) ([]*pb.PointHistory, error)
func (r *PointHistoryRepositoryImpl) GetPurchasedListByUser(userId int64) ([]*pb.PointHistory, error) {
	var (
		pointHistories []*pb.PointHistory
	)

	err := r.executer.Select(
		r.Name+"GetPurchasedListByUser",
		&pointHistories,
		"SELECT * FROM point_histories WHERE user_id = ? ORDER BY created_at DESC",
		userId,
	)

	if err != nil {
		return nil, err
	}

	return pointHistories, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.PointHistory, error)
func (r *PointHistoryRepositoryImpl) GetListByIdList(idList string) ([]*pb.PointHistory, error) {
	var (
		pointHistories []*pb.PointHistory = make([]*pb.PointHistory, 0)
	)

	if idList == "" {
		return pointHistories, nil
	}

	err := r.executer.Select(
		r.Name+"GetListByIdList",
		&pointHistories,
		"SELECT * FROM point_histories WHERE id IN (?)",
		idList,
	)

	if err != nil {
		return nil, err
	}

	return pointHistories, nil
}

// admin
// getAll
func (r *PointHistoryRepositoryImpl) GetAll() ([]*pb.PointHistory, error) {
	var (
		pointHistories []*pb.PointHistory
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&pointHistories,
		"SELECT * FROM point_histories ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all point_histories: %w", err)
		log.Println(err)
		return nil, err
	}

	return pointHistories, nil
}
