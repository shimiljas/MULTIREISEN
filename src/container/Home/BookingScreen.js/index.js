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

export default class Account extends Component {
    render() {
        return (<ScrollView style={{ flex: 1, }}>
            <ImageBackground source={Images.header}
                resizeMode={'stretch'}
                style={{ width: "100%", height: 200, }}>
                <TouchableOpacity

                    style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>

                    <Text style={styles.text}>Booking</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={{
                width: 350, height: 350, backgroundColor: "white", borderRadius: 20, justifyContent: "center",
                marginLeft: verticalScale(20), marginTop: verticalScale(20)
            }}>

                <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: verticalScale(15) }}>Flight Booking</Text>
                <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>Airlines </Text>
                        <Text style={{ fontSize: 14, }}>Egypt Airlines </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>Class </Text>
                        <Text style={{ fontSize: 14, }}>VIP Class</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>From </Text>
                        <Text style={{ fontSize: 14, }}>Calicut</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>To </Text>
                        <Text style={{ fontSize: 14, }}>Delhi</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>Persons </Text>
                        <Text style={{ fontSize: 14, }}>4</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>Reg no </Text>
                        <Text style={{ fontSize: 14, }}>12.555</Text>
                    </View>
                </View>
                <View style={{ width: 300, height: 30, alignItems: "flex-end", marginTop: 30, }}>
                    <Text style={{ fontSize: 15 }}>03.45 AM</Text>
                </View>
            </View>
            <View style={{
                width: 350, height: 350, backgroundColor: "white", borderRadius: 20, justifyContent: "center",
                marginLeft: verticalScale(20), marginTop: verticalScale(20)
            }}>

                <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: verticalScale(15) }}>Flight Booking</Text>
                <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>Airlines </Text>
                        <Text style={{ fontSize: 14, }}>Egypt Airlines </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>Class </Text>
                        <Text style={{ fontSize: 14, }}>VIP Class</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>From </Text>
                        <Text style={{ fontSize: 14, }}>Calicut</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>To </Text>
                        <Text style={{ fontSize: 14, }}>Delhi</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>Persons </Text>
                        <Text style={{ fontSize: 14, }}>4</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30 }}>
                        <Text style={{ fontSize: 15, color: 'blue' }}>Reg no </Text>
                        <Text style={{ fontSize: 14, }}>12.555</Text>
                    </View>
                </View>
                <View style={{ width: 300, height: 30, alignItems: "flex-end", marginTop: 30, }}>
                    <Text style={{ fontSize: 15 }}>03.45 AM</Text>
                </View>
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
