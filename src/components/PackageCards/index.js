import React, { Component } from 'react';
import { Card,CardTitle,Row } from 'react-materialize';
import './package-cards.scss';
export default class PackageCards extends Component{

	render(){
		return(
			<div>
			<div className='col-md-12'>
				<h3>Most Installed Packages</h3>
			</div>
			<div className='col-md-12 package-cards'>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>
				<Card header={<CardTitle image={"src/components/SearchResult/iea-logo.jpg"} waves='light'/>}
				    title="Card Title">
				    <p>ieadexa</p>
				</Card>

			</div>
			</div>
		)
	}
}