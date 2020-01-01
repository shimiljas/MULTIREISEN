import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, } from 'react-native'
import Images from '../../../../resources/images'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import { scale, verticalScale } from '../../../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { fonts } from '../../../../config/fonts';
import { normalize } from '../../../../utils/Fontnormalize';
import { colors } from '../../../../config/colors';
import RoundIcon from '../../../../components/RoundIcon'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import InputIcon from '../../../../components/InputIcon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LargeButton from '../../../../components/LargeButton'
import Touchable from '../../../../components/Tochable';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


export default class OneWay extends Component {
    render() {
        const { roundTrip } = this.props
        return (
            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <View style={styles.rectangle76_2}>

                    <InputIcon
                        placeholder={'Depart from'}
                        icon={<MaterialIcons name="flight-takeoff" size={25} color={'#898a8f'} />} />
                    <InputIcon
                        placeholder={'Arrive at'}
                        icon={<MaterialIcons name="flight-land" size={25} color={'#898a8f'} />} />
                    <InputIcon
                        placeholder={'Departing'}
                        icon={<Ionicons name="ios-calendar" size={25} color={'#898a8f'} />} />
                    {roundTrip ? <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <InputIcon half
                            placeholder={'Departing'}
                            icon={<Entypo name="users" size={20} color={'#898a8f'} />} />
                        <InputIcon
                            placeholder={'Returning'}
                            half icon={<Entypo name="user" size={20} color={'#898a8f'} />} />
                    </View> : null}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <InputIcon half
                            placeholder={'Adults'}
                            icon={<Entypo name="users" size={20} color={'#898a8f'} />} />
                        <InputIcon
                            placeholder={'Childern'}
                            half icon={<Entypo name="user" size={20} color={'#898a8f'} />} />
                    </View>
                    <InputIcon
                        placeholder={'Payment'}
                        icon={<MaterialIcons name="payment" size={25} color={'#898a8f'} />} />
                    <InputIcon
                        placeholder={'Select your class'}
                        icon={<Entypo name="chevron-down" size={25} color={'#898a8f'} />} />

                </View>

            </View>
        )
    }
}
OneWay.defaultProps = {
    roundTrip: false
}

const styles = StyleSheet.create({
    multireisen: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: normalize(18),
        fontWeight: '600',
    },
    flight: {
        width: 45,
        height: 30,
        color: '#f6f6f6',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: 15,
        fontWeight: '600',
    },
    rectangle76: {
        width: scale(300),
        height: verticalScale(320),
        marginTop: 10,
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 29,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangle76_2: {
        width: scale(300),
        height: '100%',
        marginTop: 10,
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 29,
        borderRadius: 12,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 14,
        fontWeight: '600',
    }
})