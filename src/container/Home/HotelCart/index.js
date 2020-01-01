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
import Step from "../../../components/Step"
import BackButton from '../../../components/BackButton'
export default class HotelCard extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <BackButton black onPress={() => Actions.pop()} />

                <View style={{ flex: 1, justifyContent: 'center', marginTop: 40, paddingHorizontal: 10 }}>
                    <Step />
                </View>
                <View style={{ flex: 7, justifyContent: 'flex-start', }}>
                    <View style={{
                        height: 340, width: 'auto', backgroundColor: 'white',
                        marginHorizontal: scale(20), borderRadius: 10,
                    }}>
                        <View style={{ width: "100%", height: 30, flexDirection: "row", marginTop: 30 }}>
                            <View style={{ flex: 7, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.Hdng}>Hilton Ramese - King Room</Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.Title}>$ 50</Text>
                            </View>

                        </View>
                        <View style={{ width: "100%", height: 30, flexDirection: "row", marginTop: 30 }}>
                            <View style={{ flex: 7, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.Hdng}>Hilton Ramese - Luxry Room</Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.Title}>$ 60</Text>
                            </View>

                        </View>
                        <View style={{ width: "100%", height: 30, flexDirection: "row", marginTop: 30 }}>
                            <View style={{ flex: 7, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.Hdng}>Hilton Ramese - VIP Room</Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.Title}>$ 90</Text>
                            </View>

                        </View>


                        <View style={{ width: "100%", height: 30, flexDirection: "row", marginTop: 15 }}>
                            <View style={{ flex: 7, justifyContent: "center", alignItems: "flex-start", marginLeft: 30 }}>
                                <Text style={styles.H}>Fees tax</Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.Title}>$ 0</Text>
                            </View>

                        </View>
                        <View style={{ width: "100%", height: 0.5, marginTop: 27, backgroundColor: 'black' }}>
                        </View>
                        <View style={{ width: "100%", marginBottom: 15, height: 30, flexDirection: "row", marginTop: 30 }}>
                            <View style={{ flex: 7, justifyContent: "center", alignItems: "flex-start", marginLeft: 25 }}>
                                <Text style={styles.Hdng}>Totoal</Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.Title}>$ 100</Text>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginBottom: 65, alignItems: 'center' }}>
                    <Touchable
                        style={{ flex: 1 }}
                        onPress={() => Actions.ContactPage()}>
                        <ImageBackground
                            source={Images.submit}
                            resizeMode={'stretch'}
                            style={{ width: 350, height: 60, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={styles.search}>Search</Text>

                        </ImageBackground>
                    </Touchable>
                </View>
            </View>
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


