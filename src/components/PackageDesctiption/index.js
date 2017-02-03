import React,{Component} from 'react';
import './package-description.scss';
var MarkdownIt  = require('markdown-it'),
md = new MarkdownIt();

export default class PackageDesctiption extends Component{
	componentWillMount(){
		this.props.fetchProjectDescription();
	}
	render(){
		let result ="Loading...";
		if(this.props.data!=null){
			result = md.render(this.props.data);
		}
		
		return(
			<section className='col-md-6 package-description' dangerouslySetInnerHTML={{ __html: result }}>
			</section>)
	}
}