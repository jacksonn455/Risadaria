#!/bin/bash
PROJECT=/app/api.node.mongo/

# Baixar projeto
git clone https://$GIT_USER:$GIT_PASS@bitbucket.org/compassouoldiveo/api.node.mongo.git

cd /app/api.node.mongo/

npm install --silent

npm start