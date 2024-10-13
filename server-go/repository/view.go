package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ViewRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewViewRepositoryImpl(ex SQLExecuter) usecase.ViewRepository {
	return &ViewRepositoryImpl{
		Name:     "ViewRepository",
		executer: ex,
	}
}

// create
func (r *ViewRepositoryImpl) Create(param *pb.View) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO views (
			uuid,
			content_id,
			user_id,
			created_at,
			updated_at
			) VALUES (
				?,
				?,
				?, 
				?,
				?
		)`,
		utils.CreateUuid(),
		param.ContentId,
		param.UserId,
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
func (r *ViewRepositoryImpl) Update(param *pb.View) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE views SET
		WHERE id = ?`,
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
func (r *ViewRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE views SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *ViewRepositoryImpl) GetById(id int64) (*pb.View, error) {
	var (
		content pb.View
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM views WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *ViewRepositoryImpl) GetByUuid(uuid int64) (*pb.View, error) {
	var (
		content pb.View
	)

	err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM views WHERE uuid = ?",
		uuid,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *ViewRepositoryImpl) GetListByUser(userId int64) ([]*pb.View, error) {
	var (
		views []*pb.View
	)

	err := r.executer.Select(
		r.Name+"GetListByUser",
		&views,
		"SELECT * FROM views WHERE user_id = ?",
		userId,
	)

	if err != nil {
		return nil, err
	}

	return views, nil
}

// getByContent
func (r *ViewRepositoryImpl) GetListByContent(contentId int64) ([]*pb.View, error) {
	var (
		views []*pb.View
	)

	err := r.executer.Select(
		r.Name+"GetListByContent",
		&views,
		"SELECT * FROM views WHERE content_id = ?",
		contentId,
	)

	if err != nil {
		return nil, err
	}

	return views, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.View, error)
func (r *ViewRepositoryImpl) GetListByIdList(idList string) ([]*pb.View, error) {
	var (
		views []*pb.View = make([]*pb.View, 0)
	)

	if idList == "" {
		return views, nil
	}

	err := r.executer.Select(
		r.Name+"GetListByIdList",
		&views,
		"SELECT * FROM views WHERE id IN (?)",
		idList,
	)

	if err != nil {
		return nil, err
	}

	return views, nil
}

// admin
// getAll
func (r *ViewRepositoryImpl) GetAll() ([]*pb.View, error) {
	var (
		views []*pb.View
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&views,
		"SELECT * FROM views ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all views: %w", err)
		log.Println(err)
		return nil, err
	}

	return views, nil
}
