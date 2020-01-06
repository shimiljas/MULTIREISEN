import React, { Component } from 'react';
import { View, Image, ImageBackground, TextInput, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Images from '../../../resources/images'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { scale, verticalScale } from '../../../utils/Responsive';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { Actions } from 'react-native-router-flux'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { colors } from '../../../config/colors';



export default class TermsCondtions extends Component {
    render() {
        return (<ScrollView style={{ flex: 1, }}>
            <ImageBackground source={Images.header}
                resizeMode={'stretch'}
                style={{ width: "100%", height: 200, }}>
                <TouchableOpacity
                    style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.text}>Terms & Conditions</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ScrollView style={{
                width: 350, alignItems: "center",
                height: 650, backgroundColor: 'white', borderRadius: 15
            }}
            >

                <TouchableOpacity style={{ flex: 1, marginBottom: 20, justifyContent: "center", alignItems: "center", marginVertical: 20, marginHorizontal: 25 }}
                    onPress={() => Actions.HotelSupport()}
                >
                    <Text style={styles.Text}>
                        Lorem ipsum dolor sit amet, diam congue arcu etiam, nunc amet vitae bibendum est,
                        pretium cum amet ut parturient a, faucibus pellentesque hac est, posuere et consectetuer.
                         At aliquam tortor tempor faucibus eget, at quis orci at, nec placerat laoreet elit ornare
                         placerat. Adipiscing consequat per, ut non nunc sit, a sagittis sociis malesuada proin posuere.
                         Elementum in, mauris arcu, dapibus curabitur metus ac nascetur quo, facilisis lacinia
                         sollicitudin ut id arcu nec, corrupti a nam. Sit pellentesque lacus molestiae eget amet,
                         sint quis nam, dolor nonummy lorem et in, venenatis amet velit ultrices varius. Massa orci
                         venenatis. Enim aliquam dui vitae eget arcu eget, varius lacinia sollicitudin magnis aenean ut
                         vestibulum, neque sed nulla quis massa, mus tortor pellentesque leo donec vivamus, id mollis
                          quisque in mus at. Pellentesque eu. Ullamcorper
                        est sed massa vitae dapibus platea, aliquam augue libero lectus at etiam.
                        Natoque sollicitudin urna quam nonummy. Pulvinar blandit natoque sit dignissim, ac elit semper
                         eu justo. Ligula nullam tortor eros senectus facilisis nullam, laoreet mattis sit massa,
                         nunc morbi sociis, varius volutpat etiam suspendisse tellus. At rutrum pede felis ac, morbi
                          viverra ut donec in qui lectus. Sit ligula viverra semper. Dolor rutrum eget morbi arcu
                           conubia, enim metus metus ligula. Urna sed turpis vehicula sed mi, tempor vitae convallis
                           dolor ut sed sodales. Sed iaculis wisi ridiculus, mi sed tellus lorem, purus dolor. Praesent
                            eleifend aliquam eu ac exercitation posuere, metus sapien fusce, sollicitudin dui morbi.
</Text>
                </TouchableOpacity>

            </ScrollView>


        </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontFamily: fonts.fontPrimaryBold,
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.17,
        marginLeft: 20

    },
})
