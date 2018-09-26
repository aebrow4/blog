#!/bin/bash

function deploynginx() {
  npm install
  npm run build
  rm -rf /var/www/blog
  mkdir /var/www/blog
  cp ~/blog/build/index.html /var/www/blog
  cp -r ~/blog/build/static /var/www/blog/static
}

function deploynginx-docker() {
  docker rm $(docker stop $(docker ps -a -q --filter ancestor=blog:latest --format="{{.ID}}"))
  docker rmi blog:latest
  
  docker build -t blog:latest -f ./Dockerfile . && docker run -d -p 80:80 blog:latest
}

function main() {
  cd
  rm -rf blog
  git clone https://github.com/aebrow4/blog.git
  cd blog

  deploynginx-docker
  # or deploynginx
}

main
