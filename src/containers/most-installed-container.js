import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//components
import MostIntsalledPackages from '../components/MostInstalledPackages';
//actions


const mapStateToProps = (state)=> {
	return {
		details:state.frqPackages.details.pacakges
	};
 }

export default connect(mapStateToProps)(MostIntsalledPackages);
