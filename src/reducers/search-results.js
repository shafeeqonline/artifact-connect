import { Result_SUCCESS, Result_FAIL,Search_SUCCESS,Search_FAIL, Handle_FOCUS} from '../constants/action-types';

export default function frequentPackageDetailReducer(state = {
	results:[],
	inprogress:true,
	dataError:false,
	searchResults:[],
	activeIndex: -1
}, action) {
  switch (action.type) {
	  case Result_SUCCESS:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	results:action.payload
	    });
	  case Result_FAIL:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	    case Search_SUCCESS:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	searchResults:action.payload
	    });
	    case Search_FAIL:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	    case Handle_FOCUS:
	    return Object.assign({},state,{
	    	activeIndex:action.activeIndex
	    });
	  default:
	    return state;
  }
}