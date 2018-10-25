import React, { Component } from 'react';
import Blockies from 'react-blockies';

import {GetUserEmail} from '../store/'

class TimebitBlockies extends Component{
  render(){
    return <Blockies seed={this.props.email} />
  }
}

const mapStateToProps = state => {
  return {
    email:GetUserEmail( state )
  }
}
