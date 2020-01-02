import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
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

import Header from '../../../components/Header'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

export default class HotelCheckout extends Component {
    render() {
        return (

            <View style={{
                width: '100%', height: '100%',
                alignItems: 'center'
            }}>

                <Header title={'Hotel Booking'} />

                <View style={{
                    flex: 8, backgroundColor: 'white', width: '85%', minHeight: 100,
                    marginHorizontal: (20), borderRadius: 10, marginTop: verticalScale(30),
                    position: 'absolute',
                    top: 120
                }}>
                    <View style={{ width: "100%", height: 30, flexDirection: "row", marginTop: 30 }}>
                        <View style={{ flex: 7, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.Hdng}>Hilton Ramese - King Room</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.Title}>$ 50</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <AntDesign name="delete" color='grey' size={23} />
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 30, flexDirection: "row", marginTop: 30 }}>
                        <View style={{ flex: 7, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.Hdng}>Hilton Ramese - Luxry Room</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.Title}>$ 60</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <AntDesign name="delete" color='grey' size={23} />
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 30, flexDirection: "row", marginTop: 30 }}>
                        <View style={{ flex: 7, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.Hdng}>Hilton Ramese - VIP Room</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.Title}>$ 90</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <AntDesign name="delete" color='grey' size={23} />
                        </View>
                    </View>


                    <View style={{ width: "100%", height: 30, flexDirection: "row", marginTop: 15 }}>
                        <View style={{ flex: 7, justifyContent: "center", alignItems: "flex-start", marginLeft: 30 }}>
                            <Text style={styles.H}>Fees tax</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
                            <Text style={styles.Title}>$ 0</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            {/* <AntDesign name="delete" color='grey' size={23} /> */}
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 0.5, marginTop: 27, borderBottomWidth: 1, borderBottomColor: 'grey', backgroundColor: 'grey' }}>
                    </View>
                    <View style={{ width: "100%", height: 80, flexDirection: "row", }}>
                        <View style={{ flex: 7, justifyContent: "center", alignItems: "flex-start", marginLeft: 30 }}>
                            <Text style={styles.H}>Total</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "flex-start" }}>
                            <Text style={styles.Title}>$ 100</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            {/* <AntDesign name="delete" color='grey' size={23} /> */}
                        </View>
                    </View>
                </View>


                <View style={{ flex: 2.7, justifyContent: "center", alignItems: "center", marginTop: 230 }}>
                    <Touchable
                        onPress={() => Actions.HotelCart()}>
                        <ImageBackground
                            source={Images.submit}
                            resizeMode={'stretch'}
                            style={{ width: 350, height: 60, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={styles.search}>Proceed To Payment</Text>

                        </ImageBackground>
                    </Touchable>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    Hdng: {
        fontSize: 16,
        fontWeight: "700"
    },
    Title: {
        fontSize: 16,
        color: "grey"
    },
    H: {
        fontSize: 16,
        color: "grey"
    },
    T: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff"
    },
    search: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 14,
        fontWeight: '600',
    }
})