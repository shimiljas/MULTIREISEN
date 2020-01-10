import { Alert } from "react-native";
import { Toast } from "native-base";
import { colors, } from '../config/colors'
import { fonts } from '../config/fonts'
export const toast = ({
    text = "",
    position = "bottom",
    type = "success",
    duration = 5000
}) => {
    Toast.show({
        text,
        position,
        buttonText: "ok",
        type,
        duration,
        style: {
            backgroundColor: type === "danger" ? "red" : colors.primaryColor
        },
        textStyle: {
            fontFamily: fonts.fontPrimaryLight
        }
    });
};
