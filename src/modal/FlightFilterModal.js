/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
import LinearGradient from 'react-native-linear-gradient';
import Touchable from '../components/Tochable'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Images from '../resources/images'
import { Dropdown } from 'react-native-material-dropdown';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Entypo from 'react-native-vector-icons/Entypo'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


import Modal from 'react-native-modalbox';
let data = [{
    value: 'Banana',
}, {
    value: 'Mango',
}, {
    value: 'Pear',
}];

const radio_props = [
    { label: 'Economy', value: 0 },
    { label: 'Bussiness', value: 1 },
    { label: 'Non - Stops', value: 1 },
    { label: 'A-Class', value: 1 }
];


export default class FlightFilterModal extends Component {
    render() {
        const { isOpen, onClose, onOpen } = this.props
        return (
            <Modal
                style={{
                    width: '100%',

                    height: '100%',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    justifyContent: "center",
                }}
                ref={"modal1"}
                position={'center'}
                isOpen={isOpen}
                onClosed={onClose}
                onOpened={onOpen}
            >
                <ScrollView>

                    <Touchable
                        onPress={onClose}
                        style={{
                            width: scale(300), height: '8%',
                            alignItems: 'flex-end',
                            justifyContent: 'center'

                        }} >
                        <Entypo name="cross" color={'white'} size={40} />
                    </Touchable>

                    <View style={{
                     width: scale(300), height: '16%', backgroundColor: 'white',
                        marginHorizontal: 10,
                        padding: 20,
                        justifyContent: "center", marginVertical: 10, borderRadius: 30
                    }} >
                        <Text style={{ color: colors.borderColor, fontSize: 14, fontFamily: fonts.fontPrimaryLight, marginBottom: 10 }}>Flight Number</Text>
                        <TextInput style={{ width: '100%', height: 45, borderColor: colors.primaryColor, borderWidth: 1, borderRadius: 20 }} />

                    </View>


                    <View style={{
                       width: scale(300), height: '18%', backgroundColor: 'white',
                        marginHorizontal: 10,
                        borderRadius: 30
                        }} >

                    <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 30, paddingTop: 10 }}>
                        <Text style={{color: colors.borderColor, fontSize: 14, fontFamily: fonts.fontPrimaryLight, }}>Distance</Text>
                    
                    </View>                 
                    <View  style={{flex:3,justifyContent:'center'}}>
                        <Dropdown          
                        label='Distance'
                        data={data}
                            containerStyle={{ marginHorizontal: 25, marginBottom: 30 }}
                        />
                 </View>   
              </View>




                    <View style={{
                      width: scale(300),height: '30%', backgroundColor: 'white',
                        marginHorizontal: 10,
                        padding: 20,
                        justifyContent: "center", marginVertical: 10, borderRadius: 30
                    }} >
                        <Text style={{ marginTop: 10, marginLeft: 10, color: colors.borderColor, fontSize: 14, fontFamily: fonts.fontPrimaryLight, marginBottom: 10 }}>Sort By</Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            buttonSize={15}
                            selectedButtonColor={colors.primaryColor}
                            buttonColor={colors.primaryColor}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                    </View>
                    <View style={{ width: '100%', height: '10%', marginTop: 10, alignItems: 'center' }}>
                    <Touchable
                        style={{ flex: 1 }}
                            onPress={() => alert("ko")}>
                            <ImageBackground
                            source={Images.submit}
                                    resizeMode={'stretch'}
                                style={{  width: scale(300), height: verticalScale(50), borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Text style={styles.search}>Apply</Text>
            
                            </ImageBackground>
                        </Touchable>
                       </View>
                </ScrollView>
            </Modal>
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