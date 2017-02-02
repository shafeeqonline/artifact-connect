import React, { Component } from 'react';
import './popular-categories.scss'
export default class PopularCategories extends Component{
	render(){
		return(
			<section className='col-md-2 popular-categories-container'>
				<h3 className='popular-heading'>Popular Categories</h3>
				<ul className='popular-categories'>
					{
						this.props.popularCategories.map((data,index) => {
							return(
								<li key={ index }><a>{ data }</a></li>
							);
						})
					}
				</ul>
			</section>
		)
	}
}