import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from "./AppSPA";

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,document.getElementById('app')
);