import React, {Component} from 'react';
import Header from "./component/sections/Header";
import {Route} from 'react-router-dom';

// Components
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import Product from "./component/pages/Product";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/product/:ProductID' component={Product}/>
                    <Route path='/contact_us' component={Contact}/>
                    <Route path='/about_us' component={About}/>
                </div>
            </div>
        );
    }
}

export default App;