import { Result_SUCCESS, Result_FAIL,Search_SUCCESS,Search_FAIL, Handle_FOCUS,Update_INPUT_VALUE,Details_SUCCESS,Details_FAIL} from '../constants/action-types';

export default function frequentPackageDetailReducer(state = {
	results:[],
	inprogress:true,
	dataError:false,
	searchResults:[],
	activeIndex: -1,
	defaultInput:'',
	details:{}
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
	    	activeIndex:action.activeIndex,
	    	defaultInput:action.defaultInput
	    });
	    case Details_SUCCESS:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	details:action.payload
	    });
	    case Details_FAIL:
	    return Object.assign({},state,{
	    	inprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	  default:
	    return state;
  }
}