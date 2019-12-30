import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale } from '../../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { Actions } from 'react-native-router-flux'
import { colors } from '../../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Touchable from '../../../components/Tochable'


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
export default class SignupScreen extends Component {
    render() {
        return (

            <ImageBackground source={Images.loginpage} style={{ width: '100%', height: '100%', }}>
                <Touchable
                    style={{
                        flex: 1,
                        width: 50, height: 50,
                        position: 'absolute',
                        top: 50,
                        alignItems: 'center', justifyContent: 'center'
                    }} onPress={() => Actions.pop()}>
                    <Ionicons name="md-arrow-back" color={colors.white} size={35} />
                </Touchable>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 30 }}>
                    <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(25), color: 'white' }} >
                        Hotel Booking
                       </Text>
                </View>
                <View style={{
                    flex: 7.5, backgroundColor: 'white', minHeight: 100,
                    marginHorizontal: scale(20), borderRadius: 10, marginTop: 30
                }}>
                    <View style={{ width: "100%", height: 50, marginTop: 20, marginLeft: 40, justifyContent: "center", }}>
                        <Text style={styles.Hdng}>Ramses Hilton</Text>
                        <Text style={styles.A}>India.Calicut</Text>
                    </View>
                    <View style={{ width: "100%", height: 30, flexDirection: "row" }}>
                        <View style={{ flex: 4.5, justifyContent: "center", alignItems: "center" }}>
                            <Text> Cancelation Deadline</Text>
                        </View>
                        <View style={{ flex: 3, justifyContent: "center", alignItems: "flex-start" }}>
                            <Text style={styles.Sub2}>non-refunable</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 2.5, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.Sub}>Show more</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 2.5, }}>
                </View>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    Hdng: {
        fontSize: 18,
        fontWeight: "700"
    },
    Title: {
        fontSize: 16,
        color: "#fff"
    },
    Sub: {
        fontSize: 13,
        color: "blue"
    },
    Sub2: {
        fontSize: 13,
        color: "red"

    },
    A: {
        fontSize: 13
    }
})