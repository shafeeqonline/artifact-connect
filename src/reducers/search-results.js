import { Result_SUCCESS, Result_FAIL} from '../constants/action-types';

export default function frequentPackageDetailReducer(state = {
	results:[],
	inprogress:true,
	dataError:false
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
	  default:
	    return state;
  }
}