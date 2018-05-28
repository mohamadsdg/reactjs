import React, {Component} from 'react';
import validator from 'validator';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields : {
                email : '',
                password : ''
            },
            errors: {},
        }
    }
    handleValidate(callback){
        // tip ++ : yejoraE in callback dare yebar in methodo khodesh seda mizane
        //tip : alan ma ye vorodi func darim ke khoriji in func true ya false hastesh
        // va in khoroji ro zamani ke az in method estefade mikonim
        // ba argument ke be in method pass midim natije in func ro migirim !
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;
        if (validator.isEmpty(fields.email)){
            formIsValid = false;
            errors["email"] = "فیلد ایمیل نمیتواند خالی بماند";
        } else if( !validator.isEmail(fields.email) ){
            formIsValid = false;
            errors["email"] = "فرمت ایمیل صحیح نمیباشد";
        }
        if (validator.isEmpty(fields.password)){
            formIsValid = false;
            errors["password"] = "فیلد پسورد نمیتواند خالی بماند";
        } else if( !validator.isLength(fields.password , { min : 6 , max : undefined})){
            formIsValid = false;
            errors["password"] = "حداقل تعداد کاراکتر پسورد 6 میباشد ";
        }

        this.setState( {errors} , () => {
            return callback(formIsValid);
        });
    }
    handleRequest(){
        const {email, password} = this.state.fields;
        let formData  = new FormData();
            formData.append('email',email);
            formData.append('password',password);

           // console.log(formData);
        axios({
            url: 'http://roocket.org/api/login',
            method: 'post',
            dataType : 'json',
            headers: {'Accept': 'application/json'} ,
           /* data: {
                'email': email,
                'password': password,
            },*/
             data: formData
        }).then(responsive => {
            console.log(responsive);
            localStorage.setItem('api_token' , responsive.data.data.api_token);
            // console.log(responsive.data.data.api_token);

        }).catch(error => {
            // console.log(error);
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.handleValidate( (valid)=>{
            if (valid){
                this.handleRequest();
            } else{
                console.log(this.state.errors);
            }
        });
    }
    handleChange(e){
        let fields = this.state.fields;
        let target = e.target;
        fields[target.name] = target.value ;
        this.setState({fields})
    }
    render() {
        const {email,password} = this.state.fields ;
        const {errors} = this.state ;
        return (
            <div>
                <h1>Login page</h1>
                <div className='form_style1'>
                    <form className='col' onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
                            <div className="input-field col m12">
                                <input id="email"
                                       type='text'
                                       name='email'
                                       value={email}
                                       onChange={this.handleChange.bind(this)}/>
                                <label htmlFor="email">Email</label>
                                <span className={ ["red", errors['email'] ? "darken-1":""].join(' ') } style={{color:"#fff",padding:"5px 10px", display: errors['email'] ? 'block' : 'none'}}>{errors['email']}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password"
                                       type='password'
                                       name='password'
                                       value={password}
                                       onChange={this.handleChange.bind(this)}/>
                                <label htmlFor="password">Password</label>
                                <span className={ ["red", errors['password'] ? "darken-1":""].join(' ') } style={{color:"#fff",padding:"5px 10px", display: errors['password'] ? 'block' : 'none'}}>{errors['password']}</span>
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
// ye bahsi hast bename jwt (json web token )ke vaghti ehraze hoviyate vagheE mikonim
// baste be zababane backend be ma ye token mide ke in token
// scope access  dar site ro be ma mojavez mide
export default Login;