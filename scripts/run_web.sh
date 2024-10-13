#!/bin/bash

# cd ~/grpc-go-react-template/client-web

if [ $1 = dev ]; then
  echo "Starting web in development mode"
  export DOTENV_CONFIG_PATH=client-web/config/.env.dev

elif [ $1 = prd ]; then
  echo "Starting web in production mode"
  export DOTENV_CONFIG_PATH=client-web/config/.env.prd

else
  echo "Starting web in local mode"
  export DOTENV_CONFIG_PATH=client-web/config/.env.local

fi

yarn dev