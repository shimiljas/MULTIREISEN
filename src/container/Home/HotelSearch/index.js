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
                        Hotel Search Result
                       </Text>
                </View>
                <View style={{
                    width: 350, marginLeft: 17, justifyContent: "center", alignItems: "center",
                    height: 50, backgroundColor: "white", borderRadius: 40, paddingRight: 20, paddingLeft: 20
                }}>
                    <Input
                        placeholder={"Hotel . City . Country"}
                        icon={<AntDesign name="search1" color={"black"} size={25} />}
                    />
                </View>
                <View style={{
                    flex: 2.5, backgroundColor: 'white', minHeight: 100,
                    marginHorizontal: scale(20), borderRadius: 10, marginTop: 30
                }}>
                    <View style={{ flex: 6, }}>
                        <Image

                            style={{ flex: 1, borderRadius: 8 }}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ARooStZJvyeIRk4VPOtEhmgxwGwQUQy27OBnEm8N_2EEUBEYRA&s' }}
                        />
                    </View>
                    <View style={{ flex: 4, flexDirection: "row", overflow: 'hidden' }}>
                        <View style={{ flex: 6, marginLeft: 20, marginBottom: 15, justifyContent: "center" }}>
                            <Text style={styles.Hdng}>Hitman Ramos</Text>
                            <Text>India.Calicut</Text>
                        </View>
                        <View style={{ flex: 4, alignItems: 'flex-start', justifyContent: "center", marginRight: 20 }}>
                            <ImageBackground source={Images.redbutton} style={styles.rectangle1750} >
                                <Text style={styles.usdAdult}>313.33 USD/adult</Text>
                                <Text style={styles.includesFare}> includes: Fare + taxes</Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>

                <View style={{
                    flex: 2.5, backgroundColor: 'white', minHeight: 100,
                    marginHorizontal: scale(20), borderRadius: 10, marginTop: 30
                }}>
                    <View style={{ flex: 6, }}>
                        <Image

                            style={{ flex: 1, borderRadius: 8 }}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqj-QBUopWP-hcf_tnbkFlbndHMmDLDYhDNsapv0tNltDwXb-&s' }}
                        />
                    </View>
                    <View style={{ flex: 4, flexDirection: "row", overflow: 'hidden', }}>
                        <View style={{ flex: 6, marginLeft: 20, marginBottom: 15, justifyContent: "center" }}>
                            <Text style={styles.Hdng}>Royal Ramos</Text>
                            <Text>India.Calicut</Text>
                        </View>
                        <View style={{ flex: 4, alignItems: 'flex-start', justifyContent: "center", marginRight: 20 }}>
                            <ImageBackground source={Images.redbutton} style={styles.rectangle1750} >
                                <Text style={styles.usdAdult}>313.33 USD/adult</Text>
                                <Text style={styles.includesFare}> includes: Fare + taxes</Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>


                <View style={{ flex: 2.5, }}>
                </View>
            </ImageBackground >
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
})