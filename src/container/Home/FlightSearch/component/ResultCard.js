import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, Dimensions } from 'react-native'
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

export default class ResultCard extends Component {
    render() {
        return (
            <View style={styles.rectangle55} >
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', paddingTop: 10, marginVertical: 10 }}>
                    <View style={{ flex: 1, paddingLeft: 15 }}>
                        <Image source={Images.airlines} style={styles.ellipse28} resizeMode={'contain'} />
                    </View>
                    <View style={{ flex: 2, alignItems: 'flex-start', }}>
                        <ImageBackground source={Images.redbutton} style={styles.rectangle1750} >
                            <Text style={styles.usdAdult}>313.33 USD/adult</Text>
                            <Text style={styles.includesFare}> includes: Fare + taxes</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{ flex: 5 }}>
                    <View style={{ flex: 4, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={Images.location} style={styles.path192} resizeMode={'contain'} />
                                <Text style={styles.cairo}>Cario</Text>
                            </View>
                            <Text style={styles.cal}>CAL</Text>
                            <Text style={styles.terminal1}>10:15 Am , Thu , 05 Dec</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={Images.hori_plane} style={styles.path1234} resizeMode={'contain'} />
                            <Image source={Images.line} style={styles.line22} resizeMode={'contain'} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={Images.location} style={styles.path192} resizeMode={'contain'} />
                                <Text style={styles.cairo}>Cario</Text>
                            </View>
                            <Text style={styles.cal}>CAL</Text>
                            <Text style={styles.terminal1}>10:15 Am , Thu , 05 Dec</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                        <View style={styles.rectangle57}>
                            <Text style={styles.economy}>Economy</Text>
                        </View>
                        <View style={styles.rectangle57}>
                            <Text style={styles.economy}>Boeing MS - 815</Text>
                        </View>
                        <View style={styles.rectangle57}>
                            <Text style={styles.economy}>+2 More</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <ImageBackground source={Images.yellowbutton} style={styles.rectangle62} >
                            <Text style={styles.recomended} >Recomended</Text>
                        </ImageBackground>

                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <ImageBackground source={Images.smallbutton} style={styles.rectangle62} >
                            <Text style={styles.bookingNow} >Booking now</Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rectangle55: {
        width: scale(310),
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 30,
        height: verticalScale(250),
        borderRadius: 12,
        borderColor: '#ececec',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        marginVertical: 10,
        overflow: 'hidden'
    },
    rectangle1750: {
        width: 300,
        height: 55,
        marginRight: 10,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 0,
        backgroundColor: '#ff484c',
        justifyContent: 'center',
        paddingLeft: 10

    },
    ellipse28: {
        width: 55,
        height: 53,
    },
    rectangle62: {
        width: 161,
        height: 40,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 13,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 13,
        alignItems: 'center',
        justifyContent: 'center'

    },
    path1234: {
        width: 25,
        height: 23,
        borderColor: '#6e78f7',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    line22: {
        width: 78,
        height: 1,
        borderColor: '#6e78f7',
        borderStyle: 'solid',
        borderWidth: 1,
        marginLeft: 20
    },
    recomended: {
        color: '#e6b12e',
        fontFamily: 'Poppins',
        fontSize: normalize(13),
        fontWeight: '500',
        letterSpacing: 0.25,
    },
    bookingNow: {
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontSize: normalize(13),
        fontWeight: '600',
    },
    usdAdult: {
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '600',
    },
    includesFare: {

        color: '#fdfdfd',
        fontFamily: 'Poppins',
        fontSize: 8,
        fontWeight: '400',
    },
    rectangle57: {
        width: 94,
        height: 24,
        borderRadius: 12,
        borderColor: '#ececec',
        borderStyle: 'solid',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    economy: {

        color: '#898a8f',
        fontFamily: 'Poppins',
        fontSize: 10,
        fontWeight: '300',
        letterSpacing: 0.5,
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
    path192: {
        width: 9,
        height: 11,
        marginRight: 3
    },
})