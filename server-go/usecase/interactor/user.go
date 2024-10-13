package interactor

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"log"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/config"
	"github.com/hidenari-yuda/grpc-go-react-template/domain/entity"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/pkg/errors"
)

type UserInteractor interface {
	// Gest API
	// Create
	Create(param *pb.User) (*pb.User, error)

	// Update
	Update(param *pb.User) (bool, error)

	// Delete
	Delete(param *pb.UserIdRequest) (bool, error)

	// Get
	GetById(param *pb.UserIdRequest) (*pb.User, error)

	// get by uuid
	GetByUuid(param *pb.UserUuidRequest) (*pb.User, error)

	// get latest list
	GetLatestList() ([]*pb.User, error)

	// get trend list
	GetTrendList() ([]*pb.User, error)

	// get list by search
	GetListBySearch(param *pb.UserSearchRequest) ([]*pb.User, error)

	// admin API
	GetAll() ([]*pb.User, error)

	// auth
	SignIn(param *pb.SignInRequest) (*pb.User, error)

	SignInWithGoogle(param *pb.User) (*pb.User, error)
}

type UserInteractorImpl struct {
	firebase                      usecase.Firebase
	userRepository                usecase.UserRepository
	userMediaRepository           usecase.UserMediaRepository
	notificationSettingRepository usecase.NotificationSettingRepository
}

func NewUserInteractorImpl(
	fb usecase.Firebase,
	uR usecase.UserRepository,
	umR usecase.UserMediaRepository,
	nsR usecase.NotificationSettingRepository,
) UserInteractor {
	return &UserInteractorImpl{
		firebase:                      fb,
		userRepository:                uR,
		userMediaRepository:           umR,
		notificationSettingRepository: nsR,
	}
}

// Create
func (i *UserInteractorImpl) Create(param *pb.User) (*pb.User, error) {
	var (
		err error
	)

	// Firebase Authentication Create
	if param.FirebaseId == "" {
		firebaseID, err := i.firebase.CreateUser(
			param.Email,
			param.Password,
		)
		if err != nil {
			return nil, err
		}
		param.FirebaseId = firebaseID
	} else if param.Password == "" {
		mac := hmac.New(sha256.New, []byte(config.App.BasicSecret))
		_, err = mac.Write([]byte(param.FirebaseId))
		if err != nil {
			return nil, err
		}
		param.Password = hex.EncodeToString(mac.Sum(nil))
	} else {
		return nil, err
	}

	// ユーザー登録
	if err := i.userRepository.Create(param); err != nil {
		return param, err
	}

	// ユーザーメディア登録

	// 通知設定登録
	notificationSetting := &pb.NotificationSetting{
		UserId: param.Id,
	}

	if err := i.notificationSettingRepository.Create(notificationSetting); err != nil {
		return param, err
	}

	return param, nil
}

// Update
func (i *UserInteractorImpl) Update(param *pb.User) (bool, error) {

	// update user
	if err := i.userRepository.Update(param); err != nil {
		return false, err
	}

	// create user media
	err := i.userMediaRepository.DeleteByUser(param.Id)
	if err != nil {
		return false, err
	}

	for _, media := range param.Media {
		media.UserId = param.Id
		if err := i.userMediaRepository.Create(media); err != nil {
			return false, err
		}
	}

	return true, nil
}

// delete
func (i *UserInteractorImpl) Delete(param *pb.UserIdRequest) (bool, error) {

	if err := i.userRepository.Delete(param.Id); err != nil {
		return false, err
	}

	return true, nil
}

// GetById
func (i *UserInteractorImpl) GetById(param *pb.UserIdRequest) (*pb.User, error) {
	var (
		user *pb.User
		err  error
	)

	// ユーザー登録
	user, err = i.userRepository.GetById(param.Id)
	if err != nil {
		log.Println("error is:", err)
		return user, err
	}

	return user, nil
}

// GetByUuid
func (i *UserInteractorImpl) GetByUuid(param *pb.UserUuidRequest) (*pb.User, error) {
	var (
		user *pb.User
		err  error
	)

	// ユーザー登録
	user, err = i.userRepository.GetByUuid(param.Uuid)
	if err != nil {
		log.Println("error is:", err)
		return user, err
	}

	log.Println("user is:", user)

	return user, nil
}

// SignIn
func (i *UserInteractorImpl) SignIn(param *pb.SignInRequest) (*pb.User, error) {
	var (
		user *pb.User
		err  error
	)

	firebaseId, err := i.firebase.VerifyIDToken(param.Token)
	if err != nil {
		return user, err
	}

	// log.Println("exported firebaseToken is:", param.Token)
	// log.Println("exported firebaseId is:", firebaseId)

	// ユーザー登録
	user, err = i.userRepository.GetByFirebaseId(firebaseId)
	if err != nil {
		return user, err
	}

	return user, nil

}

// SignIn
func (i *UserInteractorImpl) SignInWithGoogle(param *pb.User) (*pb.User, error) {
	var (
		user *pb.User
		err  error
	)

	// sign in
	user, err = i.userRepository.GetByFirebaseId(param.FirebaseId)
	if errors.Is(err, entity.ErrNotFound) {
		// create password
		mac := hmac.New(sha256.New, []byte(config.App.BasicSecret))
		_, err = mac.Write([]byte(param.FirebaseId))
		if err != nil {
			return nil, err
		}
		param.Password = hex.EncodeToString(mac.Sum(nil))

		// create user
		if err := i.userRepository.Create(param); err != nil {
			return user, err
		}
		user = param

	} else if err != nil {
		return user, err
	}

	return user, nil

}

// GetLatestList
func (i *UserInteractorImpl) GetLatestList() ([]*pb.User, error) {
	var (
		users []*pb.User
		err   error
	)

	users, err = i.userRepository.GetLatestList()
	if err != nil {
		return users, err
	}

	return users, nil
}

// GetTrendList
func (i *UserInteractorImpl) GetTrendList() ([]*pb.User, error) {
	var (
		users []*pb.User
		err   error
	)

	users, err = i.userRepository.GetTrendList()
	if err != nil {
		return users, err
	}

	return users, nil
}

// GetListBySearch
func (i *UserInteractorImpl) GetListBySearch(param *pb.UserSearchRequest) ([]*pb.User, error) {
	var (
		users []*pb.User
		err   error
	)

	users, err = i.userRepository.GetListBySearch(param.FreeWord)
	if err != nil {
		return users, err
	}

	return users, nil
}

// GetAll
func (i *UserInteractorImpl) GetAll() ([]*pb.User, error) {
	var (
		users []*pb.User
		err   error
	)

	users, err = i.userRepository.GetAll()
	if err != nil {
		return users, err
	}

	// i.userClient.DetectTextFromImage()

	return users, nil
}
