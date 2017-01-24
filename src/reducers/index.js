import { combineReducers } from 'redux';
import frequentPackageDetailReducer from './freq-packages-reducer';
 
const rootReducer = combineReducers({
  frqPackages:frequentPackageDetailReducer
});

export default rootReducer;
