import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import LandingPageContainer from './containers/landing-page-container'
import {Provider} from 'react-redux';
import { configureStore } from './store/configureStore';
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<LandingPageContainer/>
	</Provider>,document.getElementById('root')
);
