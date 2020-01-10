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
import TopHeader from '../../../components/TopHeader'


export default class Account extends Component {
    render() {
        return (<View style={{ flex: 1, }}>
            <ImageBackground source={Images.header}
                resizeMode={'cover'}
                style={{ flex: 1, width: '100%', height: verticalScale(130), marginBottom: 20 }}>

                <TouchableOpacity
                    style={{ flex: 1, marginTop: verticalScale(30), }}>
                    <BackButton title={'Chat'}
                        textStyle={{ color: 'white', fontSize: 20, fontWeight: "bold", }} white onPress={() => Actions.pop()} />
                </TouchableOpacity>

            </ImageBackground>
            <ScrollView style={{ width: '100%', position: 'absolute', top: 90 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{

                        width: 330, height: 150, backgroundColor: "white", borderRadius: 20, justifyContent: "center",
                        marginTop: verticalScale(20),
                    }}>

                        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: verticalScale(15) }}>Flight support</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, marginTop: verticalScale(20) }}>
                            <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 14, color: 'red' }}>CLOSED TODAY</Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 14 }}>09:30 AM</Text>
                            </View>
                            <TouchableOpacity style={{ flex: 3, justifyContent: "center", alignItems: "center" }
                            }
                                onPress={() => Actions.HotelSupport()}
                            >
                                <View style={{
                                    width: 40, height: 40, borderWidth: .5, borderRadius: 20,
                                    justifyContent: "center", alignItems: "center"
                                }}
                                >
                                    <MaterialIcons name="chat-bubble-outline" color='grey' size={20} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View >
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
