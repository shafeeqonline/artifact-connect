import { Result_SUCCESS, Result_FAIL,Search_SUCCESS,Search_FAIL, Handle_FOCUS,Update_INPUT_VALUE,Details_SUCCESS,Details_FAIL,Description_FAIL,Description_SUCCESS} from '../constants/action-types';

export default function searchResultsReducer(state = {
	results:[],
	inprogress:true,
	dataError:false,
	searchResults:[],
	activeIndex: -1,
	defaultInput:'',
	details:{},
	detailsInprogress:true,
	descInprogress:true,
	SearchInprogress:true
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
	    	SearchInprogress:false,
	    	searchResults:action.payload
	    });
	    case Search_FAIL:
	    return Object.assign({},state,{
	    	SearchInprogress:false,
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
	    	detailsInprogress:false,
	    	details:action.payload
	    });
	    case Details_FAIL:
	    return Object.assign({},state,{
	    	detailsInprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	     case Description_SUCCESS:
	    return Object.assign({},state,{
	    	descInprogress:false,
	    	descriptionData:action.payload
	    });
	    case Description_FAIL:
	    return Object.assign({},state,{
	    	descInprogress:false,
	    	dataError:true,
	    	error:action.error
	    });
	  default:
	    return state;
  }
}