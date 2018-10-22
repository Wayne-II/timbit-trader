import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*
Redux Componenets
*/
import { login } from '../store/user/actions';
/*
React Components
*/
import TextInput from '../toolbox/TextInput';
import PasswordInput from '../toolbox/PasswordInput';

const styles = {
  container:{

  }
}

class Login extends Component{

  constructor( props ){
    super( props );
    this.state ={
      email:'',
      password:''
    }
  }

  inputChange = e => {
    this.setState( { [ e.target.name ]:e.target.value } )
  }

  validEmailRegex = /^.+@.+\..+$/

  emailIsValid = () =>{
    return this.validEmailRegex.test( this.state.email );
  }

  passwordIsValid = () => {
    const { password, confirm } = this.state
    if( ! ( password.length >= 10 ) ){
      return false;
    }
    if( ! ( password.length <= 128 ) ){
      return false;
    }
    return true;
  }

  loginIsValid = () => {
    if( ! this.emailIsValid() ){
      return false;
    }
    if( ! this.passwordIsValid() ){
      return false;
    }
    return true;
  }

  loginClick = e => {
    if( this.loginIsValid() ){
      const { email, password } = this.state;
      const { login } = this.props;
      login( { email, password } );
    }else{
      console.log( this.emailIsValid(), this.passwordIsValid(), this.state )
    }
  }

  render(){
    return <div>
      <h2>Login</h2>
      <TextInput onChange={ this.inputChange } name="email">Email</TextInput>
      <PasswordInput onChange={ this.inputChange } name="password">Password</PasswordInput>
      <a onClick={ this.loginClick }>Sing In</a>
    </div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: bindActionCreators( login, dispatch)
  }
}

export default connect( null, mapDispatchToProps )( Login );
