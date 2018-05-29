import React, {Component} from 'react';
import Header from "./component/sections/Header";
import {Route ,Switch} from 'react-router-dom';
import PropTyps from 'prop-types';
import axios from 'axios';

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
    // tip +++ : ghabl az inke render component render beshe bayda route ro moshakhas konim vase hamin
    // az WillMount estefade kardim
    // tip*** :  componentWillMount < Render Component < componentDidMount
    componentWillMount(){
        let apiToken = localStorage.getItem('api_token');
        if ( apiToken !== null ) {
            this.setState({isAuthenticated : true});
        }else{
            this.setState({isAuthenticated : false})
        }
    }
    componentDidMount(){
        // age api token dastkari shode bashe ba bayad biyaym check konim ke aya in api_token
        // valid hastesh ya naa (tip: bbin vaghti auth shodi un token ke ro ke gerefti vase ghashangi nabode ke
        // bayad azash estefade koni vase inke server bedone to dastresii dari be yeseri az rout haa)

        let apiToken = localStorage.getItem('api_token');
        if ( apiToken !== null ) {
            axios({
                url: `http://roocket.org/api/user?api_token=${apiToken}`,
                method: 'get',
            }).then( response => {
                // console.log(response);
                this.setState({isAuthenticated : true});
            }).catch( error => {
                this.setState({isAuthenticated : false});
                // console.log(error);
            })
        }else{
            this.setState({isAuthenticated : false})
        }
    }
    handleLogout(){
        // tip**** :baraye inke ma ba component header dar ertebat bashim bayad karemono ba props be component esh begim
        localStorage.removeItem('api_token');
        this.setState({isAuthenticated : false});
    }
    handleLogin(){
        this.setState({isAuthenticated : true});
    }
    render() {
        const { isAuthenticated : auth} = this.state ;
        return (
            <div>
                <Header authorize={auth} logout={this.handleLogout.bind(this)}/>
                <div className='container'>
                    <Switch>
                        <Route path='/' exact={true} component={Home}/>
                        <Route path='/product/:ProductID' component={Product}/>
                        <Route path='/contact_us' component={Contact}/>
                        <Route path='/about_us' component={About}/>

                        <Route path='/login' render ={props => (
                            /*component={Login}*/
                            /* tip : vasa component login vazeyate auth ro mifrestim ta age auth bod befrestatesh safhe asli*/
                            /* tip : vasa component login vazeyate auth ro mifrestim ta age auth bod befrestatesh safhe asli*/
                            <Login {...props} authorize={auth} login={this.handleLogin.bind(this)}/>
                            )} />

                        <PrivateRoute path='/user_panel' component={UserPanel} authorize={auth}/>
                        /*inja component PrivateRoute gharare vase ye route ro bargardone ke be koja bayad beram !!
                            masalan age auth nashode bood redirect kon be login
                            age shode bood boro to safe UserPanel
                            ------------------------
                            in component gharare ye seri props daryaft kone path va component
                            okey !!
                            khob vali in Route nemitone props dashte bashe ta badan dalilesho peida konam
                            dalilesh ine ke age bekhaym behesh props bedim bayad besorate render benevisim
                            mesle route login
                        */
                        <Route component={Not_found}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;