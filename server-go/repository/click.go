package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ClickRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewClickRepositoryImpl(ex SQLExecuter) usecase.ClickRepository {
	return &ClickRepositoryImpl{
		Name:     "ClickRepository",
		executer: ex,
	}
}

// create
func (r *ClickRepositoryImpl) Create(param *pb.Click) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO clicks (
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
func (r *ClickRepositoryImpl) Update(param *pb.Click) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE clicks SET
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
func (r *ClickRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE clicks SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *ClickRepositoryImpl) GetById(id int64) (*pb.Click, error) {
	var (
		content pb.Click = pb.Click{}
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM clicks WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *ClickRepositoryImpl) GetByUuid(uuid int64) (*pb.Click, error) {
	var (
		content pb.Click = pb.Click{}
	)

	err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM clicks WHERE uuid = ?",
		uuid,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *ClickRepositoryImpl) GetListByUser(userId int64) ([]*pb.Click, error) {
	var (
		clicks []*pb.Click = make([]*pb.Click, 0)
	)

	err := r.executer.Select(
		r.Name+"GetListByUser",
		&clicks,
		"SELECT * FROM clicks WHERE user_id = ?",
		userId,
	)

	if err != nil {
		return nil, err
	}

	return clicks, nil
}

// getByContent
func (r *ClickRepositoryImpl) GetListByContent(contentId int64) ([]*pb.Click, error) {
	var (
		clicks []*pb.Click = make([]*pb.Click, 0)
	)

	err := r.executer.Select(
		r.Name+"GetListByContent",
		&clicks,
		"SELECT * FROM clicks WHERE content_id = ?",
		contentId,
	)

	if err != nil {
		return nil, err
	}

	return clicks, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.Click, error)
func (r *ClickRepositoryImpl) GetListByIdList(idList string) ([]*pb.Click, error) {
	var (
		clicks []*pb.Click = make([]*pb.Click, 0)
	)

	if idList == "" {
		return clicks, nil
	}

	err := r.executer.Select(
		r.Name+"GetListByIdList",
		&clicks,
		"SELECT * FROM clicks WHERE id IN (?)",
		idList,
	)

	if err != nil {
		return nil, err
	}

	return clicks, nil
}

// admin
// getAll
func (r *ClickRepositoryImpl) GetAll() ([]*pb.Click, error) {
	var (
		clicks []*pb.Click = make([]*pb.Click, 0)
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&clicks,
		"SELECT * FROM clicks ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all clicks: %w", err)
		log.Println(err)
		return nil, err
	}

	return clicks, nil
}
