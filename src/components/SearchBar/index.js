import React, { Component } from 'react';

import './search-bar.scss';

export default class SearchBar extends Component{
	render(){
		return(
		<div className = 'search-bar'>
			<input className = 'search-input' placeholder = 'Search'/>
			<span className = 'search-icon fa fa-search'></span>
		</div>
		)
	}
}