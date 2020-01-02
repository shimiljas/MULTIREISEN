/* eslint-disable prettier/prettier */
import Country from './Country';

import { connect } from 'react-redux';

import { selectCountry } from './CountryAction'



export default connect(null, {
    selectCountry,
})(Country);