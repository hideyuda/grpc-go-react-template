package di

import (
	"context"

	"github.com/hidenari-yuda/grpc-go-react-template/handler"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/repository"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase/interactor"
	"google.golang.org/grpc"
)

// RegisterServiceServer is a function to register service server
func RegisterServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	regsiterUserServiceServer(ctx, s, db, firebase)
	registerContentServiceServer(ctx, s, db, firebase)
	registerOrderServiceServer(ctx, s, db, firebase)
	registerPointServiceServer(ctx, s, db, firebase)
	registerPointHistoryServiceServer(ctx, s, db, firebase)
	registerAspServiceServer(ctx, s, db, firebase)
	registerViewServiceServer(ctx, s, db, firebase)
	registerLikeServiceServer(ctx, s, db, firebase)
	registerReviewServiceServer(ctx, s, db, firebase)
	registerBillingServiceServer(ctx, s, db, firebase)
	registerClickServiceServer(ctx, s, db, firebase)
	registerFollowingServiceServer(ctx, s, db, firebase)
	registerChatServiceServer(ctx, s, db, firebase)
	registerChatGroupServiceServer(ctx, s, db, firebase)
	registerNotificationServiceServer(ctx, s, db, firebase)
}

// regsiterUserServiceServer is a function to register user service server
func regsiterUserServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	userRepository := repository.NewUserRepositoryImpl(db)
	userMediaRepository := repository.NewUserMediaRepositoryImpl(db)
	pb.RegisterUserServiceServer(s, handler.NewUserSercviceServer(interactor.NewUserInteractorImpl(firebase, userRepository, userMediaRepository)))
}

// content
func registerContentServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	contentRepository := repository.NewContentRepositoryImpl(db)
	contentContentRepository := repository.NewContentDetailRepositoryImpl(db)
	contentToolRepository := repository.NewContentToolRepositoryImpl(db)
	contentCategoryRepository := repository.NewContentCategoryRepositoryImpl(db)
	contentSubCategoryRepository := repository.NewContentSubCategoryRepositoryImpl(db)
	likeRepository := repository.NewLikeRepositoryImpl(db)
	pb.RegisterContentServiceServer(s, handler.NewContentSercviceServer(interactor.NewContentInteractorImpl(
		firebase,
		contentRepository,
		contentContentRepository,
		contentToolRepository,
		contentCategoryRepository,
		contentSubCategoryRepository,
		likeRepository,
	)))
}

// order
func registerOrderServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	orderRepository := repository.NewOrderRepositoryImpl(db)
	pb.RegisterOrderServiceServer(s, handler.NewOrderSercviceServer(interactor.NewOrderInteractorImpl(firebase, orderRepository)))
}

// point
func registerPointServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	pointRepository := repository.NewPointRepositoryImpl(db)
	pb.RegisterPointServiceServer(s, handler.NewPointSercviceServer(interactor.NewPointInteractorImpl(firebase, pointRepository)))
}

// pointHistory
func registerPointHistoryServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	pointHistoryRepository := repository.NewPointHistoryRepositoryImpl(db)
	pb.RegisterPointHistoryServiceServer(s, handler.NewPointHistorySercviceServer(interactor.NewPointHistoryInteractorImpl(firebase, pointHistoryRepository)))
}

// asp
func registerAspServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	aspRepository := repository.NewAspRepositoryImpl(db)
	pb.RegisterAspServiceServer(s, handler.NewAspSercviceServer(interactor.NewAspInteractorImpl(firebase, aspRepository)))
}

// billing
func registerBillingServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	billingRepository := repository.NewBillingRepositoryImpl(db)
	pb.RegisterBillingServiceServer(s, handler.NewBillingSercviceServer(interactor.NewBillingInteractorImpl(firebase, billingRepository)))
}

// like
func registerLikeServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	likeRepository := repository.NewLikeRepositoryImpl(db)
	pb.RegisterLikeServiceServer(s, handler.NewLikeSercviceServer(interactor.NewLikeInteractorImpl(firebase, likeRepository)))
}

// following
func registerFollowingServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	followingRepository := repository.NewFollowingRepositoryImpl(db)
	pb.RegisterFollowingServiceServer(s, handler.NewFollowingSercviceServer(interactor.NewFollowingInteractorImpl(firebase, followingRepository)))
}

// view
func registerViewServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	viewRepository := repository.NewViewRepositoryImpl(db)
	pb.RegisterViewServiceServer(s, handler.NewViewSercviceServer(interactor.NewViewInteractorImpl(firebase, viewRepository)))
}

// click
func registerClickServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	clickRepository := repository.NewClickRepositoryImpl(db)
	pb.RegisterClickServiceServer(s, handler.NewClickSercviceServer(interactor.NewClickInteractorImpl(firebase, clickRepository)))
}

// review
func registerReviewServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	reviewRepository := repository.NewReviewRepositoryImpl(db)
	pb.RegisterReviewServiceServer(s, handler.NewReviewSercviceServer(interactor.NewReviewInteractorImpl(firebase, reviewRepository)))
}

// chatGroup
func registerChatGroupServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	// chatGroupRepository := repository.NewChatGroupRepositoryImpl(db)
	// chatUserRepository := repository.NewChatUserRepositoryImpl(db)
	pb.RegisterChatGroupServiceServer(s, handler.NewChatGroupSercviceServer(interactor.NewChatGroupInteractorImpl(firebase)))
}

// chat
func registerChatServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	// chatRepository := repository.NewChatRepositoryImpl(db)
	pb.RegisterChatServiceServer(s, handler.NewChatSercviceServer(interactor.NewChatInteractorImpl(firebase)))
}

// notification
func registerNotificationServiceServer(ctx context.Context, s *grpc.Server, db *database.Db, firebase usecase.Firebase) {
	notificationRepository := repository.NewNotificationRepositoryImpl(db)
	pb.RegisterNotificationServiceServer(s, handler.NewNotificationSercviceServer(interactor.NewNotificationInteractorImpl(firebase, notificationRepository)))
}
