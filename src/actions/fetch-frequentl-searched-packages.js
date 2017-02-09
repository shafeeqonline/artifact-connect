import axios from 'axios';
import { Request_FULFILLED_FREQ, Request_REJECTED_FREQ} from '../constants/action-types';

export default function fetchPopularData(){
		//AJAX call to fetch project list data
	return function(dispatch){
		axios.get('https://api.myjson.com/bins/tm8l1')
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Request_FULFILLED_FREQ,
		        payload: response.data,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Request_REJECTED_FREQ,
		        error: error
		    });
    	});
	};


}