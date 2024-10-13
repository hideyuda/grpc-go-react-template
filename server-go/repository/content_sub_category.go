package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ContentSubCategoryRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewContentSubCategoryRepositoryImpl(ex SQLExecuter) usecase.ContentSubCategoryRepository {
	return &ContentSubCategoryRepositoryImpl{
		Name:     "ContentSubCategoryRepository",
		executer: ex,
	}
}

// create
func (r *ContentSubCategoryRepositoryImpl) Create(param *pb.ContentSubCategory) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO content_sub_categories (
			uuid,
			content_id,
			sub_category,
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
		param.SubCategory,
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
func (r *ContentSubCategoryRepositoryImpl) Update(param *pb.ContentSubCategory) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE content_sub_categories SET
			subcategory = ?,
			updated_at = ?
		WHERE id = ?`,
		param.SubCategory,
		now,
		param.Id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update contentSubCategory: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// delete
func (r *ContentSubCategoryRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE content_sub_categories SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// delete by content
func (r *ContentSubCategoryRepositoryImpl) DeleteByContent(contentId int64) error {
	_, err := r.executer.Exec(
		r.Name+"DeleteByContent",
		"DELETE FROM content_sub_categories WHERE content_id = ?",
		contentId,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *ContentSubCategoryRepositoryImpl) GetById(id int64) (*pb.ContentSubCategory, error) {
	var (
		contentSubCategory pb.ContentSubCategory
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&contentSubCategory,
		"SELECT * FROM content_sub_categories WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &contentSubCategory, nil
}

// getByContent
func (r *ContentSubCategoryRepositoryImpl) GetListByContent(contentId int64) ([]*pb.ContentSubCategory, error) {
	var (
		contentSubCategories []*pb.ContentSubCategory
	)

	err := r.executer.Select(
		r.Name+"GetListByContent",
		&contentSubCategories,
		"SELECT * FROM content_sub_categories WHERE content_id = ?",
		contentId,
	)

	if err != nil {
		return nil, err
	}

	return contentSubCategories, nil
}

// get list by user
func (r *ContentSubCategoryRepositoryImpl) GetListByUser(userId int64) ([]*pb.ContentSubCategory, error) {
	var (
		contentSubCategories []*pb.ContentSubCategory
	)

	err := r.executer.Select(
		r.Name+"GetListByUser",
		&contentSubCategories,
		`SELECT * FROM content_sub_categories WHERE content_id IN (
			SELECT id FROM contents WHERE user_id = ?
		)`,
		userId,
	)

	if err != nil {
		return nil, err
	}

	return contentSubCategories, nil
}

// get list by id list
func (r *ContentSubCategoryRepositoryImpl) GetListByIdList(idList string) ([]*pb.ContentSubCategory, error) {
	var (
		contentSubCategories []*pb.ContentSubCategory = make([]*pb.ContentSubCategory, 0)
	)

	if idList == "" {
		return contentSubCategories, nil
	}

	query := fmt.Sprintf("SELECT * FROM content_sub_categories WHERE id IN (%s)", idList)

	err := r.executer.Select(
		r.Name+"GetListByIdList",
		&contentSubCategories,
		query,
	)

	if err != nil {
		return nil, err
	}

	return contentSubCategories, nil
}

// get list by content id list
func (r *ContentSubCategoryRepositoryImpl) GetListByContentIdList(contentIdList string) ([]*pb.ContentSubCategory, error) {
	var (
		contentSubCategories []*pb.ContentSubCategory = make([]*pb.ContentSubCategory, 0)
	)

	if contentIdList == "" {
		return contentSubCategories, nil
	}

	query := fmt.Sprintf("SELECT * FROM content_sub_categories WHERE content_id IN (%s)", contentIdList)

	err := r.executer.Select(
		r.Name+"GetListByContentIdList",
		&contentSubCategories,
		query,
	)

	if err != nil {
		return nil, err
	}

	return contentSubCategories, nil
}

// admin
// getAll
func (r *ContentSubCategoryRepositoryImpl) GetAll() ([]*pb.ContentSubCategory, error) {
	var (
		contentSubCategories []*pb.ContentSubCategory
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&contentSubCategories,
		"SELECT * FROM content_sub_categories ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all content_sub_categories: %w", err)
		log.Println(err)
		return nil, err
	}

	return contentSubCategories, nil
}
