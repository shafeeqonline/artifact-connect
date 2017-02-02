import React, { Component } from 'react';
import {Link} from 'react-router';
import './details-side-bar.scss';
export default class DetailsSideBar extends Component{
	componentWillMount(){
		this.props.fetchPackageDetails();
	}
	render(){
		console.log('here');
		console.log(this.props.packageDetails.versionHistory);
		let publisher = this.props.packageDetails.publisher+' published '+this.props.packageDetails.published;
		let version = 'version : '+this.props.packageDetails.version
		return(
			<aside className='col-md-3'>
				<ul className='details-list'>
					<li>
						<figure className = 'details-logo-container'>
						<img className = 'publisher-logo' src = {this.props.packageDetails.logo} alt={this.props.packageDetails.publisher}/>
						</figure>
						<span>{publisher}</span>
					</li>
					<li>{version}</li>
					<li><a>{this.props.packageDetails.github}</a></li>
					<li>{this.props.packageDetails.license}</li>
				</ul>
				<div className='details-side-bar'>
					<h4>Collaborators:</h4>

					{this.props.packageDetails.collaborators.map((src,index)=>{
						return(
						<figure className = 'details-logo-container'>
							<img className = 'publisher-logo' src={src} alt ={this.props.packageDetails.publisher}/>
						</figure>
						)
					})}
				</div>
				<div className='details-side-bar'>
					<h4>Version History</h4>
					<table className='version-history'>
						<tr><th>Version</th><th>Date</th></tr>
						{this.props.packageDetails.versionHistory.map((verObj,index)=>{
							return(
								<tr><td>{verObj.version}</td><td>{verObj.release}</td></tr>
							)
						})}
					</table>
				</div>
			</aside>
		)
	}
}