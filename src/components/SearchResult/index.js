import React, { Component } from 'react';
import './search-results.scss';
export default class SearchResult extends Component{
	componentWillMount() {
		this.props.fetchResults();
	}
	getResults(){
		console.log(this.props.searchResult);
		if(this.props.searchResult.results){
			return (this.props.searchResult.results.map((data,index)=>{
					return (<li className='result-list' key = {index}>
								<div className='search-logo-container'>
									<img src={data.logo} className='search-package-logo' alt='package logo'/>
								</div>
								<h3 className='search-result-title'>
									<a className='title'>{data.title}</a>
									<a className='search-publisher'> {data.publisher}</a>
								</h3>
								<p className='result-description'>{data.description}</p>
								<span className='result-version'>{data.version}</span>
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
				<div className='col-md-7 search-result'>
					<h4>3 PACKAGES FOUND</h4>
					<div>for <b>'ieadexa'</b></div>
					<ul className='results'>
						{results}
					</ul>
				</div>
			)
		}
	}
}