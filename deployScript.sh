#!/bin/bash

if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

echo "----------Destory node_modules----------"
rm -rf node_modules

echo "----------yarn install prod node_modules----------"
yarn install --production

echo "----------Zipping directory----------"
zip -r stock-alert.zip . -x "./gitignore" "*.git*" 

echo "----------Deploying Lambda to AWS----------"
aws lambda update-function-code \
--function-name "$LAMBDA_FUNCTION_NAME" \
--region eu-west-2 \
--zip-file fileb://stock-alert.zip \
--cli-connect-timeout 6000 | cat

echo "----------Lambda Deployed----------"

echo "----------Clean up----------"
rm stock-alert.zip
