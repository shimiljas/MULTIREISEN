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
//import Entypo from 'react-native-vector-icons/Entypo'
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
import { toast } from '../../../components/Toast'

import { Toast, } from 'native-base';
import * as api from '../../../utils/ApiManager/api'
export default class HotelSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '', Children: 2,
            previousRoomType: undefined,
            roomType: '',
            adults: '',
            checkInModal: false,
            checkOutModal: false,
            checkIn: '',
            Childern: '',
            checkOut: '',
            childrenAge: [],
            index: 0,
            textInput: [],
            inputData: []
        }


    }

    numbserInputChange = (i, text) => {
        if (i == 1) {
            this.setState({})
        }
    }


    even = (quotient) => {
        if (quotient == 0) return null
        let card = [];
        _.times(quotient, (i) => {
            let rand1 = Math.floor(Math.random() * 11)
            let rand2 = rand1 + 1
            card.push(
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <InputIcon half
                        placeholder={'Age'}
                        keyboardType={'numeric'}
                        returnKeyType={'done'}
                        onChangeText={text => this.numbserInputChange(rand1, text)}
                        icon={<Entypo name="user" size={20} color={'#898a8f'} />} />
                    <InputIcon
                        placeholder={'Age'}
                        keyboardType={'numeric'}
                        returnKeyType={'done'}
                        onChangeText={text => this.numbserInputChange(rand2, text)}
                        half icon={<Entypo name="user" size={20} color={'#898a8f'} />} />
                </View>
            );
        });
        return card

    }
    renderChildren = () => {
        const { textInput } = this.state
        let quotient = ~~(textInput.length / 2)
        let remainder = textInput % 2;
        return (
            <View style={{ flex: 1, }}>
                {this.even(quotient)}
                {remainder == 1 ? <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <InputIcon
                        half
                        placeholder={'Age'}
                        keyboardType={'numeric'}
                        returnKeyType={'done'}
                        icon={<Entypo name="user" size={20} color={'#898a8f'} />} />
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
    submit = () => {
        const { checkIn, checkOut, roomType, adults, NumberofRooms } = this.state
        const { searchHotel } = this.props
        searchHotel({
            "cityId": "104361",
            "checkIn": "2020-11-20",
            "checkOut": "2020-11-30",
            "rooms": [
                {
                    "roomType": "double",
                    "children": [
                        "8",
                        "1"
                    ]
                }
            ],
            "category": "0",
            "nationality": "IND",
            "residence": "IND"

        })
        return;
        if (!this.props.cityname) {
            toast({ type: 'danger', text: 'please enter city name' })
            return;
        }
        if (!this.props.code) {
            toast({ type: 'danger', text: 'please enter nationality' })
            return;
        }
        if (!NumberofRooms) {
            toast({ type: 'danger', text: 'please enter number of rooms' })
            return;
        }
        if (!checkIn) {
            toast({ type: 'danger', text: 'please enter check In' })
            return;
        }
        if (!checkOut) {
            toast({ type: 'danger', text: 'please enter check Out' })
            return;
        }
        if (!roomType) {
            toast({ type: 'danger', text: 'please enter  room type' })
            return;
        }
        if (!adults) {
            toast({ type: 'danger', text: 'please enter  adults count' })
            return;
        }


        console.log(this.state)
        console.log(this.props.name, this.props.code, this.props.cityname, this.props.cityid)
    }
    addTextInput = (index) => {
        let textInput = this.state.textInput;
        textInput.push(
            <InputIcon
                placeholder={'Age'}
                keyboardType={'numeric'}
                returnKeyType={'done'}
                onChangeText={(text) => this.addValues(text, index)}
                icon={<Entypo name="user" size={20} color={'#898a8f'} />} />
        );
        this.setState({ textInput });
    }

    //function to remove TextInput dynamically
    removeTextInput = () => {
        let textInput = this.state.textInput;
        let inputData = this.state.inputData;
        textInput.pop();
        inputData.pop();
        this.setState({ textInput, inputData });
    }

    //function to add text from TextInputs into single array
    addValues = (text, index) => {
        let dataArray = this.state.inputData;
        let checkBool = false;
        if (dataArray.length !== 0) {
            dataArray.forEach(element => {
                if (element.index === index) {
                    element.text = text;
                    checkBool = true;
                }
            });
        }
        if (checkBool) {
            this.setState({
                inputData: dataArray
            });
        }
        else {
            dataArray.push({ 'text': text, 'index': index });
            this.setState({
                inputData: dataArray
            });
        }
    }
    render() {
        const { roomType, Childern, adults, NumberofRooms } = this.state
        return (
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={Images.header}
                        resizeMode={'cover'}
                        style={{ flex: 1, width: '100%', height: verticalScale(130), marginBottom: 20 }}>
                        <TopHeader title={'Hotel'} />

                    </ImageBackground>
                </View>
                <View style={{
                    flex: 9,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: scale(32),
                    marginTop: verticalScale(15),
                }}>
                    <View style={styles.rectangle76}>

                        <InputIcon
                            placeholder={'Country,City ,Hotel '}
                            returnKeyType={'done'}
                            editable={false}
                            value={this.props.cityname}
                            onPress={() => Actions.CityList()}
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
                            value={NumberofRooms}
                            onChangeText={(text) => this.setState({ NumberofRooms: text })}
                            icon={<FontAwesome name="bed" size={25} color={'#898a8f'} />} />



                        {/* {this.renderChildren()} */}
                    </View>
                    <View style={styles.rectangle76}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <InputSelector
                                placeHolder={'Room Type'}
                                options={ROOM_TYPE}
                                value={roomType}
                                onValueChange={(text) => this.setState({ roomType: text })}
                                half icon={<FontAwesome name="bed" size={20} color={'#898a8f'} />} />
                            <InputIcon
                                placeholder={'Adults'}
                                value={adults}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}

                                onChangeText={(text) => this.setState({ adults: text })}
                                half icon={<Entypo name="users" size={20} color={'#898a8f'} />} />
                        </View>
                        <InputIcon
                            placeholder={'Number of Children'}
                            keyboardType={'numeric'}
                            returnKeyType={'done'}
                            value={Childern}
                            onChangeText={(text) => this.setState({ Childern: text })}
                            icon={<FontAwesome name="bed" size={25} color={'#898a8f'} />} />

                        {/* {this.renderChildren()} */}


                        {this.state.textInput.map((value) => {
                            return value
                        })}
                        <View style={{ width: scale(260), height: 60, justifyContent: 'center' }}>
                            <Touchable
                                onPress={() => this.addTextInput(this.state.textInput.length)}
                                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign name="plus" size={18} color={colors.grey} />
                                <Text style={{ color: colors.grey, marginLeft: 10 }}>Add child Age</Text>
                            </Touchable>


                        </View>

                    </View>
                    <View style={{ flex: 1, marginBottom: 10, alignItems: 'center', marginTop: 20 }}>
                        <Touchable
                            style={{ flex: 1 }}
                            onPress={this.submit}>
                            <ImageBackground
                                source={Images.submit}
                                resizeMode={'stretch'}
                                style={{ width: scale(300), height: verticalScale(50), borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Text style={styles.search}>Search</Text>

                            </ImageBackground>
                        </Touchable>
                    </View>

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

            </KeyboardAwareScrollView >)
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
        flex: 1,
        paddingVertical: 10,
        marginVertical: 10,
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