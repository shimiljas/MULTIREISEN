/* eslint-disable react-native/no-inline-styles */
/* eslint-disable  */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
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

import Modal from 'react-native-modalbox';
let data = [{
    value: 'Banana',
}, {
    value: 'Mango',
}, {
    value: 'Pear',
}];

const radio_props = [
    { label: 'Lowest Price', value: 0 },
    { label: 'Near by me', value: 1 },
];
//import MultiSlider from 'react-native-multi-slider';
//import RangeSlider from 'react-native-range-slider'

import { Rating, AirbnbRating } from 'react-native-ratings';

import RangeSlider from 'rn-range-slider';

export default class FlightFilterModal extends Component {
    render() {
        const { isOpen, onClose, onOpen } = this.props
        return (
            <Modal
            style={{ width: '100%', paddingTop: 20, height: '100%', alignItems: 'center', backgroundColor: 'transparent', justifyContent: 'center', padding: 20 }}
            ref={"modal1"}
            position={'center'}
            isOpen={isOpen}
            onClosed={onClose}
            onOpened={onOpen}
        >
            <Touchable
                onPress={onClose}
                style={{
                    width: '100%', height: '4%',
                    alignItems: 'flex-end',
                    justifyContent: 'center'

                }} >
                <Entypo name="cross" color={'white'} size={40} />
            </Touchable>

            <View style={{
                width: '100%', height: '14%', marginHorizontal: 10, justifyContent: "center",
                backgroundColor: 'white',
                overflow: 'hidden',
                marginVertical: 10,
                borderRadius: 30
            }} >

            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 30, paddingTop: 10 }}>
                <Text style={{color: colors.borderColor, fontSize: 14, fontFamily: fonts.fontPrimaryLight, }}>Distance</Text>
            
             </View>                 
             <View  style={{flex:2.5,justifyContent:'center'}}>
                 <Dropdown          
                  label='Distance'
                  data={data}
                    containerStyle={{ marginHorizontal: 25, marginBottom: 30 }}
                 />
                 </View>   
              </View>
        
              <View style={{
                    width: '100%', 
                    height: '17%', 
                    backgroundColor: 'white',
                    marginHorizontal: 10,
                   justifyContent: "center", 
                   marginVertical: 10, 
                   borderRadius: 30
            }} >

                <View style={{ flex: 1, justifyContent: 'center', paddingLeft:20}}>
                    <Text style={{ color: colors.borderColor, fontSize: 14, fontFamily: fonts.fontPrimaryLight, }}>Rating</Text>
                </View>
                <View style={{ flex:1, justifyContent: 'flex-start',padding:20 }}>
                    <RangeSlider
                        style={{ width: '100%', height: 80,marginTop:0}}
                        gravity={'center'}
                        min={200}
                        max={1000}
                        step={20}
                        selectionColor="#6e78f7"  
                        blankColor="#bbb"
                        onValueChanged={(low, high, fromUser) => {
                                        this.setState({ rangeLow: low, rangeHigh: high })
                     }} />
                </View>
             </View>   
     <View style = {{
             width: '100%',
             height: '14%',
              backgroundColor: 'white',
              marginHorizontal: 10,
              padding: 20,
              overflow: 'hidden',
              justifyContent: "center",
               marginVertical: 10, borderRadius: 30
         }}>

    <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10,  }}>
        <Text style={{ color: colors.borderColor, fontSize: 14, fontFamily: fonts.fontPrimaryLight, }}>Stars</Text>

    </View>
    <View style={{ flex: 2.5, justifyContent: 'center' }}>
        <Rating
            type='star'
            ratingCount={5}
            imageSize={45}
            ratingColor={'yellow'}
            onFinishRating={(text) => console.log(text)}
        />
    </View>  
    </View>
    
    <View style={{
        width: '100%', height: '18%', backgroundColor: 'white',
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
                         style={{ width: 350, height: 60, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text style={styles.search}>Apply</Text>
     
                    </ImageBackground>
                </Touchable>
            </View>
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