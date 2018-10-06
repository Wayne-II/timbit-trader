import React, { Component } from 'react';


class Card extends Component{

	formatLastName( lastName ){
		lastName = lastName.replace( '-', '_' )
			
		console.log( lastName );
		return lastName.toLowerCase();
	}
	render(){
		const { firstName, lastName, number } = this.props;
		const image = require(`../images/cards/${number}_${this.formatLastName( lastName )}_front.jpg`);
		console.log( number )
		return <div style={{display:'inline'}}>{number}<img 
				src={ image }
				style={ { width:'12em' } }
				alt={ `Card #:${number} Player: ${firstName} ${lastName}` }
			/></div>;
	}
}


export default Card;
