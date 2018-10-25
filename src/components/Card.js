import React, { Component } from 'react';
import styles from './card.css';

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

class Card extends Component{

	constructor( props ){
		super( props );
		this.state={ owned:false }
	}
	formatLastName( lastName ){
		lastName = lastName.replace( '-', '_' )
		return lastName.toLowerCase();
	}
	render(){
		const { firstName, lastName, number } = this.props;
		const image = require(`../images/series/timhortons-upperdeck-2018/${number}_${this.formatLastName( lastName )}_front.jpg`);
		return <div style={{
				display:'flex',
				flexDirection:'row',
				padding:'1.5em'
			}}>
			<PlayerNumber number={number} />
			{/*<PlayerMask />*/}
			<img
				src={ image }
				style={ { filter:`grayscale( ${this.state.owned ? '0%' : '100%'} )`, zIndex:1, width:'12em', height:'16.8em' } }
				alt={ `Card #:${number} Player: ${firstName} ${lastName}` }
				onClick={ e => { this.setState( { owned: !this.state.owned } ) } }
			/></div>;
	}
}


export default Card;
