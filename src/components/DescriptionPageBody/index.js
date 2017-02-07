import React, { Component } from 'react';
import PackageDescription from './../../containers/package-description-container';
import DetailsSideBar from './../../containers/details-side-bar'
export default class DescriptionPageBody extends Component{
	render(){
			return(
				<div className='clearfix'>
					<div className='col-md-2'></div>
					<PackageDescription />
					<DetailsSideBar/>
				</div>
			)
	}
}
