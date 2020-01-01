import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, FlatList } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale } from '../../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { colors } from '../../../config/colors';
const data = [
    {
        title: 'Book Flight',
        image: Images.flight
    },
    {
        title: 'Book Hotel',
        image: Images.hotelbook
    },
    {
        title: 'Booking',
        image: Images.booking
    },
    {
        title: 'Terms & Condition',
        image: Images.terms
    },
    {
        title: 'Logout',
        image: Images.logout
    }
]
import Touchable from '../../../components/Tochable'
import { Actions } from 'react-native-router-flux';
export default class SideMenu extends Component {
    onPress = (title) => {
        if (title === 'Book Flight') {
            Actions.Book()
            return
        }

        if (title === 'Book Hotel') {
            Actions.HotelSearch()
            return
        }
    }
    render() {
        return (<View style={{ flex: 1, backgroundColor: '#ffffff' }} >

            <ImageBackground
                source={Images.drawerhead}
                style={{ width: '100%', height: 160 }}

            >
                <View style={{ width: '100%', flexDirection: 'row', height: 80, position: 'absolute', bottom: 0 }}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', paddingLeft: 20 }}>
                        <View style={{ width: 50, height: 50, alignItems: 'center', backgroundColor: 'white', justifyContent: "center", borderRadius: 50 }}>
                            <Image source={Images.user} style={{ width: 17, height: 17 }} resizeMode={'contain'} />
                        </View>

                    </View>
                    <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={style.helloSaad}>Hello, Saad Ibrahem</Text>
                    </View>
                </View>

            </ImageBackground>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Touchable
                        onPress={() => this.onPress(item.title)}
                        style={{ width: '100%', flexDirection: 'row', height: 60, borderBottomWidth: 0.3, borderColor: 'grey' }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Image source={item.image} style={{ width: 25, height: 25 }} resizeMode={'contain'} />
                        </View>
                        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 15 }}>
                            <Text style={style.bookFlight}>{item.title}</Text>
                        </View>
                    </Touchable>
                )}
            />



        </View>)
    }
}

const style = StyleSheet.create({
    helloSaad: {
        width: 134,
        height: 20,
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 20,
    },
    bookFlight: {
        color: '#000000',
        fontFamily: fonts.fontPrimaryLight,
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.01,
        lineHeight: 20,
    }
})