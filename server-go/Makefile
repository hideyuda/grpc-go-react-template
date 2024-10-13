OS=linux
ARCH=amd64
ROOT=$(GOPATH)/src/github.com/hidenari-yuda/grpc-go-react-template

.PHONY: setup
setup:
	go install -v github.com/google/wire/cmd/wire@v0.5.0
	go install -v github.com/rubenv/sql-migrate/sql-migrate@v1.1.2
	go install -v github.com/golang/mock/mockgen@v1.6.0
	go install -v github.com/cosmtrek/air@v1.40.4
	make mock

.PHONY: build
build:
	cd cmd
	go mod tidy
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /go/bin/app

.PHONY: wire
wire:
	wire ./infra/di/wire.go

.PHONY: run
run:
	air -c .conf/.air.toml

.PHONY: up
up:
	docker-compose -f docker-compose.yml up --build -d --log-opt max-size=100m --log-opt max-file=10 my-docker-image

.PHONY: down
down:
	docker-compose -f docker-compose.yml down --volumes


# encode envfile
.ONESHELL: 
encode-envfile:
	cat .env | base64 > env.pem

# decode envfile
# cat env.pem | base64 -d | xargs -I{} echo {} > .env
.ONESHELL:
decode-envfile:
	cat env.pem | base64 -d > .env

.PHONY: migrate-new
migrate-new:
	sql-migrate new -env=local -config=.conf/dbconfig.yml ${FILE}

.PHONY: migrate-up
migrate-up:
	sql-migrate up -config=.conf/dbconfig.yml -env=local

.PHONY: migrate-down
migrate-down:
	sql-migrate down -config=.conf/dbconfig.yml -env=local


## Test Command
.PHONY: test
test:
	make down-test-db
	make up-test-db
	make test-all
	make down-test-db

.PHONY: test all
test-all:
	make mock
	make repository-test
	# make entity-test

.PHONY: repository-test
repository-test:
	DB_NAME=ai_marcket_test go test -v ./tests/repository/*_test.go

.PHONY: entity-test
entity-test:
	go test -v ./tests/entity/*_test.go

## Mock
.PHONY: mock
mock: repository-mock interactor-mock driver-mock # usecase-mock

.PHONY: repository-mock
repository-mock:
	mockgen -source ./usecase/repository.go -destination ./mock/mock_usecase/mock_repository.go

.PHONY: interactor-mock
interactor-mock: 
	basename -a ./usecase/interactor/*.go | sed 's/.go//' | xargs -IFILE mockgen -source ./usecase/interactor/FILE.go -destination ./mock/mock_interactor/mock_FILE.go
	rm ./mock/mock_interactor/mock_wire_set.go

.PHONY: driver-mock
driver-mock: 
	mockgen -source ./usecase/driver.go -destination ./mock/mock_usecase/mock_driver.go

.PHONY: usecase-mock
usecase-mock:
	mockgen -source ./usecase/usecase.go -destination ./mock/mock_usecase/mock_usecase.go