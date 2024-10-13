package repository

import (
	"fmt"
	"log"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
)

type NotificationSettingRepositoryImpl struct {
	Name     string
	executer SQLExecuter
}

// followed BOOLEAN NOT NULL DEFAULT FALSE, -- フォロー通知
// liked BOOLEAN NOT NULL DEFAULT FALSE, -- いいね通知
// commented BOOLEAN NOT NULL DEFAULT FALSE, -- コメント通知
// chated BOOLEAN NOT NULL DEFAULT FALSE, -- チャット通知
// liking_content_discounted BOOLEAN NOT NULL DEFAULT FALSE, -- いいねした商品が割引通知
// liking_content_commented BOOLEAN NOT NULL DEFAULT FALSE, -- いいねした商品が割引通知
// following_user_new BOOLEAN NOT NULL DEFAULT FALSE, -- フォローしたユーザーが新規投稿通知

// news BOOLEAN NOT NULL DEFAULT FALSE, -- ニュース通知
// event BOOLEAN NOT NULL DEFAULT FALSE, -- イベント通知
// coupon BOOLEAN NOT NULL DEFAULT FALSE, -- クーポン通知
// update BOOLEAN NOT NULL DEFAULT FALSE, -- アップデート通知

// email_followed BOOLEAN NOT NULL DEFAULT FALSE, -- フォロー通知
// email_liked BOOLEAN NOT NULL DEFAULT FALSE, -- いいね通知
// email_commented BOOLEAN NOT NULL DEFAULT FALSE, -- コメント通知
// email_chated BOOLEAN NOT NULL DEFAULT FALSE, -- チャット通知
// email_liking_content_discounted BOOLEAN NOT NULL DEFAULT FALSE, -- いいねした商品が割引通知
// email_liking_content_commented BOOLEAN NOT NULL DEFAULT FALSE, -- いいねした商品が割引通知
// email_following_user_new BOOLEAN NOT NULL DEFAULT FALSE, -- フォローしたユーザーが新規投稿通知

// email_news BOOLEAN NOT NULL DEFAULT FALSE, -- ニュース通知
// email_event BOOLEAN NOT NULL DEFAULT FALSE, -- イベント通知
// email_coupon BOOLEAN NOT NULL DEFAULT FALSE, -- クーポン通知
// email_update BOOLEAN NOT NULL DEFAULT FALSE, -- アップデート通知

func NewNotificationSettingRepositoryImpl(ex SQLExecuter) usecase.NotificationSettingRepository {
	return &NotificationSettingRepositoryImpl{
		Name:     "NotificationSettingRepository",
		executer: ex,
	}
}

// create
func (r *NotificationSettingRepositoryImpl) Create(param *pb.NotificationSetting) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Create",
		`INSERT INTO notification_settings (
			uuid,
			user_id,
			followed,
			liked,
			commented,

			chated,
			liking_content_discounted,
			liking_content_commented,
			following_user_new,
			news,

			event,
			coupon,
			update,
			email_followed,
			email_liked,

			email_commented,
			email_chated,
			email_liking_content_discounted,
			email_liking_content_commented,
			email_following_user_new,

			email_news,
			email_event,
			email_coupon,
			email_update,
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
				?,
				?,

				?
		)`,
		utils.CreateUuid(),
		param.UserId,
		param.Followed,
		param.Liked,
		param.Commented,
		param.Chated,
		param.LikingContentDiscounted,
		param.LikingContentCommented,
		param.FollowingUserNew,
		param.News,
		param.Event,
		param.Coupon,
		param.Update,
		param.EmailFollowed,
		param.EmailLiked,
		param.EmailCommented,
		param.EmailChated,
		param.EmailLikingContentDiscounted,
		param.EmailLikingContentCommented,
		param.EmailFollowingUserNew,
		param.EmailNews,
		param.EmailEvent,
		param.EmailCoupon,
		param.EmailUpdate,
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
func (r *NotificationSettingRepositoryImpl) Update(param *pb.NotificationSetting) error {
	now := time.Now().UTC()

	_, err := r.executer.Exec(
		r.Name+"Update",
		`UPDATE notification_settings SET
		followed = ?,
		liked = ?,
		commented = ?,
		chated = ?,
		liking_content_discounted = ?,
		liking_content_commented = ?,
		following_user_new = ?,
		news = ?,
		event = ?,
		coupon = ?,
		update = ?,
		email_followed = ?,
		email_liked = ?,
		email_commented = ?,
		email_chated = ?,
		email_liking_content_discounted = ?,
		email_liking_content_commented = ?,
		email_following_user_new = ?,
		email_news = ?,
		email_event = ?,
		email_coupon = ?,
		email_update = ?,
		updated_at = ?
		WHERE id = ?`,
		param.Followed,
		param.Liked,
		param.Commented,
		param.Chated,
		param.LikingContentDiscounted,
		param.LikingContentCommented,
		param.FollowingUserNew,
		param.News,
		param.Event,
		param.Coupon,
		param.Update,
		param.EmailFollowed,
		param.EmailLiked,
		param.EmailCommented,
		param.EmailChated,
		param.EmailLikingContentDiscounted,
		param.EmailLikingContentCommented,
		param.EmailFollowingUserNew,
		param.EmailNews,
		param.EmailEvent,
		param.EmailCoupon,
		param.EmailUpdate,
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

// delete
func (r *NotificationSettingRepositoryImpl) Delete(id int64) error {
	_, err := r.executer.Exec(
		r.Name+"Delete",
		"UPDATE notification_settings SET is_deleted = ? WHERE id = ?",
		true,
		id,
	)

	if err != nil {
		return err
	}

	return nil
}

// get
func (r *NotificationSettingRepositoryImpl) GetById(id int64) (*pb.NotificationSetting, error) {
	var (
		content pb.NotificationSetting
	)

	err := r.executer.Get(
		r.Name+"GetById",
		&content,
		"SELECT * FROM notification_settings WHERE id = ?",
		id,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// get by uuid
func (r *NotificationSettingRepositoryImpl) GetByUuid(uuid string) (*pb.NotificationSetting, error) {
	var (
		content pb.NotificationSetting
	)

	err := r.executer.Get(
		r.Name+"GetByUuid",
		&content,
		"SELECT * FROM notification_settings WHERE uuid = ?",
		uuid,
	)

	if err != nil {
		return nil, err
	}

	return &content, nil
}

// get list by receive user
func (r *NotificationSettingRepositoryImpl) GetByUser(userId int64) (*pb.NotificationSetting, error) {
	var (
		notificationSetting *pb.NotificationSetting
	)

	err := r.executer.Get(
		r.Name+"GetByUser",
		notificationSetting,
		"SELECT * FROM notification_settings WHERE user_id = ?",
		userId,
	)

	if err != nil {
		return nil, err
	}

	return notificationSetting, nil
}

// get list by id list
func (r *NotificationSettingRepositoryImpl) GetListByIdList(idList string) ([]*pb.NotificationSetting, error) {
	var (
		notification_settings []*pb.NotificationSetting = make([]*pb.NotificationSetting, 0)
	)

	if idList == "" {
		return notification_settings, nil
	}

	err := r.executer.Select(
		r.Name+"GetListByIdList",
		&notification_settings,
		"SELECT * FROM notification_settings WHERE id IN (?)",
		idList,
	)

	if err != nil {
		return nil, err
	}

	return notification_settings, nil
}

// admin
// getAll
func (r *NotificationSettingRepositoryImpl) GetAll() ([]*pb.NotificationSetting, error) {
	var (
		notification_settings []*pb.NotificationSetting
	)
	err := r.executer.Select(
		r.Name+"GetAll",
		&notification_settings,
		"SELECT * FROM notification_settings ORDER BY id DESC",
	)

	if err != nil {
		err = fmt.Errorf("failed to get all notification_settings: %w", err)
		log.Println(err)
		return nil, err
	}

	return notification_settings, nil
}
