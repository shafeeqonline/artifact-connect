import { Request_FULFILLED_FREQ, Request_REJECTED_FREQ,TOOGLING_SEARCH_SUGGESTIONS,TOOGLING_SEARCH_SELECTED,UPDATE_SEARCH_VALUE } from '../constants/action-types';

export default function frequentPackageDetailReducer(state = {
	details:{},
	inprogress:true,
	dataError:false,
	enable:false,
	searchSelected:false,
	searchValue:''
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
	    case TOOGLING_SEARCH_SUGGESTIONS:
	    return Object.assign({},state,{
	    	enable:action.enable
	    	
	    });
	    case TOOGLING_SEARCH_SELECTED:
	    return Object.assign({},state,{
	    	searchSelected:action.searchSelected,
	    	enable:action.enable
	    });
	    case UPDATE_SEARCH_VALUE:
	    return Object.assign({},state,{
	    	searchValue:action.searchValue
	    });
	  default:
	    return state;
  }
}