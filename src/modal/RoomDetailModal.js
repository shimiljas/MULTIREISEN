/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, ImageBackground, ScrollView } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
import LinearGradient from 'react-native-linear-gradient';
import Touchable from '../components/Tochable'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Images from '../resources/images'
import { Dropdown } from 'react-native-material-dropdown';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Entypo from 'react-native-vector-icons/Entypo'

import Modal from 'react-native-modalbox';
let data = [{
    value: 'Banana',
}, {
    value: 'Mango',
}, {
    value: 'Pear',
}];

const radio_props = [
    { label: 'Lowest Price', value: 0 },
    { label: 'Near by me', value: 1 },
];

import { Rating, AirbnbRating } from 'react-native-ratings';

import RangeSlider from 'rn-range-slider';
import Feather from 'react-native-vector-icons/Feather'

import InfoItem from './components/InfoItem'
import { Actions } from 'react-native-router-flux';
export default class RoomDetailModal extends Component {
    render() {
        const { isOpen, onClose, onOpen } = this.props
        return (
            <Modal
                style={{
                    width: '100%',
                    paddingTop: 20,
                    height: '100%',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    padding: 20
                }}
                ref={"modal1"}
                position={'center'}
                isOpen={isOpen}
                swipeToClose={false}
                onClosed={onClose}
                onOpened={onOpen}
            >
                <ScrollView style={{ width: '100%', height: 600, backgroundColor: 'white', borderRadius: 15 }}>
                    <View style={{ flex: 1, flexDirection: "row", }} >
                        <View style={{ flex: 8, justifyContent: 'center', padding: 13 }}>
                            <Text styles={styles.text}>SINGLE STANDARD NON-REFUNDABDLE</Text>
                            <Text styles={styles.text}>(ROOM ONLY)</Text>
                        </View>
                        <Touchable
                            onPress={onClose}
                            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo
                                name="cross"
                                size={35}
                                color={'black'}
                            />
                        </Touchable>
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                        <View style={{ flex: 1, }} >
                        </View>
                        <View style={{ flex: 9, alignItems: 'flex-start', justifyContent: 'center' }} >
                            <Text styles={styles.notes}>Cancellation deadline: non-refundable</Text>
                        </View>

                    </View>
                    <View style={{ flex: 4, }} >
                        <InfoItem />

                        <InfoItem />
                    </View>
                    <View style={{ flex: 1, }} >
                        <View style={{ width: '100%', height: '10%', marginTop: 10, alignItems: 'center' }}>
                            <Touchable
                                style={{ flex: 1 }}
                                onPress={() => Actions.HotelCheckout()}>
                                <ImageBackground
                                    source={Images.submit}
                                    resizeMode={'stretch'}
                                    style={{ width: 290, height: 60, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Text style={styles.search}>Select the room</Text>

                                </ImageBackground>
                            </Touchable>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }} >
                        <Text styles={styles.notes}>By booking appoinment you agree to the T&C</Text>
                    </View>
                    <View style={{ width: '100%', height: 20 }} />
                </ScrollView>
            </Modal >
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.fontPrimaryBold,
        color: 'black',
        fontSize: normalize(25),
        textAlign: 'left',
        fontWeight: 'bold'
    },
    notes: {
        fontFamily: fonts.fontPrimaryLight,
        color: 'black',
        fontSize: normalize(20),
        textAlign: 'left',
    }, search: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 14,
        fontWeight: '600',
    }
})