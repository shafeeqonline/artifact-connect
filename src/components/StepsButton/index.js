import React, { Component } from 'react';
import {Link} from 'react-router';
import { Button, Icon } from 'react-materialize';
import './steps-button.scss'
export default class StepsButton extends Component{
	render(){
		return(
			<Link to='/steps-to-publish'>
				<Button className='steps-button' waves='light'>Steps to Publish<Icon left>info</Icon></Button>
			</Link>	
		)
	}
}