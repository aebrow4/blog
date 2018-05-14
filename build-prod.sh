#!/bin/bash

function deploydocker() {
  # stop and remove current container
  docker rm $(docker stop $(docker ps -a -q --filter ancestor=blog:latest --format="{{.ID}}"))
  docker rmi blog:latest
  
  docker build -t blog:latest -f ./Dockerfile . && docker run -d -p 8080:3000 blog:latest
}

function deploynginx() {
  npm install
  npm run build
  rm -rf /var/www/blog
  mkdir /var/www/blog
  cp ~/blog/build/index.html /var/www/blog
  cp -r ~/blog/build/static /var/www/blog/static
}

function main() {
  cd
  rm -rf blog
  git clone https://github.com/aebrow4/blog.git
  cd blog

  if [[ $1 == 'docker' ]]; then
    deploydocker
    exit 0
  elif [[ $1 == 'nginx' ]]; then
    deploynginx
    exit 0
  else
    echo 'Usage: docker|nginx'
    exit 1
  fi
}

main nginx
