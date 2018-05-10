#!/bin/bash

cd
rm -rf blog
git clone https://github.com/aebrow4/blog.git
cd blog

# stop and remove current container
docker rm $(docker stop $(docker ps -a -q --filter ancestor=blog:latest --format="{{.ID}}"))
docker rmi blog:latest

docker build -t blog:latest -f ./Dockerfile . && docker run -d -p 8080:3000 blog:latest
