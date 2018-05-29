import React from 'react';
import Post from '../../components/post/post.js';
import { Image } from '../../util/classes.js';
import {renderMark} from '../../marks/marks.js';

import img1 from '../img/berlin/full/1.png';
import img2 from '../img/berlin/full/2.png';
import img3 from '../img/berlin/full/3.png';
import img4 from '../img/berlin/full/4.png';
import img5 from '../img/berlin/full/5.png';
import img6 from '../img/berlin/full/6.png';
import img7 from '../img/berlin/full/7.png';
import img8 from '../img/berlin/full/8.png';
import img9 from '../img/berlin/full/9.png';
import img10 from '../img/berlin/full/10.png';
import img11 from '../img/berlin/full/11.png';
import img12 from '../img/berlin/full/12.png';
import img13 from '../img/berlin/full/13.png';
import img14 from '../img/berlin/full/14.png';
import img15 from '../img/berlin/full/15.png';
import img16 from '../img/berlin/full/16.png';
import img17 from '../img/berlin/full/17.png';
import img19 from '../img/berlin/full/19.png';
import img20 from '../img/berlin/full/20.png';
import img21 from '../img/berlin/full/21.png';
import img22 from '../img/berlin/full/22.png';
import img23 from '../img/berlin/full/23.png';
import img24 from '../img/berlin/full/24.png';
import img25 from '../img/berlin/full/25.png';
import img26 from '../img/berlin/full/26.png';
import img27 from '../img/berlin/full/27.png';
import img28 from '../img/berlin/full/28.png';
import img29 from '../img/berlin/full/29.png';
import img30 from '../img/berlin/full/30.png';
import img31 from '../img/berlin/full/31.png';
import img32 from '../img/berlin/full/32.png';
import img33 from '../img/berlin/full/33.png';
import img34 from '../img/berlin/full/34.png';
import img35 from '../img/berlin/full/35.png';
import img36 from '../img/berlin/full/36.png';
import img37 from '../img/berlin/full/37.png';
import img38 from '../img/berlin/full/38.png';
import img39 from '../img/berlin/full/39.png';
import img40 from '../img/berlin/full/40.png';
import img41 from '../img/berlin/full/41.png';
import img42 from '../img/berlin/full/42.png';
import img43 from '../img/berlin/full/43.png';
import img44 from '../img/berlin/full/44.png';
import img45 from '../img/berlin/full/45.png';
import img46 from '../img/berlin/full/46.png';

import img1Thumb from '../img/berlin/thumb/1_1-1.png';
import img2Thumb from '../img/berlin/thumb/2_1-1.png';
import img3Thumb from '../img/berlin/thumb/3_1-1.png';
import img4Thumb from '../img/berlin/thumb/4_1-1.png';
import img5Thumb from '../img/berlin/thumb/5_1-1.png';
import img6Thumb from '../img/berlin/thumb/6_1-1.png';
import img7Thumb from '../img/berlin/thumb/7_1-1.png';
import img8Thumb from '../img/berlin/thumb/8_1-1.png';
import img9Thumb from '../img/berlin/thumb/9_1-1.png';
import img10Thumb from '../img/berlin/thumb/10_1-1.png';
import img11Thumb from '../img/berlin/thumb/11_1-1.png';
import img12Thumb from '../img/berlin/thumb/12_1-1.png';
import img13Thumb from '../img/berlin/thumb/13_1-1.png';
import img14Thumb from '../img/berlin/thumb/14_1-1.png';
import img15Thumb from '../img/berlin/thumb/15_1-1.png';
import img16Thumb from '../img/berlin/thumb/16_1-1.png';
import img17Thumb from '../img/berlin/thumb/17_1-1.png';
import img19Thumb from '../img/berlin/thumb/19_1-1.png';
import img20Thumb from '../img/berlin/thumb/20_1-1.png';
import img21Thumb from '../img/berlin/thumb/21_1-1.png';
import img22Thumb from '../img/berlin/thumb/22_1-1.png';
import img23Thumb from '../img/berlin/thumb/23_1-1.png';
import img24Thumb from '../img/berlin/thumb/24_1-1.png';
import img25Thumb from '../img/berlin/thumb/25_1-1.png';
import img26Thumb from '../img/berlin/thumb/26_1-1.png';
import img27Thumb from '../img/berlin/thumb/27_1-1.png';
import img28Thumb from '../img/berlin/thumb/28_1-1.png';
import img29Thumb from '../img/berlin/thumb/29_1-1.png';
import img30Thumb from '../img/berlin/thumb/30_1-1.png';
import img31Thumb from '../img/berlin/thumb/31_1-1.png';
import img32Thumb from '../img/berlin/thumb/32_1-1.png';
import img33Thumb from '../img/berlin/thumb/33_1-1.png';
import img34Thumb from '../img/berlin/thumb/34_1-1.png';
import img35Thumb from '../img/berlin/thumb/35_1-1.png';
import img36Thumb from '../img/berlin/thumb/36_1-1.png';
import img37Thumb from '../img/berlin/thumb/37_1-1.png';
import img38Thumb from '../img/berlin/thumb/38_1-1.png';
import img39Thumb from '../img/berlin/thumb/39_1-1.png';
import img40Thumb from '../img/berlin/thumb/40_1-1.png';
import img41Thumb from '../img/berlin/thumb/41_1-1.png';
import img42Thumb from '../img/berlin/thumb/42_1-1.png';
import img43Thumb from '../img/berlin/thumb/43_1-1.png';
import img44Thumb from '../img/berlin/thumb/44_1-1.png';
import img45Thumb from '../img/berlin/thumb/45_1-1.png';
import img46Thumb from '../img/berlin/thumb/46_1-1.png';
const photos = [
  new Image(img1, img1Thumb, 'Berlin Wall', ''),
  new Image(img2, img2Thumb, '', ''),
  new Image(img3, img3Thumb, '', ''),
  new Image(img4, img4Thumb, '', ''),
  new Image(img5, img5Thumb, '', ''),
  new Image(img6, img6Thumb, 'There were really two walls. The space in between them was called the Death Strip.', ''),
  new Image(img7, img7Thumb, '', ''),
  new Image(img8, img8Thumb, '', ''),
  new Image(img9, img9Thumb, '', ''),
  new Image(img10, img10Thumb, 'It reads: \'My God, Help Me to Survive This Fatal Love\'. Strangely, the is a depiction of a kiss that really took place between the two men, Brezhnev and Erick Honecker', ''),
  new Image(img11, img11Thumb, '', ''),
  new Image(img12, img12Thumb, '', ''),
  new Image(img13, img13Thumb, '', ''),
  new Image(img14, img14Thumb, 'Title: Time Bomb', ''),
  new Image(img15, img15Thumb, 'The famous club Berghain. Partiers were still trickling out when this photo was taken at 11am on a Sunday.', ''),
  new Image(img16, img16Thumb, 'The distinctly Soviet-looking Alexanderplatz.', ''),
  new Image(img17, img17Thumb, '', ''),
  new Image(img19, img19Thumb, 'Gazing up into one of the voids in the Jewish Museum Berlin. The museum\'s austere architecture is nearly as moving as its artifacts of those who were murdered in the Holocaust.', ''),
  new Image(img20, img20Thumb, '', ''),
  new Image(img21, img21Thumb, '', ''),
  new Image(img22, img22Thumb, 'The museum\'s three pathways, the Axis of Exile, the Axis of the Holocaust, and the Axis of Continuity represent the three options available to Jews living during the Holocaust time. The Axis of Exile, the path taken by Jews who succesfully fled to new lands, culminates in the Garden of Exile, a strange place with uneven ground where one never forgets that they are Other here.', ''),
  new Image(img23, img23Thumb, 'The Holocaust tower is the termination of the Axis of the Holocaust: the path taken by those who were murdered in the Holocaust. It is a desolate chamber with no way out.', ''),
  new Image(img24, img24Thumb, 'The Path of Continuity ends in the Memory Void. The echoing clack of metal fills the room as you walk over the 10\,000 faces.', ''),
  new Image(img25, img25Thumb, '', ''),
  new Image(img26, img26Thumb, '', ''),
  new Image(img27, img27Thumb, '', ''),
  new Image(img28, img28Thumb, 'And now a bunch of street art and Graffiti in Friedrichshain, former East Germany.', ''),
  new Image(img29, img29Thumb, '', ''),
  new Image(img30, img30Thumb, '', ''),
  new Image(img31, img31Thumb, '', ''),
  new Image(img32, img32Thumb, '', ''),
  new Image(img33, img33Thumb, '', ''),
  new Image(img34, img34Thumb, '', ''),
  new Image(img35, img35Thumb, '', ''),
  new Image(img36, img36Thumb, 'This has nothing to do with Berlin, but I found this New Yorker cartoon hilarious.', ''),
  new Image(img37, img37Thumb, '', ''),
  new Image(img38, img38Thumb, 'Museum of Modern Art. A laser bouncing between two mirrors in perpetuity.', ''),
  new Image(img39, img39Thumb, '', ''),
  new Image(img40, img40Thumb, '', ''),
  new Image(img41, img41Thumb, '', ''),
  new Image(img42, img42Thumb, '', ''),
  new Image(img43, img43Thumb, '', ''),
  new Image(img44, img44Thumb, '', ''),
  new Image(img45, img45Thumb, 'Creepiest thing I have seen in a while.', ''),
  new Image(img46, img46Thumb, '', ''),
]
export default (
  <Post
    title='Berlin'
    photos={photos}
    renderMark={renderMark}
    idx={3}
  />
);

