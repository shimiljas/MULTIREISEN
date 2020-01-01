/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
import Images from '../resources/images'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import Touchable from './Tochable'

const HotelDetailCard = ({ onPress }) => (
    <View style={{
        width: '100%',
        height: 80,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 0.4,
        padding: 10,
        marginTop: 35
    }}>
        <Text style={{ fontFamily: fonts.fontPrimaryBold, color: 'black', fontSize: normalize(10) }}>SNGLE STNADRA BEAD AND BREAKFAST</Text>
        <Text style={{ fontFamily: fonts.fontPrimaryLight, color: 'black', fontSize: normalize(10) }}>68.29 EUR</Text>
        <Touchable
            onPress={onPress}
            style={{ width: scale(120), overflow: 'hidden', borderRadius: 30, height: 45, backgroundColor: 'red', position: 'absolute', bottom: -22, right: 10 }} >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#E67300', '#FF9933', '#FFA64D']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text >
                    See Detail
               </Text>
            </LinearGradient>
        </Touchable>

    </View>
)

export default HotelDetailCard