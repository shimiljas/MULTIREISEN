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
import ActionButton from 'react-native-action-button';

const data = [
    'Economy', 'Business', 'Non-Stops', 'normal'
]
import ResultCard from './component/ResultCard'
import FlightFilterModal from '../../../modal/FlightFilterModal'

export default class FlightSearch extends Component {
    state = { modalOpen: false }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ flex: 2.4, }}>
                    <ImageBackground source={Images.header}
                        resizeMode={'stretch'}
                        style={{ width: '100%', height: 180, paddingBottom: 10 }}>
                        <View style={{
                            width: '100%', height: 80,
                            justifyContent: 'center', flexDirection: 'row', position: 'absolute', top: verticalScale(50),
                            paddingHorizontal: 10
                        }} >
                            <Touchable
                                onPress={() => Actions.pop()}
                                style={{ flex: 8, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Ionicons name="md-arrow-back" color={colors.white} size={35} />
                                <Text style={styles.text}>Flight Search Result</Text>
                            </Touchable>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            </View>
                            <View style={{ flex: 1, marginRight: scale(30) }}>
                            </View>

                        </View>
                        <View style={{
                            height: verticalScale(35),
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            position: 'relative',
                            bottom: -150,


                        }}>
                            <ScrollView
                                horizontal


                                showsHorizontalScrollIndicator={false}
                            >
                                {data.map((item) => <View style={styles.path1227} ><Text style={styles.business}>{item}</Text></View>)}

                            </ScrollView>
                        </View>
                    </ImageBackground>

                </View>
                <View style={{ flex: 7.6, alignItems: 'center', paddingTop: 10, }}>
                    <View style={{ width: '100%', height: '100%', alignItems: 'center', }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <ResultCard bookingNow={() => Actions.FlightBookConfirm()} />
                            <ResultCard bookingNow={() => Actions.FlightBookConfirm()} />
                            <ResultCard bookingNow={() => Actions.FlightBookConfirm()} />
                            <ResultCard bookingNow={() => Actions.FlightBookConfirm()} />
                            <ResultCard bookingNow={() => Actions.FlightBookConfirm()} />
                            <ResultCard bookingNow={() => Actions.FlightBookConfirm()} />
                        </ScrollView>
                    </View>
                </View>
                <ActionButton
                    buttonColor={colors.primaryColor}
                    onPress={() => { this.setState({ modalOpen: true }) }}
                />
                <FlightFilterModal
                    isOpen={this.state.modalOpen}
                    onClose={() => this.setState({ modalOpen: false })}
                    onOpen={() => this.setState({ modalOpen: true })}
                />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    multireisen: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: normalize(18),
        fontWeight: '600',
    },

    text: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.17,
        marginLeft: 20

    },
    path1227: {
        width: 150,
        height: 40,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: { width: 3, height: 0 },
        borderRadius: 25,
        shadowRadius: 16,
        backgroundColor: '#ffffff',
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    business: {
        color: '#313450',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: 10,
        fontWeight: '400',
    },
})