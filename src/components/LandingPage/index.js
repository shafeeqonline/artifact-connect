import React, { Component } from 'react';
import PopularCategories from './../../containers/popular-categories';
import Header from './../Header';
import MostInstalledContainer from './../../containers/most-installed-container';
import FrequentPackagesContainer from './../../containers/frequent-packages-container'
import './landing-page.scss';
export default class LandingPage extends Component{
	componentWillMount(){
		this.props.fetchPopularData();
	}
	render(){
		if(this.props.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{
			return(
				<div>
					<Header />
					<PopularCategories />
					{this.props.children}
					<FrequentPackagesContainer />
				</div>
			)
		}

	}
}
