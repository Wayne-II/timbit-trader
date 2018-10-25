import React, { Component } from 'react';
import { GetAuthToken } from '../store/user/selectors';
import { connect } from 'react-redux';

const styles = {
	button:{
		alignSelf:'center'
	}
}

class Profile extends Component{
  render(){

		let ProfileOutput;

		if( this.props.token ){
			ProfileOutput = <a onClick={ e => { console.log( 'asdf' ) } } style={ styles.button }>Profile</a>;
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
