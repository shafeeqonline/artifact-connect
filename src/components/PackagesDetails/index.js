import React, { Component } from 'react';
import './package-details.scss'
export default class PackageDetails extends Component{
	
	render(){
		let detail=this.props.detail;
		return(

			<section className='col-md-6'>
				<div className='logo-container'>
				<img src={detail.logo} className='package-logo' alt='package logo'/>
				</div>
				<div className='package-info-container'>
				<h3 className='package-name'><a src='' href='/details'>{detail.p_name}</a></h3>
				<div className='package-description'>{detail.description}</div>
				<div className='package-version'><a src=''>{detail.version}</a> published {detail.date} ago by</div>
				<span>{detail.publisher}</span>
				</div>
			</section>
		);
	}
}
