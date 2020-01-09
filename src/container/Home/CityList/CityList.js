import React, { Component } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale, verticalScale } from '../../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { colors } from '../../../config/colors';
import RoundIcon from '../../../components/RoundIcon'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import InputIcon from '../../../components/InputIcon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LargeButton from '../../../components/LargeButton'
import Touchable from '../../../components/Tochable';
import { Actions } from 'react-native-router-flux'
import Step from '../../../components/Step'
import InputDropDown from '../../../components/InputDropDown'
import Header from '../../../components/Header'
import BackButton from '../../../components/BackButton'
//import CITY_DATA from './data'
import _ from 'lodash'
import CITY_DATA from './cities.json';

export default class Country extends Component {
    state = { cities: CITY_DATA, query: '' }

    search = (text) => {
        let results = _.filter(
            CITY_DATA,                             // first parameter to _.filter is the array
            option => option.cityname.includes(text)           // the second parameter is a funtion that takes an option object and returns a boolean (wether the label of this option includes the text text or not)
        );
        this.setState({ cities: results, query: text })
    }
    render() {
        const { cities } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10, alignItems: 'center' }}>
                <InputIcon

                    placeholder={'Country,City ,Hotel '}
                    returnKeyType={'done'}
                    value={this.state.query}
                    onChangeText={this.search}
                    icon={null} />
                <FlatList
                    style={{ width: '100%', height: '100%' }}
                    data={cities}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            key={item.cityid}
                            onPress={() => {
                                this.props.selectcity(item)
                                Actions.pop();
                            }}
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                height: 70,
                                justifyContent: 'center',
                                backgroundColor: 'white',
                            }}
                        >
                            <View style={{ flex: 0.5 }}></View>
                            <View
                                style={{
                                    flex: 6.5,
                                    paddingRight: 10,
                                    paddingLeft: 20,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ fontFamily: fonts.fontPrimaryLight, fontSize: normalize(16) }}>
                                    {item.cityname}
                                </Text>
                                <Text style={{ fontFamily: fonts.fontPrimaryLight, fontSize: normalize(10) }}>
                                    {item.countryname}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flex: 3,
                                    alignItems: 'flex-start',
                                    paddingRight: 25,
                                    justifyContent: 'center'
                                }}
                            >
                                <View
                                    style={{
                                        width: 100,
                                        height: 35,
                                        borderWidth: 1,
                                        paddingRight: 5,
                                        borderColor: colors.primary,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 10,
                                        marginRight: 15
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: fonts.fontPrimaryLight,
                                            color: colors.primary
                                        }}
                                    >
                                        select
                      </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                    }
                />

            </View>)
    }
}