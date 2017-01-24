import axios from 'axios';
import { Result_SUCCESS, Result_FAIL} from '../constants/action-types';

export default function fetchResults(){
		//AJAX call to fetch project list data
	return function(dispatch){
		axios.get('https://api.myjson.com/bins/m9fv9')
		.then(function (response) {	
			console.log(response)
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Result_SUCCESS,
		        payload: response.data,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Result_FAIL,
		        error: error
		    });
    	});
	};


}