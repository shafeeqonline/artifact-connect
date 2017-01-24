import React, { Component } from 'react';
import './frequent-packages.scss'
export default class FrequentPackages extends Component{
	packageComponent(){
		var sizes = [4,5,4,3,1,5,5,4,4,5,2,2,1,3,1,4,5,1,5,1,3,2,1,2,4,1,3,2,5,4,3,2,3,5,1,1,2,3,2,1,4,3,4,5,3,5,3,4,2,2];
		return (this.props.frequent.map((value,index)=>{
					let textSize="text-size-"+ sizes[index];
					return (<a className={textSize} key = {index}>{value}</a>);
				})
		);
	}
	render(){
		
			let packages= this.packageComponent();
			return (
				<section className='popular-tag-container col-md-3'>
					
						<h3 className='popular-tags-header'>Popluar Tags</h3>
						<div className='popular-tags'>
						{packages}
						</div>	
				</section>);
	
		
	}
}



