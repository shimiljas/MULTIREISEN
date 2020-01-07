import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale, verticalScale } from '../../../utils/Responsive';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Actions } from 'react-native-router-flux'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { colors } from '../../../config/colors';

const AccountItem = ({ name, icon }) => {
    return (
        <View style={{ width: "90%", height: 80, flexDirection: "row", backgroundColor: 'white', marginHorizontal: 20 }}>
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }} >
                {icon}
            </View>
            <View style={{ flex: 6, justifyContent: "center", marginLeft: 20 }} >
                <Text style={{ fontSize: 15 }}>{name}</Text>
            </View>
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }} >
                <AntDesign name="right" color='black' size={20} />
            </View>
        </View>
    )
}

export default AccountItem