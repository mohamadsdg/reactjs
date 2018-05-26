import React, {Component} from 'react';
import Product from '../data/Product';
import InfiniteScroll from 'react-infinite-scroller';
import  axios  from "axios/index";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : [],
            nextPage : 1,
            hasMore : true,
        }

    }
    loadItems(){
        axios.get('http://roocket.org/api/products')
            .then( response => {
                // console.log(response);
                const {current_page , last_page , data} = response.data.data;
                // console.log(data);
                this.setState((prevState)=>({
                    // prevState miad state haye ghabli ke dashtim ro nigar midare
                    articles : [...prevState.articles , ...data],
                    hasMore :  current_page !== last_page ,
                    nextPage : current_page + 1 ,

                }));

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
                <InfiniteScroll
                    className='row'
                    pageStart={0}
                    loadMore={this.loadItems.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {this.state.articles.map( (ProductItem, index) => <Product key={index} product={ProductItem} /> )}
                </InfiniteScroll>
            </div>
        );
    }
}

export default Home;
