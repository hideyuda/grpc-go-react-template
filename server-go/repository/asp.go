package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type AspRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewAspRepositoryImpl(ex SQLExecuter) usecase.AspRepository {
	return &AspRepositoryImpl{
		Name:     "AspRepository",
		executer: ex,
	}
}

// create
func (r *AspRepositoryImpl) Create(param *pb.Asp) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO asps (
			uuid,
			content_id,
			user_id,
			service,
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
				?
		)`,
		utils.CreateUuid(),
		param.ContentId,
		param.UserId,
		param.Service,
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
func (r *AspRepositoryImpl) Update(param *pb.Asp) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE asps SET
			service = ?,
			updated_at = ?
		WHERE id = ?`,
		param.Service,
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
func (r *AspRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE asps SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *AspRepositoryImpl) GetById(id int64) (*pb.Asp, error) {
	var (
		content pb.Asp
	)

	if err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM asps WHERE id = ?",
		id,
	); err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *AspRepositoryImpl) GetByUuid(uuid string) (*pb.Asp, error) {
	var (
		content pb.Asp
	)

	err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM asps WHERE uuid = ?",
		uuid,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *AspRepositoryImpl) GetListByUser(userId int64) ([]*pb.Asp, error) {
	var (
		asps []*pb.Asp = make([]*pb.Asp, 0)
	)

	if err := r.executer.Select(
		r.Name+"GetListByUser",
		&asps,
		"SELECT * FROM asps WHERE user_id = ?",
		userId,
	); err != nil {
		return nil, err
	}

	return asps, nil
}

// get list by content
func (r *AspRepositoryImpl) GetListByContent(contentId int64) ([]*pb.Asp, error) {
	var (
		asps []*pb.Asp = make([]*pb.Asp, 0)
	)

	if err := r.executer.Select(
		r.Name+"GetListByContent",
		&asps,
		"SELECT * FROM asps WHERE content_id = ?",
		contentId,
	); err != nil {
		return nil, err
	}

	return asps, nil
}

// get list by service
func (r *AspRepositoryImpl) GetListByService(service int64) ([]*pb.Asp, error) {
	var (
		asps []*pb.Asp = make([]*pb.Asp, 0)
	)

	if err := r.executer.Select(
		r.Name+"GetListByService",
		&asps,
		"SELECT * FROM asps WHERE service = ?",
		service,
	); err != nil {
		return nil, err
	}

	return asps, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.Asp, error)
func (r *AspRepositoryImpl) GetListByIdList(idList string) ([]*pb.Asp, error) {
	var (
		asps []*pb.Asp = make([]*pb.Asp, 0)
	)

	if err := r.executer.Select(
		r.Name+"GetListByIdList",
		&asps,
		"SELECT * FROM asps WHERE id IN (?)",
		idList,
	); err != nil {
		return nil, err
	}

	return asps, nil
}

// admin
// getAll
func (r *AspRepositoryImpl) GetAll() ([]*pb.Asp, error) {
	var (
		asps []*pb.Asp = make([]*pb.Asp, 0)
	)

	if err := r.executer.Select(
		r.Name+"GetAll",
		&asps,
		"SELECT * FROM asps ORDER BY id DESC",
	); err != nil {
		err = fmt.Errorf("failed to get all asps: %w", err)
		log.Println(err)
		return nil, err
	}

	return asps, nil
}
