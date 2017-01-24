import React, { Component } from 'react';
import {Link} from 'react-router';
import SearchDropDown from './../SearchDropDown';
import './search-bar.scss';
let ClickOutHandler = require('react-onclickout');

export default class SearchBar extends Component{
	constructor(props){
		super(props)
		this.state={enable:false};
	}
	changeDisplay(e){
		this.setState({enable:true});
	}
	onClickOut(){
		this.setState({enable:false});
	}
	render(){
		return(
		<div className = 'search-bar'>
			<input className = 'search-input' placeholder = 'Search' onChange={this.changeDisplay.bind(this)}/>
			<Link to='/results'>
				<span className = 'search-icon fa fa-search'></span>
			</Link>
			<ClickOutHandler onClickOut={this.onClickOut.bind(this)}>
			<SearchDropDown enable={this.state.enable} />
			</ClickOutHandler>
		</div>
		)
	}
}