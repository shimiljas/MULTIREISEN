import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, ScrollView } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale, verticalScale } from '../../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { colors } from '../../../config/colors';
import RoundIcon from '../../../components/RoundIcon'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import InputIcon from '../../../components/InputIcon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LargeButton from '../../../components/LargeButton'
import Touchable from '../../../components/Tochable';
import { Actions } from 'react-native-router-flux'

export default class FlightBookConfirm extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <ImageBackground source={Images.header}
                    resizeMode={'stretch'}
                    style={{ width: '100%', height: 160, paddingBottom: 10 }}>
                    <View style={{
                        width: '100%', height: 40,
                        justifyContent: 'center', flexDirection: 'row', position: 'absolute', top: verticalScale(50),
                        paddingHorizontal: 10
                    }} >
                        <Touchable
                            onPress={() => Actions.pop()}
                            style={{ flex: 8, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Ionicons name="md-arrow-back" color={colors.white} size={35} />
                            <Text style={styles.text}>Flight Booking</Text>
                        </Touchable>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        </View>
                        <View style={{ flex: 1, marginRight: scale(30) }}>
                        </View>

                    </View>
                </ImageBackground>
                <View style={{ width: '100%', height: '70%', justifyContent: 'center', padding: 25, }}>
                    <View style={{
                        width: '100%',
                        height: '90%',
                        borderRadius: 10,
                        borderColor: '#ececec',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        backgroundColor: '#ffffff',
                        marginVertical: 10,
                        overflow: 'hidden'
                    }}>
                        <View style={{ flex: 1, backgroundColor: '#FF5E62', justifyContent: 'center', paddingLeft: 10 }}>
                            <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(15), color: 'white' }}>EGYPT FLIGHT</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 20 }}>

                                <Text style={{ fontFamily: fonts.fontPrimaryLight, color: '#636363', textAlign: 'left' }}>Passenger</Text>
                                <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(14), textAlign: 'left' }}>Saeed Ibrahim</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 20 }}>

                                <Text style={{ fontFamily: fonts.fontPrimaryLight, color: '#636363', textAlign: 'left' }}>Flight</Text>
                                <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(14), textAlign: 'left' }}>AU9865</Text>
                                <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(14), textAlign: 'left' }}>A class -VIP</Text>
                            </View>

                        </View>
                        <View style={{
                            flex: 2, flexDirection: 'row', borderStyle: 'dashed'
                        }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image source={Images.location} style={styles.path192} resizeMode={'contain'} />
                                    <Text style={styles.cairo}>Cario</Text>
                                </View>
                                <Text style={styles.cal}>CAL</Text>
                                <Text style={styles.terminal1}>10:15 Am , Thu , 05 Dec</Text>

                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image source={Images.location} style={styles.path192} resizeMode={'contain'} />
                                    <Text style={styles.cairo}>Cario</Text>
                                </View>
                                <Text style={styles.cal}>CAL</Text>
                                <Text style={styles.terminal1}>10:15 Am , Thu , 05 Dec</Text>
                            </View>

                        </View>
                        <View style={{ flex: 4, flexDirection: 'row', borderStyle: 'dashed' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontFamily: fonts.fontPrimaryLight, color: '#636363', }}>Terminal</Text>
                                    <Text style={{ fontFamily: fonts.fontPrimaryBold, color: 'black', }}>7A</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontFamily: fonts.fontPrimaryLight, color: '#636363', }}>Terminal</Text>
                                    <Text style={{ fontFamily: fonts.fontPrimaryBold, color: 'black', }}>7A</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontFamily: fonts.fontPrimaryLight, color: '#636363', }}>Terminal</Text>
                                    <Text style={{ fontFamily: fonts.fontPrimaryBold, color: 'black', }}>7A</Text>
                                </View >

                            </ View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 15 }}>
                                <Image source={Images.qrcode} style={{ width: 150, height: 150 }} resizeMode={'contain'} />
                            </View>

                        </View>
                    </View>
                </View>
            </View >
        )
    }
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