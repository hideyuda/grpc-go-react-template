package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type FollowingRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewFollowingRepositoryImpl(ex SQLExecuter) usecase.FollowingRepository {
	return &FollowingRepositoryImpl{
		Name:     "FollowingRepository",
		executer: ex,
	}
}

// create
func (r *FollowingRepositoryImpl) Create(param *pb.Following) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO followings (
			uuid,
			following_user_id,
			followed_user_id,
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
		param.FollowingUserId,
		param.FollowedUserId,
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
func (r *FollowingRepositoryImpl) Update(param *pb.Following) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE followings SET
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
func (r *FollowingRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE followings SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *FollowingRepositoryImpl) GetById(id int64) (*pb.Following, error) {
	var (
		content pb.Following
	)

	if err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM followings WHERE id = ?",
		id,
	); err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *FollowingRepositoryImpl) GetByUuid(uuid string) (*pb.Following, error) {
	var (
		content pb.Following
	)

	if err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM followings WHERE uuid = ?",
		uuid,
	); err != nil {
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *FollowingRepositoryImpl) GetFollowedListByUser(userId int64) ([]*pb.Following, error) {
	var (
		followings []*pb.Following
	)

	if err := r.executer.Select(
		r.Name+"GetFollowedListByUser",
		&followings,
		"SELECT * FROM followings WHERE followed_user_id = ?",
		userId,
	); err != nil {
		return nil, err
	}

	return followings, nil
}

// getByUser
func (r *FollowingRepositoryImpl) GetFollowingListByUser(userId int64) ([]*pb.Following, error) {
	var (
		followings []*pb.Following
	)

	if err := r.executer.Select(
		r.Name+"GetFollowingListByUser",
		&followings,
		"SELECT * FROM followings WHERE following_user_id = ?",
		userId,
	); err != nil {
		return nil, err
	}

	return followings, nil
}

// getByContent
func (r *FollowingRepositoryImpl) GetListByContent(contentId int64) ([]*pb.Following, error) {
	var (
		followings []*pb.Following
	)

	if err := r.executer.Select(
		r.Name+"GetListByContent",
		&followings,
		"SELECT * FROM followings WHERE content_id = ?",
		contentId,
	); err != nil {
		return nil, err
	}

	return followings, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.Following, error)
func (r *FollowingRepositoryImpl) GetListByIdList(idList string) ([]*pb.Following, error) {
	var (
		followings []*pb.Following = make([]*pb.Following, 0)
	)

	if idList == "" {
		return followings, nil
	}

	if err := r.executer.Select(
		r.Name+"GetListByIdList",
		&followings,
		"SELECT * FROM followings WHERE id IN (?)",
		idList,
	); err != nil {
		return nil, err
	}

	return followings, nil
}

// admin
// getAll
func (r *FollowingRepositoryImpl) GetAll() ([]*pb.Following, error) {
	var (
		followings []*pb.Following = make([]*pb.Following, 0)
	)

	if err := r.executer.Select(
		r.Name+"GetAll",
		&followings,
		"SELECT * FROM followings ORDER BY id DESC",
	); err != nil {
		err = fmt.Errorf("failed to get all followings: %w", err)
		log.Println(err)
		return nil, err
	}

	return followings, nil
}
