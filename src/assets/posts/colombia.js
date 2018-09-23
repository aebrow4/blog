import React from 'react';
import Post from '../../components/post/post.js';
import { Image } from '../../util/classes.js';
import {renderMark} from '../../marks/marks.js';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = {
  ar_1x1: importAll(require.context('../img/colombia/1-1', false, /\.(png)$/)),
  ar_4x3: importAll(require.context('../img/colombia/4-3', false, /\.(png)$/)),
  ar_25x9: importAll(require.context('../img/colombia/25-9', false, /\.(png)$/)),
}
const photos = Object.entries(images.ar_1x1).map(([imageName, thumbnailUrl]) => {
  const fullSizeImgUrl = images.ar_4x3[imageName] || images.ar_25x9[imageName];
  return new Image(fullSizeImgUrl, thumbnailUrl)
})
export default (
  <Post
    title='Colombia'
    date='April 2018'
    renderMark={renderMark}
    photos={photos}
    idx={1}
  />
)


