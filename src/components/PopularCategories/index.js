import React, { Component } from 'react';
import './popular-categories.scss'
export default class PopularCategories extends Component{
	render(){
		return(
			<section className='col-md-12 popular-categories-container'>
				<ul className='popular-categories'>
					{
						this.props.popularCategories.map((data,index) => {
							return(
								<li className='popular-list' key={ index }><a>{ data }</a></li>
							);
						})
					}
				</ul>
			</section>
		)
	}
}