/*3rd-party libraries*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

/*styles*/
import styles from './card.css';

/*local components*/
import PlayerNumber from './PlayerNumber';
import Menu from './Menu';

/*actions*/
const setOwnership = o => {
	return {
		type:'SET_CARD_OWNERSHIP',
		payload:o
	}
}
const setAvailability = o => {
	return {
		type:'SET_CARD_AVAILABILITY',
		payload:o
	}
}

class Card extends Component{

	constructor( props ){
		super( props );
		this.state={
			owned:false,
			display_menu:false
		}
	}
	formatLastName( lastName ){
		lastName = lastName.replace( '-', '_' )
		return lastName.toLowerCase();
	}

	getMenuItems(){
		const { owned } = this.state;
		const { setOwnership, setAvailability, number } = this.props;
		return [
			{ click: e => {
					/*
					TODO: make this so it uniquely identifies a series and card
					*/
					setOwnership( { owned:!owned, id:number } )
				},
				label: `Mark ${ owned ? 'Uno' : 'O' }wned`
			},
			{ click: e => {
					/*
					TODO: make this so it uniquely identifies a series and card
					*/
					setAvailability( { availability:'trade', id:number } )
				},
				label: `Mark For Trade`
			}
		]
	}

	render(){
		const { firstName, lastName, number } = this.props;
		const { display_menu } = this.state;
		const image = require(`../images/series/timhortons-upperdeck-2018/${number}_${this.formatLastName( lastName )}_front.jpg`);
		return <div style={{
				display:'flex',
				flexDirection:'row',
				padding:'1.5em'
			}}
			onMouseEnter={ e => this.setState( { display_menu: true } ) }
			onMouseLeave={ e => this.setState( { display_menu: false } ) }
			>
			<PlayerNumber number={number} />
			<Menu items={ this.getMenuItems() } display_menu={ display_menu }/>
			<img
				src={ image }
				style={ { filter:`grayscale( ${this.state.owned ? '0%' : '100%'} )`, zIndex:1, width:'12em', height:'16.8em' } }
				alt={ `Card #:${number} Player: ${firstName} ${lastName}` }
				onClick={ e => { this.setState( { owned: !this.state.owned } ) } }
			/></div>;
	}
}

Card.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired
}

const mapDispatchToProps = dispatch => {
	return {
		setOwnership: bindActionCreators( setOwnership, dispatch ),
		setAvailability: bindActionCreators( setAvailability, dispatch )
	}
}

Card = connect( null, mapDispatchToProps )( Card );

export default Card;
