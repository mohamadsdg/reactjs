import React, {Component} from 'react';
import validator from 'validator';

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

        // console.log(errors);
        this.setState( {errors} , () => {
            console.log( callback);
             // return typeof callback(formIsValid);
        });
        console.log( callback);
        // return formIsValid;
    }
    handleSubmit(e){
        e.preventDefault();
        this.handleValidate( (valid)=>{
            if (valid){
                // console.log('validForm');
            } else{
                // console.log(this.state.errors);
            }
        });
/*        if (this.handleValidate()) {
            console.log('validForm');
        }else{
            console.log(this.state.errors);
            // console.log('invalidForm');
        }*/
    }
    handleChange(e){
        let fields = this.state.fields;
        let target = e.target;
        fields[target.name] = target.value ;
        this.setState({fields})
    }
    render() {
        const {email,password} = this.state.fields ;
        const {error} = this.state ;
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