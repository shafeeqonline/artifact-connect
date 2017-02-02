import { connect } from 'react-redux';

//components
import FrequentPackages from '../components/FrequntPackages';


const mapStateToProps = (state)=> {
	return {
		frequent:state.frqPackages.details.frequentlySearched
	};
 }

export default connect(mapStateToProps)(FrequentPackages);
