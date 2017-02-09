import React, { Component } from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import './search-bar.scss';
import debounce from 'lodash.debounce';
import SearchDropDown from './../../containers/search-drop-down-container';
var aql = require('jfrog-aql');
export default class SearchBar extends Component{
	constructor(props){
		super(props)
		this.searchInputTitle = null;
		this.searchFunction = debounce(this.searchFunction.bind(this),200);
	}
	searchFunction(value){
		let input = this.searchInputTitle.value;
		/*if(value){
			this.props.searchSuggestion(true);
			this.props.updateSearchValue(value);
			
		}*/
		/*var username = "shafeeq",
			password = "password",
			auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
		  // config object is used by the Request class
		  aql.config({
		        uri: "http://10.207.16.108:8081/artifactory/api/search/aql",
		        headers: {
		           Authorization: auth
		        }
		     });

		  var aqlQuery = aql.items.find({"name":{"$eq":input}});
    		aql.query(aqlQuery).then((data) => {
        	console.log(data);
    		});*/
				
		
	}	
	onClickOut(){
		this.props.searchSuggestion(false);
	}
	handleKeyDown(e,value){
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
		return(
		<div className = 'search-bar'>
				<input className = 'search-input' placeholder = 'Search' ref={(el) => {this.searchInputTitle = el;}} onClick = {this.searchFunction.bind(this)} onKeyDown = {this.handleKeyDown.bind(this)}/>
				<Link to='/results' className='search-router'>
					<span className = 'search-icon fa fa-search'></span>
				</Link>	
		</div>
		)
	}
}