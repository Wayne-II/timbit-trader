import React, { Component } from 'react';
import { GetAuthToken } from '../store/user/selectors';
import { connect } from 'react-redux';
import TimbitBlockies from './TimbitBlockies';

const styles = {
	button:{
		alignSelf:'center'
	}
}

class Profile extends Component{
  render(){

		let ProfileOutput;

		ProfileOutput = <TimbitBlockies />;
		if( this.props.token ){
		} else {

			ProfileOutput = <a onClick={ e => { console.log( 'asdf' ) } } style={ styles.button }>Trade Now</a>;
		}
		return <div>{ProfileOutput}</div>
  }
}

const mapStateToProps = ( state, ownProps ) => {
  console.log( 'App mapStateToProps', state, ownProps );
  return {
    token: GetAuthToken( state )
  }
}

export default connect( mapStateToProps )( Profile );
