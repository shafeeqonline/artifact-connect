import React, {Component} from 'react';
import './accordion.scss';
export default class Accordion extends Component{
	constructor(props){
		super(props)
		this.state = {
			active : [false,false]
		}
	}
	toggle(x){
		if(x===1){
			this.setState({
				active:[!this.state.active[0],false]
			})
		}
		else if(x===2){
			this.setState({
				active:[false,!this.state.active[1]]
			})
		}
		
	}
	render(){
		let codeItem = JSON.stringify({
  "name": "artifact-connect",
  "version": "1.0.0",
  "description": "Connects multiple module repositories for a onestop platfom.",
  "scripts": {
    "clean": "rimraf dist",
    "build:webpack": "cross-env NODE_ENV=production webpack --config webpack.config.prod.js",
    "build": "npm run clean && npm run build:webpack",
    "dev": "cross-env NODE_ENV=development npm start",
    "start": "node devServer.js",
    "lint": "eslint src"
  },
  "devDependencies": {
    "autoprefixer": "^6.3.1",
    "axios": "^0.15.3",
    "babel-core": "^6.3.15",
    "babel-eslint": "^5.0.0-beta4",
    "babel-loader": "^6.2.0",
    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13",
    "babel-preset-react-hmre": "^1.0.0",
    "classnames": "^2.2.5",
    "webpack-dev-middleware": "^1.4.0",
    "webpack-hot-middleware": "^2.6.0"
  },
  "dependencies": {
    "react": "^0.14.3",
    "react-dom": "^0.14.3",
    "react-redux": "^4.1.1",
    "react-router": "^3.0.0",
    "redux": "^3.6.0",
    "redux-thunk": "^1.0.3",
    "webpack-dashboard": "^0.2.0"
  }
}, null, 4)

		return(
			<div className='accordion'>
			<section>
				<h3 className='accordion-header' onClick={this.toggle.bind(this,1)}>MVN</h3>
				<div className={'accordion-content '+(this.state.active[0]?'display':'hide')}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla ligula non dictum mattis. Cras porttitor porttitor tortor, a consectetur ipsum sollicitudin nec. Etiam sollicitudin eros ac enim mattis, sed laoreet turpis pulvinar. Curabitur elementum dolor sit amet lacus varius tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget ex venenatis, suscipit velit ut, efficitur urna. Fusce in sagittis enim, non pellentesque leo. Praesent non mauris nec nulla lobortis semper.
Curabitur iaculis sem vel magna faucibus, at consequat erat dignissim. In porta orci nibh, eget laoreet lacus ultrices vitae. Integer et euismod ex. Vestibulum at consequat nibh, non pretium est. Integer dignissim risus quis tellus fringilla tincidunt. Suspendisse ut sapien sed massa scelerisque dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec venenatis nunc sit amet ante ornare, in porttitor ante porttitor. Maecenas vitae libero eros. Aliquam erat volutpat. Vestibulum quis dignissim turpis, vitae porta sapien. In consequat sit amet dui sed venenatis. Duis ut pharetra elit.</p>
				<pre><code>{codeItem}</code></pre>
				</div>
			</section>
			<section>
				<h3 className='accordion-header' onClick={this.toggle.bind(this,2)}>NPM</h3>
				<div className={'accordion-content '+(this.state.active[1]?'display':'hide')}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla ligula non dictum mattis. Cras porttitor porttitor tortor, a consectetur ipsum sollicitudin nec. Etiam sollicitudin eros ac enim mattis, sed laoreet turpis pulvinar. Curabitur elementum dolor sit amet lacus varius tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget ex venenatis, suscipit velit ut, efficitur urna. Fusce in sagittis enim, non pellentesque leo. Praesent non mauris nec nulla lobortis semper.
Curabitur iaculis sem vel magna faucibus, at consequat erat dignissim. In porta orci nibh, eget laoreet lacus ultrices vitae. Integer et euismod ex. Vestibulum at consequat nibh, non pretium est. Integer dignissim risus quis tellus fringilla tincidunt. Suspendisse ut sapien sed massa scelerisque dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec venenatis nunc sit amet ante ornare, in porttitor ante porttitor. Maecenas vitae libero eros. Aliquam erat volutpat. Vestibulum quis dignissim turpis, vitae porta sapien. In consequat sit amet dui sed venenatis. Duis ut pharetra elit.</p>
				<pre><code>{codeItem}</code></pre>
				</div>
			</section>
			</div>
		)
	}
}