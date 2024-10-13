package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type UserRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewUserRepositoryImpl(ex SQLExecuter) usecase.UserRepository {
	return &UserRepositoryImpl{
		Name:     "UserRepository",
		executer: ex,
	}
}

// create
func (r *UserRepositoryImpl) Create(param *pb.User) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO users (
			uuid,
			firebase_id,
			name, 
			email, 
			phone_number,
			photo_url,
			password,
			type,
			description,
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
				?,
				?,
				?
		)`,
		utils.CreateUuid(),
		param.FirebaseId,
		param.Name,
		param.Email,
		param.PhoneNumber,
		param.PhotoUrl,
		param.Password,
		param.Type,
		param.Description,
		now,
		now,
	)

	if err != nil {
		return err
	}

	return nil
}

// update
func (r *UserRepositoryImpl) Update(user *pb.User) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE users SET
			name = ?,
			email = ?,
			phone_number = ?,
			photo_url = ?,
			password = ?,
			type = ?,
			description = ?,
			updated_at = ?
		WHERE _id = ?`,
		user.Name,
		user.Email,
		user.PhoneNumber,
		user.PhotoUrl,
		user.Password,
		user.Type,
		user.Description,
		now,
		user.Id,
	)

	if err != nil {
		err = fmt.Errorf("failed to update user: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// delete
func (r *UserRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE users SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *UserRepositoryImpl) GetById(id int64) (*pb.User, error) {
	var (
		user pb.User
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&user,
		"SELECT * FROM users WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &user, nil
}

// get by uuid
func (r *UserRepositoryImpl) GetByUuid(uuid string) (*pb.User, error) {
	var (
		user pb.User
	)

	if err := r.executer.Get(
		r.Name+"GetByUuid",
		&user,
		"SELECT * FROM users WHERE uuid = ?",
		uuid,
	); err != nil {
		return nil, err
	}

	return &user, nil
}

// get latest list
func (r *UserRepositoryImpl) GetLatestList() ([]*pb.User, error) {
	var (
		users []*pb.User
	)

	if err := r.executer.Select(
		r.Name+"GetLatestList",
		&users,
		"SELECT * FROM users ORDER BY id DESC LIMIT 10",
	); err != nil {
		return nil, err
	}

	return users, nil
}

// get trend list
func (r *UserRepositoryImpl) GetTrendList() ([]*pb.User, error) {
	var (
		users []*pb.User
	)

	if err := r.executer.Select(
		r.Name+"GetTrendList",
		&users,
		"SELECT * FROM users ORDER BY id DESC LIMIT 10",
	); err != nil {
		return nil, err
	}

	return users, nil
}

// get list by search
func (r *UserRepositoryImpl) GetListBySearch(freeWord string) ([]*pb.User, error) {
	var (
		users []*pb.User
	)

	if err := r.executer.Select(
		r.Name+"GetListBySearch",
		&users,
		"SELECT * FROM users WHERE name LIKE ? ORDER BY id DESC",
		"%"+freeWord+"%",
	); err != nil {
		return nil, err
	}

	return users, nil
}

// admin
// getAll
func (r *UserRepositoryImpl) GetAll() ([]*pb.User, error) {
	var (
		users []*pb.User
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&users,
		"SELECT * FROM users ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all users: %w", err)
		log.Println(err)
		return nil, err
	}

	return users, nil
}

// auth
// SignIn
func (r *UserRepositoryImpl) SignIn(email, password string) (user *pb.User, err error) {
	err = r.executer.Get(
		r.Name+"SignIn",
		user,
		"SELECT * FROM users WHERE email = ? AND password = ?",
		email,
		password,
	)

	if err != nil {
		return nil, err
	}

	return user, nil
}

// getByFirebaseId
func (r *UserRepositoryImpl) GetByFirebaseId(firebaseId string) (*pb.User, error) {
	var (
		user pb.User
	)
	err := r.executer.Get(
		r.Name+"GetByFirebaseId",
		&user,
		"SELECT * FROM users WHERE firebase_id = ?",
		firebaseId,
	)

	if err != nil {
		err = fmt.Errorf("failed to get user by firebase id: %w", err)
		log.Println(err)
		return nil, err
	}

	return &user, nil
}
