import React, { Component } from 'react';
import {Link} from 'react-router';
import SearchDropDown from './../SearchDropDown';
import './search-bar.scss';
import debounce from 'lodash.debounce';
let ClickOutHandler = require('react-onclickout');

export default class SearchBar extends Component{
	constructor(props){
		super(props)
		this.searchInputTitle = null;
		this.searchFunction = debounce(this.searchFunction.bind(this),200);
	}
	searchFunction(){
		let value = this.searchInputTitle.value;
		if(value){
			this.props.searchSuggestion(true);
			this.props.updateSearchValue(value);
			this.props.fetchSearchSuggestions(value);
		}
	}	
	onClickOut(){
		this.props.searchSuggestion(false);
	}
	handleKeyDown(e){
		if(e.keyCode === 40){
			this.props.handleDownArrow(this.props.activeIndex+1);
		}
	}
	render(){
		return(
		<div className = 'search-bar'>
			<ClickOutHandler onClickOut={this.onClickOut.bind(this)}>
				<input className = 'search-input' placeholder = 'Search' onChange={this.searchFunction.bind(this)} ref={(el) => {this.searchInputTitle = el;}} onClick = {this.searchFunction.bind(this)} onKeyDown = {this.handleKeyDown.bind(this)}/>
				<Link to='/results'>
					<span className = 'search-icon fa fa-search'></span>
				</Link>
			</ClickOutHandler>
				<SearchDropDown enable={this.props.enable} searchSelected={this.props.searchSelected} searchResults={this.props.searchResults} selectedSearch={this.props.selectedSearch} searchValue={this.props.searchValue} inprogress={this.props.inprogress} handleDownArrow={this.props.handleDownArrow}/>
			
		</div>
		)
	}
}