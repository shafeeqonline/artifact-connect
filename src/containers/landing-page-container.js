import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import LandingPage from '../components/LandingPage';
//actions
import fetchPopularData from '../actions/fetch-frequentl-searched-packages.js';

const mapStateToProps = (state)=> {
	return {
		inprogress:state.frqPackages.inprogress
	};
 }
const mapDispatchToProps = (dispatch) =>{

	return bindActionCreators({
								fetchPopularData
						 	 },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);