import React from 'react';
import ReactDOM from 'react-dom';

class Ref extends React.Component{
    constructor(props) {
        super(props);
        this.myref = React.createRef();
    }
    render(){
        return <div ref={this.myref} />
    }

}
ReactDOM.render(<Ref />,document.getElementById('app'));