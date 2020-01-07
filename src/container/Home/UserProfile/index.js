import React, { Component } from 'react';
import { View, Image, ImageBackground, TextInput, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale, verticalScale } from '../../../utils/Responsive';
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Actions } from 'react-native-router-flux'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { colors } from '../../../config/colors';

export default class Account extends Component {
    render() {
        return (<ScrollView style={{ flex: 1, }}>
            <ImageBackground source={Images.header}
                resizeMode={'stretch'}
                style={{ width: "100%", height: 200, }}>
            </ImageBackground>
            <View style={{
                width: 350, height: 550, marginTop: 65, backgroundColor: "white", borderRadius: 20,
                marginLeft: verticalScale(20), marginBottom: 22
            }}>
                <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        style={{ width: 100, height: 100, borderRadius: 50, position: "absolute", bottom: 0 }}
                        source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                    />
                </View>
                <View style={{ width: 420, height: 40, justifyContent: "center", alignItems: "center" }}>
                    <View style={{
                        width: 40, height: 40, backgroundColor: 'red', justifyContent: "center", alignItems: "center",
                        borderRadius: 20, position: "absolute", bottom: 35
                    }}>
                        <FontAwesome name="camera" color='white' size={20} />
                    </View>
                </View>
                <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="account" color={colors.primaryColor} size={30} />
                    </View>
                    <View style={{ flex: 7, justifyContent: "flex-end", borderBottomWidth: .2, marginRight: verticalScale(20) }}>
                        <TextInput
                            placeholder="Name"
                            style={{ fontSize: 16, }}></TextInput>

                    </View>
                </View>
                <View style={{ width: "100%", height: 70, flexDirection: "row" }}>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <EvilIcons name="location" color={colors.primaryColor} size={30} />
                    </View>

                    <View style={{ flex: 7, justifyContent: "flex-end", borderBottomWidth: .2, marginRight: verticalScale(20) }}>
                        <TextInput
                            placeholder="place"
                            style={{ fontSize: 16, }}></TextInput>

                    </View>
                </View>
                <View style={{ width: "100%", height: 70, flexDirection: "row" }}>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="email" color={colors.primaryColor} size={25} />
                    </View>

                    <View style={{ flex: 7, justifyContent: "flex-end", borderBottomWidth: .2, marginRight: verticalScale(20) }}>
                        <TextInput
                            placeholder="email"
                            style={{ fontSize: 16, }}></TextInput>

                    </View>
                </View>
                <View style={{ width: "100%", height: 70, flexDirection: "row" }}>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <FontAwesome name="phone" color={colors.primaryColor} size={25} />
                    </View>
                    <View style={{ flex: 7, justifyContent: "flex-end", borderBottomWidth: .2, marginRight: verticalScale(20) }}>
                        <TextInput
                            placeholder="phone number"
                            style={{ fontSize: 16, }}></TextInput>

                    </View>
                </View>
                <View style={{ width: "100%", height: 70, flexDirection: "row" }}>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <FontAwesome name="lock" color={colors.primaryColor} size={25} />
                    </View>
                    <View style={{ flex: 7, justifyContent: "flex-end", borderBottomWidth: .2, marginRight: verticalScale(20) }}>
                        <TextInput
                            placeholder="password"
                            secureTextEntry
                            style={{ fontSize: 16, }}></TextInput>

                    </View>
                </View>
                <View style={{ flex: 1, marginBottom: 55, alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => Actions.ContactPage()}>
                        <ImageBackground
                            source={Images.submit}
                            resizeMode={'stretch'}
                            style={{ width: 350, height: 60, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={styles.search}>Save Changes</Text>

                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    search: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 14,
        fontWeight: '600',
    }
})
