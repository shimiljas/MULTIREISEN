/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { scale, verticalScale } from '../../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../config/colors';
import { fonts } from '../../config/fonts'
import { normalize } from '../../utils/Fontnormalize'
import LinearGradient from 'react-native-linear-gradient';
import Touchable from '../../components/Tochable'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Dropdown } from 'react-native-material-dropdown';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Entypo from 'react-native-vector-icons/Entypo'

import Modal from 'react-native-modalbox';
let data = [{
    value: 'Banana',
}, {
    value: 'Mango',
}, {
    value: 'Pear',
}];

const radio_props = [
    { label: 'Lowest Price', value: 0 },
    { label: 'Near by me', value: 1 },
];

import { Rating, AirbnbRating } from 'react-native-ratings';

import RangeSlider from 'rn-range-slider';
import Feather from 'react-native-vector-icons/Feather'

const InfoItem = () => (
    <View style={{ flex: 1, flexDirection: 'row', }}>
        <View style={{ flex: 1, }} >

        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 15 }} >
            <Feather
                name="info"
                size={24}
                color={colors.black}
            />
        </View>
        <View style={{ flex: 8, alignItems: 'flex-start', padding: 15, }} >
            <Text styles={styles.notes}>   Lorem ipsum dolor sit amet, et justo ante tortor tristique aliquet, elit eu quisque leo primis, eros mi diam elit praesent, ac sollicitudin euismod urna nulla pellentesque nunc. Fusce enim turpis egestas dictum lacus adipiscing, tempor morbi congue duis arcu, placerat metus rhoncus cras netus veniam, sed odio.
             Id non vestibulum vel dolor tellus, vehicula curabitur lorem pulvinar rutrum netus. Leo quis vestibulum tempor, iaculis maecenas diam bibendum malesuada
         ligula arcu, nunc dapibus curabitur sit vitae adipiscing</Text>

        </View>
    </View>
)

export default InfoItem

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.fontPrimaryBold,
        color: 'black',
        fontSize: normalize(25),
        textAlign: 'left',
        fontWeight: 'bold'
    },
    notes: {
        fontFamily: fonts.fontPrimaryLight,
        color: 'black',
        fontSize: normalize(20),
        textAlign: 'left',
    }
})