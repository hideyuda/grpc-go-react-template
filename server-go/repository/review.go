package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ReviewRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewReviewRepositoryImpl(ex SQLExecuter) usecase.ReviewRepository {
	return &ReviewRepositoryImpl{
		Name:     "ReviewRepository",
		executer: ex,
	}
}

// create
func (r *ReviewRepositoryImpl) Create(param *pb.Review) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO reviews (
			uuid,
			content_id,
			user_id,
			star,
			title,
			description,
			purchased_at,
			created_at,
			updated_at
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
		param.ContentId,
		param.UserId,
		param.Star,
		param.Title,
		param.Description,
		param.PurchasedAt,
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
func (r *ReviewRepositoryImpl) Update(param *pb.Review) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE reviews SET
			star = ?,
			title = ?,
			description = ?,
		WHERE id = ?`,
		param.Star,
		param.Title,
		param.Description,
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
func (r *ReviewRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE reviews SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *ReviewRepositoryImpl) GetById(id int64) (*pb.Review, error) {
	var (
		content pb.Review
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM reviews WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *ReviewRepositoryImpl) GetByUuid(uuid string) (*pb.Review, error) {
	var (
		content pb.Review
	)

	err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM reviews WHERE uuid = ?",
		uuid,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *ReviewRepositoryImpl) GetListByUser(userId int64) ([]*pb.Review, error) {
	var (
		reviews []*pb.Review
	)

	err := r.executer.Select(
		r.Name+"GetListByUser",
		&reviews,
		"SELECT * FROM reviews WHERE user_id = ?",
		userId,
	)

	if err != nil {
		return nil, err
	}

	return reviews, nil
}

// getByContent
func (r *ReviewRepositoryImpl) GetListByContent(contentId int64) ([]*pb.Review, error) {
	var (
		reviews []*pb.Review
	)

	err := r.executer.Select(
		r.Name+"GetListByContent",
		&reviews,
		"SELECT * FROM reviews WHERE content_id = ?",
		contentId,
	)

	if err != nil {
		return nil, err
	}

	return reviews, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.Review, error)
func (r *ReviewRepositoryImpl) GetListByIdList(idList string) ([]*pb.Review, error) {
	var (
		reviews []*pb.Review = []*pb.Review{}
	)

	if idList == "" {
		return reviews, nil
	}

	err := r.executer.Select(
		r.Name+"GetListByIdList",
		&reviews,
		"SELECT * FROM reviews WHERE id IN (?)",
		idList,
	)

	if err != nil {
		return nil, err
	}

	return reviews, nil
}

// admin
// getAll
func (r *ReviewRepositoryImpl) GetAll() ([]*pb.Review, error) {
	var (
		reviews []*pb.Review
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&reviews,
		"SELECT * FROM reviews ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all reviews: %w", err)
		log.Println(err)
		return nil, err
	}

	return reviews, nil
}
