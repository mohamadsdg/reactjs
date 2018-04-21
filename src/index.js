import React from 'react';
import ReactDOM from 'react-dom';

import {Dialog,WlcDialog} from './component/inhComp';
class App extends React.Component{
    render() {
        return (
            <div>
                <Dialog title="تیتر کامپوننت اصلی" context="توضیحات کامپوننت اصلی"/>
                <br/><br/>
                <WlcDialog/>
            </div>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('app'));