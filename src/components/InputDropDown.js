/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
import Touchable from './Tochable';
import ActionSheet from 'react-native-action-sheet';
import Entypo from 'react-native-vector-icons/Entypo'
const BUTTONS = [
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancel'
];


class InputDropDown extends Component {
    openSheet = () => {
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: this.props.CANCEL_INDEX,
            destructiveButtonIndex: this.props.DESTRUCTIVE_INDEX,
            tintColor: 'blue'
        },
            (buttonIndex) => {
                console.log('button clicked :', buttonIndex);
            });
    }
    render() {
        const {
            autoFocus,
            mulitiline,
            placeholderTextColor,
            autoCapitalize,
            keyboardType,
            onChangeText,
            value,
            secureTextEntry,
            placeholder,
            half } = this.props
        return (
            <Touchable style={half ? styles.rectangle93 : styles.rectangle90} onPress={this.openSheet}>
                <View style={half ? styles.container1 : styles.container12}>
                    <TextInput
                        style={{
                            fontFamily: fonts.fontPrimaryLight,
                            fontSize: normalize(12),
                            paddingLeft: 10
                        }}
                        value={value}
                        autoFocus={autoFocus}
                        mulitiline={mulitiline}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        placeholderStyle={{
                            fontFamily: fonts.fontPrimaryLight,
                            fontSize: normalize(10),
                        }}
                        editable={false}
                        placeholderTextColor={placeholderTextColor}
                        autoCapitalize={autoCapitalize}
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                    />
                </View>
                <View style={half ? styles.container2 : styles.container21}>
                    <Entypo name="chevron-down" size={25} color={'#898a8f'} />
                </View>
            </Touchable>

        )
    }
}
const styles = StyleSheet.create({
    rectangle90: {
        width: '90%',
        marginHorizontal: 30,
        height: verticalScale(40),
        borderRadius: 9,
        marginVertical: 7,
        borderColor: '#d6d6d6',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',

    },
    container1: {
        flex: 8,
        justifyContent: 'center'
    },
    container12: {
        flex: 9,
        justifyContent: 'center'
    },
    container2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5

    },
    container21: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5

    },
    rectangle93: {
        width: 150,
        height: verticalScale(40),
        borderRadius: 9,
        borderColor: '#d6d6d6',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 7,
    },
})

export default InputDropDown