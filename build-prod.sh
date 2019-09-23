#!/bin/bash

function deploynginx() {
  npm install
  npm run build
  cp -r ~/blog/build/* /usr/share/nginx/html
}

function deploynginx-docker() {
  docker rm $(docker stop $(docker ps -a -q --filter ancestor=blog:latest --format="{{.ID}}"))
  docker rmi blog:latest
  
  docker build -t blog:latest -f ./Dockerfile . && docker run -d -p 80:80 blog:latest
}

function main() {
  deploynginx
}

main
