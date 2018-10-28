import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerNumber extends Component{
	render(){
		const { number } = this.props;
		return <span style={ {
			height:'1em',
			lineHeight:'1em',
			minWidth:'1em',
			position:'absolute',
			backgroundColor:'#000000',
			borderRadius:'50%',
			display:'inline-block',
			color:'#ffffff',
			textAlign:'center',
			verticalAlign:'middle',
			zIndex:3,
			border:'0.1em solid #ff0000',
			fontFamily: 'Notable',
			fontSize: '1.5em',
			marginLeft:'-0.65em',
			marginTop:'-0.65em',

		} }>{number}</span>
	}
}

PlayerNumber.propTypes = {
  number: PropTypes.number.isRequired
}

export default PlayerNumber;
