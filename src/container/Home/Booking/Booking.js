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
import BackButton from '../../../components/BackButton'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { colors } from '../../../config/colors';

export default class Booking extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>

                <ImageBackground source={Images.header}
                    resizeMode={'stretch'}
                    style={{ width: "100%", height: 200, }}>
                    <View style={{
                        width: "100%", height: 100, alignItems: "center",
                        marginTop: verticalScale(10), flexDirection: "row"
                    }}>
                        <BackButton white onPress={() => Actions.pop()} />
                        <Text style={styles.text}>Booking</Text>
                    </View>

                </ImageBackground>


                <ScrollView style={{ width: "100%", position: 'absolute', top: 100, paddingHorizontal: 10 }}>
                    <TouchableOpacity style={{

                        width: "90%", height: verticalScale(270), marginLeft: scale(15),
                        backgroundColor: "white", borderRadius: 20, justifyContent: "center",
                        marginTop: verticalScale(20)
                    }}
                        onPress={() => Actions.PaymentConfirmation()}>


                        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: verticalScale(15) }}>Flight Booking</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>Airlines </Text>
                                <Text style={{ fontSize: 14, }}>Egypt Airlines </Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>Class </Text>
                                <Text style={{ fontSize: 14, }}>VIP Class</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>From </Text>
                                <Text style={{ fontSize: 14, }}>Calicut</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>To </Text>
                                <Text style={{ fontSize: 14, }}>Delhi</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>Persons </Text>
                                <Text style={{ fontSize: 14, }}>4</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>Reg no </Text>
                                <Text style={{ fontSize: 14, }}>12.555</Text>
                            </View>
                        </View>
                        <View style={{ width: 300, height: 30, alignItems: "flex-end", marginTop: 30, }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>03.45 AM</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        marginBottom: scale(30),
                        width: "90%", height: verticalScale(270), marginLeft: scale(15), backgroundColor: "white", borderRadius: 20, justifyContent: "center",
                        marginTop: verticalScale(20)
                    }}>

                        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: verticalScale(15) }}>Flight Booking</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>Airlines </Text>
                                <Text style={{ fontSize: 14, }}>Egypt Airlines </Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>Class </Text>
                                <Text style={{ fontSize: 14, }}>VIP Class</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>From </Text>
                                <Text style={{ fontSize: 14, }}>Calicut</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>To </Text>
                                <Text style={{ fontSize: 14, }}>Delhi</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>Persons </Text>
                                <Text style={{ fontSize: 14, }}>4</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 50 }}>
                                <Text style={{ fontSize: 15, color: colors.primaryColor }}>Reg no </Text>
                                <Text style={{ fontSize: 14, }}>12.555</Text>
                            </View>
                        </View>
                        <View style={{ width: 300, height: 30, alignItems: "flex-end", marginTop: verticalScale(30), }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>03.45 AM</Text>
                        </View>
                    </View>
                </ScrollView >
            </View>
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
