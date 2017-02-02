import React, { Component } from 'react';
import PopularCategories from './../../containers/popular-categories';
import Header from './../Header';
import MostInstalledContainer from './../../containers/most-installed-container';
import FrequentPackagesContainer from './../../containers/frequent-packages-container';

export default class LandingPageBody extends Component{
	render(){
		if(this.props.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{
			return(
				<div>
					<PopularCategories />
					<MostInstalledContainer />
					<FrequentPackagesContainer />
				</div>
			)
		}

	}
}
