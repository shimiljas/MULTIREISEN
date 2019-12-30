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


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
export default class LoginScreen extends Component {
    render() {
        return (

            <ImageBackground source={Images.loginpage} style={{ width: '100%', height: '100%', }}>

                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 30 }}>
                    <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(25), color: 'white' }} >
                        Login
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
                        <View style={{ width: '100%', height: 50, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: fonts.fontPrimaryLight }}>Forogt Password?</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '100%', height: 80, alignItems: 'center',
                        justifyContent: 'center', position: 'absolute', bottom: -100
                    }}>
                        <Button size="medium"
                            title="Login"
                            onPress={() => Actions.drawerMenu()}
                        />
                    </View>
                </View>
                <View style={{ flex: 4.5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                        onPress={() => Actions.register()}
                        style={{ fontFamily: fonts.fontPrimaryLight, fontSize: normalize(14) }}>Register ?</Text>
                </View>

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