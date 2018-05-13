import React, {Component} from 'react';
import { Value } from 'slate';
import Post from '../../components/post/post.js';
import {renderMark} from '../../marks/marks.js';

const post = {"value":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"I arrived early at the building the coworking space was housed in, intent on securing premium, high quality Colombian internet for the day.  In the lobby, a security guard indicated to me that this would not be possible.","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"“Hoy es vestido,” he said.","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"What?  I thought, dubious.  Today is dress?","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"“Hoy es vestido,” he assured me.","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Clearly the man was mistaken. But I lacked the Spanish vocabulary to engage with him in such metaphysical topics.","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"“Ah, si,” I thanked him.  “Gracias.” I headed for the escalator as if to leave.  Once on the lower level, I found the elevator, intending to ride it straight to the 15th floor, bypassing my troublesome interlocutor.  But the buttons for the upper floors weren’t functional, and presently I found myself before the guard once more.","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"But look, I pantomimed, jabbing at the business’s hours displayed on my phone.  “Esta abierto.”","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"“No,” he said.  “Vestido.  El no me intienda,” he explained, resignedly, to a population of nearby locals for whom Hoy es vestido was evidently not a major obstacle.","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]}},"operations":[],"flags":{"normalize":true}};

export default (
  <Post
    title='Medellin'
    post={Value.fromJSON(post.value)}
    renderMark={renderMark}
    idx={0}
  />
)

