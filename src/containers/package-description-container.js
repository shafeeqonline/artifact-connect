import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//actions
import {fetchProjectDescription} from '../actions/search-result-action.js'
//component
import PackageDesctiption from './../components/PackageDesctiption';
const mapStateToProps = (state)=> {
	
	return {
		inprogress:state.searchResults.descInprogress,
		data:state.searchResults.descriptionData
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchProjectDescription
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PackageDesctiption);

