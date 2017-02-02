import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import DetailsSideBar from '../components/DetailsSideBar';
//actions
import {fetchPackageDetails} from '../actions/search-result-action.js';

const mapStateToProps = (state)=> {
	return {
		inprogress:state.frqPackages.inprogress,
		packageDetails:state.searchResults.details
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchPackageDetails
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailsSideBar);