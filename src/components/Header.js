/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
import LinearGradient from 'react-native-linear-gradient';
import Touchable from './Tochable'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux'
import Images from '../resources/images'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Header = ({ title }) => {
    return (
        <ImageBackground source={Images.header}
            resizeMode={'cover'}
            style={{ width: '100%', height: verticalScale(130), paddingBottom: 10 }}>
            <View style={{
                width: '100%', height: 30,
                justifyContent: 'center', flexDirection: 'row', position: 'absolute', top: verticalScale(50),
                paddingHorizontal: 10
            }} >
                <Touchable
                    onPress={() => Actions.pop()}
                    style={{ flex: 8, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Ionicons name="md-arrow-back" color={colors.white} size={35} />
                    <Text style={styles.text}>{title}</Text>
                </Touchable>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                </View>
                <View style={{ flex: 1, marginRight: scale(30) }}>
                </View>

            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    multireisen: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: normalize(18),
        fontWeight: '600',
    },

    text: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.17,
        marginLeft: 20

    },
    path1227: {
        width: 150,
        height: 40,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: { width: 3, height: 0 },
        borderRadius: 25,
        shadowRadius: 16,
        backgroundColor: '#ffffff',
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    business: {
        color: '#313450',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: 10,
        fontWeight: '400',
    },
    path192: {
        width: 9,
        height: 11,
        marginRight: 3
    },
    cairo: {

        color: '#898a8f',
        fontFamily: 'Poppins',
        fontSize: 11,
        fontWeight: '400',
    },
    cal: {

        color: '#4d4d4d',
        fontFamily: 'Poppins',
        fontSize: 28,
        fontWeight: '700',
    },
    terminal1: {
        color: '#898a8f',
        fontFamily: 'Poppins',
        fontSize: 10,
        fontWeight: '400',
    },
})

export default Header;