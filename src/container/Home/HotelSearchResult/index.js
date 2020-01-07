/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native'
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
import { verticalScale } from '../../../utils/Responsive';
import Search from '../../../components/Search'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import HotelCard from "../../../components/HotelCard"
import ActionButton from 'react-native-action-button';
import HotelFilterModal from '../../../modal/HotelFilterModal'

export default class HotelSearchResult extends Component {
    state = { modalOpen: false }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <KeyboardAwareScrollView style={{ flex: 1, }}>
                    <View style={{ flex: 2.2, }}>
                        <ImageBackground source={Images.header}
                            resizeMode={'cover'}
                            style={{ width: '100%', height: verticalScale(130), paddingBottom: 10 }}>
                            <View style={{
                                width: '100%', height: 60,
                                justifyContent: 'center', flexDirection: 'row', position: 'absolute', top: Platform.OS == 'android' ? verticalScale(15) : verticalScale(30),
                                paddingHorizontal: 10
                            }} >
                                <View
                                    style={{ flex: 8, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <Ionicons name="md-arrow-back" color={colors.white} size={35} onPress={() => Actions.pop()} />
                                    <Text style={styles.text}>Hotel Search Result</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                </View>
                                <View style={{ flex: 1, marginRight: scale(30) }}>
                                </View>

                            </View>
                            <View style={{
                                height: verticalScale(35),
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                position: 'relative',
                                top: verticalScale(110),
                                alignItems: 'center',
                                justifyContent: 'center'


                            }}>
                                <View style={{
                                    width: 350, justifyContent: "center", alignItems: "center",
                                    height: 50, backgroundColor: "white", borderRadius: 40, paddingRight: 20, paddingLeft: 20
                                }}>
                                    <Search
                                        placeholder={"Hotel . City . Country"}
                                        icon={<AntDesign name="search1" color={"black"} size={25} />}
                                    />
                                </View>

                            </View>
                        </ImageBackground>

                    </View>
                    <View style={{ flex: 7.6, marginTop: verticalScale(25) }}>
                        <ScrollView style={{ width: '100%', height: "100%" }}>
                            < HotelCard onPress={() => Actions.HotelDetail()} />
                            < HotelCard onPress={() => Actions.HotelDetail()} />
                            < HotelCard onPress={() => Actions.HotelDetail()} />
                        </ScrollView>

                    </View>
                    <ActionButton
                        buttonColor={colors.primaryColor}
                        onPress={() => { this.setState({ modalOpen: true }) }}
                    />
                    <HotelFilterModal
                        isOpen={this.state.modalOpen}
                        onClose={() => this.setState({ modalOpen: false })}
                        onOpen={() => this.setState({ modalOpen: true })}
                    />

                </KeyboardAwareScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    Hdng: {
        fontSize: 18,
        fontWeight: "700"
    },
    Title: {
        fontSize: 16,
        color: "#fff"
    },
    rectangle1750: {
        width: 250,
        height: 55,
        marginRight: 10,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 0,
        backgroundColor: '#ff484c',
        justifyContent: 'center',
        paddingLeft: 10

    },
    usdAdult: {
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '600',
    },
    includesFare: {

        color: '#fdfdfd',
        fontFamily: 'Poppins',
        fontSize: 8,
        fontWeight: '400',
    },
    multireisen: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: normalize(18),
        fontWeight: '600',
    },

    text: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.17,
        marginLeft: 20

    },
    path1227: {
        width: 150,
        height: 40,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: { width: 3, height: 0 },
        borderRadius: 25,
        shadowRadius: 16,
        backgroundColor: '#ffffff',
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    business: {
        color: '#313450',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: 10,
        fontWeight: '400',
    },
})