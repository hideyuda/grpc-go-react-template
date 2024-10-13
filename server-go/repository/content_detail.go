package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ContentDetailRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewContentDetailRepositoryImpl(ex SQLExecuter) usecase.ContentDetailRepository {
	return &ContentDetailRepositoryImpl{
		Name:     "ContentDetailRepository",
		executer: ex,
	}
}

// create
func (r *ContentDetailRepositoryImpl) Create(param *pb.ContentDetail) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO content_details (
			uuid,
			content_id,
			title,
			description,
			prompt,
			prompt_instruction,
			url,
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
				?
		)`,
		utils.CreateUuid(),
		param.ContentId,
		param.Title,
		param.Description,
		param.Prompt,
		param.PromptInstruction,
		param.Url,
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
func (r *ContentDetailRepositoryImpl) Update(param *pb.ContentDetail) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE content_details SET
			title = ?,
			description = ?,
			prompt = ?,
			prompt_instruction = ?,
			url = ?,
			updated_at = ?
		WHERE id = ?`,
		param.Title,
		param.Description,
		param.Prompt,
		param.PromptInstruction,
		param.Url,
		now,
		param.Id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update contentDetail: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// delete
func (r *ContentDetailRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE content_details SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// delete by content
func (r *ContentDetailRepositoryImpl) DeleteByContent(contentId int64) error {
	_, err := r.executer.Exec(
		r.Name+"DeleteByContent",
		"DELETE FROM content_details WHERE content_id = ?",
		contentId,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *ContentDetailRepositoryImpl) GetById(id int64) (*pb.ContentDetail, error) {
	var (
		contentDetail pb.ContentDetail
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&contentDetail,
		"SELECT * FROM content_details WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &contentDetail, nil
}

// getByContent
func (r *ContentDetailRepositoryImpl) GetListByContent(contentId int64) ([]*pb.ContentDetail, error) {
	var (
		contentDetails []*pb.ContentDetail
	)

	err := r.executer.Select(
		r.Name+"GetListByContent",
		&contentDetails,
		"SELECT * FROM content_details WHERE content_id = ?",
		contentId,
	)

	if err != nil {
		return nil, err
	}

	return contentDetails, nil
}

// get list by user
func (r *ContentDetailRepositoryImpl) GetListByUser(userId int64) ([]*pb.ContentDetail, error) {
	var (
		contentDetails []*pb.ContentDetail
	)

	err := r.executer.Select(
		r.Name+"GetListByUser",
		&contentDetails,
		`
		SELECT * 
		FROM content_details 
		WHERE content_id IN (
			SELECT id FROM contents WHERE user_id = ?
		)
		AND is_deleted = false
		ORDER BY id DESC
		`,
		userId,
	)

	if err != nil {
		return nil, err
	}

	return contentDetails, nil
}

// get list by id list
func (r *ContentDetailRepositoryImpl) GetListByIdList(idList string) ([]*pb.ContentDetail, error) {
	var (
		contentDetails []*pb.ContentDetail = make([]*pb.ContentDetail, 0)
	)

	if idList == "" {
		return contentDetails, nil
	}

	query := fmt.Sprintf("SELECT * FROM content_details WHERE id IN (%s)", idList)

	err := r.executer.Select(
		r.Name+"GetListByIdList",
		&contentDetails,
		query,
	)

	if err != nil {
		return nil, err
	}

	return contentDetails, nil
}

// get list by content id list
func (r *ContentDetailRepositoryImpl) GetListByContentIdList(contentIdList string) ([]*pb.ContentDetail, error) {
	var (
		contentDetails []*pb.ContentDetail = make([]*pb.ContentDetail, 0)
	)

	if contentIdList == "" {
		return contentDetails, nil
	}

	query := fmt.Sprintf("SELECT * FROM content_details WHERE content_id IN (%s)", contentIdList)

	err := r.executer.Select(
		r.Name+"GetListByContentIdList",
		&contentDetails,
		query,
	)

	if err != nil {
		return nil, err
	}

	return contentDetails, nil
}

// admin
// getAll
func (r *ContentDetailRepositoryImpl) GetAll() ([]*pb.ContentDetail, error) {
	var (
		contentDetails []*pb.ContentDetail
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&contentDetails,
		"SELECT * FROM content_details ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all content_details: %w", err)
		log.Println(err)
		return nil, err
	}

	return contentDetails, nil
}
