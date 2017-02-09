import React, { Component } from 'react';
import PopularCategories from './../../containers/popular-categories';
import Carousel from './../Carousel';
import PackageCards from './../PackageCards';
import FrequentPackagesContainer from './../../containers/frequent-packages-container';

export default class LandingPageBody extends Component{
	render(){
		if(this.props.inprogress){
			return <div className='loader'>Loading...</div>
		}
		else{
			return(
				<div className="clearfix">
					<div className='col-md-2'>
						<PopularCategories />
						<FrequentPackagesContainer />
					</div>
					<div className='col-md-10'>
						<Carousel />
						<PackageCards />
					</div>
				</div>
			)
		}

	}
}
