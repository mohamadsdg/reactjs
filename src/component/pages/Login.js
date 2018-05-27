import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields : {
                email : '',
                password : ''
            }
        }
    }
    handleSubmit(e){
        e.preventDefault();
    }
    handleChange(e){
        let fields = this.state.fields;
        let target = e.target;
        fields[target.name] = target.value ;


        this.setState({fields})
    }
    render() {
        const {email,password} = this.state.fields ;
        return (
            <div>
                <h1>Login page</h1>
                <div className='form_style1'>
                    <form className='col' onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
                            <div className="input-field col m12">
                                <input id="email"
                                       type='email'
                                       name='email'
                                       value={email}
                                       onChange={this.handleChange.bind(this)}/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password"
                                       type='password'
                                       name='password'
                                       value={password}/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className='row'>
                            <button type='submit' className="waves-effect waves-light btn-large">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;