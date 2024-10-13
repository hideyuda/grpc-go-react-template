package main

import (
	"fmt"
	"os"
	"time"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/config"
	"github.com/hidenari-yuda/grpc-go-react-template/domain/utils"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/batch"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/driver"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/router"

	"github.com/joho/godotenv"
)

func init() {

	time.Local = utils.Tokyo

	if err := godotenv.Load(); err != nil {
		panic("Failed to load .env file")
	}

	if os.Getenv("APP_ENV") == "local" {
		if err := godotenv.Load(); err != nil {
			panic("Failed to load .env file")
		}
	}
}

func main() {
	err := config.New()
	if err != nil {
		panic(err)
	}
	utils.LoggingSettings(config.App.LogFilePath)

	switch config.App.Service {
	case "api":
		// 一旦 apiコンテナを立ち上げる時にマイグレーションする
		db := database.NewDb()
		err := db.MigrateUp(".migrations")
		if err != nil {
			fmt.Println(err)
		}

		// firebase
		firebase := driver.NewFirebaseImpl()
		// if cfg.App.Env == "local" {
		// 	fmt.Println("getTestUserToken:", uuid.New().String())
		// 	getTestUserToken(firebase, uuid.New().String())
		// }

		// redis
		// cache := driver.NewRedisCacheImpl(cfg.Redis)

		// // エラーハンドラー（dev or prdのみSlack通知）
		// if cfg.App.Env != "local" {
		// 	r.Engine.HTTPErrorHandler = customHTTPErrorHandler
		// }

		// ルーティング
		router.NewRouter(db, firebase).Start()

	case "batch":
		batch.NewBatch().Start()
	}
}

// func getTestUserToken(fb usecase.Firebase, uuid string) {
// 	customToken, _ := fb.GetCustomToken(uuid)
// 	idToken, err := fb.GetIDToken(customToken)
// 	if err != nil {
// 		panic(err)
// 	}
// 	fmt.Println("test token is :", idToken)
// }

// func customHTTPErrorHandler(err error, c echo.Context) {
// 	var (
// 		// cfg, _        = config.New()
// 		code, message = entity.ErrorInfo(err)
// 		statusCode    = strconv.Itoa(code)
// 		path          = c.Path()
// 		method        = c.Request().Method
// 		errText       = err.Error()
// 	)

// 	fmt.Println(err)

// 	te := "*開発環境 Error*\n" +
// 		">>>status: " + message + "（" + statusCode + "）" + "\n" +
// 		"method: " + method + "\n" +
// 		"uri: " + path + "\n" +
// 		"error: `" + errText + "` \n"

// 	// アクセストークンを使用してクライアントを生成する
// 	// https://api.slack.com/apps からトークン取得
// 	// 参考: https://risaki-masa.com/how-to-get-api-token-in-slack/
// 	tkn := config.Slack.AccessToken
// 	chanelID := config.Slack.ChannelID
// 	s := slack.New(tkn)

// 	// MsgOptionText() の第二引数に true を設定すると特殊文字をエスケープする
// 	_, _, err = s.PostMessage(chanelID, slack.MsgOptionBlocks(
// 		&slack.SectionBlock{
// 			Type: slack.MBTSection,
// 			Text: &slack.TextBlockObject{
// 				Type: "mrkdwn",
// 				Text: te,
// 			},
// 		},
// 	))
// 	if err != nil {
// 		fmt.Println(err)
// 	}

// 	c.Logger().Error(err)
// }
