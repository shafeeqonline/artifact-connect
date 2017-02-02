import React, { Component } from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
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
		let numOptions = this.props.searchResults.length;
		switch(e.keyCode){

	      case 38: // up arrow
	        if (this.props.activeIndex>0) {
	          this.props.handleDownArrow( this.props.activeIndex-1,this.props.searchResults[this.props.activeIndex].value);
	        } else {
	          this.props.handleDownArrow(numOptions-1,this.props.searchResults[this.props.activeIndex].value);
	        }
	        break;

	      case 40: // down arrow
	      	let activeIndex=(this.props.activeIndex+1) % numOptions;
	        this.props.handleDownArrow(activeIndex,this.props.searchResults[activeIndex].value);
	        break;
	        case 13:
	        browserHistory.push('/details')
	        this.props.searchSuggestion(false);
	        break;
	    }
	}
	render(){
		console.log(this.props.defaultInput)
		return(
		<div className = 'search-bar'>
			<ClickOutHandler onClickOut={this.onClickOut.bind(this)}>
				<input className = 'search-input' placeholder = 'Search' onChange={this.searchFunction.bind(this)} ref={(el) => {this.searchInputTitle = el;}} onClick = {this.searchFunction.bind(this)} onKeyDown = {this.handleKeyDown.bind(this)} defaultvalue={this.props.defaultInput}/>
				<Link to='/results'>
					<span className = 'search-icon fa fa-search'></span>
				</Link>
			</ClickOutHandler>
				<SearchDropDown enable={this.props.enable} searchSelected={this.props.searchSelected} searchResults={this.props.searchResults} selectedSearch={this.props.selectedSearch} searchValue={this.props.searchValue} inprogress={this.props.inprogress} handleDownArrow={this.props.handleDownArrow} activeIndex={this.props.activeIndex}/>
			
		</div>
		)
	}
}