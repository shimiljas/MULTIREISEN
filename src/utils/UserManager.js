import { persistStore } from 'redux-persist';
import firebase from 'react-native-firebase';
import store from '../store/store';
import { LOG_OUT } from '../containers/Authentication/LoginScreen/LoginActionType';
import ErrorHandler from './ErrorHandler';
import errors from '../constants/errors';
import { Locationfetching } from './LocationService';
// import {
//   locationUpdate,
//   locationReset,
// } from '../containers/Authentication/LoginScreen/LocationAction';
import { getVerificationStatusSelector } from './Selectors/ProfileSelectors';
import NavigationService from '../navigation/NavigationService';

import { getLocationSelector } from './Selectors/LocationSelector';

class UserManager {
  notificationListener = null;

  messageListener = null;

  notificationOpenedListener = null;

  static makeUserLogOut = () => {
    const { dispatch } = store.store;
    dispatch(this.clearUserStoreData());
    const persistor = persistStore(store.store);
    persistor.purge();
    // this.firebaseTokenCheck();
    Locationfetching()
      .then(response => {
        // dispatch(locationUpdate(response));
        // NavigationService.reset('HomeStack');
      })
      .catch(error => {
        ErrorHandler.handleInternalErrors(error);
        // NavigationService.reset('LocationScreen');
      });
  };

  static clearUserStoreData = () => ({ type: LOG_OUT, payload: null });

  static updateFirebaseToken = token =>
    store.store.dispatch(this.actionUpdateToken(token));

  static firebaseTokenCheck = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      return this.getFirebaseToken();
    }
    return this.requestFirebasePermissions()
      .then(response => {
        if (response) {
          return this.getFirebaseToken();
        }
        ErrorHandler.handleInternalErrors(
          errors.internal,
          'UserManager',
          response,
        );
        throw new Error('Unhandled Response');
      })
      .catch(error => {
        ErrorHandler.handleInternalErrors(
          errors.internal,
          'UserManager',
          error,
        );
        throw error;
      });
  };

  static requestFirebasePermissions = () =>
    new Promise((resolve, reject) => {
      firebase
        .messaging()
        .requestPermission()
        .then(response => {
          if (response) {
            resolve(response);
          } else {
            reject(new Error('Permission not Granted'));
          }
        })
        .catch(error => {
          reject(error);
        });
    });

  static getFirebaseToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    this.updateFirebaseToken(fcmToken);
  };

  static locationCheck = () =>
    new Promise((resolve, reject) => {
      const { lat, lng } = getLocationSelector(store.store.getState());
      if (lat && lng) {
        resolve();
      } else {
        Locationfetching()
          .then(resp => {
            //  store.store.dispatch(locationUpdate(resp));
            resolve();
          })
          .catch(() => {
            //  store.store.dispatch(locationReset());
            reject();
          });
      }
    });

  static verificationStatus = () =>
    new Promise((resolve, reject) => {
      try {
        const storeObject = store.store;
        const verificationStatus = getVerificationStatusSelector(
          storeObject.getState(),
        );
        resolve(verificationStatus);
      } catch (error) {
        ErrorHandler.handleInternalErrors(
          'verification Status Retrieval',
          'UserManager',
          error,
        );
        reject(error);
      }
    });

  static pushNotificationListener = () => {
    console.log('pushNotificationListener Initialized');
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body } = notification;
        console.log('Notification', title, body);
      });

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        console.log('Notification Open', title, body);
      });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    // const notificationOpen = firebase.notifications().getInitialNotification();
    // if (notificationOpen) {
    //   const { title, body } = notificationOpen.notification;
    //   this.showAlert(title, body);
    // }

    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      // process data message
      console.log(JSON.stringify(message));
    });
  };

  static removePushNotificationListener = () => { };
}

export default UserManager;
