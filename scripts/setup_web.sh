#!/bin/bash

cd client-web

yarn install

echo "Starting web in local mode"

export DOTENV_CONFIG_PATH=client-web/config/.env.local

yarn dev