import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import DetailsSideBar from './../components/DetailsSideBar';
import {fetchPackageDetails} from './../actions/search-result-action';

const mapStateToProps = (state)=> {
	return {
		inprogress:state.searchResults.detailsInprogress,
		packageDetails:state.searchResults.details
	};
 }

const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchPackageDetails
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailsSideBar);