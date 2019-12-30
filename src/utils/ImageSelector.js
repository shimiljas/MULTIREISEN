/* eslint-disable prettier/prettier */
import Permissions from 'react-native-permissions';
import OpenAppSettings from 'react-native-app-settings';
import { Alert } from 'react-native';
import { ActionSheet } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
const BUTTONS = ['Take a picture', 'Choose from gallery', 'Cancel'];
import ImageResizer from 'react-native-image-resizer';

const DESTRUCTIVE_INDEX = 2;
const CANCEL_INDEX = 2;
function ImageSelector() {
  return new Promise((resolve, reject) => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: 'Change Avatar',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          Permissions.check('camera').then(response => {
            if (response === 'authorized') {
              ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: false,
              })
                .then(image => {
                  ImageResizer.createResizedImage(
                    image.path,
                    200,
                    200,
                    'JPEG',
                    80,
                  )
                    .then(image => {
                      console.log(image, 'sdf----->');
                      resolve(image);
                    })
                    .catch(err => {
                      reject(err);
                      console.log(err);
                      return Alert.alert(
                        'Unable to resize the photo',
                        'Check the console for full the error message',
                      );
                    });
                })
                .catch(err => {
                  reject(err);
                });
            } else {
              Permissions.request('camera').then(response => {
                if (response != 'authorized') {
                  Alert.alert(
                    'Permissions Request',
                    'Please go to Settings > Applications > BrustMenu > Permissions >Allow gallery and camera permission  for  BrustMenu to access your Gallery and Camera',
                    [
                      {
                        text: 'Settings',
                        onPress: () => OpenAppSettings.open(),
                      },
                      {
                        text: 'cancel',
                        onPress: () => console.log('cancelled'),
                      },
                    ],
                    { cancelable: false },
                  );
                } else {
                  ImagePicker.openCamera({
                    width: 300,
                    height: 400,
                    cropping: false,
                  })
                    .then(image => {
                      ImageResizer.createResizedImage(
                        image.path,
                        200,
                        200,
                        'JPEG',
                        80,
                      )
                        .then(image => {
                          console.log(image, 'sdf----->');
                          resolve(image);
                        })
                        .catch(err => {
                          reject(err);
                          console.log(err);
                          return Alert.alert(
                            'Unable to resize the photo',
                            'Check the console for full the error message',
                          );
                        });
                    })
                    .catch(err => {
                      reject(err);
                    });
                }
              });
            }
          });
        } else if (buttonIndex === 1) {
          Permissions.check('photo').then(response => {
            console.log(response, 'response');
            if (response === 'authorized') {
              ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: false,
              })
                .then(image => {
                  // resolve(image.path);

                  ImageResizer.createResizedImage(
                    image.path,
                    200,
                    200,
                    'JPEG',
                    80,
                  )
                    .then(image => {
                      console.log(image, 'sdf----->');
                      resolve(image);
                    })
                    .catch(err => {
                      reject(err);
                      console.log(err);
                      return Alert.alert(
                        'Unable to resize the photo',
                        'Check the console for full the error message',
                      );
                    });
                })
                .catch(err => {
                  reject(err);
                });
            } else {
              Permissions.request('photo').then(response => {
                if (response != 'authorized') {
                  Alert.alert(
                    'Permissions Request',
                    'Please go to Settings > Applications > BrustMenu > Permissions >Allow gallery and camera permission  for  BrustMenu to access your Gallery and Camera',
                    [
                      {
                        text: 'Settings',
                        onPress: () => OpenAppSettings.open(),
                      },
                      {
                        text: 'cancel',
                        onPress: () => console.log('cancelled'),
                      },
                    ],
                    { cancelable: false },
                  );
                } else {
                  ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: false,
                  })
                    .then(image => {
                      // resolve(image.path);

                      ImageResizer.createResizedImage(
                        image.path,
                        200,
                        200,
                        'JPEG',
                        80,
                      )
                        .then(image => {
                          console.log(image, 'sdf----->');
                          resolve(image);
                        })
                        .catch(err => {
                          reject(err);
                          console.log(err);
                          return Alert.alert(
                            'Unable to resize the photo',
                            'Check the console for full the error message',
                          );
                        });
                      //resolve({ newlyCroppedImagePath, image });
                    })
                    .catch(err => {
                      reject(err);
                    });
                }
              });
            }
          });
        } else if (buttonIndex == 2) {

          reject('button pressed');
        }
      },
    );
  });
}

function MultiImageSelector() {
  return new Promise((resolve, reject) => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: 'Change Avatar',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          Permissions.check('camera').then(response => {
            if (response === 'authorized') {
              ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: false,
              })
                .then(image => {
                  resolve(image)
                })
                .catch(err => {
                  reject(err);
                });
            } else {
              Permissions.request('camera').then(response => {
                if (response != 'authorized') {
                  Alert.alert(
                    'Permissions Request',
                    'Please go to Settings > Applications > BrustMenu > Permissions >Allow gallery and camera permission  for  BrustMenu to access your Gallery and Camera',
                    [
                      {
                        text: 'Settings',
                        onPress: () => OpenAppSettings.open(),
                      },
                      {
                        text: 'cancel',
                        onPress: () => console.log('cancelled'),
                      },
                    ],
                    { cancelable: false },
                  );
                } else {
                  ImagePicker.openCamera({
                    width: 300,
                    height: 400,
                    cropping: false,
                  })
                    .then(image => {
                      resolve(image)
                    })
                    .catch(err => {
                      reject(err);
                    });
                }
              });
            }
          });
        } else if (buttonIndex === 1) {
          Permissions.check('photo').then(response => {
            console.log(response, 'response');
            if (response === 'authorized') {
              ImagePicker.openPicker({
                multiple: true
              })
                .then(image => {
                  resolve(image);

                })
                .catch(err => {
                  reject(err);
                });
            } else {
              Permissions.request('photo').then(response => {
                if (response != 'authorized') {
                  Alert.alert(
                    'Permissions Request',
                    'Please go to Settings > Applications > BrustMenu > Permissions >Allow gallery and camera permission  for  BrustMenu to access your Gallery and Camera',
                    [
                      {
                        text: 'Settings',
                        onPress: () => OpenAppSettings.open(),
                      },
                      {
                        text: 'cancel',
                        onPress: () => console.log('cancelled'),
                      },
                    ],
                    { cancelable: false },
                  );
                } else {
                  ImagePicker.openPicker({
                    multiple: true,
                  })
                    .then(image => {
                      resolve(image);


                    })
                    .catch(err => {
                      reject(err);
                    });
                }
              });
            }
          });
        } else if (buttonIndex == 2) {
          resolve('button pressed');
        }
      },
    );
  });
}
export { ImageSelector, MultiImageSelector };
