import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './../components/SearchBar';

import { searchSuggestion,selectedSearch,updateSearchValue } from './../actions/search-suggestion-actions'
function mapStateToProps(state) {
    return{
       enable:state.frqPackages.enable,
       searchSelected:state.frqPackages.searchSelected,
       searchResults:state.frqPackages.searchResults,
       searchValue:state.frqPackages.searchValue
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      searchSuggestion:searchSuggestion,
      selectedSearch:selectedSearch,
      updateSearchValue:updateSearchValue
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);