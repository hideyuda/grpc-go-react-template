package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type NotificationRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

func NewNotificationRepositoryImpl(ex SQLExecuter) usecase.NotificationRepository {
	return &NotificationRepositoryImpl{
		Name:     "NotificationRepository",
		executer: ex,
	}
}

// create
func (r *NotificationRepositoryImpl) Create(param *pb.Notification) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO notifications (
			uuid,
			send_user_id,
			receive_user_id,
			type,
			topic,
			content,
			is_read,
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
		param.SendUserId,
		param.ReceiveUserId,
		param.Type,
		param.Topic,
		param.Content,
		false, // is_read
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
func (r *NotificationRepositoryImpl) Update(param *pb.Notification) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE notifications SET
		type = ?,
		topic = ?,
		content = ?,
		is_read = ?,
		updated_at = ?
		WHERE id = ?`,
		param.Type,
		param.Topic,
		param.Content,
		false,
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

// update read
func (r *NotificationRepositoryImpl) UpdateIsRead(uuid string) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE notifications SET
		is_read = ?,
		updated_at = ?
		WHERE uuid = ?`,
		true,
		now,
		uuid,
	)

	if err != nil {
		err = fmt.Errorf("failed to update content: %w", err)
		log.Println(err)
		return err
	}

	return nil
}

// delete
func (r *NotificationRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE notifications SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *NotificationRepositoryImpl) GetById(id int64) (*pb.Notification, error) {
	var (
		content pb.Notification
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM notifications WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *NotificationRepositoryImpl) GetByUuid(uuid string) (*pb.Notification, error) {
	var (
		content pb.Notification
	)

	err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM notifications WHERE uuid = ?",
		uuid,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// get list by receive user
func (r *NotificationRepositoryImpl) GetListByReceiveUser(receiveUserId int64) ([]*pb.Notification, error) {
	var (
		notifications []*pb.Notification
	)

	err := r.executer.Select(
		r.Name+"GetListByReceiveUser",
		&notifications,
		"SELECT * FROM notifications WHERE receive_user_id = ?",
		receiveUserId,
	)

	if err != nil {
		return nil, err
	}

	return notifications, nil
}

// get unread list by receive user
func (r *NotificationRepositoryImpl) GetUnreadListByReceiveUser(receiveUserId int64) ([]*pb.Notification, error) {
	var (
		notifications []*pb.Notification
	)

	err := r.executer.Select(
		r.Name+"GetUnreadListByReceiveUser",
		&notifications,
		"SELECT * FROM notifications WHERE is_read = false AND receive_user_id = ?",
		receiveUserId,
	)

	if err != nil {
		return nil, err
	}

	return notifications, nil
}

// get list by send user
func (r *NotificationRepositoryImpl) GetListBySendUser(sendUserId int64) ([]*pb.Notification, error) {
	var (
		notifications []*pb.Notification
	)

	err := r.executer.Select(
		r.Name+"GetListBySendUser",
		&notifications,
		"SELECT * FROM notifications WHERE send_user_id = ?",
		sendUserId,
	)

	if err != nil {
		return nil, err
	}

	return notifications, nil
}

// get list by id list
func (r *NotificationRepositoryImpl) GetListByIdList(idList string) ([]*pb.Notification, error) {
	var (
		notifications []*pb.Notification = make([]*pb.Notification, 0)
	)

	if idList == "" {
		return notifications, nil
	}

	err := r.executer.Select(
		r.Name+"GetListByIdList",
		&notifications,
		"SELECT * FROM notifications WHERE id IN (?)",
		idList,
	)

	if err != nil {
		return nil, err
	}

	return notifications, nil
}

// admin
// getAll
func (r *NotificationRepositoryImpl) GetAll() ([]*pb.Notification, error) {
	var (
		notifications []*pb.Notification
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&notifications,
		"SELECT * FROM notifications ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all notifications: %w", err)
		log.Println(err)
		return nil, err
	}

	return notifications, nil
}
