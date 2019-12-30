import React, { Component } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native'
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
                        Create Account
                       </Text>
                </View>
                <View style={{ flex: 4.5, backgroundColor: 'white', marginHorizontal: scale(20), borderRadius: 10 }}>
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
                <View style={{ flex: 2.5, }}>
                </View>
            </ImageBackground >
        )
    }
}