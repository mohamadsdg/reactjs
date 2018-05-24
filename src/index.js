import React from 'react';
import ReactDOM from 'react-dom';

function CustomTextInput (props){
    return <input type="text" ref={props.inputRef}/>
}

class Parent extends React.Component{
    componentDidMount() {
        this.inputElement.focus();
    }
    render() {
        return (
            <CustomTextInput inputRef={el => this.inputElement = el} />
        );
    }
}
ReactDOM.render(<Parent/>,document.getElementById('app'));