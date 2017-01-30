import React, { Component } from 'react';
import {Link} from 'react-router';
import SearchDropDown from './../SearchDropDown';
import './search-bar.scss';
let ClickOutHandler = require('react-onclickout');

export default class SearchBar extends Component{
	
	changeDisplay(e){
		this.props.searchSuggestion(true);
		let value = e.target.value;
		this.props.updateSearchValue(value);
		
	}	
	onClickOut(){
		this.props.searchSuggestion(false);
	}
	render(){
		return(
		<div className = 'search-bar'>
			<ClickOutHandler onClickOut={this.onClickOut.bind(this)}>
				<input className = 'search-input' placeholder = 'Search' onChange={this.changeDisplay.bind(this)}/>
				<Link to='/results'>
					<span className = 'search-icon fa fa-search'></span>
				</Link>
			</ClickOutHandler>
				<SearchDropDown enable={this.props.enable} searchSelected={this.props.searchSelected} searchResults={this.props.searchResults} selectedSearch={this.props.selectedSearch} searchValue={this.props.searchValue}/>
			
		</div>
		)
	}
}