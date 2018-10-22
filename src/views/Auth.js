import React, {  Component } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const styles = {
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
  }
}

class Auth extends Component{
  render(){
    return <div style={ styles.container }>
      <Login />
      <Register />
    </div>
  }
}

export default Auth;
