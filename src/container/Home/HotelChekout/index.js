import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
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


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
export default class SignupScreen extends Component {
    render() {
        return (

            <ImageBackground source={Images.loginpage} style={{ width: '100%', height: '100%', }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                        <Touchable
                            style={{
                                flex: 1,
                                width: 50, height: 50,
                                position: 'absolute',
                                top: 50,
                                alignItems: 'center', justifyContent: 'center'
                            }} onPress={() => Actions.pop()}>
                            <AntDesign name="close" color={colors.white} size={35} />
                        </Touchable>

                    </View>
                    <View style={{ flex: 8, alignItems: 'flex-start', justifyContent: 'center', paddingTop: 70 }}>
                        <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(25), color: 'white' }} >
                            Booking Room
                       </Text>
                    </View>
                </View>


                <View style={{
                    flex: 4.5, backgroundColor: 'white', minHeight: 100,
                    marginHorizontal: scale(20), borderRadius: 10, marginTop: 30
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
                    <View style={{ width: "100%", height: 1, marginTop: 27, backgroundColor: 'black' }}>
                    </View>
                    <View style={{ width: "100%", height: 30, flexDirection: "row", marginTop: 30 }}>
                        <View style={{ flex: 6, justifyContent: "center", alignItems: "flex-start", marginLeft: 25 }}>
                            <Text style={styles.Hdng}>Totoal</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.Title}>$ 100</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            {/* <AntDesign name="delete" color='grey' size={23} /> */}
                        </View>
                    </View>
                </View>


                <View style={{ flex: 2.7, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{
                        width: 330, height: 60, borderRadius: 35, backgroundColor: 'blue',
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(20), color: 'white' }}>
                            Proceed To Payment
                    </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
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
    }
})