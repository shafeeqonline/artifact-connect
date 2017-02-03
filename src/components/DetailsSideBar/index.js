import React, { Component } from 'react';
import {Link} from 'react-router';
import { Table } from 'react-materialize';
import './details-side-bar.scss';
export default class DetailsSideBar extends Component{
	componentWillMount(){
		this.props.fetchPackageDetails();
	}
	render(){
		let publisher = this.props.packageDetails.publisher;
		let published = this.props.packageDetails.published;
		let version = this.props.packageDetails.version
		let repoLink = 'https://'+this.props.packageDetails.github;
		if(this.props.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{
			
			return(
			<aside className='col-md-4 package-details-side'>
				<ul className='details-list'>
					<li>Current Version : {version}</li>
					<li className='github-repo-link'><a href={repoLink}>{this.props.packageDetails.github}</a></li>
					<li>{this.props.packageDetails.license}</li>
				</ul>
				<div className='details'>
					<h4>Collaborators:</h4>

					{this.props.packageDetails.collaborators.map((src,index)=>{
						return(
						<figure className = 'details-logo-container'>
							<img className = 'publisher-logo' src={src} alt ={this.props.packageDetails.publisher}/>
						</figure>
						)
					})}
				</div>
				<div className='details'>
					<h4>Version History</h4>
					<Table stripped centered className='version-history'>
					<thead>
						<tr><th>Version</th><th>Date</th></tr>
					</thead>
					<tbody>
						{this.props.packageDetails.versionHistory.reverse().map((verObj,index)=>{
							return(
								<tr><td>{verObj.version}</td><td>{verObj.release}</td></tr>
							)
						})}
					</tbody>
					</Table>
				</div>
			</aside>
		)
		}
		
	}
}