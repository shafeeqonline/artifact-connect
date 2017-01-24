import React, { Component } from 'react';

import './logo.scss';
/*var logo = require('./logo.png');*/
export default class Logo extends Component{
	render(){
		return(
		<div className = 'logo'>
			<img src='src/components/Logo/logo.png' alt='' className='logo-img'/>
		</div>
		)
	}
}