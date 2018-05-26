import React, {Component} from 'react';
import Product from '../data/Product';
import  axios  from "axios/index";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : []
        }

    }
    componentDidMount(){
        axios.get('http://roocket.org/api/products')
            .then( response => {
                // console.log(response);

                const {data} = response.data.data;
                this.setState({
                    articles : data,
                });

            }) /// then for catch response
            .catch( error => {
                console.log(error);
            }) /// then for catch Error
    }
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
                    {this.state.articles.map( (ProductItem, index) => <Product key={index} product={ProductItem} /> )}
                </div>
            </div>
        );
    }
}

export default Home;
