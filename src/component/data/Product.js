import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';

class Product extends Component {
    render() {

        const {product} = this.props;
        // console.log(product);
        return (
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={product.image} alt={product.title}/>
                        <span className="card-title">Product {product.id}</span>
                    </div>
                    <div className="card-content">
                        <p>{product.title}</p>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <Link to={`/product/${product.id}`}>This is a link</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;