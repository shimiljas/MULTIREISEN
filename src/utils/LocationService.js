/* eslint-disable  */
'use strict';
import React, { Component } from 'react';
import { Alert, InteractionManager, Platform } from 'react-native';
import Permissions from 'react-native-permissions';
import OpenAppSettings from 'react-native-app-settings';
import Geolocation from '@react-native-community/geolocation';


export function Locationfetching() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject(Error('Error fetching data.'));
    }, 5000);
    console.log(Geolocation, 'PermissionsPermissionsPermissions')
    Permissions.check('location').then(async response => {
      if (response === 'authorized') {
        await Geolocation.getCurrentPosition(
          success => {
            console.log(success, 'Adsdfsd');
            let b = {
              latitude: success.coords.latitude,
              longitude: success.coords.longitude,
              heading: success.coords.heading,
            };
            resolve(b);
          },
          error => console.log(error),
          { enableHighAccuracy: false, timeout: 50000 },
        );
      } else {
        Permissions.request('location').then(async response => {
          if (response !== 'authorized') {
            reject(Error('Error fetching data.'));
            Alert.alert(
              'Permissions Request',
              'Please go to Settings > Applications > FaceValue > Permissions > Location allow FaceValue to access your location',
              [
                { text: 'Settings', onPress: () => OpenAppSettings.open() },
                { text: 'cancel', onPress: () => console.log('cancelled') },
              ],
              { cancelable: false },
            );
          } else {
            await Geolocation.getCurrentPosition(
              success => {
                let b = {
                  latitude: success.coords.latitude,
                  longitude: success.coords.longitude,
                  heading: success.coords.heading,
                };
                resolve(b);
              },
              error => console.log(error),
              { enableHighAccuracy: false, timeout: 50000, maximumAge: 1000 },
            );
          }
        });
      }
    });
  });
}
