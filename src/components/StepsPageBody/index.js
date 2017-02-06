import React, {Component} from 'react';
import StepsToPublish from './../StepsToPublish';
export default class StepsPageBody extends Component{
	render(){
		return(
			<div className='clearfix'>
				<div className='col-md-3'></div>
				<StepsToPublish />
				<div className='col-md-3'></div>
			</div>
		)
	}
}