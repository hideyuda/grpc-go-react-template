package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ContentRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewContentRepositoryImpl(ex SQLExecuter) usecase.ContentRepository {
	return &ContentRepositoryImpl{
		Name:     "ContentRepository",
		executer: ex,
	}
}

// create
func (r *ContentRepositoryImpl) Create(param *pb.Content) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO contents (
			uuid,
			user_id,
			title,
			description,
			thumbnail,
			price,
			asp_rate,
			request_progress,
			is_open,
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
				?,
				?,
				?,
				?,
				?,
				?,
		)`,
		utils.CreateUuid(),
		param.UserId,
		param.Title,
		param.Description,
		param.Thumbnail,
		param.Price,
		param.AspRate,
		param.RequestProgress,
		param.IsOpen,
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
func (r *ContentRepositoryImpl) Update(param *pb.Content) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE contents SET
			title = ?,
			description = ?,
			thumbnail = ?,
			price = ?,
			asp_rate = ?,
			request_progress = ?,
			is_open = ?,
			updated_at = ?
		WHERE id = ?`,
		param.Title,
		param.Description,
		param.Thumbnail,
		param.Price,
		param.AspRate,
		param.RequestProgress,
		param.IsOpen,
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

// update impression
func (r *ContentRepositoryImpl) UpdateImpressionByIdList(idList string) error {
	_, err := r.executer.Exec(
		r.Name+"UpdateImpression",
		`UPDATE contents SET
			impression_count = impression_count + 1,
			updated_at = ?
		WHERE id IN (?)`,
		time.Now().UTC(),
		idList,
	)

	if err != nil {
		err = fmt.Errorf("failed to update content impression: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// update view
func (r *ContentRepositoryImpl) UpdateView(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"UpdateView",
		`UPDATE contents SET
			view_count = view_count + 1,
			updated_at = ?
		WHERE id = ?`,
		time.Now().UTC(),
		id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update content view: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// update like
func (r *ContentRepositoryImpl) CreateLike(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"CreateLike",
		`UPDATE contents SET
			like_count = like_count + 1,
			updated_at = ?
		WHERE id = ?`,
		time.Now().UTC(),
		id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update content like: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// delete like
func (r *ContentRepositoryImpl) DeleteLike(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"DeleteLike",
		`UPDATE contents SET

			like_count = like_count - 1,
			updated_at = ?
		WHERE id = ?`,
		time.Now().UTC(),
		id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update content like: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// update click
func (r *ContentRepositoryImpl) UpdateClick(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"UpdateClick",
		`UPDATE contents SET
			click_count = click_count + 1,
			updated_at = ?
		WHERE id = ?`,
		time.Now().UTC(),
		id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update content click: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// delete
func (r *ContentRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		`UPDATE contents SET is_deleted = true WHERE id = ?`,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *ContentRepositoryImpl) GetById(id int64) (*pb.Content, error) {
	var (
		content pb.Content
	)

	if err := r.executer.Get(
		r.Name+"GetById",
		&content,
		`
		SELECT * 
		FROM contents 
		WHERE 
			id = ?
			AND 
			is_deleted = false
			`,
		id,
	); err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *ContentRepositoryImpl) GetByUuid(uuid string) (*pb.Content, error) {
	var (
		content pb.Content
	)

	if err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		`
		SELECT * 
		FROM contents 
		WHERE 
			uuid = ?
			AND 
			is_deleted = false
		`,
		uuid,
	); err != nil {
		return nil, err
	}

	return &content, nil
}

// getByUser
func (r *ContentRepositoryImpl) GetListByUser(userId int64) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetListByUser",
		&contents,
		`
		SELECT * 
		FROM contents 
		WHERE 
			user_id = ?
			AND
			is_deleted = false
		`,
		userId,
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get newest list by keyword
func (r *ContentRepositoryImpl) GetNewestListByKeyword(keyword string) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetNewestListByKeyword",
		&contents,
		`
		SELECT * 
		FROM contents 
		WHERE 
			title LIKE ? OR description LIKE ?
			AND
			is_deleted = false
			AND
			is_open = true
		ORDER BY updated_at DESC
			`,
		"%"+keyword+"%",
		"%"+keyword+"%",
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get hottest list by keyword
func (r *ContentRepositoryImpl) GetHottestListByKeyword(keyword string) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetHottestListByKeyword",
		&contents,
		`
			SELECT * 
			FROM contents 
			WHERE 
				title LIKE ? OR description LIKE ?
				AND
				is_deleted = false
				AND
				is_open = true
			ORDER BY view_count DESC
			`,
		"%"+keyword+"%",
		"%"+keyword+"%",
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get top list by keyword
func (r *ContentRepositoryImpl) GetTopListByKeyword(keyword string) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetTopListByKeyword",
		&contents,
		`
				SELECT * 
				FROM contents 
				WHERE 
					title LIKE ? OR description LIKE ?
					AND
					is_deleted = false
					AND
					is_open = true
				ORDER BY like_count DESC
				`,
		"%"+keyword+"%",
		"%"+keyword+"%",
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get by latest id=user_id
func (r *ContentRepositoryImpl) GetLatestList() ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetLatestList",
		&contents,
		`
		SELECT 
			*
		FROM 
			contents
		WHERE 
			is_deleted = false
			AND
			is_open = true
		ORDER BY id DESC
		`,
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get by trend id=user_id
func (r *ContentRepositoryImpl) GetTrendList() ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetTrendList",
		&contents,
		`
		SELECT
			* 
		FROM 
			contents 
		WHERE 
			is_deleted = false 
			AND
			is_open = true
		ORDER BY 
			view_count DESC
		`,
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get recommended list
func (r *ContentRepositoryImpl) GetRecommendedListByUser(userId int64) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetRecommendedListByUser",
		&contents,
		`
		SELECT
			* 
		FROM 
			contents 
		WHERE 
			is_deleted = false 
			AND
			is_open = true
		ORDER BY 
			view_count DESC
		`,
		// userId,
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get recommended list
func (r *ContentRepositoryImpl) GetRecommendedListByContent() ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetRecommendedListByContent",
		&contents,
		`
		SELECT
			* 
		FROM 
			contents 
		WHERE 
			is_deleted = false 
			AND
			is_open = true
		ORDER BY 
			view_count DESC
		`,
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get by sold id=user_id
func (r *ContentRepositoryImpl) GetSoldListByUser(userId int64) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetSoldListByUser",
		&contents,
		`
		SELECT
			* 
		FROM 
			contents 
		WHERE 
			user_id = ?
			AND
			is_deleted = false
		ORDER BY 
			id DESC
		`,
		userId,
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get by purchased id=user_id
// GetPurchasedListByUser(userId int64) ([]*pb.Content, error)
func (r *ContentRepositoryImpl) GetPurchasedListByUser(userId int64) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetPurchasedListByUser",
		&contents,
		`
		SELECT
			* 
		FROM 
			contents 
		WHERE 
			user_id = ?
			AND
			is_deleted = false 
			AND
			is_open = true
		ORDER BY 
			id DESC
		`,
		userId,
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get by liked id=user_id
// GetLikedListByUser(userId int64) ([]*pb.Content, error)
func (r *ContentRepositoryImpl) GetLikedListByUser(userId int64) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetLikedListByUser",
		&contents,
		`
		SELECT
			* 
		FROM 
			contents 
		WHERE 
			user_id = ?
			AND
			is_deleted = false 
			AND
			is_open = true
		ORDER BY 
			id DESC
		`,
		userId,
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// get list by id list
//
//	GetListByIdList(idList []int64) ([]*pb.Content, error)
func (r *ContentRepositoryImpl) GetListByIdList(idList string) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetListByIdList",
		&contents,
		`
		SELECT * 
		FROM contents 
		WHERE id IN (?)
		`,
		idList,
	); err != nil {
		return nil, err
	}

	return contents, nil
}

// admin
// getAll
func (r *ContentRepositoryImpl) GetAll() ([]*pb.Content, error) {
	var (
		contents []*pb.Content
	)

	if err := r.executer.Select(
		r.Name+"GetAll",
		&contents,
		`
		SELECT * 
		FROM contents 
		ORDER BY id DESC
		`,
	); err != nil {
		err = fmt.Errorf("failed to get all contents: %w", err)
		log.Println(err)
		return nil, err
	}

	return contents, nil
}
