package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type UserMediaRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewUserMediaRepositoryImpl(ex SQLExecuter) usecase.UserMediaRepository {
	return &UserMediaRepositoryImpl{
		Name:     "UserMediaRepository",
		executer: ex,
	}
}

// create
func (r *UserMediaRepositoryImpl) Create(param *pb.UserMedia) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO user_medias (
			uuid,
			user_id,
			type,
			url,
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
		param.UserId,
		param.Type,
		param.Url,
		now,
		now,
	)

	if err != nil {
		return err
	}

	return nil
}

// update
func (r *UserMediaRepositoryImpl) Update(userMedia *pb.UserMedia) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE user_medias SET
			type = ?,
			url = ?,
			description = ?,
			updated_at = ?
		WHERE _id = ?`,
		userMedia.Type,
		userMedia.Url,
		now,
		userMedia.Id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update userMedia: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// delete
func (r *UserMediaRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"DELETE FROM user_medias WHERE id = ?",
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// delete
func (r *UserMediaRepositoryImpl) DeleteByUser(userId int64) error {
	_, err := r.executer.Exec(
		r.Name+"DeleteByUser",
		"DELETE FROM user_medias WHERE id = ?",
		userId,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *UserMediaRepositoryImpl) GetById(id int64) (*pb.UserMedia, error) {
	var (
		userMedia pb.UserMedia
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&userMedia,
		"SELECT * FROM user_medias WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &userMedia, nil
}

// get by uuid
func (r *UserMediaRepositoryImpl) GetByUuid(uuid string) (*pb.UserMedia, error) {
	var (
		userMedia pb.UserMedia
	)

	if err := r.executer.Get(
		r.Name+"GetByUuid",
		&userMedia,
		"SELECT * FROM user_medias WHERE uuid = ?",
		uuid,
	); err != nil {
		return nil, err
	}

	return &userMedia, nil
}

// get list by user_id
func (r *UserMediaRepositoryImpl) GetListByUser(userId int64) ([]*pb.UserMedia, error) {
	var (
		userMedias []*pb.UserMedia
	)

	if err := r.executer.Select(
		r.Name+"GetListByUser",
		&userMedias,
		"SELECT * FROM user_medias WHERE user_id = ?",
		userId,
	); err != nil {
		return nil, err
	}

	return userMedias, nil
}

// get list by user_id list
func (r *UserMediaRepositoryImpl) GetListByUserList(userIdList string) ([]*pb.UserMedia, error) {
	var (
		userMedias []*pb.UserMedia
	)

	if err := r.executer.Select(
		r.Name+"GetListByUserList",
		&userMedias,
		"SELECT * FROM user_medias WHERE user_id IN (?)",
		userIdList,
	); err != nil {
		return nil, err
	}

	return userMedias, nil
}
