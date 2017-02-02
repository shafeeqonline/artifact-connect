import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './../components/SearchBar';

import { searchSuggestion,selectedSearch,updateSearchValue,handleDownArrow } from './../actions/search-suggestion-actions';
import {fetchSearchSuggestions} from './../actions/search-result-action'
function mapStateToProps(state) {
    return{
       enable:state.frqPackages.enable,
       searchSelected:state.frqPackages.searchSelected,
       searchResults:state.searchResults.searchResults,
       searchValue:state.frqPackages.searchValue,
       inprogress:state.searchResults.inprogress,
       activeIndex:state.searchResults.activeIndex
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      searchSuggestion:searchSuggestion,
      selectedSearch:selectedSearch,
      updateSearchValue:updateSearchValue,
      fetchSearchSuggestions:fetchSearchSuggestions,
      handleDownArrow:handleDownArrow
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);