import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';


class PT extends React.Component{
    /*used static method in Class */
    static propTypes = {
        name: propTypes.string,
        children: propTypes.element
    };
    static defaultProps = {
        name:"mohammad",
        children: <h1>Hi</h1> ,
    };
    constructor(props) {
        super(props);
        console.log(this.props.name);
    };
    render(){
        return (
            <div>
                {this.props.children}
                <input type="text" name={this.name}/>
            </div>
        )
    }
}
ReactDOM.render(<PT children={<h3>Hello</h3>}/>,document.getElementById('app'));