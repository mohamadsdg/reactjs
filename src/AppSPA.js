import React, {Component} from 'react';
import Header from "./component/sections/Header";
import {Route ,Switch} from 'react-router-dom';
import PropTyps from 'prop-types';

// tip+++ : tavajoh dashte bash ke tamame route haye asli ma to app.js tarif mishe
// va baghie route ha ra bayad mese PrivateRoute bahash barkhord konim

// Components
import PrivateRoute from "./component/PrivateRoute";

// Pages
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import Product from "./component/pages/Product";
import Login from "./component/pages/Login";
import UserPanel from "./component/pages/UserPanel";
import Not_found from "./component/pages/Not_found";

class App extends Component {
    static PropTyps ={
        isAuthenticated : PropTyps.bool.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated : false ,
        }
    }
    componentDidMount(){
        let apiToken = localStorage.getItem('api_token');
        if (apiToken !== null ) {
            console.log(apiToken);
            this.setState({isAuthenticated : true})
        }else{
            this.setState({isAuthenticated : false})
        }
       /* axios({
            url: '',
            method : '',
        })*/
    }
    render() {
        const { isAuthenticated : auth} = this.state ;
        return (
            <div>
                <Header authorize={auth}/>
                <div className='container'>
                    <Switch>
                        <Route path='/' exact={true} component={Home}/>
                        <Route path='/product/:ProductID' component={Product}/>
                        <Route path='/contact_us' component={Contact}/>
                        <Route path='/about_us' component={About}/>
                        <Route path='/login' component={Login}/>
                        <PrivateRoute path='/user_panel' component={UserPanel} authorize={auth}/>
                        {/*inja component PrivateRoute gharare vase ye route ro bargardone ke be koja bayad beram !!
                            masalan age auth nashode bood redirect kon be login
                            age shode bood boro to safe UserPanel
                            ------------------------
                            in component gharare ye seri props daryaft kone path va component
                            okey !!
                            khob vali in Route nemitone props dashte bashe ta badan dalilesho peida konam
                        */}
                        <Route component={Not_found}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;