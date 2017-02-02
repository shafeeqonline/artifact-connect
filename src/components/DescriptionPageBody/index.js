import React, { Component } from 'react';
import PackageDescription from './../../containers/package-description-container';

export default class DescriptionPageBody extends Component{
	render(){
		return(
			<div>
				<div className='col-md-2'></div>
				<PackageDescription />
				<div className='col-md-3'></div>
			</div>
		)
	}
}
