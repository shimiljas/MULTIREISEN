/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
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
/**
 * title: to set button title
 * onPress :function on button press navigation
 * disabled : Set button enable or disable
 * type: button type small, medium ,large
 * styleContainer: container style for button
 * titleStyle:style of button text only

 */

const Button = ({
    title,
    onPress,
    size,
    style,
    loading,
    disabled,
    loadingText,
    ContainerStyle,
}) => {
    let buttonStyle = style;
    switch (size) {
        case 'xsmall':
            buttonStyle = {
                ...style,
                ...styles.xsmallButton,
            };
            break;
        case 'small':
            buttonStyle = {
                ...style,
                ...styles.smallButton,
            };
            break;
        case 'medium':
            buttonStyle = {
                ...style,
                ...styles.mediumButton,
            };
            break;
        case 'large':
            buttonStyle = {
                ...style,
                ...styles.largeButton,
            };
            break;
        default:
            buttonStyle = {
                ...style,
            };
            break;
    }
    return (

        <Touchable
            style={[
                buttonStyle,
                ContainerStyle,
            ]}
            disabled={loading || disabled}
            onPress={onPress}>
            <LinearGradient
                style={[
                    buttonStyle,
                    ContainerStyle,
                ]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#6ec6f7', '#6e7af7']}>
                {loading ? (
                    <ActivityIndicator size="large" color="white" />
                ) : (
                        <Text style={styles.titleStyle}>{title}</Text>
                    )}
            </LinearGradient>
        </Touchable>
    );
};
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    buttonStyle: {
        height: hp('6%'),
        width: 100,

        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    xsmallButton: {
        height: hp('4%'),
        width: '30%',

        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallButton: {
        height: hp('5%'),
        width: '40%',

        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mediumButton: {
        height: hp('7%'),
        width: '80%',

        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    largeButton: {
        height: hp('8%'),
        width: '90%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        color: colors.white,
        justifyContent: 'center',
        fontFamily: fonts.fontPrimaryBold,
        textAlign: 'center',
        fontSize: normalize(20)
    },
});

Button.defaultProps = {
    title: 'Enter title',

    size: 'small',
    onPress: buttonPress,
};

function buttonPress() {
    console.log('koo');
}
export default Button;
