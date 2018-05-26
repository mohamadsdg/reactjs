import React, {Component} from 'react';
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
            articles: {}
        }
    };
    componentDidMount(){
        const { params } = this.props.match;
        // console.log(params);
        axios.get(`http://roocket.org/api/products/${params.ProductID}`)
            .then((response)=>{
                // console.log(response);
                this.setState({
                    articles :response.data.data,
                });
            })
            .catch((error)=>{
                // console.log(error);
            })
    };
    render() {
        // console.log(params);
        const { articles } = this.state;
        console.log(articles);
        return (
        <div className="row">
            <div className="col s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Product Detail {articles.id}</span>
                        <p>
                            {/*I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.*/}
                            {articles.body}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Product;