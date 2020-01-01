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
export default class HotelSearch extends Component {
    state = { selected: '' }
    render() {
        const { selected } = this.state
        return (<ScrollView style={{ flex: 1, }}>

            <View style={{ flex: 2, }}>
                <ImageBackground source={Images.header}
                    resizeMode={'stretch'}
                    style={{ flex: 1, width: '100%', height: 150, }}>
                    <TopHeader title={'Hotel'} />

                </ImageBackground>
            </View>
            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <View style={styles.rectangle76}>

                    <InputIcon
                        placeholder={'Country,City ,Hotel '}
                        icon={<Entypo name="location-pin" size={25} color={'#898a8f'} />} />
                    <InputIcon
                        placeholder={'Passenger Nationality'}
                        icon={<Entypo name="user" size={20} color={'#898a8f'} />} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <InputIcon half
                            placeholder={'Check in'}
                            icon={<Entypo name="calendar" size={20} color={'#898a8f'} />} />
                        <InputIcon
                            placeholder={'Check in'}
                            half icon={<Entypo name="calendar" size={20} color={'#898a8f'} />} />
                    </View>
                    <InputIcon
                        placeholder={'Number of Rooms'}
                        icon={<FontAwesome name="bed" size={25} color={'#898a8f'} />} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <InputIcon half
                            placeholder={'Room Type'}
                            icon={<FontAwesome name="bed" size={20} color={'#898a8f'} />} />
                        <InputIcon
                            placeholder={'Adults'}
                            half icon={<Entypo name="users" size={20} color={'#898a8f'} />} />
                    </View>

                </View>

            </View>

            <View style={{ flex: 1, marginBottom: 10, alignItems: 'center', marginTop: 30 }}>
                <Touchable
                    style={{ flex: 1 }}
                    onPress={() => Actions.HotelSearchResult()}>
                    <ImageBackground
                        source={Images.submit}
                        resizeMode={'stretch'}
                        style={{ width: 350, height: 60, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text style={styles.search}>Search</Text>

                    </ImageBackground>
                </Touchable>
            </View>
        </ScrollView>)
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
        height: verticalScale(320),
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
    }
})