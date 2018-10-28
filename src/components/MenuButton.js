import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuButtonIcon from '../images/Hamburger_icon.svg';

class MenuButton extends Component{
	render(){
		const { click } = this.props;
		return <img
			src={ MenuButtonIcon }
			onClick={ click }
			style={ {
				lineHeight:'1em',
				minWidth:'1em',
				display:'inline-block',
				textAlign:'center',
				verticalAlign:'middle',
			} }
		/>
	}
}

MenuButton.propTypes = {
	click:PropTypes.func.isRequired
}

export default MenuButton;
