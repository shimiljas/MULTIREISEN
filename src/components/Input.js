/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
const Input = ({
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
    icon
}) => {
    return (
        <View style={styles.inputcontainer}>
            <View style={{ flex: 9, }}>
                <TextInput
                    style={{
                        fontFamily: fonts.fontPrimaryLight,
                        fontSize: normalize(16)
                    }}
                    value={value}
                    autoFocus={autoFocus}
                    mulitiline={mulitiline}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                {icon}
            </View>


        </View>
    );
}
export default Input

const styles = StyleSheet.create({
    inputcontainer: {
        width: '100%',
        height: scale(40),
        borderBottomWidth: 1,
        marginVertical: 20,
        borderColor: colors.borderColor,
        flexDirection: 'row'
    }
})
