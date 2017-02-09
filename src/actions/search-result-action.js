import axios from 'axios';
import { Result_SUCCESS, Result_FAIL, Search_SUCCESS, Search_FAIL, Details_SUCCESS, Details_FAIL, Description_SUCCESS, Description_FAIL} from '../constants/action-types';

export function fetchResults(){
		//AJAX call to fetch project list data
	return function(dispatch){
		axios.get('https://api.myjson.com/bins/m9fv9')
		.then(function (response) {	
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

export function fetchSearchSuggestions(searchKey){
	/*return function(dispatch){*/
		/*let url = 'https://ac.cnstrc.com/autocomplete/'+searchKey+'?autocomplete_key=CD06z4gVeqSXRiDL2ZNK&query='+searchKey;
		axios.get(url)
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Search_SUCCESS,
		        payload: response.data.sections.packages,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Search_FAIL,
		        error: error
		    });
    	});*/
    	
	/*};*/

}

export function fetchPackageDetails(){
	return function(dispatch){
		axios.get('https://api.myjson.com/bins/vu825')
		.then(function (response) {	
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Details_SUCCESS,
		        payload: response.data.packagedetails,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Details_FAIL,
		        error: error
		    });
    	});
	};

}

export function fetchProjectDescription(){
	return function(dispatch){
		let url = 'http://10.207.16.108:8081/artifactory/npm-local/elevator/-/elevator-1.0.0.tgz%21/package/README.md';
		
		axios.get(url)
		.then(function (response) {	
			console.log(response);
		    // Dispatch the success action with the payload
    		dispatch({
		        type: Description_SUCCESS,
		        payload: response.data,
        	});
    	}.bind(this))
	  	.catch(function (error) {
	    // Dispatch the error action with error information
		    dispatch({
		        type: Description_FAIL,
		        error: error
		    });
    	});
	};
}