import React, {Component} from 'react';
import {Link,NavLink } from 'react-router-dom'
import '../../style.css';

class Header extends Component {
    render() {
        const {authorize} = this.props;
        return (
            <nav className='light-blue'>
                <section id='header_part1'>
                    <div className='container'>
                        <div className='inner row'>
                            <div className='col s12 m6'>
                                <div className='nav'>
                                    <ul className='step1'>
                                        <li className="item">
                                            <NavLink to="/" className='link' activeClassName="active" exact={true}>Home</NavLink>
                                        </li>
                                        <li className="item">
                                            <NavLink to="/about_us" className='link'>About</NavLink>
                                        </li>
                                        <li className="item">
                                            <NavLink to="/contact_us" className='link'>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col s12 m3 offset-m3'>
                                {
                                    authorize ? (
                                        <div>
                                            <button className="waves-effect waves-light btn red darken-3" style={{marginRight:15}} onClick={this.props.logout}>Logout</button>
                                            <Link to='/user_panel' className="waves-effect waves-light btn yellow darken-3">User Panel</Link>
                                        </div>
                                    ) : (
                                        <Link to='/login' className="waves-effect waves-light btn yellow darken-3">Login</Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
        );
    }
}


export default Header;
