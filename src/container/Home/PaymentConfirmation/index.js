import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
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
import Step from "../../../components/Step"
import BackButton from '../../../components/BackButton'
export default class HotelCard extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, }}>
                <View style={{ width: "100%", height: 30, marginTop: verticalScale(30) }}>
                    <BackButton black onPress={() => Actions.pop()} />
                </View>
                <View style={{ flex: 1, marginTop: 40, paddingHorizontal: 10 }}>
                    <Step />
                </View>
                <View style={{ width: "100%", height: 100, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 26, }}>$425.00</Text>
                </View>
                <View style={{ width: "100%", height: 100, marginLeft: scale(30), }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: colors.primaryColor }}>CARD NUMBERS</Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{
                            width: 250, height: 50, marginTop: 10,
                            borderWidth: .5, borderRadius: 5
                        }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: "bold" }}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{
                            width: 70, height: 50, marginTop: verticalScale(10),
                            borderWidth: .5, borderRadius: 5, marginLeft: 10
                        }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: "bold" }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", height: 100, marginLeft: scale(30), marginTop: verticalScale(10) }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: colors.primaryColor }}>CARDHOLDER NAME</Text>
                    <View style={{ flex: 1, }}>
                        <View style={{
                            width: 330, height: 50, marginTop: 10,
                            borderWidth: .5, borderRadius: 5
                        }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: "bold" }}
                            />
                        </View>

                    </View>
                </View>

                <View style={{ width: "100%", height: 100, marginLeft: scale(30), marginTop: verticalScale(10) }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: colors.primaryColor }}>EXPIRE DATE</Text>
                    <View style={{ flex: 1, flexDirection: "row", }}>
                        <View style={{
                            width: 130, height: 50, marginTop: 10,
                            borderWidth: .5, borderRadius: 5
                        }}>

                            <TextInput
                                style={{ fontSize: 16, fontWeight: "bold" }}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{

                            width: 70, height: 50, marginTop: 10,
                            borderWidth: .5, borderRadius: 5, marginLeft: 10
                        }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: "bold" }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginBottom: 55, alignItems: 'center' }}>
                    <Touchable
                        style={{ flex: 1 }}
                        onPress={() => Actions.TermsCondtions()}>
                        <ImageBackground
                            source={Images.submit}
                            resizeMode={'stretch'}
                            style={{ width: 350, height: 60, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={styles.search}>Finish !</Text>

                        </ImageBackground>
                    </Touchable>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    search: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 14,
        fontWeight: '600',
    }
})


