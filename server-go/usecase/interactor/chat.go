package interactor

import (
	"context"
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"golang.org/x/sync/errgroup"
)

type ChatInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Chat) (*pb.Chat, error)

	// Update
	Update(param *pb.Chat) (bool, error)

	// Delete
	Delete(param *pb.ChatIdRequest) (bool, error)

	// Get
	GetById(param *pb.ChatIdRequest) (*pb.Chat, error)

	// get list by user id
	GetListByGroup(param *pb.ChatGroupIdRequest) ([]*pb.Chat, error)

	// stream
	GetStreamByGroup(ctx context.Context, stream chan<- pb.Chat, groupId int64) error
}

type ChatInteractorImpl struct {
	firebase usecase.Firebase
	// chatRepository      usecase.ChatRepository
	// chatRepository usecase.ChatRepository
	// chatUserRepository  usecase.ChatRepository
}

func NewChatInteractorImpl(
	fb usecase.Firebase,
	// cR usecase.ChatRepository,
	// cgR usecase.ChatRepository,
	// cuR usecase.ChatUserRepository,
) ChatInteractor {
	return &ChatInteractorImpl{
		firebase: fb,
		// chatRepository:      cR,
		// chatRepository: cgR,
		// chatUserRepository:  cuR,
	}
}

func (i *ChatInteractorImpl) Create(param *pb.Chat) (*pb.Chat, error) {

	// create chat
	ctx := context.Background()
	if err := i.firebase.CreateChat(ctx, param); err != nil {
		return param, err
	}

	return param, nil
}

func (i *ChatInteractorImpl) Update(param *pb.Chat) (bool, error) {

	// update
	ctx := context.Background()
	if err := i.firebase.UpdateChat(ctx, param); err != nil {
		return false, err
	}

	return true, nil
}

func (i *ChatInteractorImpl) Delete(param *pb.ChatIdRequest) (bool, error) {

	// delete chat
	// ctx := context.Background()
	// if err := i.firebase.DeleteChat(ctx, param.Id); err != nil {
	// 	return false, err
	// }

	return true, nil
}

func (i *ChatInteractorImpl) GetById(param *pb.ChatIdRequest) (*pb.Chat, error) {
	var (
		chat *pb.Chat
		err  error
	)

	chat, err = i.firebase.GetChatById(context.Background(), param.Id)
	if err != nil {
		log.Println("error is:", err)
		return chat, err
	}

	return chat, nil
}

func (i *ChatInteractorImpl) GetListByGroup(param *pb.ChatGroupIdRequest) ([]*pb.Chat, error) {
	var (
		chats []*pb.Chat
		err   error
	)

	chats, err = i.firebase.GetChatListByGroup(context.Background(), param.GroupId)
	if err != nil {
		log.Println("error is:", err)
		return chats, err
	}

	return chats, nil
}

// get stream
func (i *ChatInteractorImpl) GetStreamByGroup(ctx context.Context, stream chan<- pb.Chat, groupId int64) error {
	defer close(stream)
	eg, _ := errgroup.WithContext(ctx)
	eg.Go(func() error {
		err := i.firebase.GetChatStreamByGroup(ctx, stream, groupId)
		if err != nil {
			return err
		}
		return nil
	})
	if err := eg.Wait(); err != nil {
		return err
	}
	return nil
}
