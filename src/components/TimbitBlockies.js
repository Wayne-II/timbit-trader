import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blockies from 'react-blockies';

import {GetUserEmail} from '../store/user/selectors';

class TimbitBlockies extends Component{
  render(){
    return <Blockies seed={this.props.email} />
  }
}

const mapStateToProps = state => {
  return {
    email:GetUserEmail( state )
  }
}

TimbitBlockies = connect( mapStateToProps )( TimbitBlockies );

export default TimbitBlockies;
