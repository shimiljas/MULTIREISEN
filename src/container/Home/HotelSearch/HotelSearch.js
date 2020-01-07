/* eslint-disable prettier/prettier */
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
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'
import TopHeader from '../../../components/TopHeader'
import _ from 'lodash'
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
const ROOM_TYPE = [
    {
        label: 'Single bed',
        value: 'single',
    },
    {
        label: 'Double bed',
        value: 'double',
    },
    {
        label: 'Twin bed',
        value: 'twin',
    },
    {
        label: 'Triple bed',
        value: 'triple',
    },
    {
        label: 'Quad bed',
        value: 'quad',
    },
    {
        label: 'Twin bed for solo use',
        value: 'solo',
    },
];

import InputSelector from '../../../components/InputSelector'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



export default class HotelSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '', Children: 0,
            previousRoomType: undefined,
            roomType: '',
            checkInModal: false,
            checkOutModal: false,
            checkIn: '',
            checkOut: ''
        }


    }


    even = (quotient) => {
        if (quotient == 0) return null
        let card = [];
        _.times(quotient, () => {
            card.push(
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <InputIcon half
                        placeholder={'Age'}
                        keyboardType={'numeric'}
                        returnKeyType={'done'}
                        icon={<AntDesign name="eye" size={20} color={'#898a8f'} />} />
                    <InputIcon
                        placeholder={'Age'}
                        keyboardType={'numeric'}
                        returnKeyType={'done'}
                        half icon={<AntDesign name="eye" size={20} color={'#898a8f'} />} />
                </View>
            );
        });
        return card

    }
    renderChildren = () => {
        const { Childern } = this.state
        let quotient = ~~(Childern / 2)
        let remainder = Childern % 2;
        return (
            <View style={{ flex: 1 }}>
                {this.even(quotient)}
                {remainder == 1 ? <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <InputIcon half
                        placeholder={'Age'}
                        keyboardType={'numeric'}
                        returnKeyType={'done'}
                        icon={<AntDesign name="eye" size={20} color={'#898a8f'} />} />
                </View> : null}
            </View>
        )
    }

    hideDatePickerCheckIn = () => {
        this.setState({ checkInModal: false })
    };

    handleConfirmCheckIn = date => {
        this.setState({ checkIn: moment(date).format('YYYY-MM-DD') })
        //console.log(moment(date).format('YYYY-MM-DD'))
        this.hideDatePickerCheckIn();
    };


    hideDatePickerCheckOut = () => {
        this.setState({ checkOutModal: false })
    };

    handleConfirmCheckOut = date => {
        this.setState({ checkOut: moment(date).format('YYYY-MM-DD') })
        //console.log(moment(date).format('YYYY-MM-DD'))
        this.hideDatePickerCheckOut();
    };
    render() {
        const { roomType, Childern } = this.state
        return (
            <KeyboardAwareScrollView style={{ flex: 1, }}>

                <View style={{ flex: 2 }}>
                    <ImageBackground source={Images.header}
                        resizeMode={'cover'}
                        style={{ flex: 1, width: '100%', height: verticalScale(130), marginBottom: 30 }}>
                        <TopHeader title={'Hotel'} />

                    </ImageBackground>
                </View>

                <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <View style={styles.rectangle76}>

                        <InputIcon
                            placeholder={'Country,City ,Hotel '}
                            returnKeyType={'done'}

                            icon={<Entypo name="location-pin" size={25} color={'#898a8f'} />} />
                        <InputIcon
                            placeholder={'Passenger Nationality'}
                            returnKeyType={'done'}
                            editable={false}
                            value={this.props.code}
                            onPress={() => Actions.Country()}
                            icon={<Entypo name="user" size={20} color={'#898a8f'} />} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <InputIcon half
                                onPress={() => this.setState({ checkInModal: true })}
                                editable={false}
                                value={this.state.checkIn}
                                placeholder={'Check In'}
                                icon={<Entypo name="calendar" size={20} color={'#898a8f'} />} />
                            <InputIcon
                                onPress={() => this.setState({ checkOutModal: true })}
                                placeholder={'Check Out'}
                                editable={false}
                                value={this.state.checkOut}
                                half icon={<Entypo name="calendar" size={20} color={'#898a8f'} />} />
                        </View>
                        <InputIcon
                            placeholder={'Number of Rooms'}
                            keyboardType={'numeric'}
                            returnKeyType={'done'}
                            icon={<FontAwesome name="bed" size={25} color={'#898a8f'} />} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <InputSelector
                                placeHolder={'Room Type'}
                                value={roomType}
                                returnKeyType={'done'}
                                options={ROOM_TYPE}
                                onValueChange={value => this.setState({ roomType: value })}
                                half icon={<Entypo name="users" size={20} color={'#898a8f'} />}
                            />
                            <InputIcon
                                placeholder={'Adults'}
                                value={Childern}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                                onChangeText={(text) => this.setState({ Childern: text })}
                                half icon={<Entypo name="users" size={20} color={'#898a8f'} />} />
                        </View>

                        {this.renderChildren()}
                    </View>

                </View>

                <View style={{ flex: 1, marginBottom: 10, alignItems: 'center', marginTop: 30 }}>
                    <Touchable
                        style={{ flex: 1 }}
                        onPress={() => Actions.HotelSearchResult()}>
                        <ImageBackground
                            source={Images.submit}
                            resizeMode={'stretch'}
                            style={{ width: scale(300), height: verticalScale(50), borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={styles.search}>Search</Text>

                        </ImageBackground>
                    </Touchable>
                </View>
                <DateTimePickerModal
                    isVisible={this.state.checkInModal}
                    mode="date"
                    onConfirm={this.handleConfirmCheckIn}
                    onCancel={this.hideDatePickerCheckIn}
                    minimumDate={new Date()}
                />
                <DateTimePickerModal
                    isVisible={this.state.checkOutModal}
                    mode="date"
                    onConfirm={this.handleConfirmCheckOut}
                    onCancel={this.hideDatePickerCheckOut}
                    minimumDate={new Date()}
                />
                <View style={{ width: '100%', height: 50 }} />
            </KeyboardAwareScrollView>)
    }
}

const styles = StyleSheet.create({
    multireisen: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: normalize(18),
        fontWeight: '600',
    },
    flight: {
        width: 45,
        height: 30,
        color: '#f6f6f6',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: 15,
        fontWeight: '600',
    },
    rectangle76: {
        width: scale(300),
        height: '100%',
        paddingVertical: 10,
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 29,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 14,
        fontWeight: '600',
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
})