import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Product Archive </span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="http://via.placeholder.com/400x300"/>
                                <span className="card-title">Product 1</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/product/1">This is a link</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="http://via.placeholder.com/400x300"/>
                                <span className="card-title">Product 2</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/product/2">This is a link</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="http://via.placeholder.com/400x300"/>
                                <span className="card-title">Product 3</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/product/3">This is a link</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="http://via.placeholder.com/400x300"/>
                                <span className="card-title">Product 4</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/product/4">This is a link</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="http://via.placeholder.com/400x300"/>
                                <span className="card-title">Product 5</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/product/5">This is a link</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="http://via.placeholder.com/400x300"/>
                                <span className="card-title">Product 6</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/product/6">This is a link</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
