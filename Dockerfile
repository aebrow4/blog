FROM node:carbon
WORKDIR /usr/src/app

COPY package*.json ./
COPY src ./src
# ideally build, and possibly public, will be
# handled via npm build and will not need to be copied
COPY build ./build
COPY public ./public

RUN npm install

EXPOSE 3000

# change the command so that it isnt running in development mode
CMD [ "npm", "start" ]

