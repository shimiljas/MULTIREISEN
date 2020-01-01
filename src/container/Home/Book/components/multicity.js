import React, { Component } from 'react';
import { View, Image, ScrollView, Text, StyleSheet } from 'react-native'
import Images from '../../../../resources/images'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import { scale, verticalScale } from '../../../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { fonts } from '../../../../config/fonts';
import { normalize } from '../../../../utils/Fontnormalize';
import { colors } from '../../../../config/colors';
import RoundIcon from '../../../../components/RoundIcon'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import InputIcon from '../../../../components/InputIcon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LargeButton from '../../../../components/LargeButton'
import Touchable from '../../../../components/Tochable';

import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
import OneWay from './oneway'
export default class MultiCity extends Component {

    renderHeader = (item, expanded) => {
        return (
            <View style={styles.rectangle76} >
                <View style={{ flex: 9, justifyContent: 'center', paddingLeft: 15 }}>
                    <Text style={styles.flight1}>Flight 1</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 10 }}>
                    {/* <Image source={Images.back}
                        style={{
                            width: 10,
                            height: 19,
                        }}
                    /> */}
                    <Entypo name={expanded ? "chevron-down" : "chevron-left"} size={30} color={'#6ecaf7'} />
                </View>
            </View>
        )
    }
    renderContent = () => {
        return (<OneWay roundTrip />)
    }
    render() {
        return (
            <View style={{ flex: 6, }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ width: '95%', padding: 20 }}>
                        <Accordion dataArray={dataArray} expanded={0}
                            style={{ borderWidth: 0 }}
                            renderContent={this.renderContent}
                            renderHeader={this.renderHeader} />
                    </View>
                    <View style={styles.rectangle1744}>
                        <Ionicons name="ios-add-circle-outline" color={'#6ecaf7'} size={20} />
                        <Text style={styles.addA}>Add A Flight</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rectangle76: {
        width: '100%',
        height: 83,
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 29,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginVertical: 10

    },
    flight1: {
        width: 70,
        height: 36,
        color: '#6ecaf7',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.01,
        lineHeight: 35,
    },
    rectangle1744: {
        width: '84%',
        height: 56,
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 29,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15
    },
    addA: {
        color: '#6ecaf7',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.01,
        lineHeight: 35,
        marginLeft: 10
    },
})