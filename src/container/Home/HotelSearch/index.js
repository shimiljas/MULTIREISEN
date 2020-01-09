/* eslint-disable prettier/prettier */
import HotelSearch from './HotelSearch';

import { connect } from 'react-redux';


const mapStateToPops = state => ({
  name: state.country.name,
  code: state.country.code,
  cityname: state.city.cityname,
  cityid: state.city.cityid

});


export default connect(mapStateToPops, null)(HotelSearch);

