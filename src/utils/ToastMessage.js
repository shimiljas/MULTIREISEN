import {Toast} from 'native-base';
import fonts from '../constants/fonts';
import Colors from '../constants/colors';

export const toast = ({
  text = '',
  position = 'bottom',
  type = 'success',
  duration = 5000,
}) => {
  Toast.show({
    text,
    position,
    buttonText: 'ok',
    type,
    duration,
    style: {
      backgroundColor: Colors.toastcolor,
    },
    textStyle: {
      fontFamily: fonts.primaryFont,
    },
  });
};
