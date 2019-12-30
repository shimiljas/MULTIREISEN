/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ActivityIndicator } from 'react-native';
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

const RoundIcon = ({ image, onPress, selected }) => {
    return (
        <Touchable style={[styles.eclipse, { borderColor: selected ? '#6ecaf7' : 'white' }]} onPress={onPress}>
            <Image resizeMode={'contain'} source={image} style={styles.image} />
        </Touchable>
    )
}

const styles = StyleSheet.create({
    eclipse: {
        width: scale(80),
        height: scale(80),
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: { width: 11, height: 0 },
        shadowRadius: 35,

        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: scale(40),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50
    },
    image: {
        width: scale(45),
        height: scale(45),
    }
})
export default RoundIcon