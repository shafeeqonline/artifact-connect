import React, { Component } from 'react';

import './user-details.scss';

var userName, avatar;
export default class SearchBar extends Component{
	render(){
		if(this.props.user){
			userName = this.props.user.name;
			avatar = this.props.user.avatar;
		}
		else{
			userName = 'sign up or log in';
			avatar = 'src/components/UserDetails/default.png';
		}
		return(
			<div className = 'user-details'>
				<span className = 'user-name'>{userName}</span>
				<img src = {avatar} className = 'avatar'/>
			</div>
		)
	}
}

SearchBar.propTypes = {
	user : React.PropTypes.shape({
        name:React.PropTypes.string,
        avatar:React.PropTypes.string
    })
}