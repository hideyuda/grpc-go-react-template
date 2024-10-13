#!/bin/bash

# This script is used to generate the proto files
if [[ $1 = all ]]; then
		echo "Generating all server files PWD: $PWD"

		rm -rf ./server-go/pb

		docker run -d -v $PWD:/defs namely/protoc-all -d proto/ -o ./pb/ -l go

		docker stop $(docker ps -l -q)

		echo "removing" $(docker ps -l -q)

		docker rm $(docker ps -l -q)

		rm -rf ./client-web/pb

		docker run -v $PWD:/defs namely/protoc-all -d proto/ -o ./client-web/src/pb/ -l web

		docker stop $(docker ps -l -q)

		echo "removing" $(docker ps -l -q)

		docker rm $(docker ps -l -q)

		# docker run -v $PWD:/defs namely/protoc-all -d proto/ -o ./server-py/pb/ -l py

		# docker stop $(docker ps -l -q)

		# echo "removing" $(docker ps -l -q)

		# docker rm $(docker ps -l -q)

		# not supported yet
		# docker run -v $PWD:/defs namely/protoc-all -d proto/ -o ./server-rust/pb/ -l rust

		# docker stop $(docker ps -l -q)

		# echo "removing" $(docker ps -l -q)

		# docker rm $(docker ps -l -q)

elif [[ $1 = go ]]; then

	echo "Generating go server files proto: $2"

	if [[ -z $2 ]]; then

		# -v: defs（definitions）ディレクトリにカレントディレクトリをマウント
		# -f: 対象のprotoファイルを指定
		# -o: アウトプットフォルダを指定
		# -l: 生成する言語を指定

		rm -rf ./server-go/pb

		docker run -v $PWD:/defs namely/protoc-all -d proto/ -o ./pb -l go

		docker stop $(docker ps -l -q)

		echo "removing" $(docker ps -l -q)

		docker rm $(docker ps -l -q)

		# protoc --go_out=../server-go/pb --go_opt=paths=source_relative \
		# --go-grpc_out=../server-go/pb --go-grpc_opt=paths=source_relative \
		# *.proto

		echo "success lang: $1 proto: all"
		exit 0

	else 
		protoc --go_out=../server-go/pb --go_opt=paths=source_relative \
		--go-grpc_out=../server-go/pb --go-grpc_opt=paths=source_relative \
		$2.proto

		echo "success lang: $1 proto: $2"
		exit 0
	fi

elif [[ $1 = js ]]; then
	echo "Generating js server files proto: $2"

	if [[ -z $2 ]]; then

		rm -rf ./client-web/pb

		docker run -v $PWD:/defs namely/protoc-all -d proto/ -o ./client-web/src/pb/ -l web
		# docker run -v $PWD:/defs namely/protoc-all -d proto/ -o ./client-web/src/pb/ -l typescript
		# docker run -v $PWD:/defs namely/protoc-all -d proto/ -o ./server-js/pb -l js

		docker stop $(docker ps -l -q)

		echo "removing" $(docker ps -l -q)

		docker rm $(docker ps -l -q)

		echo "success lang: $1 proto: all"
		exit 0

	else
		protoc --proto_path=. --js_out=import_style=commonjs,binary:. $2.proto

		echo "success lang: $1 proto: $2"
		exit 0

	fi

elif [[ $1 = py ]]; then

	echo "Generating python server files"

	if [[ -z $2 ]]; then
		rm -rf ./server-py/pb

		docker run -v $PWD:/defs namely/protoc-all -d proto/ -o ./server-python/pb -l py

		docker stop $(docker ps -l -q)

		echo "removing" $(docker ps -l -q)

		docker rm $(docker ps -l -q)

		echo "success lang: $1 proto: all"
		exit 0

	else
		protoc --proto_path=. --python_out=. $2.proto

		echo "success lang: $1 proto: $2"
		exit 0

	fi

		# not supported yet
elif [[ $1 = rust ]]; then

	echo "Generating rust server files"

	if [[ -z $2 ]]; then
		rm -rf ./server-rust/pb

		docker run -v $PWD:/defs namely/protoc-all -d proto/ -o ./server-rust/pb -l rust

		docker stop $(docker ps -l -q)

		echo "removing" $(docker ps -l -q)

		docker rm $(docker ps -l -q)

		echo "success lang: $1 proto: all"
		exit 0

	# else
		# protoc --proto_path=. --python_out=. $2.proto

		# echo "success lang: $1 proto: $2"
		# exit 0

	fi

else
	echo "Invalid argument"
fi