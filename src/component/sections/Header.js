import React, {Component} from 'react';
import {Link,NavLink } from 'react-router-dom'
import '../../style.css';

class Header extends Component {
    render() {
        return (
            <nav>
                <section id='header_part1'>
                    <div className='container'>
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
                </section>
            </nav>
        );
    }
}


export default Header;
