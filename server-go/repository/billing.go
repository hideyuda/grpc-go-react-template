package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type BillingRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewBillingRepositoryImpl(ex SQLExecuter) usecase.BillingRepository {
	return &BillingRepositoryImpl{
		Name:     "BillingRepository",
		executer: ex,
	}
}

// create
func (r *BillingRepositoryImpl) Create(param *pb.Billing) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO billings (
			uuid,
			user_id,
			title,
			number,
			expiration_year,
			expiration_month,
			security_code,
			name,
			password,
			service,
			is_registered,
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
				?,
				?
		)`,
		utils.CreateUuid(),
		param.UserId,
		param.Title,
		param.Number,
		param.ExpirationYear,
		param.ExpirationMonth,
		param.SecurityCode,
		param.Name,
		param.Password,
		param.Service,
		param.IsRegistered,
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
func (r *BillingRepositoryImpl) Update(param *pb.Billing) error {
	now := time.Now().UTC()

	lastId, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE billings SET
			title = ?,
			number = ?,
			expiration_year = ?,
			expiration_month = ?,
			security_code = ?,
			name = ?,
			password = ?,
			service = ?,
			is_registered = ?,
			updated_at = ?
		WHERE id = ?`,
		param.Title,
		param.Number,
		param.ExpirationYear,
		param.ExpirationMonth,
		param.SecurityCode,
		param.Name,
		param.Password,
		param.Service,
		param.IsRegistered,
		now,
		param.Id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update billing: %w", err)
		log.Println(err)
		return err
	}

	param.Id = lastId

	return nil
}

// delete
func (r *BillingRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE billings SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *BillingRepositoryImpl) GetById(id int64) (*pb.Billing, error) {
	var (
		billing pb.Billing
	)

	if err := r.executer.Get(
		r.Name+"GetById",
		&billing,
		"SELECT * FROM billings WHERE id = ?",
		id,
	); err != nil {
		return nil, err
	}

	return &billing, nil
}

// get by uuid
func (r *BillingRepositoryImpl) GetByUuid(uuid string) (*pb.Billing, error) {
	var (
		billing pb.Billing
	)

	if err := r.executer.Get(
		r.Name+"GetByUuid",
		&billing,
		"SELECT * FROM billings WHERE uuid = ?",
		uuid,
	); err != nil {
		return nil, err
	}

	return &billing, nil
}

// getByUser
func (r *BillingRepositoryImpl) GetListByUser(userId int64) ([]*pb.Billing, error) {
	var (
		billings []*pb.Billing
	)

	if err := r.executer.Select(
		r.Name+"GetListByUser",
		&billings,
		"SELECT * FROM billings WHERE user_id = ?",
		userId,
	); err != nil {
		return nil, err
	}

	return billings, nil
}

// admin
// getAll
func (r *BillingRepositoryImpl) GetAll() ([]*pb.Billing, error) {
	var (
		billings []*pb.Billing
	)

	if err := r.executer.Select(
		r.Name+"GetAll",
		&billings,
		"SELECT * FROM billings ORDER BY id DESC",
	); err != nil {
		err = fmt.Errorf("failed to get all billings: %w", err)
		log.Println(err)
		return nil, err
	}

	return billings, nil
}
