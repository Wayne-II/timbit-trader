import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuContent extends Component{
	render(){
		const {
			display,
			items
		 } = this.props;
		return <ul
			style={ {
				display: display ? 'flex' : 'none',
				flexDirection:'column',
				position:'absolute',
				justifyContent:'flex-start',
				marginLeft:'2.5em',
				whiteSpace:'nowrap',
				textAlign:'left',
				padding:0,
				marginTop:0,
				listStyleType:'none',
				backgroundColor:'rgba(0,0,0,0.3)'
			} }
		>
			{
				items.map( item =>  {
					return <li
						style={ {
							cursor: 'pointer',
							display:'block'
						} }
						onClick={ item.click }
						key={ item.label }>
							{ item.label }
						</li>
				} )
			}
		</ul>
	}
}

MenuContent.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			click:PropTypes.func,
			label:PropTypes.oneOf( [
				PropTypes.string,
				PropTypes.element
			] )
		})
	).isRequired,
	display: PropTypes.bool.isRequired
}

MenuContent.defaultProps = {
	items:[]
}

export default MenuContent;
