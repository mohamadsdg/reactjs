import React from 'react';
import ReactDOM from 'react-dom';

export class App {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
};

/************************** JSX ****************************************/
const element = (
    <div>
        <h1>Hello Reactjs</h1>
        <p>first statement in react</p>
    </div>
);

const getmessage = (message,site) => {
    if(site){
        return <h1>{message}{site}</h1>
    }
    return <h2>{message}</h2>
};
ReactDOM.render(getmessage("Hello","bimemahan"),document.getElementById('app'));

/************* Component and props ******************/

//with function
function Welcome1(props) {
    return <h1>Hello, {props.name}</h1>
}
ReactDOM.render(<Welcome1 name='mohamad' />,document.getElementById('app'));

//with Class
class Welcome extends React.Component{
    render(){
        return <h1>Hello,{this.props.name}</h1>
    }
}
ReactDOM.render(<Welcome name="mohamad"/>,document.getElementById('app'));

//**Easy EXP
class App extends React.Component{
    render(){
        return(
            <div className="body">
                <div className="header">{this.props.titleHead}</div>
                <div className="main">{this.props.titleMain}</div>
                <div className="footer">{this.props.titleFooter}</div>
            </div>
        )
    }
}
ReactDOM.render(<App titleHead="This is Header" titleMain="This is Main" titleFooter="This is Footer"/>,document.getElementById('app'));

//**Intermediate EXP
class Header extends React.Component{
    render(){
        return(
            <div className="header">
                {this.props.title}
            </div>
        )
    }
}
class Body extends React.Component{
    render(){
        return(
            <div className="main">
                {this.props.title}
            </div>
        )
    }
}
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                {this.props.title}
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div className="body">
                <Header title="This is Header"/>
                <Body title="This is Main"/>
                <Footer title="This is Footer"/>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));

//**Advance EXP
class App extends React.Component{
    render(){
        return(
            <div className="body">
                <Header title={this.props.titlehead}/>
                <Body title={this.props.titlemain}/>
                <Footer title={this.props.titlefooter}/>
            </div>
        )
    }
}
const Data = {
    Head : "This is Header",
    Main : "This is Main",
    Footer : "This is Footer",
};
ReactDOM.render(
    <App
        titlehead = {Data.Head}
        titlemain = {Data.Main}
        titlefooter = {Data.Footer}
    />
    ,document.getElementById('app'));


/**************************** State and Lifecycle *****************************/

//**before concept State
function Clock (props) {
    return(
        <div>
            <h1>Hello, word</h1>
            <p>It is {props.date.toLocaleTimeString()}</p>
        </div>
    )
}
function Tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>
        ,document.getElementById('app')
    )
}
setInterval(()=>{Tick()},1000);

//**after concept State without LifeCycle
/*#1*/
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
        };
        setInterval(()=>{
            this.setState({
                date : new Date(),
            });
        },1000)
    }
    render(){
        return(
            <div>
                <h1>Hello, word</h1>
                <p>It is {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
ReactDOM.render(<Clock />,document.getElementById('app'));

/*#1*/
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
        }
    }
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.setState({
                date : new Date(),
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render(){
        return(
            <div>
                <h1>Hello ,world</h1>
                <p>it is {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
ReactDOM.render(<Clock />,document.getElementById('app'));

/*#2*/
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
        }
    }
    componentDidMount(){
        this.tick();
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.timerID = setInterval(()=>{
            this.setState({
                date : new Date(),
            })
        },1000)
    }
    render(){
        return(
            <div>
                <h1>Hello ,world</h1>
                <p>it is {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
ReactDOM.render(<Clock />,document.getElementById('app'));


/******************************** Handle Events ***********************************/

/*#1*/
class BtnAction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0 ,
        }
    }
    increment(){
        /*React say wrong but correctly work*/
        // this.setState({counter : this.state.counter + 1 ,});

        /*React say use prevState that very correct*/
        this.setState(prevState=>({counter : prevState.counter + 1}))
    }
    decrement(){
        /*React say wrong but correctly work*/
        // this.setState({counter : this.state.counter - 1 ,});

        /*React say use prevState that very correct*/
        this.setState(prevState=>({counter : prevState.counter - 1}))
    }
    render(){
        return(
            <div>
                <p>{this.state.counter}</p>
                <button onClick={(e)=>{this.increment(e)}}>Button inc</button>
                <button onClick={this.decrement.bind(this)}>Button inc</button>
            </div>

        )
    }
}
ReactDOM.render(<BtnAction />,document.getElementById('app'));

/*#2*/
class BtnAction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0 ,
        };

        // This binding is necessary to make `this` work in the callback
        // this binding Advance
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        /*React say wrong but correctly work*/
        // this.setState({counter : this.state.counter + 1 ,});

        /*React say use prevState that very correct*/
        this.setState(prevState=>({counter : prevState.counter + 1}))
    }
    decrement(){
        /*React say wrong but correctly work*/
        // this.setState({counter : this.state.counter - 1 ,});

        /*React say use prevState that very correct*/
        this.setState(prevState=>({counter : prevState.counter - 1}))
    }
    render(){
        return(
            <div>
                <p>{this.state.counter}</p>
                <button onClick={(e)=>{this.increment(e)}}>Button inc</button>
                <button onClick={this.decrement}>Button inc</button>
            </div>
        )
    }
}
ReactDOM.render(<BtnAction />,document.getElementById('app'));

/***************************** List(Element) & key  ********************************/
//without key
class List extends React.Component{
    render(){
        let number = [1,2,3,4];
        return(
           <ul>
               {
                   number.map((newNumb) =>
                       <li>{newNumb}</li>
                   )
               }
           </ul>
        )
    }
}
ReactDOM.render(<List />,document.getElementById('app'));

//with key
class List extends React.Component{
    render(){
        let number = [1,2,3,4];
        return(
            <ul>
                {
                    number.map((newNumb,index) =>
                        <li key={index}>{newNumb}</li>
                    )
                }
            </ul>
        )
    }
}
ReactDOM.render(<List />,document.getElementById('app'));

//simple Exp ( list of number )
class Item extends React.Component{
    render(){
        return(
            /*niazi nist key ro inja tariif koni*/
            //<li key={this.props.attrKey}>{this.props.number}</li>
            <li>{this.props.number}</li>
        )
    }
}
class ListItem extends React.Component{
    render(){
        const arrayNumber = [1,2,3,4,5];
        const arrayItem = arrayNumber.map(
            //(newNumb,index) => <Item number={newNumb} attrKey={index}/>
            /*inja bayad key ro tarif konim */
            (newNumb,index) => <Item number={newNumb} key={index}/>
        );

        return(
            <ul>
                {arrayItem}
            </ul>
        )
    }
}
ReactDOM.render(<ListItem />,document.getElementById('app'));

//type2 ( list of number )
class Item extends React.Component{
    render(){
        return(
            <li>{this.props.number}</li>
        )
    }
}
class ListItem extends React.Component{
    render(){
        const arrayNumber = this.props.entryVal;
        const arrayItem = arrayNumber.map(
            (newNumb,index) => <Item number={newNumb} key={index}/>
        );

        return(
            <ul>
                {arrayItem}
            </ul>
        )
    }
}
const newNumber = [1,2,3,4,5,6,7,8,9,10];
ReactDOM.render(<ListItem entryVal={newNumber}/>,document.getElementById('app'));

//type3 ( list of number  fk mikonam in kar ghalaat bashe )
class Item extends React.Component{
    render(){
        return(
            <li>{this.props.number}</li>
        )
    }
}
class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.State = {
            arrayNumber : this.props.entryVal
        }
    }
    render(){
        const arrayItem = this.State.arrayNumber.map(
            (newNumb,index) => <Item number={newNumb} key={index}/>
        );

        return(
            <ul>
                {arrayItem}
            </ul>
        )
    }
}
const newNumber = [1,2,3,4,5,6,7,8,9,10];
ReactDOM.render(<ListItem entryVal={newNumber}/>,document.getElementById('app'));

//Intermediate Exp ( list of Article )
class ArticleItem extends React.Component{
    render(){
        return(
            <div className="bs1_item">
                <div className="articleHead">
                    <h2>title article number {this.props.articlenumber}</h2>
                </div>
                <div className="articleBody">
                    <p>caption article caption article caption article caption article </p>
                </div>
            </div>
        )
    }
}
class ArticleList extends React.Component{
    render(){
        const countItem = [1,2,3,4];
        const listArticle = countItem.map(
            (count, index) =>  <ArticleItem key={index} articlenumber={count} />
        );
        return(
            <div className="box_style1">
                {listArticle}
            </div>
        )
    }
}
ReactDOM.render(<ArticleList />,document.getElementById('app'));
class App extends React.Component{}

//Intermediate Exp type2 ( list of Article )
class ArticleItem extends React.Component{
    render(){
        return(
            <div className="bs1_item">
                <div className="articleHead">
                    <h2>title article numbers {this.props.articleTitle}</h2>
                </div>
                <div className="articleBody">
                    <p>caption article with id = {this.props.articleID} </p>
                </div>
            </div>
        )
    }
}
class ArticleList extends React.Component{
    render(){
        const listArticle = this.props.dataArticle.map(
            // (dataArticle, index) =>  <ArticleItem key={index} articleTitle={dataArticle.title} />
            //or and best
            (dataArticle) =>  <ArticleItem key={dataArticle.id} articleTitle={dataArticle.title} articleID={dataArticle.id}/>
        );
        return(
            <div className="box_style1">
                {listArticle}
            </div>
        )
    }
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        // if data from api !!!
        this.setState({
            data : [
                {id : 1 ,title: 'title article 1'},
                {id : 2 ,title: 'title article 2'},
                {id : 3 ,title: 'title article 3'},
            ]
        })
    }
    render(){
        return(
            <div>
                <p>note : data dynamic from API</p>
                <ArticleList dataArticle={this.state.data}/>
            </div>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('app'));

//Intermediate Exp type3 ( list of Article )
class ArticleItem extends React.Component{
    render(){
        return(
            <div className="bs1_item">
                <div className="articleHead">
                    <h2>title article numbers {this.props.articleTitle}</h2>
                </div>
                <div className="articleBody">
                    <p>caption article with id = {this.props.articleID} </p>
                </div>
            </div>
        )
    }
}
class ArticleList extends React.Component{
    render(){
        const listArticle = this.props.dataArticle.map(
            // (dataArticle, index) =>  <ArticleItem key={index} articleTitle={dataArticle.title} />
            //or and best
            (dataArticle) =>  <ArticleItem key={dataArticle.id} articleTitle={dataArticle.title} articleID={dataArticle.id}/>
        );
        return(
            <div className="box_style1">
                {listArticle}
            </div>
        )
    }
}
class App extends React.Component{
    render(){
        return(
            <div>
                <p>note : data dynamic from API</p>
                <ArticleList dataArticle={this.props.blog}/>
            </div>
        )
    }
}
const posts = [
    {id : 1 ,title: 'title article 1 from external data'},
    {id : 2 ,title: 'title article 2 from external data'},
    {id : 3 ,title: 'title article 3 from external data'},
];
ReactDOM.render(<App blog={posts}/>,document.getElementById('app'));

//Intermediate Exp type4 ( list of Article white Destructing )
class ArticleItem extends React.Component{
    render(){
        return(
            <div className="bs1_item">
                <div className="articleHead">
                    <h2>title article numbers {this.props.articleTitle}</h2>
                </div>
                <div className="articleBody">
                    <p>caption article with id = {this.props.articleID} </p>
                </div>
            </div>
        )
    }
}
class ArticleList extends React.Component{
    render(){
        // az props ha , prop dataArticle
        const {dataArticle} = this.props ;
        const listArticle = dataArticle.map(
            (dataArticle) =>  <ArticleItem key={dataArticle.id} articleTitle={dataArticle.title} articleID={dataArticle.id}/>
        );
        return(
            <div className="box_style1">
                {listArticle}
            </div>
        )
    }
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        // if data from api !!!
        this.setState({
            data : [
                {id : 1 ,title: 'title article 1'},
                {id : 2 ,title: 'title article 2'},
                {id : 3 ,title: 'title article 3'},
            ]
        })
    }
    render(){
        return(
            <div>
                <p>note : data dynamic from API</p>
                <ArticleList dataArticle={this.state.data}/>
            </div>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('app'));

// tip : Mitonim har kodom az in component haro joda dar yek file js gozasht va harja khastimesh importesh konim


/***************************** conditional Rendering  ********************************/

class User extends React.Component{
    render(){
        return <p>selected <strong>user</strong> component</p>
    }
}
class Guest extends React.Component{
    render(){
        return <p>selected <strong>Guest</strong> component</p>
    }
}
class App extends React.Component{
    // const Element = (this.props.whichComponent > ) ? (<User/>) : (<Guest/>)
    render() {
        const condition = this.props.wichComponent;
        if (condition) {
            return <User/>
        }
        else{return <Guest/>}
    }
}

ReactDOM.render(<App wichComponent={true}/>,document.getElementById('app'));

/*MailBox*/
class Mailbox extends React.Component{

    render(){
        const msg = this.props.message;
        if(msg.length > 0){
            return(
                <p>{msg.length} Message unread</p>
            )
        }
    }
}
const messageData = ['message1','message2','message3'];
ReactDOM.render(<Mailbox message={messageData}/>,document.getElementById('app'));

/*Login Controler*/
class User extends React.Component{
    render(){
        return <p>you are not login in app</p>
    }
}
class Guest extends React.Component{
    render(){
        return <p>you are login in app</p>
    }
}
class Greeting extends  React.Component{
    render() {
        const condition = this.props.isLogin;
        if (condition) {
            return <User/>
        }
        else{return <Guest/>}
    }
}

class LoginUser extends React.Component{
    render(){
        return <button onClick={this.props.onClick}>Login user</button>
    }
}
class LogoutUser extends React.Component{
    render(){
        return <button onClick={this.props.onClick}>Logout user</button>
    }
}

class LoginControl extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            statusLogin : true ,
        }
    }
    handleLoginBtn(){this.setState({statusLogin :false});}
    handleLogOutBtn(){this.setState({statusLogin :true});}
    render(){
        const statusBtn = (this.state.statusLogin) ?
            (<LoginUser onClick={this.handleLoginBtn.bind(this)}/>)
            :
            (<LogoutUser onClick={this.handleLogOutBtn.bind(this)}/>);
        return(
            <div>
                <h3>note : if you {(this.state.statusLogin)?'logIn':"logout"} click the Button</h3>
                <Greeting isLogin={this.state.statusLogin}/>
                {statusBtn}
            </div>
        )
    }
}
ReactDOM.render(<LoginControl />,document.getElementById('app'));


/******************************** Forms ***********************************/
/*incorrect*/
class Easyform extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            filed : {
                FirstName : 'mohamad',
                LastName:'sadeghi',
            }
        };
    }
    render(){
        return(
            <div>
                <form>
                    <label> firstname: </label>
                    <input value={this.state.filed.FirstName}/>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<Easyform />,document.getElementById('app'));

/*correct*/
class Easyform extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            filed : {
                FirstName : 'Mohamad',
            }
        };
    }
    handleChange(e){
        this.setState({
            filed:{
                FirstName: e.target.value,
            }
        })
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.filed.FirstName);
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label> firstname: </label>
                    <input type="text" value={this.state.filed.FirstName} onChange={this.handleChange.bind(this)}/>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<Easyform />,document.getElementById('app'));

/*Easy Exp*/
class Easyform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: 'Mohamad',
            Gender: '',
            desc: 'I Love JavaScript',
        };
    }
    handleInput = (e) => {
        this.setState({
            FirstName: e.target.value,
        })
    };
    handleSelect = (e) => {
        this.setState({
            Gender: e.target.value,
        })
    };
    handleTextArea = (e) => {
        this.setState({
            desc: e.target.value,
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log('A Filed was submitted: ' + this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label> firstname: </label>
                    <input type="text" value={this.state.FirstName} onChange={this.handleInput}/>
                    <label> Gender: </label>
                    <select value={this.state.Gender} onChange={this.handleSelect}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label>Description :</label>
                    <textarea value={this.state.desc} onChange={this.handleTextArea}/>
                    <hr/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<Easyform/>, document.getElementById('app'));

/*Intermediate Exp*/ // tip++
class Easyform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            FirstName : 'Mohamad',
            Gender:'',
            desc:'I Love JavaScript',
            checkYoungman:'',
            checkOldman:''
        };
    }
    handleElement(e){
        const target = e.target ;
        //check mikonim ke aya jensesh check hast ya inputie
        //age checkibood ture ya false barmigardone(radio ham true false barmigardone !!)
        //age inputi bood value on roo mide
        const value = target.type === 'checkbox' ? target.checked : target.value ;
        const name = target.name ;

        this.setState({
            // bekhatere in az destructuring estefade kardim ke miad har seri
            // value ra be moteghayer marbotee nesbat midee
            // noktash inbood !!! yeeeeessssss
            [name] : value

        });
    };
    handleSubmit(event) {
        // ba in method ke neveshtim data haro mitonim begiirim vase karhaEke mikhaym
        // masalan bedim be api ya befredtim be server
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label> firstname: </label>
                    <input name='FirstName' type="text" value={this.state.FirstName} onChange={this.handleElement.bind(this)}/>
                    <label> Gender: </label>
                    <select name='Gender' value={this.state.Gender} onChange={this.handleElement.bind(this)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label>Description :</label>
                    <textarea name='desc' value={this.state.desc} onChange={this.handleElement.bind(this)}/>
                    <label>
                        10-20
                        <input type="checkbox" name='checkYoungman' value='' onChange={this.handleElement.bind(this)}/>
                    </label>
                    <label>
                        50-70
                        <input type="checkbox" name='checkOldman' value='' onChange={this.handleElement.bind(this)}/>
                    </label>
                    <hr/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
ReactDOM.render(<Easyform />,document.getElementById('app'));

/****************************** Composition vs Inheritance ***********************************/
//default text
import Message from './component/inhComp';
class App extends React.Component{
    render() {
        return (
            <Message>
                    i'm inheritance from message component
            </Message>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('app'));

//Own convention
import {LeftSideComponent,Structure} from './component/inhComp';
class App extends React.Component{
    render() {
        return (
            <Structure rightSide="سمت راست جدول" leftSide={<LeftSideComponent/>}/>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('app'));

//Specialization component
/*#1*/
import {Dialog} from './component/inhComp';
class App extends React.Component{
    render() {
        return (
            <Dialog title="تیتر کامپوننت اصلی" context="توضیحات کامپوننت اصلی"/>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('app'));

/*#2*/
import {WlcDialog} from './component/inhComp';
class App extends React.Component{
    render() {
        return (
            <WlcDialog/>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('app'));