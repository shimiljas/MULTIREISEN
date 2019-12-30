import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native'
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
import OneWay from './components/oneway'
import MultiCity from './components/multicity'
import { Actions } from 'react-native-router-flux'
export default class Book extends Component {
    state = { selected: '' }
    render() {
        const { selected } = this.state
        return (<View style={{ flex: 1, }}>

            <View style={{ flex: 3, }}>
                <ImageBackground source={Images.header}
                    resizeMode={'stretch'}
                    style={{ flex: 1, width: '100%', height: 200, paddingBottom: 10 }}>
                    <View style={{
                        width: '100%', height: 80,
                        justifyContent: 'center', flexDirection: 'row', position: 'absolute', top: verticalScale(50),
                        paddingHorizontal: 10
                    }} >
                        <Touchable
                            onPress={() => Actions.drawerOpen()}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <SimpleLineIcons name="menu" color={colors.white} size={20} />
                        </Touchable>
                        <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.multireisen}>MULTIREISEN</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginRight: scale(30) }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.flight}>Flight</Text>
                                <Entypo name="chevron-down" color={colors.white} size={18} />
                            </View>
                        </View>
                    </View>

                    <View style={{
                        height: verticalScale(80),
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        position: 'relative',
                        bottom: -130

                    }}>
                        <View style={{ flex: 0.5, }}></View>
                        <View style={{ flex: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <RoundIcon selected={selected == 'oneway'} image={Images.oneway} onPress={() => this.setState({ selected: 'oneway' })} />
                            <RoundIcon selected={selected == 'round'} image={Images.round} onPress={() => this.setState({ selected: 'round' })} />
                            <RoundIcon s selected={selected == 'multi'} image={Images.multi} onPress={() => this.setState({ selected: 'multi' })} />
                        </View>
                        <View style={{ flex: 0.5, }}></View>
                    </View>

                </ImageBackground>
            </View>
            {selected == 'multi' ? < MultiCity /> : <OneWay />}

            <View style={{ flex: 1, marginBottom: 10, alignItems: 'center' }}>
                <Touchable
                    style={{ flex: 1 }}
                    onPress={() => Actions.FlightSearchResult()}>
                    <ImageBackground
                        source={Images.submit}
                        resizeMode={'stretch'}
                        style={{ width: 350, height: 60, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text style={styles.search}>Search</Text>

                    </ImageBackground>
                </Touchable>
            </View>
        </View>)
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
        marginTop: 10,
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