import CityList from './CityList'




import { connect } from 'react-redux';

import { selectcity } from './CityAction'



export default connect(null, {
    selectcity,
})(CityList);