import React from 'react';
import {
    render
} from 'react-dom'
import Root from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faChevronLeft, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'


render( <
    Root /> ,
    document.getElementById('root')
);

library.add(faUserCircle, faChevronLeft, faPlayCircle, faPauseCircle);