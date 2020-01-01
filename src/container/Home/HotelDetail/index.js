import React, { Component } from 'react';
import { View, Image, FlatList, Text, ScrollView, Dimensions, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale } from '../../../utils/Responsive';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { Actions } from 'react-native-router-flux'
import { colors } from '../../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Touchable from '../../../components/Tochable'
import HotelDetailCard from '../../../components/HotelDetailCard'
import FacilityCard from './FacilityCard'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
const { height, width } = Dimensions.get('window')
const data = [
    { name: 'Internet access', icon: <Fontisto name="earth" color='blue' size={10} /> },
    { name: 'WLAN access', icon: <Fontisto name="wifi" color='blue' size={10} /> },
    { name: 'Room access', icon: <MaterialCommunityIcons name="room-service" color='blue' size={10} /> },
    { name: "Shower & Bathroom", icon: <FontAwesome name="shower" color='blue' size={10} /> }
]
import RoomDetailModal from '../../../modal/RoomDetailModal'
export default class App extends Component {
    state = { modalOpen: false }
    render() {
        return (

            <View style={{ width: '100%', height: '100%', }}>

                <ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfO2Gl6nuGFrwxMeGmBz7GEe51heXlCtYoNjcIHzvBZe64kSsMQ&s' }}
                    style={{ width: '100%', height: '60%' }}
                    resizeMode={'cover'}
                >
                    <Touchable
                        style={{
                            flex: 1,
                            width: 50, height: 50,
                            alignItems: 'center', justifyContent: 'center'
                        }} onPress={() => Actions.pop()}>
                        <Ionicons name="md-arrow-back" color={colors.white} size={35} />
                    </Touchable>
                    <View style={{ flex: 2 }}>

                    </View>

                </ImageBackground>

                <ScrollView style={{ height: height, position: 'absolute', top: 150 }}>
                    <View style={{
                        flex: 1, backgroundColor: 'white',
                        marginHorizontal: scale(20), borderRadius: 10, marginTop: 30
                    }}>
                        <View style={{ width: "100%", height: 50, marginTop: 20, marginLeft: 40, justifyContent: "center", }}>
                            <Text style={styles.Hdng}>Ramses Hilton</Text>
                            <Text style={styles.A}>India.Calicut</Text>
                        </View>
                        <View style={{ width: "100%", height: 30, flexDirection: "row" }}>
                            <View style={{ flex: 4.5, justifyContent: "center", alignItems: "flex-end" }}>
                                <Text style={styles.A}>Cancelation deadline</Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: "center", alignItems: "flex-start" }}>
                                <Text style={styles.Sub2}> : non-refundable</Text>
                            </View>
                            <TouchableOpacity style={{ flex: 2.5, justifyContent: "center", }}>
                                <Text style={styles.Sub}>  Show more</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "100%", height: 60, justifyContent: "center", flexDirection: "row", }}>
                            <View style={{ flex: 2, justifyContent: "center", alignItems: "flex-end" }}>
                                <EvilIcons name="location" color='green' size={25} />
                            </View>
                            <View style={{ flex: 8, justifyContent: "center", alignItems: "flex-start", marginRight: 50 }}>
                                <Text style={styles.Title}>Ramses.Cario.Egypt</Text>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 150, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ width: 300, height: 140, borderRadius: 15 }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtM0EfOA79vdR9izR7XYDSnHW9aS6vvsTBRVxkjSGFIRVdCw9d&s' }}
                            />
                        </View>
                        <View style={{
                            width: "100%", height: 30, marginLeft: 40,
                            justifyContent: "center", alignItems: "flex-start"
                        }}>
                            <Text style={styles.Hdng}>Photos</Text>
                        </View>
                        <ScrollView
                            horizontal style={{ width: "100%", height: 120, marginTop: 15 }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 180, height: 120, marginLeft: 15, borderRadius: 10 }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfO2Gl6nuGFrwxMeGmBz7GEe51heXlCtYoNjcIHzvBZe64kSsMQ&s' }}
                            />
                            <Image
                                resizeMode="contain"
                                style={{ width: 180, height: 120, marginLeft: 20, borderRadius: 10 }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fUfNlvrvHWW43Z4mx1PmOzaDNxtSaG3oywG3u2aQDG_yZCQzEw&s' }}
                            />
                            <Image
                                resizeMode="contain"
                                style={{ width: 180, height: 120, marginLeft: 20, borderRadius: 10 }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFwBVCiImgHA88uDcGUycwaRuILBqUOOv9OA0wnzcwEeXcSpI&s' }}
                            />
                        </ScrollView>
                        <FlatList
                            data={data}
                            style={{ flex: 1, paddingHorizontal: 25, marginTop: 20, marginBottom: 10 }}
                            numColumns={2}
                            renderItem={({ item }) => <FacilityCard icon={item.icon} text={item.name} />}
                        />





                        <View style={{ marginLeft: 40, }}>
                            <Text style={styles.Hdng}>Rooms</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 20, paddingLeft: 30, paddingBottom: 50 }}>

                            <HotelDetailCard onPress={() => this.setState({ modalOpen: true })} />
                            <HotelDetailCard onPress={() => this.setState({ modalOpen: true })} />
                            <HotelDetailCard onPress={() => this.setState({ modalOpen: true })} />
                            <HotelDetailCard onPress={() => this.setState({ modalOpen: true })} />
                        </View>

                    </View>
                    <View style={{ width: '100%', height: 500 }} />
                </ScrollView>

                <RoomDetailModal
                    isOpen={this.state.modalOpen}
                    onClose={() => this.setState({ modalOpen: false })}
                    onOpen={() => this.setState({ modalOpen: true })}
                />

            </View >
        )
    }
}

const styles = StyleSheet.create({
    Hdng: {
        fontSize: 15,
        color: "grey"

    },
    Title: {
        fontSize: 13,
        color: "grey"
    },
    Sub: {
        fontSize: 13,
        color: "blue",
        fontWeight: "bold"
    },
    Sub2: {
        fontSize: 13,
        color: "red"

    },
    A: {
        fontSize: 13
    },
    B: {
        fontSize: 15
    },
    C: {
        fontSize: 15,
        color: "#fff"
    }
})