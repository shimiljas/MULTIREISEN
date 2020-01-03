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

                    <Text style={styles.text}>Chat</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={{
                width: 350, height: 150, backgroundColor: "white", borderRadius: 20, justifyContent: "center",
                marginLeft: verticalScale(20), marginTop: verticalScale(20)
            }}>

                <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: verticalScale(15) }}>Flight support</Text>
                <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                    <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 14, color: 'red' }}>CLOSED TODAY</Text>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 14 }}>09:30 AM</Text>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <View style={{
                            width: 40, height: 40, backgroundColor: 'red', borderRadius: 20,
                            justifyContent: "center", alignItems: "center"
                        }}>
                            <MaterialIcons name="chat-bubble-outline" color={colors.white} size={25} />

                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                width: 350, height: 150, backgroundColor: "white", borderRadius: 20, justifyContent: "center",
                marginLeft: verticalScale(20), marginTop: verticalScale(20)
            }}>

                <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: verticalScale(15) }}>Flight support</Text>
                <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                    <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 14, color: 'green' }}>OPEN TODAY</Text>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 14 }}>09:30 AM</Text>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <View style={{
                            width: 40, height: 40, backgroundColor: 'red', borderRadius: 20,
                            justifyContent: "center", alignItems: "center"
                        }}>
                            <MaterialIcons name="chat-bubble-outline" color={colors.white} size={25} />

                        </View>
                    </View>
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
