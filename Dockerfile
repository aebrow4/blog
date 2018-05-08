FROM node:carbon
WORKDIR /root/blog

COPY package*.json ./
COPY src ./src
COPY public ./public
RUN npm install
RUN npm run build

EXPOSE 3000

# change the command so that it isnt running in development mode
CMD [ "npm", "start" ]
