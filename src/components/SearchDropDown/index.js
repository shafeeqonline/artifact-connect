import React, { Component } from 'react';
import {Link} from 'react-router';
import './search-drop-down.scss';
var cx = require('classnames');
export default class SearchDropDown extends Component{
	
	handleClick(){
		this.props.selectedSearch(true,false);
	}
	displaySearchResults(result,value){
		
		
			let subStrings = result.split(value);
			let length = subStrings.length;
				if(subStrings[0]==''){
					if(subStrings[1]==''){
						return(<span>{value}</span>)
					}
					else{
						return(
						subStrings.map((subString,index)=>{
							if(subString){return(<span key={index}><span>{value}</span><strong className='sub-string'>{subString}</strong></span>)}
							})
						) 
					}
			
				}
				else{
					return(
						subStrings.map((subString,index)=>{
							if((length-1)==index){
								return (<strong key={index} className='sub-string'>{subString}</strong>)
							}
							else{
								return(<span key={index}><strong className='sub-string'>{subString}</strong><span>{value}</span></span>)
							}
						})
					)
				}
			
		
	}
	handleKeyDown(e,numOptions){
		switch(e.keyCode){

	      case 38: // up arrow
	        if (this.props.activeIndex>0) {
	          this.props.handleDownArrow( this.props.activeIndex-1);
	        } else {
	          this.props.handleDownArrow(numOptions-1);
	        }
	        break;

	      case 40: // down arrow
	        this.props.handleDownArrow((this.props.activeIndex+1) % numOptions);
	        break;
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
		let numOptions = this.props.searchResults.length;
		if(numOptions>0){
				return(
					<div className={display} >
						{this.props.searchResults.map((result,index)=>{
							let classes = cx({active: this.props.activeIndex===index});
							if(value != ''){
								return (
								<Link to='/details' key={index} className='a'>
								 	<div className = {classes} onKeyDown={this.handleKeyDown.bind(this,numOptions)}>
									{this.displaySearchResults(result.value,value)}
									</div>
								</Link>
								);
							}	
						})}
					</div>
				);
			}
			else if(!this.props.inprogress && numOptions === 0){
				return(
					<div className={display} >
						No results found
					</div>
				);
			}
			else{
				return <div></div>
			}
	}
}