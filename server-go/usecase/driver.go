package usecase

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
)

type Firebase interface {
	VerifyIDToken(idToken string) (string, error)
	GetCustomToken(uid string) (string, error)
	GetIDToken(token string) (string, error)
	GetPhoneNumber(uid string) (string, error)
	Set(doc string, data map[string]interface{}) error
	CreateUser(email, password string) (string, error)
	UpdateEmail(email, uid string) error
	UpdatePassword(password, uid string) error

	CreateChatGroup(ctx context.Context, chatGroup *pb.ChatGroup) error
	UpdateChatGroup(ctx context.Context, chatGroup *pb.ChatGroup) error
	GetChatGroupById(ctx context.Context, id int64) (*pb.ChatGroup, error)
	GetChatGroupListByUser(ctx context.Context, userId int64) ([]*pb.ChatGroup, error)

	CreateChat(ctx context.Context, chat *pb.Chat) error
	UpdateChat(ctx context.Context, chat *pb.Chat) error
	GetChatById(ctx context.Context, cid int64) (*pb.Chat, error)
	GetChatListByGroup(ctx context.Context, groupId int64) ([]*pb.Chat, error)
	GetChatStreamByGroup(ctx context.Context, stream chan<- pb.Chat, groupId int64) error
}

type Cache interface {
	GetBytes(key string) ([]byte, error)
	GetString(key string) (string, error)
	Set(key string, obj interface{}, ttl int) (interface{}, error)
	Do(commandName string, args ...interface{}) (interface{}, error)
	Values(reply interface{}, err error) ([]interface{}, error)
}
