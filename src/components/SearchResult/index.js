import React, { Component } from 'react';
import {Link} from 'react-router';
import './search-results.scss';
import PopularCategories from './../../containers/popular-categories';
import FrequentPackagesContainer from './../../containers/frequent-packages-container';
export default class SearchResult extends Component{
	componentWillMount() {
		this.props.fetchResults();
	}
	getResults(){
		if(this.props.searchResult.results){
			return (this.props.searchResult.results.map((data,index)=>{
					return (<li className='result-list' key = {index}>
								<div className='search-logo-container'>
									<img src={data.logo} className='search-package-logo' alt='package logo'/>
								</div>
								<h3 className='search-result-title'>
									<Link to='/details' className='title'>{data.title}</Link>
									<a className='search-publisher'> {data.publisher}</a>
								</h3>
								<p className='result-description'>{data.description}</p>
								<span className='result-version'>v{data.version}</span>
							</li>
					);
				})
			);
		}
		else{
			return (<div></div>)
		}
		
	}
	render(){
		let results = this.getResults();
		if(this.props.searchResult.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{
			return(
				<div className='clearfix'>
					<div className='col-md-3'>
						<PopularCategories />
						<FrequentPackagesContainer />
					</div>
					<div className='col-md-9 search-result'>
						<h4>3 PACKAGES FOUND</h4>
						<div>for <b>'ieadexa'</b></div>
						<ul className='results'>
							{results}
						</ul>
					</div>
					
				</div>
			)
		}
	}
}