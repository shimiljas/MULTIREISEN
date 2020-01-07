import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
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
import AccountItem from './AccountItem'
let data = [
    {
        name: 'Book Flight',
        icon: <FontAwesome name="plane" color={colors.primaryColor} size={20} />
    },
    {
        name: 'Book Hotel',
        icon: <FontAwesome5 name="hotel" color={colors.primaryColor} size={20} />
    },
    {
        name: 'Booking',
        icon: <FontAwesome name="clock-o" color={colors.primaryColor} size={20} />
    },
    {
        name: 'Terms & Condition',
        icon: <MaterialCommunityIcons name="file-document" color={colors.primaryColor} size={25} />
    },
    {
        name: 'Chat',
        icon: <MaterialCommunityIcons name="chat" color={colors.primaryColor} size={25} />
    },
    {
        name: 'Logout',
        icon: <SimpleLineIcons name="logout" color={colors.primaryColor} size={20} />
    },

]
export default class Account extends Component {
    render() {
        return (<ScrollView style={{ flex: 1, }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <ImageBackground source={Images.header}
                    resizeMode={'cover'}
                    style={{ width: scale(300), height: verticalScale(250), marginTop: verticalScale(40), borderRadius: 30 }}>

                    <View style={{ width: "100%", height: 80, flexDirection: "row" }}>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <MaterialCommunityIcons name="account" color='white' size={25} />
                        </View>
                        <View style={{
                            flex: 6, justifyContent: "center",
                            alignItems: "center", marginTop: 40
                        }}>
                            <Image
                                style={{ width: 80, height: 80, borderRadius: 40 }}
                                source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                            />
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <Feather name="settings" color='white' size={25} />
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 30, marginTop: 30, marginVertical: scale(15), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>Saad ibraheem</Text>
                        <Text style={{ fontSize: 15, color: "#fff" }}>-55 855 65 55 </Text>
                    </View>
                    <View style={{ width: 290, height: 1, marginTop: 20, backgroundColor: 'white', marginLeft: verticalScale(30) }}></View>
                    <TouchableOpacity style={{
                        width: 250, height: 40, borderRadius: 20, borderWidth: 1, justifyContent: "center",
                        alignItems: "center",
                        borderColor: 'white', marginLeft: verticalScale(50), marginTop: scale(20)
                    }}
                        onPress={() => Actions.UserProfile()}
                    >
                        <Text style={{ fontSize: 15, color: "#fff" }}>
                            Complete your profile
                    </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <FlatList
                data={data}
                style={{ padding: 10 }}
                renderItem={({ item }) => <AccountItem name={item.name} icon={item.icon} />}
            />


        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

})
