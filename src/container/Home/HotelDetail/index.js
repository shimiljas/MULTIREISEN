import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale } from '../../../utils/Responsive';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { Actions } from 'react-native-router-flux'
import { colors } from '../../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Touchable from '../../../components/Tochable'


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
export default class App extends Component {
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
                        Hotel Booking
                       </Text>
                </View>

                <ScrollView style={{ marginTop: 80 }}>
                    <View style={{
                        flex: 1, backgroundColor: 'white',
                        marginHorizontal: scale(20), borderRadius: 10, marginTop: 30
                    }}>
                        <View style={{ width: "100%", height: 50, marginTop: 20, marginLeft: 40, justifyContent: "center", }}>
                            <Text style={styles.Hdng}>Ramses Hilton</Text>
                            <Text style={styles.A}>India.Calicut</Text>
                        </View>
                        <View style={{ width: "100%", height: 30, flexDirection: "row" }}>
                            <View style={{ flex: 4.5, justifyContent: "center", alignItems: "flex-end" }}>
                                <Text style={styles.A}>Cancelation deadline</Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: "center", alignItems: "flex-start" }}>
                                <Text style={styles.Sub2}> : non-refundable</Text>
                            </View>
                            <TouchableOpacity style={{ flex: 2.5, justifyContent: "center", }}>
                                <Text style={styles.Sub}>  Show more</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "100%", height: 60, justifyContent: "center", flexDirection: "row", }}>
                            <View style={{ flex: 2, justifyContent: "center", alignItems: "flex-end" }}>
                                <EvilIcons name="location" color='green' size={25} />
                            </View>
                            <View style={{ flex: 8, justifyContent: "center", alignItems: "flex-start", marginRight: 50 }}>
                                <Text style={styles.Title}>Ramses.Cario.Egypt</Text>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 150, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ width: 300, height: 140, borderRadius: 15 }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtM0EfOA79vdR9izR7XYDSnHW9aS6vvsTBRVxkjSGFIRVdCw9d&s' }}
                            />
                        </View>
                        <View style={{
                            width: "100%", height: 30, marginLeft: 40,
                            justifyContent: "center", alignItems: "flex-start"
                        }}>
                            <Text style={styles.Hdng}>Photos</Text>
                        </View>
                        <ScrollView
                            horizontal style={{ width: "100%", height: 120, marginTop: 15 }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 180, height: 120, marginLeft: 15, borderRadius: 10 }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfO2Gl6nuGFrwxMeGmBz7GEe51heXlCtYoNjcIHzvBZe64kSsMQ&s' }}
                            />
                            <Image
                                resizeMode="contain"
                                style={{ width: 180, height: 120, marginLeft: 20, borderRadius: 10 }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fUfNlvrvHWW43Z4mx1PmOzaDNxtSaG3oywG3u2aQDG_yZCQzEw&s' }}
                            />
                            <Image
                                resizeMode="contain"
                                style={{ width: 180, height: 120, marginLeft: 20, borderRadius: 10 }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFwBVCiImgHA88uDcGUycwaRuILBqUOOv9OA0wnzcwEeXcSpI&s' }}
                            />
                        </ScrollView>


                        <View style={{ width: "100%", height: 20, flexDirection: "row", marginTop: 30 }}>
                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center",
                                marginLeft: 10, flexDirection: 'row'
                            }}>
                                <Fontisto name="earth" color='blue' size={20} />
                                <Text style={styles.B}>  internet access</Text>
                            </View>

                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center",
                                marginLeft: 10, flexDirection: 'row'
                            }}>
                                <Fontisto name="wifi" color='blue' size={20} />
                                <Text style={styles.B}>  WLAN access</Text>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 20, flexDirection: "row", marginTop: 10 }}>
                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center",
                                marginLeft: 10, flexDirection: 'row'
                            }}>
                                <Fontisto name="wifi" color='blue' size={20} />
                                <Text style={styles.B}>    WLAN access</Text>
                            </View>

                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center",
                                marginLeft: 10, flexDirection: 'row'
                            }}>
                                <Ionicons name="md-arrow-back" color='blue' size={20} />
                                <Text style={styles.B}> Room Serivces</Text>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 20, flexDirection: "row", marginTop: 10 }}>
                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center",
                                marginLeft: 10, flexDirection: 'row'
                            }}>
                                <MaterialCommunityIcons name="room-service" color='blue' size={20} />
                                <Text style={styles.B}>    Room access</Text>
                            </View>

                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center",
                                marginLeft: 10, flexDirection: 'row'
                            }}>
                                <FontAwesome name="shower" color='blue' size={20} />
                                <Text style={styles.B}> Shower & Bathroom</Text>
                            </View>
                        </View>
                        <View style={{
                            width: "100%", height: 50, marginLeft: 40,
                            justifyContent: "center", alignItems: "flex-start"
                        }}>
                            <Text style={styles.Hdng}>Rooms</Text>
                        </View>

                        <View style={{
                            width: 320, height: 120, borderRadius: 12,
                            borderWidth: 1, margin: 15, justifyContent: "center"
                        }}>
                            <View style={{ flex: 1, margin: 15 }}>
                                <Text style={styles.B}>SINGLE STANDARD NON-REFUNDABLE</Text>
                                <Text style={styles.B}>(ROOM ONLY)</Text>
                            </View>
                            <View style={{ flex: 1, margin: 15 }}>
                                <Text style={styles.Hdng}>855.55 $</Text>
                            </View>

                        </View>
                        <View style={{ width: "100%", height: 50, alignItems: "center", marginLeft: 70 }}>
                            <TouchableOpacity style={{
                                width: 140, height: 45, justifyContent: "center", alignItems: "center",
                                bottom: 40, backgroundColor: "red", borderRadius: 20
                            }}>
                                <Text style={styles.C}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: 320, height: 120, borderRadius: 12,
                            borderWidth: 1, margin: 15, justifyContent: "center"
                        }}>
                            <View style={{ flex: 1, margin: 15 }}>
                                <Text style={styles.B}>SINGLE STANDARD NON-REFUNDABLE</Text>
                                <Text style={styles.B}>(ROOM ONLY)</Text>
                            </View>
                            <View style={{ flex: 1, margin: 15 }}>
                                <Text style={styles.Hdng}>855.55 $</Text>
                            </View>

                        </View>
                        <View style={{ width: "100%", height: 50, alignItems: "center", marginLeft: 70 }}>
                            <TouchableOpacity style={{
                                width: 140, height: 45, justifyContent: "center", alignItems: "center",
                                bottom: 40, backgroundColor: "red", borderRadius: 20
                            }}>
                                <Text style={styles.C}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: 320, height: 120, borderRadius: 12,
                            borderWidth: 1, margin: 15, justifyContent: "center"
                        }}>
                            <View style={{ flex: 1, margin: 15 }}>
                                <Text style={styles.B}>SINGLE STANDARD NON-REFUNDABLE</Text>
                                <Text style={styles.B}>(ROOM ONLY)</Text>
                            </View>
                            <View style={{ flex: 1, margin: 15 }}>
                                <Text style={styles.Hdng}>855.55 $</Text>
                            </View>

                        </View>
                        <View style={{ width: "100%", height: 50, alignItems: "center", marginLeft: 70 }}>
                            <TouchableOpacity style={{
                                width: 140, height: 45, justifyContent: "center", alignItems: "center",
                                bottom: 40, backgroundColor: "red", borderRadius: 20
                            }}>
                                <Text style={styles.C}>See Details</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </ScrollView>



            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    Hdng: {
        fontSize: 15,
        color: "grey"

    },
    Title: {
        fontSize: 13,
        color: "grey"
    },
    Sub: {
        fontSize: 13,
        color: "blue",
        fontWeight: "bold"
    },
    Sub2: {
        fontSize: 13,
        color: "red"

    },
    A: {
        fontSize: 13
    },
    B: {
        fontSize: 15
    },
    C: {
        fontSize: 15,
        color: "#fff"
    }
})