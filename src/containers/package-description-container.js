import { connect } from 'react-redux';
//component
import PackageDesctiption from './../components/PackageDesctiption';
const mapStateToProps = (state)=> {
	let result='hii' 
	return {
		result
	};
 }
export default connect(mapStateToProps)(PackageDesctiption)