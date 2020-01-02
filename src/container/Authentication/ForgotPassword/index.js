/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, } from 'react-native'
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

import HotelFilterModal from '../../../modal/HotelFilterModal'
import RoomDetailModal from '../../../modal/RoomDetailModal'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Step from '../../../components/Step'
import InputDropDown from '../../../components/InputDropDown'
import BackButton from '../../../components/BackButton'

export default class LoginScreen extends Component {
    render() {
        return (

            <ImageBackground source={Images.loginpage} style={{ width: '100%', height: '100%', }}>
                <BackButton onPress={() => Actions.pop()} />

                <View style={{ flex: 1.3, alignItems: 'center', justifyContent: 'flex-end',marginBottom: 30,}}>
                    <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(25), color: 'white' }} >
                        Forogt Password
                       </Text>
                </View>
                <View style={{
                    minHeight: 60, justifyContent: "center",
                    flex: 1, backgroundColor: 'white', marginHorizontal: scale(20), borderRadius: 10
                }}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <KeyboardAwareScrollView >
                            <Input
                                icon={<MaterialCommunityIcons name="email" color={"black"} size={25} />}
                                placeholder={"Email"} />

                        </KeyboardAwareScrollView>


                    </View>
                    <View style={{
                        width: '100%', height: 80, alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: -50
                    }}>
                        <Button size="medium"
                            title="Submit"
                            onPress={() => Actions.login()}
                        />
                    </View>
                </View>
                <View style={{ flex: 6.5, alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Text
                        onPress={() => Actions.register()}
                        style={{ fontFamily: fonts.fontPrimaryLight, fontSize: normalize(14) }}>Register ?</Text> */}
                </View>
                {/* 
                <InputDropDown
                    DESTRUCTIVE_INDEX={3}
                    CANCEL_INDEX={4}
                    placeholder={'Country'}

                /> */}


            </ImageBackground >


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})