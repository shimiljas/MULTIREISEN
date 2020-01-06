/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
import LinearGradient from 'react-native-linear-gradient';
import Touchable from './Tochable'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux'
import Images from '../resources/images'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import ActionSheet from 'react-native-action-sheet';
const BUTTONSiOS = [
    'Flight',
    'Hotel',
    'Cancel'
];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 2;

export default class TopHeader extends Component {
    changeMode = () => {
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONSiOS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
            tintColor: 'blue'
        },
            (buttonIndex) => {

                if (buttonIndex === 1) {
                    Actions.HotelSearch()
                    return;
                }

                if (buttonIndex === 0) {
                    Actions.Book()
                    return;
                }


                console.log('button clicked :', buttonIndex);
            });
    }
    render() {
        const { title } = this.props
        return (
            <View style={{
                width: '100%', height:verticalScale( 50),
                justifyContent: 'center', flexDirection: 'row', position: 'absolute', top: verticalScale(40),
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
                    <Touchable style={{ flexDirection: 'row', }}
                        onPress={this.changeMode}
                    >
                        <Text style={styles.flight}>{title}</Text>
                        <Entypo name="chevron-down" color={colors.white} size={18} />
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