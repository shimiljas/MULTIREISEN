import React, { Component } from 'react';
import { View, Image, ImageBackground, TextInput, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale, verticalScale } from '../../../utils/Responsive';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Actions } from 'react-native-router-flux'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { colors } from '../../../config/colors';
import BackButton from '../../../components/BackButton'
import Chat from '../Chat'

export default class HotelSupport extends Component {
    render() {
        return (<ScrollView style={{ flex: 1, }}>
            <ImageBackground source={Images.header}
                resizeMode={'cover'}
                style={{ flex: 1, width: '100%', height: verticalScale(170), }}>
                <TouchableOpacity
                    style={{ flex: 1, marginTop: verticalScale(30), }}>
                    <BackButton
                        textStyle={{ color: 'white', fontSize: 20, fontWeight: "bold", }} white onPress={() => Actions.pop()} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    position: 'absolute', top: verticalScale(80),
                    width: "90%", height: verticalScale(350), backgroundColor: "white", borderRadius: 20, justifyContent: "center",
                    marginLeft: verticalScale(20), marginTop: verticalScale(20)
                }}
                >
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: verticalScale(15) }}>Hotel Support</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", borderTopWidth: .2 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", marginLeft: 50 }}>
                            <Text style={{ fontSize: 15, color: colors.primaryColor }}>Airlines </Text>
                            <Text style={{ fontSize: 14, }}>Egypt Airlines </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", }}>
                            <Text style={{ fontSize: 15, color: colors.primaryColor }}>Class </Text>
                            <Text style={{ fontSize: 14, }}>VIP Class</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", marginLeft: 50 }}>
                            <Text style={{ fontSize: 15, color: colors.primaryColor }}>From </Text>
                            <Text style={{ fontSize: 14, }}>Calicut</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", }}>
                            <Text style={{ fontSize: 15, color: colors.primaryColor }}>To </Text>
                            <Text style={{ fontSize: 14, }}>Delhi</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", marginLeft: 50 }}>
                            <Text style={{ fontSize: 15, color: colors.primaryColor }}>Persons </Text>
                            <Text style={{ fontSize: 14, }}>4</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", }}>
                            <Text style={{ fontSize: 15, color: colors.primaryColor }}>Reg no </Text>
                            <Text style={{ fontSize: 14, }}>12.55</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", marginLeft: 20 }}>
                            <Text style={{ fontSize: 14, color: 'red', fontWeight: "bold" }}>CLOSED TODAY</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 14, }}>03.45 AM</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
            <View style={{
                width: "100%", height: 270,
                marginTop: verticalScale(280)
            }}>
                <Chat />
            </View>

        </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.17,
        marginLeft: 20

    },
})
