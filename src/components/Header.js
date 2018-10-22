import React, { Component } from 'react';
import './header.css';
const styles = {
	container:{
		backgroundColor:'#d42000',
		display:'flex',
		alignContent:'center',
		justifyContent:'space-between',
		color:'#eeeeee',
		boxShadow: '0 15px 60px #000000',
		padding:'1em'
	},
	heading:{
		fontFamily:'CoffeeService',
		fontWeight:1,
		display:'inline-block',
		fontSize:'3em',
		margin:'0px',
		textAlign:'center',
		verticalAlign:'middle',
		lineHeight:'1em',
		height:'0.8em',
		alignSelf:'center',
	},
	button:{
		alignSelf:'center'
	}
}



class Header extends Component{

	constructor( props ){
		super(props);

	}

	componentDidMount( nextProps, nextState){

	}
	render(){

		return <div style={ styles.container } id="header">
				<h1 style={ styles.heading }>Tim BitTrader</h1>
				<a onClick={ e => { console.log( 'asdf' ) } } style={ styles.button }>Trade Now</a>
			</div>;
	}
}
export default Header;
