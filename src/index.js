import React from 'react';
import {render} from 'react-dom';
import {Board,Note} from "./AppNote";

render(
    <Board count={10} />
    ,document.getElementById('app')
);