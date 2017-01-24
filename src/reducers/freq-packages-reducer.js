import { Request_FULFILLED_FREQ, Request_REJECTED_FREQ } from '../constants/action-types';

export default function frequentPackageDetailReducer(state = {
	details:{},
	inprogress:true,
	dataError:false
}, action) {
  switch (action.type) {
	  case Request_FULFILLED_FREQ:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	details:action.payload
	    });
	  case Request_REJECTED_FREQ:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	  default:
	    return state;
  }
}