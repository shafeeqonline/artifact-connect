import { combineReducers } from 'redux';
import frequentPackageDetailReducer from './freq-packages-reducer';
import searchResultsReducer from './search-results';
 
const rootReducer = combineReducers({
  frqPackages:frequentPackageDetailReducer,
  searchResults:searchResultsReducer
});

export default rootReducer;
