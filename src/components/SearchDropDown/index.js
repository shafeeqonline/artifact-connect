import React, { Component } from 'react';
import {Link} from 'react-router';
import './search-drop-down.scss';
export default class SearchDropDown extends Component{
	constructor(props){
		super(props)
		this.state={
			searchResults:['ieadexa','ieadexa-aem-build','ieadexa-code-quality-configs','ieadexa-collection','ieadexa-engine'],
			select:false
		}
	}
	handleClick(){
		this.setState({select:true})
	}
	render(){
		let display;
		if(this.props.enable && !this.state.select){
			display='display-suggestions';
		}
		else{
			display='disable-suggestions';
		}
		return(
			<div className={display} >
				{this.state.searchResults.map((result,index)=>{
					return (
						<Link to='/details' key={index}><div id={index} onClick={this.handleClick.bind(this)}>{result}</div></Link>
						)
				})}
			</div>
		);
		
	}
}