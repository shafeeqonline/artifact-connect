import React, { Component } from 'react';
import {Link} from 'react-router';
import './search-bar.scss';

export default class SearchBar extends Component{
	render(){
		return(
		<div className = 'search-bar'>
			<input className = 'search-input' placeholder = 'Search'/>
			<Link to='/results'>
				<span className = 'search-icon fa fa-search'></span>
			</Link>
		</div>
		)
	}
}