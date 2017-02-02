import React, { Component } from 'react';
import {Link} from 'react-router';
import './details-side-bar.scss';
export default class DetailsSideBar extends Component{
	render(){
		let publisher = {this.props.publisher}+' published '+{this.props.published};
		let version = 'version : '+{this.props.version}
		return(
			<aside>
				<ul>
					<li>
						<img src = {this.props.logo} />
						<span>{publisher}</span>
					</li>
					<li>{version}</li>
					<li>{this.props.license}</li>
				</ul>
				<div>
					{this.props.collaborators.map((image,index)=>{
						
					})}
				</div>
			</aside>
		)
	}
}