import React,{Component} from 'react';
import './package-description.scss'
export default class PackageDesctiption extends Component{
	render(){
		return(
			<section className='col-md-7 package-description'>
				<h1>IEADExA</h1>
				<div>IEADExA is the core dependency for any project to start with the ieadexa. This install the ieadexa core and ieadexa webpack to get the application up and running.</div>
				<h3>How to run Shrinkwrap</h3>
				<div>As a rule, you should run <span className='code'>npm i</span> at the same level as you run shrinkwrap.</div>
				<div>Peer dependencies in package.json throws error "peer invalid: ....." while we <span className='code'>run npm shrinkwrap</span>. As a fix, you need to run <span className='code'>npm run shrinkwrap</span>. This deletes the peerDependency object from package.json and the process would be successful.</div>
			</section>)
	}
}