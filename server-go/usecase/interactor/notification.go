package interactor

import (
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type NotificationInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Notification) (*pb.Notification, error)

	// Update
	Update(param *pb.Notification) (bool, error)

	// update is read when user read notification
	UpdateIsRead(param *pb.NotificationUuidRequest) (bool, error)

	// Delete
	Delete(param *pb.NotificationIdRequest) (bool, error)

	// Get
	GetById(param *pb.NotificationIdRequest) (*pb.Notification, error)

	// get by uuid
	GetByUuid(param *pb.NotificationUuidRequest) (*pb.Notification, error)

	// get list by receive user
	GetListByReceiveUser(param *pb.NotificationUserIdRequest) ([]*pb.Notification, error)

	// get unread list by receive user
	GetUnreadListByReceiveUser(param *pb.NotificationUserIdRequest) ([]*pb.Notification, error)

	// get list by send user
	GetListBySendUser(param *pb.NotificationUserIdRequest) ([]*pb.Notification, error)

	// get list by id list
	// GetListByIdList(param *pb.NotificationIdListRequest) ([]*pb.Notification, error)
}

type NotificationInteractorImpl struct {
	firebase               usecase.Firebase
	notificationRepository usecase.NotificationRepository
}

func NewNotificationInteractorImpl(
	fb usecase.Firebase,
	vR usecase.NotificationRepository,
) NotificationInteractor {
	return &NotificationInteractorImpl{
		firebase:               fb,
		notificationRepository: vR,
	}
}

func (i *NotificationInteractorImpl) Create(param *pb.Notification) (*pb.Notification, error) {

	err := i.notificationRepository.Create(param)
	if err != nil {
		return param, err
	}

	return param, nil
}

func (i *NotificationInteractorImpl) Update(param *pb.Notification) (bool, error) {

	err := i.notificationRepository.Update(param)
	if err != nil {
		return false, err
	}

	return true, nil
}

// update is read when user read notification
func (i *NotificationInteractorImpl) UpdateIsRead(param *pb.NotificationUuidRequest) (bool, error) {

	err := i.notificationRepository.UpdateIsRead(param.Uuid)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *NotificationInteractorImpl) Delete(param *pb.NotificationIdRequest) (bool, error) {

	err := i.notificationRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *NotificationInteractorImpl) GetById(param *pb.NotificationIdRequest) (*pb.Notification, error) {
	var (
		notification *pb.Notification
		err          error
	)

	notification, err = i.notificationRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return notification, err
	}

	return notification, nil
}

func (i *NotificationInteractorImpl) GetByUuid(param *pb.NotificationUuidRequest) (*pb.Notification, error) {
	var (
		notification *pb.Notification
		err          error
	)

	notification, err = i.notificationRepository.GetByUuid(param.Uuid)
	if err != nil {
		log.Println("error is:", err)
		return notification, err
	}

	return notification, nil
}

// get list by receive user
func (i *NotificationInteractorImpl) GetListByReceiveUser(param *pb.NotificationUserIdRequest) ([]*pb.Notification, error) {
	var (
		notifications []*pb.Notification
		err           error
	)

	notifications, err = i.notificationRepository.GetListByReceiveUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return notifications, err
	}

	return notifications, nil
}

// get unread list by receive user
func (i *NotificationInteractorImpl) GetUnreadListByReceiveUser(param *pb.NotificationUserIdRequest) ([]*pb.Notification, error) {
	var (
		notifications []*pb.Notification
		err           error
	)

	notifications, err = i.notificationRepository.GetUnreadListByReceiveUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return notifications, err
	}

	return notifications, nil
}

// get list by send user
func (i *NotificationInteractorImpl) GetListBySendUser(param *pb.NotificationUserIdRequest) ([]*pb.Notification, error) {
	var (
		notifications []*pb.Notification
		err           error
	)

	notifications, err = i.notificationRepository.GetListBySendUser(param.UserId)
	if err != nil {
		log.Println("error is:", err)
		return notifications, err
	}

	return notifications, nil
}

// // get list by id list
// func (i *NotificationInteractorImpl) GetListByIdList(param *pb.NotificationIdListRequest) ([]*pb.Notification, error) {
// 	var (
// 		notifications []*pb.Notification
// 		err   error
// 	)

// 	notifications, err = i.notificationRepository.GetListByIdList(param.Id)
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return notifications, err
// 	}

// 	return notifications, nil
// }

// // admin
// // get all
// func (i *NotificationInteractorImpl) GetAll() ([]*pb.Notification, error) {
// 	var (
// 		notifications []*pb.Notification
// 		err   error
// 	)

// 	notifications, err = i.notificationRepository.GetAll()
// 	if err != nil {
// 		log.Println("error is:", err)
// 		return notifications, err
// 	}

// 	return notifications, nil
// }
