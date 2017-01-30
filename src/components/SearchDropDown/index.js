import React, { Component } from 'react';
import {Link} from 'react-router';
import './search-drop-down.scss';
export default class SearchDropDown extends Component{
	
	handleClick(){
		this.props.selectedSearch(true,false);
	}
	displaySearchResults(result,value){
		
		
			let subStrings = result.split(value);
			let length = subStrings.length;
				if(subStrings[0]==''){
					return(
						subStrings.map((subString,index)=>{
							if(subString){return(<span key={index}><span>{value}</span><strong className='sub-string'>{subString}</strong></span>)}
							})
						) 
			
				}
				else{
					return(
						subStrings.map((subString,index)=>{
							if((length-1)==index){
								return (<strong className='sub-string'>{subString}</strong>)
							}
							else{
								return(<span key={index}><strong className='sub-string'>{subString}</strong><span>{value}</span></span>)
							}
						})
					)
				}
			
		
	}
	render(){
		let display;
		let value=this.props.searchValue;
		if(this.props.enable && !this.props.searchSelected){
			display='display-suggestions';
		}
		else{
			display='disable-suggestions';
		}

		return(
			<div className={display} >
				{this.props.searchResults.map((result,index)=>{
					if(result.indexOf(value) != -1 && value != ''){
						return (
						<Link to='/details' key={index} className='a'>
						 	<div>
							{this.displaySearchResults(result,value)}
							</div>
						</Link>
						);
					}
					
					
				})}
			</div>
		);
		
	}
}