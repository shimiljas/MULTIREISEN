/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';

class Touchable extends PureComponent {
    constructor() {
        super();
        this.lastPressed = 0;
    }

    onPress = () => {
        const { onPress } = this.props;
        const now = new Date().getTime();
        const tooSoon = now - this.lastPressed <= 400;
        if (!tooSoon) {
            this.lastPressed = now;
            onPress();
        }
    };

    render() {
        const { hitSlop } = this.props;
        return (
            <TouchableOpacity
                {...this.props}
                onPress={this.onPress}
                pressRetentionOffset={{ top: 10, left: 10, bottom: 10, right: 10 }}
                hitSlop={hitSlop || { top: 5, left: 5, right: 5, bottom: 5 }}
            />
        );
    }
}

export default Touchable;
