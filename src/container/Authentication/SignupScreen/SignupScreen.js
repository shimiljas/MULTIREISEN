import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
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
import { colors } from '../../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Touchable from '../../../components/Tochable'

import BackButton from '../../../components/BackButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
const { width, height } = Dimensions.get('window')
export default class SignupScreen extends Component {
    render() {
        return (
            <KeyboardAwareScrollView>
                <ImageBackground source={Images.loginpage} style={{ width, height, }}>
                    {/* <View
                    style={{
                        flex: 1,
                        backgroundColor: 'red',
                        alignItems: 'center',im
                        justifyContent: 'center',

                        marginLeft: 10
                    }} >
                    <Touchable onPressIn={() => Actions.pop()} style={{ flex: 1, width: 50, height: 50 }}>
                        <Ionicons name="md-arrow-back" color={colors.white} size={35} />
                    </Touchable>
                </View> */}

                    <View style={{ width: "100%", height: 30, marginTop: verticalScale(30) }}>
                        <BackButton onPress={() => Actions.pop()} />

                    </View>
                    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 30 }}>
                        <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(25), color: 'white' }} >
                            Create Account
                       </Text>
                    </View>
                    <View style={{
                        flex: 4.5, backgroundColor: 'white', minHeight: 150, justifyContent: "center",
                        marginHorizontal: scale(20), borderRadius: 10
                    }}>
                        <View style={{ paddingHorizontal: 15 }}>

                            <Input
                                icon={<AntDesign name="user" color={"black"} size={25} />}
                                placeholder={"Name"} />

                            <Input
                                icon={<MaterialCommunityIcons name="email" color={"black"} size={25} />}
                                placeholder={"Email"} />

                            <Input
                                icon={<Entypo name="key" color={"black"} size={25} />}
                                placeholder={"Password"} />

                            <Input
                                icon={<Entypo name="key" color={"black"} size={25} />}
                                placeholder={"Confirm Password"} />

                        </View>
                        <View style={{ width: '100%', height: 80, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: -40 }}>
                            <Button size="medium"
                                title="Sign up"
                                onPress={() => Actions.pop()}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}></View>
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
                                    Sign up with facebook
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>


                </ImageBackground >
            </KeyboardAwareScrollView>

        )


    }
}