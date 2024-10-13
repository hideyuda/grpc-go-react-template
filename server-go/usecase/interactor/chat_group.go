package interactor

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type ChatGroupInteractor interface {
	// Gest API
	// Create
	Create(param *pb.ChatGroup) (*pb.ChatGroup, error)

	// Update
	Update(param *pb.ChatGroup) (bool, error)

	// Delete
	Delete(param *pb.ChatIdRequest) (bool, error)

	// Get
	GetById(param *pb.ChatIdRequest) (*pb.ChatGroup, error)

	// get by uuid
	GetByUuid(param *pb.ChatUuidRequest) (*pb.ChatGroup, error)

	// get list by user id
	GetListByUser(param *pb.ChatUserIdRequest) ([]*pb.ChatGroup, error)
}

type ChatGroupInteractorImpl struct {
	firebase usecase.Firebase
	// chatGroupRepository usecase.ChatGroupRepository
	// chatUserRepository  usecase.ChatUserRepository
}

func NewChatGroupInteractorImpl(
	fb usecase.Firebase,
	// cgR usecase.ChatGroupRepository,
	// cuR usecase.ChatUserRepository,
) ChatGroupInteractor {
	return &ChatGroupInteractorImpl{
		firebase: fb,
		// chatGroupRepository: cgR,
		// chatUserRepository:  cuR,
	}
}

func (i *ChatGroupInteractorImpl) Create(param *pb.ChatGroup) (*pb.ChatGroup, error) {

	ctx := context.Background()
	if err := i.firebase.CreateChatGroup(ctx, param); err != nil {
		return param, err
	}

	return param, nil
}

func (i *ChatGroupInteractorImpl) Update(param *pb.ChatGroup) (bool, error) {

	ctx := context.Background()
	if err := i.firebase.UpdateChatGroup(ctx, param); err != nil {
		return false, err
	}

	return true, nil
}

func (i *ChatGroupInteractorImpl) Delete(param *pb.ChatIdRequest) (bool, error) {

	return true, nil
}

func (i *ChatGroupInteractorImpl) GetById(param *pb.ChatIdRequest) (*pb.ChatGroup, error) {
	var (
		chatGroup *pb.ChatGroup
		err       error
	)

	chatGroup, err = i.firebase.GetChatGroupById(context.Background(), param.Id)
	if err != nil {
		return chatGroup, err
	}

	return chatGroup, nil
}

func (i *ChatGroupInteractorImpl) GetByUuid(param *pb.ChatUuidRequest) (*pb.ChatGroup, error) {
	var (
		chatGroup *pb.ChatGroup
		// err       error
	)

	// chatGroup, err = i.firebase.GetChatGroupByUuid(context.Background(), param.Uuid)
	// if err != nil {
	// 	return chatGroup, err
	// }

	return chatGroup, nil
}

func (i *ChatGroupInteractorImpl) GetListByUser(param *pb.ChatUserIdRequest) ([]*pb.ChatGroup, error) {
	var (
		chatGroups []*pb.ChatGroup
		err        error
	)

	chatGroups, err = i.firebase.GetChatGroupListByUser(context.Background(), param.UserId)
	if err != nil {
		return chatGroups, err
	}

	return chatGroups, nil
}
