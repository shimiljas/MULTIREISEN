/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
import Touchable from './Tochable';
const InputIcon = ({
    style,
    label,
    autoFocus,
    mulitiline,
    placeholderTextColor,
    autoCapitalize,
    keyboardType,
    onChangeText,
    value,
    onSubmitEditing,
    labelStyle,
    secureTextEntry,
    error,
    editable,
    ContainerStyle,
    onFocus,
    returnKeyType,
    errorColor,
    onTouchStart,
    placeholder,
    autoCorrect,
    textColor,
    icon,
    onPress,
    half
}) => {
    if (editable) {
        return (
            <View style={half ? styles.rectangle93 : styles.rectangle90} >
                <View style={half ? styles.container1 : styles.container12}>
                    <TextInput
                        style={{
                            fontFamily: fonts.fontPrimaryLight,
                            fontSize: normalize(12),
                            paddingLeft: 10
                        }}
                        returnKeyType={returnKeyType}
                        value={value}
                        autoFocus={autoFocus}
                        mulitiline={mulitiline}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        placeholderStyle={{
                            fontFamily: fonts.fontPrimaryLight,
                            fontSize: normalize(10),
                        }}
                        placeholderTextColor={placeholderTextColor}
                        autoCapitalize={autoCapitalize}
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                    />
                </View>
                <View style={half ? styles.container2 : styles.container21}>
                    {icon}
                </View>
            </View>
        )
    } else {
        return (
            <Touchable
                onPress={onPress}
                style={half ? styles.rectangle93 : styles.rectangle90} >
                <View style={half ? styles.container1 : styles.container12}>
                    <TextInput
                        style={{
                            fontFamily: fonts.fontPrimaryLight,
                            fontSize: normalize(12),
                            paddingLeft: 10
                        }}
                        editable={false}
                        value={value}
                        autoFocus={autoFocus}
                        mulitiline={mulitiline}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        placeholderStyle={{
                            fontFamily: fonts.fontPrimaryLight,
                            fontSize: normalize(10),
                        }}
                        placeholderTextColor={placeholderTextColor}
                        autoCapitalize={autoCapitalize}
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                    />
                </View>
                <View style={half ? styles.container2 : styles.container21}>
                    {icon}
                </View>
            </Touchable>
        )
    }
}
InputIcon.defaultProps = {
    editable: true,
    onPress: () => { }
}
const styles = StyleSheet.create({
    rectangle90: {
        width: '90%',
        marginHorizontal: 30,
        height: verticalScale(44),
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
        width: '42%',
        height: verticalScale(44),
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

export default InputIcon