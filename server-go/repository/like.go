package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type LikeRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewLikeRepositoryImpl(ex SQLExecuter) usecase.LikeRepository {
	return &LikeRepositoryImpl{
		Name:     "LikeRepository",
		executer: ex,
	}
}

// create
func (r *LikeRepositoryImpl) Create(param *pb.Like) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO likes (
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
	)

	if err != nil {
		log.Println(err)
		return err
	}

	param.Id = lastId

	return nil
}

// update
func (r *LikeRepositoryImpl) Update(param *pb.Like) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE likes SET
		WHERE id = ?`,
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
func (r *LikeRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"DELETE FROM likes WHERE id = ?",
		id,
	)

	if err != nil {
		log.Println(err)
		return err
	}

	return nil
}

// delete by user and content
func (r *LikeRepositoryImpl) DeleteByUserAndContent(userId, contentId int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"DELETE FROM likes WHERE user_id = ? AND content_id = ?",
		userId,
		contentId,
	)

	if err != nil {
		log.Println(err)
		return err
	}

	return nil
}

// get
func (r *LikeRepositoryImpl) GetById(id int64) (*pb.Like, error) {
	var (
		content pb.Like
	)

	if err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM likes WHERE id = ?",
		id,
	); err != nil {
		log.Println(err)
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *LikeRepositoryImpl) GetByUuid(uuid int64) (*pb.Like, error) {
	var (
		content pb.Like
	)

	if err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM likes WHERE uuid = ?",
		uuid,
	); err != nil {
		log.Println(err)
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *LikeRepositoryImpl) GetListByUser(userId int64) ([]*pb.Like, error) {
	var (
		likes []*pb.Like
	)

	if err := r.executer.Select(
		r.Name+"GetListByUser",
		&likes,
		"SELECT * FROM likes WHERE user_id = ?",
		userId,
	); err != nil {
		log.Println(err)
		return nil, err
	}

	return likes, nil
}

// getByContent
func (r *LikeRepositoryImpl) GetListByContent(contentId int64) ([]*pb.Like, error) {
	var (
		likes []*pb.Like
	)

	if err := r.executer.Select(
		r.Name+"GetListByContent",
		&likes,
		"SELECT * FROM likes WHERE content_id = ?",
		contentId,
	); err != nil {
		log.Println(err)
		return nil, err
	}

	return likes, nil
}

// get bool by user and content
func (r *LikeRepositoryImpl) GetBoolByUserAndContent(userId, contentId int64) (bool, error) {
	var (
		like pb.Like
	)

	if err := r.executer.Get(
		r.Name+"GetBoolByUserAndContent",
		&like,
		"SELECT * FROM likes WHERE user_id = ? AND content_id = ?",
		userId,
		contentId,
	); err != nil {
		return false, err
	}

	if like.Id == 0 {
		return false, nil
	}

	return true, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.Like, error)
func (r *LikeRepositoryImpl) GetListByIdList(idList string) ([]*pb.Like, error) {
	var (
		likes []*pb.Like = make([]*pb.Like, 0)
	)

	if idList == "" {
		return likes, nil
	}

	if err := r.executer.Select(
		r.Name+"GetListByIdList",
		&likes,
		"SELECT * FROM likes WHERE id IN (?)",
		idList,
	); err != nil {
		log.Println(err)
		return nil, err
	}

	return likes, nil
}

// admin
// getAll
func (r *LikeRepositoryImpl) GetAll() ([]*pb.Like, error) {
	var (
		likes []*pb.Like
	)

	if err := r.executer.Select(
		r.Name+"GetAll",
		&likes,
		"SELECT * FROM likes ORDER BY id DESC",
	); err != nil {
		err = fmt.Errorf("failed to get all likes: %w", err)
		log.Println(err)
		return nil, err
	}

	return likes, nil
}
