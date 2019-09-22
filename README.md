
## Running locally
To run the blog:
```
nginx start
npm start
```
To run the editor:
```
npm run editor
```
## Creating posts
We use slate.js and slate-react to support rich text formatting. 
Create posts in the editor app (`npm run editor`), and export them with cmd + enter.
### Image resizing
The blog makes assumptions that small, large, and original sized versions of an image will be available. To facilitate image management, a shell script for resizing images is available in `bin/resize.sh`. Depends on [ImageMagick](https://imagemagick.org).
## Nginx
Nginx is used to serve images and the json blog posts. The project's nginx.conf is checked into version control for convenience, but it needs to be manually moved to wherever nginx expects to find it.
Content is not checked into the repository, and it is assumed that it will be available in nginx's `www` directory.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

