import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './Atoms.css';
import {Value} from 'slate';
import Post from './components/post/post.js';
import BlogEditor, {initialValue} from './components/editor/editor.js';
import Photo from './components/photo/photo.js';
import {renderMark} from './marks/marks.js';

// all of these hardcoded and imported posts and assets
// should be replaced in the future with fetching from NGINX
import testPost1 from './assets/posts/test-post.js';
import testPost2 from './assets/posts/test-post-hormigas.js';

import img0 from './assets/img/salkantay/4-3/Lima1.png';
import img1 from './assets/img/salkantay/4-3/Lima2.png';
import img1b from './assets/img/salkantay/25-9/Lima3.png';
import img2 from './assets/img/salkantay/4-3/Catpark.png';
import img3 from './assets/img/salkantay/4-3/Dog.png';
import img4 from './assets/img/salkantay/4-3/Huaraz1.png';
import img4b from './assets/img/salkantay/4-3/Huaraz2.png';
import img5 from './assets/img/salkantay/4-3/CordilleraBlanca1.png';
import img6 from './assets/img/salkantay/4-3/CordilleraBlanca2.png';
import img7 from './assets/img/salkantay/4-3/Cusco1.png';
import img8 from './assets/img/salkantay/4-3/Cusco2.png';
import img9 from './assets/img/salkantay/4-3/Cat1.png';
import img10 from './assets/img/salkantay/4-3/CordilleraVilcabamba1.png';
import img11 from './assets/img/salkantay/4-3/CordilleraVilcabamba2.png';
import img12 from './assets/img/salkantay/4-3/Salkantay1.png';
import img13 from './assets/img/salkantay/4-3/Salkantay2.png';
import img13b from './assets/img/salkantay/4-3/Salkantay3.png';
import img14 from './assets/img/salkantay/4-3/MachuPichuTrek1.png';
import img15 from './assets/img/salkantay/4-3/MachuPichuTrek2.png';
import img16 from './assets/img/salkantay/4-3/MachuPichuTrek3.png';
import img17 from './assets/img/salkantay/4-3/MachuPichu1.png';
import img18 from './assets/img/salkantay/4-3/MachuPichu2.png';
import img19 from './assets/img/salkantay/4-3/MachuPichu3.png';
import img20 from './assets/img/salkantay/4-3/MachuPichu4.png';
import img21 from './assets/img/salkantay/4-3/MachuPichu5.png';

import img0Thumb from './assets/img/salkantay/1-1/Lima1.png';
import img1Thumb from './assets/img/salkantay/1-1/Lima2.png';
import img1bThumb from './assets/img/salkantay/1-1/Lima3.png';
import img2Thumb from './assets/img/salkantay/1-1/Catpark.png';
import img3Thumb from './assets/img/salkantay/1-1/Dog.png';
import img4Thumb from './assets/img/salkantay/1-1/Huaraz1.png';
import img4bThumb from './assets/img/salkantay/1-1/Huaraz2.png';
import img5Thumb from './assets/img/salkantay/1-1/CordilleraBlanca1.png';
import img6Thumb from './assets/img/salkantay/1-1/CordilleraBlanca2.png';
import img6bThumb from './assets/img/salkantay/1-1/CordilleraBlanca3.png';
import img7Thumb from './assets/img/salkantay/1-1/Cusco1.png';
import img8Thumb from './assets/img/salkantay/1-1/Cusco2.png';
import img9Thumb from './assets/img/salkantay/1-1/Cat1.png';
import img10Thumb from './assets/img/salkantay/1-1/CordilleraVilcabamba1.png';
import img11Thumb from './assets/img/salkantay/1-1/CordilleraVilcabamba2.png';
import img12Thumb from './assets/img/salkantay/1-1/Salkantay1.png';
import img13Thumb from './assets/img/salkantay/1-1/Salkantay2.png';
import img13bThumb from './assets/img/salkantay/1-1/Salkantay3.png';
import img14Thumb from './assets/img/salkantay/1-1/MachuPichuTrek1.png';
import img15Thumb from './assets/img/salkantay/1-1/MachuPichuTrek2.png';
import img16Thumb from './assets/img/salkantay/1-1/MachuPichuTrek3.png';
import img17Thumb from './assets/img/salkantay/1-1/MachuPichu1.png';
import img18Thumb from './assets/img/salkantay/1-1/MachuPichu2.png';
import img19Thumb from './assets/img/salkantay/1-1/MachuPichu3.png';
import img20Thumb from './assets/img/salkantay/1-1/MachuPichu4.png';
import img21Thumb from './assets/img/salkantay/1-1/MachuPichu5.png';

import img6b from './assets/img/salkantay/25-9/CordilleraBlanca3.png';

const testPost1Rtf = Value.fromJSON(testPost1.value);
const testPost2Rtf = Value.fromJSON(testPost2.value);
class Image {
  constructor(url, thumbUrl, caption, alt) {
    this.url = url;
    this.thumbUrl = thumbUrl;
    this.caption = caption;
    this.alt = alt;
  }
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
    this.renderHome = this.renderHome.bind(this);

    this.state = {lightbox: false};
  }

  static postData = [
    {
      title: 'Medellin, CO',
      post: testPost2Rtf,
      idx: 0,
    },
    {
      title: 'Peru',
      photos: [
        new Image(img0, img0Thumb, 'Barranco, Lima', ''),
        new Image(img1, img1Thumb, 'Barranco', ''),
        new Image(img1b, img1bThumb, 'Miraflores', ''),
        new Image(
          img2,
          img2Thumb,
          "Feeding time at JFK Park, AKA 'the cat park'. Hundreds of cats live in this downtown park.",
          '',
        ),
        new Image(
          img3,
          img3Thumb,
          'Name: Princesa. Age: 6 months. Interests: Playing, being cute, biting. Mostly biting.',
          '',
        ),
        new Image(img4, img4Thumb, 'Huaraz', ''),
        new Image(img4b, img4bThumb, 'Huaraz', ''),
        new Image(
          img5,
          img5Thumb,
          "One of the 'low' peaks (about 5500m) of the Cordillera Blanca.",
          '',
        ),
        new Image(img6, img6Thumb, 'Cordillera Blanca', ''),
        new Image(img6b, img6bThumb, 'Cordillera Blanca', ''),
        new Image(img7, img7Thumb, 'Cusco', ''),
        new Image(img8, img8Thumb, 'Baby Alpacas', ''),
        new Image(
          img9,
          img9Thumb,
          'A street cat making himself at home in a restaurant in Aguas Calientes',
          '',
        ),
        new Image(
          img10,
          img10Thumb,
          'Cordillera Vilcabamba. The beginning of the Salkantay trek to Machu Picchu',
          '',
        ),
        new Image(img11, img11Thumb, 'Valley in the Cordillera Vilcabamba', ''),
        new Image(
          img12,
          img12Thumb,
          'Milleigh Vo descends from the high point of the trek, Salkantay pass (4630m). Salkantay in the background (6271m).',
          '',
        ),
        new Image(
          img13b,
          img13bThumb,
          'Salkantay (6271m)',
          '',
        ),
        new Image(img13, img13Thumb, 'Salkantay', ''),
        new Image(
          img14,
          img14Thumb,
          'Day three of the trek. A coffee stand and a few chickens perch on the side of the valley.',
          '',
        ),
        new Image(
          img15,
          img15Thumb,
          'Machu Picchu in the background: the leftmost peak, under the layer of clouds.',
          '',
        ),
        new Image(
          img16,
          img16Thumb,
          'Near Machu Picchu and Aguas Calientes',
          '',
        ),
        new Image(img17, img17Thumb, 'Fog rising from Machu Picchu', ''),
        new Image(img18, img18Thumb, 'Machu Picchu', ''),
        new Image(img19, img19Thumb, 'Machu Picchu', ''),
        new Image(
          img20,
          img20Thumb,
          "The so-called 'face of the Inca' is visible here...the Inca has a big nose.",
          '',
        ),
        new Image(img21, img21Thumb, 'Milleigh and friend', ''),
      ],
      idx: 1,
    },
  ];

  renderHome() {
    return (
      <div>
        {this.constructor.postData.map(post => (
          <Post
            title={post.title}
            post={post.post}
            photos={post.photos}
            renderMark={renderMark}
            idx={post.idx}
            key={post.idx}
          />
        ))}
      </div>
    );
  }
  renderPost({match}) {
    const id = Number(match.params.postId);
    return this.constructor.postData.map(
      post =>
        post.idx === id && (
          <Post
            title={post.title}
            post={post.post}
            photos={post.photos}
            idx={id}
          />
        ),
    );
  }
  render() {
    return (
      <Router>
        <div
          className={`app bgg-grey-300 ${
            this.state.lightbox ? 'lightbox' : ''
          }`}>
          <header>
            <h1 className="fontSize-24 ccc-brown-300">
              Andy's witty blog title
            </h1>
          </header>
          <div className="content">
            <Route exact path="/" render={this.renderHome} key={1}/>
            <Route path="/posts/:postId" render={this.renderPost} key={2} />
          </div>
        </div>
      </Router>
    );
  }
}
