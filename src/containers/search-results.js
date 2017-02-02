import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import SearchResult from '../components/SearchResult';
//actions
import {fetchResults} from '../actions/search-result-action.js';

const mapStateToProps = (state)=> {
	console.log(state.searchResults);
	return {
		searchResult:state.searchResults.results
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchResults
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);