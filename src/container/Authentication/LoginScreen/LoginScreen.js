/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Text,
    TouchableOpacity,
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import Images from '../../../resources/images'
import LargButton from '../../../components/Button'
import Input from '../../../components/Input'
import { scale, verticalScale } from '../../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { fonts } from '../../../config/fonts';
import { normalize } from '../../../utils/Fontnormalize';
import { Actions } from 'react-native-router-flux'

import HotelFilterModal from '../../../modal/HotelFilterModal'
import RoomDetailModal from '../../../modal/RoomDetailModal'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Step from '../../../components/Step'
import InputDropDown from '../../../components/InputDropDown'
const { width, height } = Dimensions.get('window')
import { Button, Icon, colors } from 'react-native-elements';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
import * as api from '../../../utils/ApiManager/api'
import { toast } from '../../../components/Toast'
const TabSelector = ({ selected }) => {
    return (
        <View style={styles.selectorContainer}>
            <View style={selected && styles.selected} />
        </View>
    );
};


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            selectedCategory: 0,
            tab: 'login',
            isLoading: false,
            isEmailValid: true,
            isPasswordValid: true,
            isConfirmationValid: true,
        };

        this.selectCategory = this.selectCategory.bind(this);
        // this.login = this.login.bind(this);
        // this.signUp = this.signUp.bind(this);
    }
    componentDidMount() {
        console.log(api)
    }

    selectCategory = (selectedCategory) => {
        LayoutAnimation.easeInEaseOut();
        this.setState({
            selectedCategory,
            isLoading: false,
        });
    }
    onChangeTab = (tab) => {
        if (tab.i == 0) {
            this.setState({ tab: 'login' })
        } else if (tab.i == 1) {
            this.setState({ tab: 'signup' })
        }
    }
    LoginClick = () => {
        api.getAccessToken()
            .then(res => {
                api.setToken(res.accessToken)
                Actions.drawerMenu()
            })
            .catch(err => {
                toast({ type: 'danger', text: "Something went wrong" })
            })
        // Actions.drawerMenu()
    }

    render() {
        const {
            selectedCategory,
            tab
        } = this.state;
        const isLoginPage = selectedCategory === 0;
        const isSignUpPage = selectedCategory === 1;
        return (
            <KeyboardAwareScrollView>
                <ImageBackground source={Images.loginpage} style={{ width, height }}>

                    <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 30 }}>
                        {/* <Text style={{ fontFamily: fonts.fontPrimaryBold, fontSize: normalize(30), color: 'white' }} >
                            Create Account
                       </Text> */}
                    </View>
                    <View style={{
                        minHeight: 60,
                        flex: tab === 'login' ? 6.8 : 16.5, backgroundColor: 'white', marginHorizontal: scale(20), borderRadius: 10,
                        marginBottom: 30,


                    }}>
                        <ScrollableTabView
                            onChangeTab={this.onChangeTab}
                            style={{ marginTop: 20, flex: 1 }}
                            initialPage={0}
                            tabBarTextStyle={{ color: colors.primary }}
                            tabBarUnderlineStyle={{ backgroundColor: colors.primary }}
                            renderTabBar={() => <DefaultTabBar />}
                        >

                            <View style={{ paddingHorizontal: 15 }} tabLabel='Login'>
                                <Input
                                    icon={<MaterialCommunityIcons name="email" color={"black"} size={25} />}
                                    placeholder={"Email"} />

                                <Input
                                    icon={<Entypo name="key" color={"black"} size={25} />}
                                    placeholder={"Password"} />
                                <TouchableOpacity style={{ width: '100%', height: 50, alignItems: 'flex-end', justifyContent: 'center' }}
                                    onPress={() => Actions.ForgotPassword()}
                                >
                                    <Text style={{ fontFamily: fonts.fontPrimaryLight }}>Forogt Password?</Text>
                                </TouchableOpacity>
                                <View style={{ width: '100%', marginTop: 50, height: 180, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: -140 }}>
                                    <LargButton size="medium"
                                        title="Login"
                                        onPress={() => this.LoginClick()}
                                    />
                                </View>
                            </View>

                            <View tabLabel='Signup' style={{
                                flex: 5.5, backgroundColor: 'white', minHeight: 150, justifyContent: "center",
                                borderRadius: 10,
                                marginBottom: 60,
                            }}>
                                <View style={{ paddingHorizontal: 15 }}>
                                    <Input
                                        icon={<AntDesign name="user" color={"black"} size={25} />}
                                        placeholder={"Name"} />

                                    <Input
                                        icon={<MaterialCommunityIcons name="email" color={"black"} size={25} />}
                                        placeholder={"Email"} />

                                    <Input
                                        icon={<Entypo name="key" color={"black"} size={25} />}
                                        placeholder={"Password"} />

                                    <Input
                                        icon={<Entypo name="key" color={"black"} size={25} />}
                                        placeholder={"Confirm Password"} />
                                </View>
                                <View style={{ width: '100%', marginTop: Platform.OS == 'android' ? 60 : 50, height: 180, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: - 110 }}>
                                    <LargButton size="medium"
                                        title="Sign up"
                                        onPress={() => Actions.pop()}
                                    />
                                </View>

                            </View>

                        </ScrollableTabView>
                    </View>

                    <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center', paddingTop: 20, marginBottom: 30 }}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                        >
                            <View
                                style={{
                                    width: scale(300), height: verticalScale(50), backgroundColor: "#0780f9", borderRadius: 10,
                                    alignItems: 'center', justifyContent: 'center'
                                }}>

                                <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff", }}>
                                    Sign in with facebook
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground >

            </KeyboardAwareScrollView>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowSelector: {
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectorContainer: {
        flex: 1,
        alignItems: 'center',
    },
    selected: {
        position: 'absolute',
        borderRadius: 50,
        height: 0,
        width: 0,
        top: -5,
        borderRightWidth: 70,
        borderBottomWidth: 70,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    loginContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTextButton: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: 'rgba(232, 147, 142, 1)',
        borderRadius: 10,
        height: 50,
        width: 200,
    },
    titleContainer: {
        height: 150,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 30,
        borderRadius: 10,
        paddingTop: 32,
        paddingBottom: 32,
        alignItems: 'center',
    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 24,

        backgroundColor: 'transparent',
        opacity: 0.54,
    },
    selectedCategoryText: {
        opacity: 1,
    },
    titleText: {
        color: 'white',
        fontSize: 30,

    },
    helpContainer: {
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
    },
})