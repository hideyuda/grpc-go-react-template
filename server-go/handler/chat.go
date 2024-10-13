package handler

import (
	"context"
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
)

type ChatServiceServer struct {
	pb.UnimplementedChatServiceServer
	ChatInteractor interactor.ChatInteractor
	Db             *database.Db
	Firebase       usecase.Firebase
}

func NewChatSercviceServer(chatInteractor interactor.ChatInteractor) *ChatServiceServer {
	return &ChatServiceServer{
		ChatInteractor: chatInteractor,
		Db:             database.NewDb(),
		Firebase:       driver.NewFirebaseImpl(),
	}
}

// create chat
func (s *ChatServiceServer) Create(ctx context.Context, req *pb.Chat) (*pb.Chat, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ChatInteractor.Create(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return res, nil
}

// update chat
func (s *ChatServiceServer) Update(ctx context.Context, req *pb.Chat) (*pb.ChatBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ChatInteractor.Update(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ChatBoolResponse{Error: res}, nil
}

// delete chat
func (s *ChatServiceServer) Delete(ctx context.Context, req *pb.ChatIdRequest) (*pb.ChatBoolResponse, error) {

	tx, err := s.Db.Begin()
	if err != nil {
		return nil, err
	}

	res, err := s.ChatInteractor.Delete(req)
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()

	return &pb.ChatBoolResponse{Error: res}, nil
}

// get chat  by id
func (s *ChatServiceServer) GetById(ctx context.Context, req *pb.ChatIdRequest) (*pb.Chat, error) {

	res, err := s.ChatInteractor.GetById(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// get chat  by user id
func (s *ChatServiceServer) GetListByGroup(ctx context.Context, req *pb.ChatGroupIdRequest) (*pb.ChatList, error) {

	res, err := s.ChatInteractor.GetListByGroup(req)
	if err != nil {
		return nil, err
	}

	return &pb.ChatList{Chat: res}, nil
}

func (s *ChatServiceServer) GetStreamByGroup(req *pb.ChatGroupIdRequest, server pb.ChatService_GetStreamByGroupServer) error {

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	stream := make(chan pb.Chat)

	go func() {
		err := s.ChatInteractor.GetStreamByGroup(ctx, stream, req.GroupId)
		if err != nil {
			log.Println(err)
		}
	}()

	for {
		v := <-stream

		// createdAt := timestamppb.New(v.CreatedAt)
		if err := server.Send(&pb.Chat{
			From:      v.From,
			To:        v.To,
			Content:   v.Content,
			CreatedAt: v.CreatedAt,
			UpdatedAt: v.UpdatedAt,
		},
		); err != nil {
			return err
		}
	}
}
