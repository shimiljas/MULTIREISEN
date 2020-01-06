/* eslint-disable prettier/prettier */
import React, { Componet } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';


//Auth Stack--------------------------------------<>
import LoginScreen from '../container/Authentication/LoginScreen'
import SignupScreen from '../container/Authentication/SignupScreen'
import ForgotPassword from '../container/Authentication/ForgotPassword'



//Home Stack--------------------------------------<>
import Book from '../container/Home/Book';
import Booking from '../container/Home/Booking';
import Account from '../container/Home/Account';
import FlightSearchResult from '../container/Home/FlightSearchResult'
import HotelSearchResult from '../container/Home/HotelSearchResult'
import HotelDetail from '../container/Home/HotelDetail'
import HotelCheckout from '../container/Home/HotelCheckout'
import HotelCart from '../container/Home/HotelCart'
import SideMenu from '../container/Home/SideMenu'
import FlightBookConfirm from '../container/Home/FlightBookConfirm'
import ContactPage from '../container/Home/ContactPage'
import HotelSearch from '../container/Home/HotelSearch'
import ChatScreen from '../container/Home/ChatScreen'
import UserProfile from '../container/Home/UserProfile'
import HotelSupport from '../container/Home/HotelSupport'
import TermsCondtions from '../container/Home/TermsCondtions'
import PaymentConfirmation from '../container/Home/PaymentConfirmation'
import Country from '../container/Home/Country'



import { Actions, Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import { colors } from '../config/colors';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { normalize } from '../utils/Fontnormalize'
import { scale, verticalScale } from '../utils/Responsive'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'


class RootNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    iconProfile = ({ focused }) => (
        <Icon color={focused ? colors.activeTint : '#898a8f'} name='user-o' size={25} />
    )
    iconBooking = ({ focused }) => (
        <Entypo color={focused ? colors.activeTint : '#898a8f'} name='box' size={25} />
    )
    iconBook = ({ focused }) => (
        <Icon color={focused ? colors.activeTint : '#898a8f'} name='bookmark-o' size={25} />
    )
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Router>
                    <Stack key='root'>

                        <Scene
                            key='login'

                            component={LoginScreen}
                            title='Login'
                            hideNavBar={true}
                            sceneStyle={{ backgroundColor: 'white' }}
                        />
                        <Scene
                            key='register'
                            component={SignupScreen}
                            title='Register'
                            hideNavBar={true}
                            sceneStyle={{ backgroundColor: 'white' }}
                        />
                        <Scene
                            key='ChatScreen'
                            component={ChatScreen}
                            title='ChatScreen'

                            hideNavBar={true}
                            sceneStyle={{ backgroundColor: 'white' }}
                        />

                        <Scene
                            key='PaymentConfirmation'
                            component={PaymentConfirmation}
                            title='PaymentConfirmation'
                            hideNavBar={true}

                            sceneStyle={{ backgroundColor: 'white' }}
                        />

                        <Scene
                            key='ForgotPassword'
                            component={ForgotPassword}
                            title='ForgotPassword'
                            hideNavBar={true}

                            sceneStyle={{ backgroundColor: 'white' }}
                        />


                        <Scene
                            key='HotelSupport'
                            component={HotelSupport}
                            title='HotelSupport'
                            hideNavBar={true}

                            sceneStyle={{ backgroundColor: 'white' }}
                        />

                        <Scene
                            key="Country"
                            title='Country'
                            component={Country}
                            sceneStyle={{ backgroundColor: 'white' }}
                        />
                        <Scene
                            key="TermsCondtions"
                            title='TermsCondtions'
                            hideNavBar={true}

                            component={TermsCondtions}
                            sceneStyle={{ backgroundColor: 'white' }}
                        />
                        <Scene
                            key="UserProfile"
                            title='UserProfile'
                            component={UserProfile}
                            hideNavBar={true}

                        />


                        <Drawer
                            hideNavBar
                            key="drawerMenu"

                            contentComponent={SideMenu}
                            drawerWidth={250}
                            drawerPosition="left"
                        >
                            <Scene
                                key='mainScenes'
                                hideNavBar={true}

                                activeTintColor={colors.activeTint}
                                navigationBarStyle={{ backgroundColor: colors.primary }}
                                leftButtonIconStyle={{ tintColor: 'white' }}
                                titleStyle={{
                                    color: 'white',
                                    fontSize: normalize(14),
                                    fontWeight: 'bold'
                                }}
                                tabBarStyle={{
                                    height: isIphoneX() ? verticalScale(47) : verticalScale(65),
                                    paddingVertical: isIphoneX() ? 3 : 2
                                }}
                                tabs={true}
                                translucent={false}
                                style={s.tabbar}
                            >
                                <Stack icon={this.iconBook}>
                                    <Scene
                                        key='Book'
                                        hideNavBar={true}
                                        title='Book'
                                        titleStyle={{ color: 'white' }}
                                        navigationBarStyle={{ backgroundColor: colors.primary }}
                                        component={Book}

                                    >
                                    </Scene>
                                    <Scene
                                        key='FlightSearchResult'
                                        hideNavBar={true}
                                        title='Search Result'
                                        titleStyle={{ color: 'white' }}
                                        navigationBarStyle={{ backgroundColor: colors.primary }}
                                        component={FlightSearchResult}
                                    />

                                    <Scene
                                        key="FlightBookConfirm"
                                        hideNavBar={true}
                                        title='Search Result'
                                        titleStyle={{ color: 'white' }}
                                        navigationBarStyle={{ backgroundColor: colors.primary }}
                                        component={FlightBookConfirm}
                                    />
                                    <Scene
                                        key="HotelSearch"
                                        component={HotelSearch}
                                        title='HotelSearch'
                                        hideNavBar={true}
                                        sceneStyle={{ backgroundColor: 'white' }}
                                    />

                                    <Scene
                                        key='HotelSearchResult'
                                        component={HotelSearchResult}
                                        title='HotelSearchResult'
                                        hideNavBar={true}
                                        sceneStyle={{ backgroundColor: 'white' }}
                                    />
                                    <Scene
                                        key='HotelDetail'
                                        component={HotelDetail}
                                        title='HotelDetail'
                                        hideNavBar={true}
                                        sceneStyle={{ backgroundColor: 'white' }}
                                    />
                                    <Scene
                                        key='HotelCheckout'
                                        component={HotelCheckout}
                                        title='HotelCheckout'
                                        hideNavBar={true}
                                        sceneStyle={{ backgroundColor: 'white' }}
                                    />
                                    <Scene
                                        hideNavBar={true}
                                        key='HotelCart'
                                        component={HotelCart}
                                        title='HotelCart'
                                        sceneStyle={{ backgroundColor: 'white' }}
                                    />


                                    <Scene
                                        key='ContactPage'
                                        component={ContactPage}
                                        title='ContactPage'
                                        hideNavBar={true}
                                        sceneStyle={{ backgroundColor: 'white' }}
                                    />
                                </Stack>

                                <Scene
                                    key='Booking'
                                    hideNavBar={true}
                                    icon={this.iconBooking}
                                    title='Booking'
                                    titleStyle={{ color: 'white' }}
                                    navigationBarStyle={{ backgroundColor: colors.primary }}
                                    component={Booking}

                                />

                                <Scene
                                    key='Account'
                                    hideNavBar={true}
                                    title='Account'
                                    titleStyle={{ color: 'white' }}
                                    navigationBarStyle={{ backgroundColor: colors.primary }}
                                    component={Account}
                                    initial={false}
                                    icon={this.iconProfile}
                                />
                            </Scene>

                        </Drawer>


                    </Stack>
                </Router>
            </View>
        );
    }
}

const s = StyleSheet.create({
    tabIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 23,
        height: 23
    },
    tabbar: {
        backgroundColor: 'black',
        borderTopColor: 'white',
        borderTopWidth: 2
    }
});


export default connect(
    null,
    null
)(RootNavigation);