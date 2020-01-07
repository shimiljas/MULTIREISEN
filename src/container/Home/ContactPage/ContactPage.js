import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, ScrollView } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale, verticalScale } from '../../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { colors } from '../../../config/colors';
import RoundIcon from '../../../components/RoundIcon'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import InputIcon from '../../../components/InputIcon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LargeButton from '../../../components/LargeButton'
import Touchable from '../../../components/Tochable';
import { Actions } from 'react-native-router-flux'
import Step from '../../../components/Step'
import InputDropDown from '../../../components/InputDropDown'
import Header from '../../../components/Header'
import BackButton from '../../../components/BackButton'
export default class ContactPage extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, }}>
                <View style={{ width: "100%", height: 30, marginTop: verticalScale(30), marginVertical: scale(15) }}>
                    <BackButton black onPress={() => Actions.pop()} />

                </View>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <View style={{ flex: 1 }}>

                        <Step />
                    </View>

                    <View style={{ flex: 8.5, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                        <View style={{ width: '100%', height: 40, padding: 10, marginLeft: 21 }}>
                            <Text style={{ fontFamily: fonts.fontPrimaryBold, color: 'black', fontSize: normalize(13) }}>Contact Information</Text>
                        </View>

                        <InputDropDown placeholder={'Title'} />

                        <InputIcon placeholder={'First Name'} />

                        <InputIcon placeholder={'Last Name'} />

                        <InputIcon placeholder={'Phone'} />
                        <InputIcon placeholder={'Email'} />
                        <InputDropDown placeholder={'Country'} />
                        <InputDropDown placeholder={'City'} />
                        <InputDropDown placeholder={'Adress'} />
                        <View style={{ width: '100%', height: 40, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 25, padding: 10 }}>
                            <Text style={{ fontFamily: fonts.fontPrimaryLight, fontSize: 10 }}>By booking this appoinment you agree to the T&C</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 30, marginBottom: 40 }}>
                        <Touchable
                            style={{ flex: 1 }}

                            onPress={() => Actions.FlightSearchResult()}>
                            <ImageBackground
                                source={Images.submit}
                                resizeMode={'stretch'}
                                style={{ width: scale(300), height: verticalScale(50), borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Text style={styles.search}>Proceed To Payment</Text>

                            </ImageBackground>
                        </Touchable>
                    </View>
                </View>

            </ScrollView>)
    }
}

const styles = StyleSheet.create({
    search: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 14,
        fontWeight: '600',
    },
    multireisen: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: normalize(18),
        fontWeight: '600',
    },

    text: {
        color: colors.black,
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.17,
        marginLeft: 20

    },
})
