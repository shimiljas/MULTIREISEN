/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../utils/Responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/colors';
import { fonts } from '../config/fonts'
import { normalize } from '../utils/Fontnormalize'
import Touchable from './Tochable';

import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import Entypo from 'react-native-vector-icons/Entypo'

const sports = [
  {
    label: 'Single bed',
    value: 'single',
  },
  {
    label: 'Double bed',
    value: 'double',
  },
  {
    label: 'Twin bed',
    value: 'twin',
  },
  {
    label: 'Triple bed',
    value: 'triple',
  },
  {
    label: 'Quad bed',
    value: 'quad',
  },
  {
    label: 'Twin bed for solo use',
    value: 'solo',
  },
];

export default class InputSelector extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {
      firstTextInput: null,
      favSport0: null,
      favSport1: null,
      lastTextInput: null,
      favSport5: null,
    };

    this.state = {
      numbers: [
        {
          label: '1',
          value: 1,
          color: 'orange',
        },
        {
          label: '2',
          value: 2,
          color: 'green',
        },
      ],
      favSport0: undefined,
      favSport1: undefined,
      favSport2: undefined,
      favSport3: undefined,
      favSport4: 'baseball',
      previousFavSport5: undefined,
      favSport5: null,
      favNumber: undefined,
    };
  }
  render() {
   
    const {onPress,half,icon,placeHolder,onValueChange,value,options}=this.props
    const placeholder = {
        label: placeHolder,
        value: null,
        color: '#9EA0A4',
      };
    return (

      <View 
         style={half ? styles.rectangle93 : styles.rectangle90} >
            <View style={half ? styles.container1 : styles.container12}>
                <RNPickerSelect
                    placeholder={placeholder}
                    items={options}
                    onValueChange={onValueChange}
                    onUpArrow={() => {
                    this.inputRefs.firstTextInput.focus();
                    }}
                    onDownArrow={() => {
                    this.inputRefs.favSport1.togglePicker();
                    }}
                    style={pickerSelectStyles}
                    value={value}
                    ref={el => {
                    this.inputRefs.favSport0 = el;
                    }}
                />
            </View>
            <View style={half ? styles.container2 : styles.container21}>
                {icon}
            </View>
        </View>

     
    );
  }
}

const styles = StyleSheet.create({
    rectangle90: {
        width: '90%',
        marginHorizontal: 30,
        height: verticalScale(40),
        borderRadius: 9,
        marginVertical: 7,
        borderColor: '#d6d6d6',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
    
    },
    container1: {
        flex: 8,
        justifyContent: 'center'
    },
    container12: {
        flex: 9,
        justifyContent: 'center'
    },
    container2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5
    
    },
    container21: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5
    
    },
    rectangle93: {
        width: 150,
        height: verticalScale(40),
        borderRadius: 9,
        borderColor: '#d6d6d6',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 7,
    },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    borderRadius: 4,
    color: 'black',
    padding:5,
    backgroundColor: '#f6f6f6',
   // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    padding:5,
    borderRadius: 4,
    color: 'black',
    backgroundColor: '#f6f6f6',
 
  },
  
});
