
'use strict';

import React, { Component } from 'react';
import {
    Image,
    TouchableHighlight,
    Text,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Platform
} from 'react-native';
import { colors } from '../config/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from '../config/BaseStyle'
class BackButton extends Component {
    render() {
        const { black } = this.props
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <View style={{ flex: .5 }}>
                    <TouchableHighlight
                        hitSlop={{ top: 20, bottom: 10, left: 10, right: 10 }}
                        underlayColor={'transparent'}
                        style={[styles.button, this.props.buttonStyle]} onPress={this.props.onPress}
                    >
                        <Ionicons name="md-arrow-back" color={black ? colors.black : colors.white} size={35} />
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 9, justifyContent: "flex-start" }}>

                    {
                        this.props.title !== "" &&
                        <Text style={[styles.textStyle, this.props.textStyle]}>
                            {this.props.title}
                        </Text>
                    }
                </View>
                <View style={{ flex: .5 }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: Platform.OS == "ios" ? 60 : 0,
    },
    button: {
        backgroundColor: 'transparent',
        width: Constants.DEVICE_WIDTH / 100 * 12,
        marginLeft: Constants.DEVICE_WIDTH / 100 * 5
    },
    backImage: {
        height: Constants.DEVICE_WIDTH / 100 * 4.5,
        width: Constants.DEVICE_WIDTH / 100 * 7
    },
    textStyle: {
        alignSelf: "center",

        backgroundColor: 'transparent',
        color: colors.White,

    }
});
BackButton.defaultProps = {
    black: false
}

module.exports = BackButton;