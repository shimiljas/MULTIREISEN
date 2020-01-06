/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
const Search = ({
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                {icon}
            </View>

            <View style={{ flex: 9,justifyContent:'center',  marginLeft: 10 }}>
                <TextInput
                    style={{
                        // fontFamily: fonts.fontPrimaryLight,
                        fontSize: normalize(16),
                        justifyContent:'center',
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


        </View>
    )

}


export default Search

const styles = StyleSheet.create({
    inputcontainer: {
        width: '100%',
        height: verticalScale(43),
        marginVertical: 20,
        flexDirection: 'row',
        alignItems:'center'
    }
})