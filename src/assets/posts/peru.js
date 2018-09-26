import { Image } from '../../util/classes.js';

// This file and all other posts should be moved from the app to nginx
import img0 from '../img/salkantay/4-3/Lima1.png';
import img1 from '../img/salkantay/4-3/Lima2.png';
import img1b from '../img/salkantay/25-9/Lima3.png';
import img2 from '../img/salkantay/4-3/Catpark.png';
import img3 from '../img/salkantay/4-3/Dog.png';
import img4 from '../img/salkantay/4-3/Huaraz1.png';
import img4b from '../img/salkantay/4-3/Huaraz2.png';
import img5 from '../img/salkantay/4-3/CordilleraBlanca1.png';
import img6 from '../img/salkantay/4-3/CordilleraBlanca2.png';
import img6b from '../img/salkantay/25-9/CordilleraBlanca3.png';
import img7 from '../img/salkantay/4-3/Cusco1.png';
import img8 from '../img/salkantay/4-3/Cusco2.png';
import img9 from '../img/salkantay/4-3/Cat1.png';
import img10 from '../img/salkantay/4-3/CordilleraVilcabamba1.png';
import img11 from '../img/salkantay/4-3/CordilleraVilcabamba2.png';
import img12 from '../img/salkantay/4-3/Salkantay1.png';
import img13 from '../img/salkantay/4-3/Salkantay2.png';
import img13b from '../img/salkantay/4-3/Salkantay3.png';
import img14 from '../img/salkantay/4-3/MachuPichuTrek1.png';
import img15 from '../img/salkantay/4-3/MachuPichuTrek2.png';
import img16 from '../img/salkantay/4-3/MachuPichuTrek3.png';
import img17 from '../img/salkantay/4-3/MachuPichu1.png';
import img18 from '../img/salkantay/4-3/MachuPichu2.png';
import img19 from '../img/salkantay/4-3/MachuPichu3.png';
import img20 from '../img/salkantay/4-3/MachuPichu4.png';
import img21 from '../img/salkantay/4-3/MachuPichu5.png';

import img0Thumb from '../img/salkantay/1-1/Lima1.png';
import img1Thumb from '../img/salkantay/1-1/Lima2.png';
import img1bThumb from '../img/salkantay/1-1/Lima3.png';
import img2Thumb from '../img/salkantay/1-1/Catpark.png';
import img3Thumb from '../img/salkantay/1-1/Dog.png';
import img4Thumb from '../img/salkantay/1-1/Huaraz1.png';
import img4bThumb from '../img/salkantay/1-1/Huaraz2.png';
import img5Thumb from '../img/salkantay/1-1/CordilleraBlanca1.png';
import img6Thumb from '../img/salkantay/1-1/CordilleraBlanca2.png';
import img6bThumb from '../img/salkantay/1-1/CordilleraBlanca3.png';
import img7Thumb from '../img/salkantay/1-1/Cusco1.png';
import img8Thumb from '../img/salkantay/1-1/Cusco2.png';
import img9Thumb from '../img/salkantay/1-1/Cat1.png';
import img10Thumb from '../img/salkantay/1-1/CordilleraVilcabamba1.png';
import img11Thumb from '../img/salkantay/1-1/CordilleraVilcabamba2.png';
import img12Thumb from '../img/salkantay/1-1/Salkantay1.png';
import img13Thumb from '../img/salkantay/1-1/Salkantay2.png';
import img13bThumb from '../img/salkantay/1-1/Salkantay3.png';
import img14Thumb from '../img/salkantay/1-1/MachuPichuTrek1.png';
import img15Thumb from '../img/salkantay/1-1/MachuPichuTrek2.png';
import img16Thumb from '../img/salkantay/1-1/MachuPichuTrek3.png';
import img17Thumb from '../img/salkantay/1-1/MachuPichu1.png';
import img18Thumb from '../img/salkantay/1-1/MachuPichu2.png';
import img19Thumb from '../img/salkantay/1-1/MachuPichu3.png';
import img20Thumb from '../img/salkantay/1-1/MachuPichu4.png';
import img21Thumb from '../img/salkantay/1-1/MachuPichu5.png';

const photos = [
  new Image(img0, img0Thumb, 'Barranco, Lima', ''),
  new Image(img1, img1Thumb, 'Barranco', ''),
  new Image(img1b, img1bThumb, 'Miraflores', ''),
  new Image(
    img2,
    img2Thumb,
    "Feeding time at JFF park, aka 'the cat park'. Hundreds of cats live in this downtown park.",
    '',
  ),
  new Image(
    img3,
    img3Thumb,
    'Name: Princesa. Age: 6 months. Interests: playing, being cute, biting. Mostly biting.',
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
];

export default {
  idx: 2,
  title: 'Peru',
  date: 'May 2018',
  photos,
};

