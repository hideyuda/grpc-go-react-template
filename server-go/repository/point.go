package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type PointRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewPointRepositoryImpl(ex SQLExecuter) usecase.PointRepository {
	return &PointRepositoryImpl{
		Name:     "PointRepository",
		executer: ex,
	}
}

// create
func (r *PointRepositoryImpl) Create(param *pb.Point) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO points (
			uuid,
			user_id,
			point,
			created_at,
			updated_at,
			is_deleted
			) VALUES (
				?,
				?,
				?, 
				?,
				?,
				?
		)`,
		utils.CreateUuid(),
		param.UserId,
		param.Point,
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
func (r *PointRepositoryImpl) Update(param *pb.Point) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE points SET
			point = ?,
			updated_at = ?
		WHERE id = ?`,
		param.Point,
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
func (r *PointRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE points SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *PointRepositoryImpl) GetById(id int64) (*pb.Point, error) {
	var (
		content pb.Point
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM points WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *PointRepositoryImpl) GetByUuid(uuid string) (*pb.Point, error) {
	var (
		content pb.Point
	)

	err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM points WHERE uuid = ?",
		uuid,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *PointRepositoryImpl) GetListByUser(userId int64) ([]*pb.Point, error) {
	var (
		points []*pb.Point
	)

	err := r.executer.Select(
		r.Name+"GetListByUser",
		&points,
		"SELECT * FROM points WHERE user_id = ?",
		userId,
	)

	if err != nil {
		return nil, err
	}

	return points, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.Point, error)
func (r *PointRepositoryImpl) GetListByIdList(idList string) ([]*pb.Point, error) {
	var (
		points []*pb.Point = make([]*pb.Point, 0)
	)

	if idList == "" {
		return points, nil
	}

	err := r.executer.Select(
		r.Name+"GetListByIdList",
		&points,
		"SELECT * FROM points WHERE id IN (?)",
		idList,
	)

	if err != nil {
		return nil, err
	}

	return points, nil
}

// admin
// getAll
func (r *PointRepositoryImpl) GetAll() ([]*pb.Point, error) {
	var (
		points []*pb.Point
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&points,
		"SELECT * FROM points ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all points: %w", err)
		log.Println(err)
		return nil, err
	}

	return points, nil
}
