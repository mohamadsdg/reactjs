import React, {Component} from 'react';
import {Route ,Redirect} from 'react-router-dom';
import PropTyps from 'prop-types';

class PrivateRoute extends Component {
    static PropTyps = {
        component : PropTyps.func.isRequired,
        path : PropTyps.string.isRequired,
    };
    render() {
        const { component : Component , authorize  , ...restProps} = this.props ;
        return (
            // render yeseri props migire va in props ha mitone az Route ha gerefte beshe in to logic react-router-dom hastesh
            <Route {...restProps} render={(props)=> (
                authorize ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{ pathname:'/login' }} />
                )
            )}>
            </Route>
        );
    }
}

export default PrivateRoute;