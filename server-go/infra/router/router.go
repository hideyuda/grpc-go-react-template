package router

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"

	"github.com/hidenari-yuda/grpc-go-react-template/domain/config"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/database"
	"github.com/hidenari-yuda/grpc-go-react-template/infra/di"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	// "github.com/improbable-eng/grpc-web/go/grpcweb"
)

type Router struct {
	db       *database.Db
	firebase usecase.Firebase
}

func NewRouter(
	db *database.Db,
	firebase usecase.Firebase,
) *Router {
	return &Router{
		db:       db,
		firebase: firebase,
	}
}

func (r *Router) Start() {

	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", config.App.Port))
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()

	ctx := context.Background()
	di.RegisterServiceServer(ctx, s, r.db, r.firebase)

	// for using grpcurl
	reflection.Register(s)

	go func() {
		log.Printf("start gRPC server, port: %d", config.App.Port)
		err = s.Serve(listener)
		if err != nil {
			log.Fatalf("failed to serve: %v", err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("stopping gRPC server...")
	s.GracefulStop()

}

// http
// // HTTP経由で接続できるようラップする
// wrappedServer := grpcweb.WrapServer(
// 	s,
// 	// CORSの設定
// 	grpcweb.WithOriginFunc(func(origin string) bool {
// 		return origin == "http://localhost:3000"
// 	}),
// )
// mux := http.NewServeMux()
// mux.Handle("/", http.HandlerFunc(wrappedServer.ServeHTTP))
// // ポート8080で起動
// hs := &http.Server{
// 	Addr:    ":8080",
// 	Handler: mux,
// }
// log.Fatal(hs.ListenAndServe())
