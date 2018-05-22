import React from 'react';
import ReactDOM from 'react-dom';

class Ref extends React.Component{
    render(){
        return (
            <div>
                <div ref={(node)=> console.log("div",node)  } />
                <input ref={(node)=> console.log("div",node)  }/>
            </div>
        )
    }

}
ReactDOM.render(<Ref />,document.getElementById('app'));