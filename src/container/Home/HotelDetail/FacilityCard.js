/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../../config/colors';
import { fonts } from '../../../config/fonts'
import { normalize } from '../../../utils/Fontnormalize'
import Images from '../../../resources/images'
import Entypo from 'react-native-vector-icons/Entypo'

const FacilityCard = ({ icon, text }) => {
    return (
        <View style={{ flex: 1, height: 30, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
                {icon}
            </View>
            <View style={{ flex: 9 }}>
                <Text>{text}</Text>
            </View>
        </View>
    )
}
export default FacilityCard