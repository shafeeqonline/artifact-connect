import React, { Component } from 'react';
import PopularCategories from './../../containers/popular-categories';
import Header from './../Header';
import PageFooter from './../PageFooter';
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
					{this.props.children}
					<PageFooter />
				</div>
			)
		}

	}
}
