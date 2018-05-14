FROM node
WORKDIR /root/blog
COPY package*.json ./
COPY src ./src
COPY public ./public
RUN npm install
RUN npm run build

FROM nginx
COPY --from=0 /root/blog/build/index.html /usr/share/nginx/html
COPY --from=0 /root/blog/build/static /usr/share/nginx/html/static
