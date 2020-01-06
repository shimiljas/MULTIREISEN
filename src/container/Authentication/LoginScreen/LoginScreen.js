/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale, verticalScale } from '../../../utils/Responsive';
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
const { width, height } = Dimensions.get('window')
export default class LoginScreen extends Component {
    render() {
        return (
            <KeyboardAwareScrollView>
                <ImageBackground source={Images.loginpage} style={{ width, height }}>

                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 30 }}>
                        <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(30), color: 'white' }} >
                            Create Account
                       </Text>
                    </View>
                    <View style={{
                        minHeight: 60, justifyContent: "center",
                        flex: 3.5, backgroundColor: 'white', marginHorizontal: scale(20), borderRadius: 10
                    }}>
                        <View style={{ paddingHorizontal: 15 }}>
                            <KeyboardAwareScrollView >
                                <Input
                                    icon={<MaterialCommunityIcons name="email" color={"black"} size={25} />}
                                    placeholder={"Email"} />

                            </KeyboardAwareScrollView>
                            <KeyboardAwareScrollView >
                                <Input
                                    icon={<Entypo name="key" color={"black"} size={25} />}
                                    placeholder={"Password"} />
                            </KeyboardAwareScrollView>
                            <TouchableOpacity style={{ width: '100%', height: 50, alignItems: 'flex-end', justifyContent: 'center' }}
                                onPress={() => Actions.ForgotPassword()}
                            >
                                <Text style={{ fontFamily: fonts.fontPrimaryLight }}>Forogt Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: '100%', height: 80, alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: -40
                        }}>
                            <Button size="medium"
                                title="Login"
                                onPress={() => Actions.drawerMenu()}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 3.5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            onPress={() => Actions.register()}
                            style={{ fontFamily: fonts.fontPrimaryLight, fontSize: normalize(14) }}>Register ?</Text>
                    </View>


                    <View style={{ flex: 1.5, alignItems: 'center', marginBottom: verticalScale(80) }}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                        >
                            <View
                                style={{
                                    width: 340, backgroundColor: "#0780f9", borderRadius: 10,
                                    height: 60, alignItems: 'center', justifyContent: 'center'
                                }}>

                                <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff", }}>
                                    Sign in with facebook
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground >

            </KeyboardAwareScrollView>


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