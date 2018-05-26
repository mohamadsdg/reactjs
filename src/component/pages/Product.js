import React, {Component} from 'react';

class Product extends Component {
    render() {
        const { params } = this.props.match;
        return (
        <div className="row">
            <div className="col s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Product Detail {params.ProductID}</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Product;