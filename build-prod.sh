#!/bin/bash

cd
rm -rf blog
git clone https://github.com/aebrow4/blog.git
cd blog

# TODO check for unused images and containers and purge them
docker build -t blog:latest -f ./Dockerfile . && docker run -d -p 8080:3000 blog:latest
