import React, { Component } from 'react';
import playersFile from '../2018players.txt';
import Card from './Card';

const style = {
	cardList:{
		display:'flex',
		flexDirection:'row',
		flexWrap:'wrap',
		justifyContent:'space-evenly',
	}
}

class CardList extends Component{

	constructor( props ){
		super(props);
		this.state={ playersState:{} }
	}

	componentDidMount( nextProps, nextState){
		fetch( playersFile )
			.then( response => response.text() )
			.then( playersData => {
					const playersState = playersData.split( '\n' )
						.reduce( ( playersState, playerData ) => {
						const playerSplit = playerData.split( ' ' );
						playersState[ playerSplit[ 0 ] ] = {
							firstName:playerSplit[ 1 ],
							lastName:playerSplit[ 2 ]
						}
						return playersState;
					}, {} );
				this.setState( { playersState } );
			} );

	}
	render(){
		const { playersState } = this.state;
		return <div style={ style.cardList } >
				{
					Object.keys( playersState ).map( cardNumber => {
						const playerState = playersState[ cardNumber ];
						return <Card
							number={ cardNumber }
							firstName={ playerState.firstName }
							lastName={ playerState.lastName }
						/>;
					})
				}
			</div>;
	}
}
export default CardList;
