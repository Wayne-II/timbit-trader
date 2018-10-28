import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuButton from './MenuButton';
import MenuContent from './MenuContent';

class Menu extends Component{
	constructor( props ){
		super( props );
		this.state = {
			activate_menu:false,
			display_menu_fill:'blue'
		};
	}

	displayMenuClick = e => {
		const { activate_menu } = this.state;
		this.setState( { activate_menu: !activate_menu } )
	}

	render(){
		const { items, display_menu } = this.props;
		const { activate_menu } = this.state;

		return <div style={ {
			position:'absolute',
			marginLeft:'-1em',
			marginTop:'1em',
			zIndex:3,
		 } }>
			<MenuContent
				display={ activate_menu && display_menu }
				items={ items }
			/>
			<MenuButton click={ this.displayMenuClick }/>
		</div>
	}
}

Menu.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			click:PropTypes.func,
			label:PropTypes.oneOf( [
				PropTypes.string,
				PropTypes.element
			] )
		})
	).isRequired
}

export default Menu;
