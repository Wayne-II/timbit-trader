import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import TextInput from '../toolbox/TextInput';
import PasswordInput from '../toolbox/PasswordInput';

const register = state =>{
  return {'type':'fake_register_action'}
}

const styles = {
  container:{

  }
}

class Register extends Component{

  constructor( props ){
    super( props );
    this.state = {email:'', password:'', confirm:''}
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
    if( ! ( password === confirm ) ){
      return false;
    }
    return true;
  }

  registrationIsValid = () => {
    if( ! this.emailIsValid() ){
      return false;
    }
    if( ! this.passwordIsValid() ){
      return false;
    }
    return true;
  }

  registrationClick = e => {
    if( this.registrationIsValid() ){
      const { email, password } = this.state;
      fetch( 'http://arseinc.ddns.net:5000/auth/register', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify( { email, password } ),
      } ).then( res => {
        console.log( 'registered', res )
      } )
    }else{
      console.log( this.emailIsValid(), this.passwordIsValid(), this.state )
    }
  }

  render(){
    return <div>
      <h2>Register</h2>
      <TextInput onChange={ this.inputChange } name="email">Email</TextInput>
      <PasswordInput onChange={ this.inputChange } name="password">Password</PasswordInput>
      <PasswordInput onChange={ this.inputChange } name="confirm">Confirm</PasswordInput>
      <a onClick={ this.registrationClick }>Register</a>
    </div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register:bindActionCreators( register, dispatch )
  }
}

export default Register;
