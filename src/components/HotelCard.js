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
import Touchable from './Tochable';

const HotelCard = ({ onPress }) => (
    <Touchable
        onPress={onPress}
        style={{
            flex: 1, height: verticalScale(230), backgroundColor: 'white', minHeight: 100,
            marginHorizontal: scale(20), borderRadius: 10, marginTop: 30,
            overflow: 'hidden'
        }}>
        <View style={{ flex: 7 }}>
            <Image

                style={{ flex: 1 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ARooStZJvyeIRk4VPOtEhmgxwGwQUQy27OBnEm8N_2EEUBEYRA&s' }}
            />
        </View>
        <View style={{ flex: 3, flexDirection: "row", overflow: 'hidden' }}>
            <View style={{ flex: 6, marginLeft: 20, marginBottom: 15, justifyContent: "center" }}>

                <Text style={styles.Hdng}>Hitman Ramos</Text>
                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                    <Entypo name="location-pin" color={colors.primaryColor} size={15} />
                    <Text>India.Calicut</Text>
                </View>
            </View>
            <View style={{ flex: 4, alignItems: 'flex-start', justifyContent: "center", marginRight: 20 }}>
                <ImageBackground source={Images.redbutton} style={styles.rectangle1750} >
                    <Text style={styles.usdAdult}>313.33 USD/adult</Text>
                    <Text style={styles.includesFare}> includes: Fare + taxes</Text>
                </ImageBackground>
            </View>
        </View>
    </Touchable>
)

const styles = StyleSheet.create({
    Hdng: {
        fontSize: 18,
        fontWeight: "700"
    },
    Title: {
        fontSize: 16,
        color: "#fff"
    },
    rectangle1750: {
        width: 250,
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
    path192: {
        width: 20,
        height: 20
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
})


export default HotelCard