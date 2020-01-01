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
export default class ContactPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 50, padding: 20, }}>
                <View style={{ flex: 1 }}>
                    <Step />
                </View>

                <View style={{ flex: 8, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                    <View style={{ width: '100%', height: 35, padding: 10 }}>
                        <Text style={{ fontFamily: fonts.fontPrimaryBold, color: 'black', fontSize: normalize(10) }}>Contact Information</Text>
                    </View>

                    <InputDropDown placeholder={'Title'} />

                    <InputIcon placeholder={'First Name'} />

                    <InputIcon placeholder={'Last Name'} />

                    <InputIcon placeholder={'Phone'} />
                    <InputIcon placeholder={'Email'} />
                    <InputDropDown placeholder={'Country'} />
                    <InputDropDown placeholder={'City'} />
                    <InputDropDown placeholder={'Adress'} />
                    <View style={{ width: '100%', height: 50, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 25, padding: 10 }}>
                        <Text style={{ fontFamily: fonts.fontPrimaryLight, fontSize: 10 }}>By booking this appoinment you agree to the T&C</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                    <Touchable
                        style={{ flex: 1 }}
                        onPress={() => Actions.FlightSearchResult()}>
                        <ImageBackground
                            source={Images.submit}
                            resizeMode={'stretch'}
                            style={{ width: 350, height: 60, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={styles.search}>Proceed To Payment</Text>

                        </ImageBackground>
                    </Touchable>
                </View>

            </View>)
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