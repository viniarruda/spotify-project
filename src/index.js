import React from 'react';
import {
    render
} from 'react-dom'
import Root from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faChevronLeft, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import dotenv from 'dotenv'


render( <
    Root /> ,
    document.getElementById('root')
);

library.add(faUserCircle, faChevronLeft, faPlayCircle, faPauseCircle);
module.hot.accept();
dotenv.config();
