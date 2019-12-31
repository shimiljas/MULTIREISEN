/* eslint-disable prettier/prettier */
import React, { Componet } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

import LoginScreen from '../container/Authentication/LoginScreen'
import SignupScreen from '../container/Authentication/SignupScreen'


import Book from '../container/Home/Book';

import Booking from '../container/Home/Booking';
import Account from '../container/Home/Account';
import FlightSearch from '../container/Home/FlightSearch'
import HotelSearch from '../container/Home/HotelSearch'
import HotelDetail from '../container/Home/HotelDetail'


import { Actions, Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import { colors } from '../config/colors';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { normalize } from '../utils/Fontnormalize'
import { scale, verticalScale } from '../utils/Responsive'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import SideMenu from '../container/Home/SideMenu'
import FlightBookConfirm from '../container/Home/FlightBookConfirm'



class TabIcon extends React.Component {
    render() {
        const { focused, image, activeimage } = this.props;

        return (
            <View
                style={{
                    flex: 1,
                    marginVertical: 10,
                    paddingBottom: isIphoneX() ? 25 : 0
                }}
            >
                {/* <Image
                    resizeMode={'contain'}
                    source={focused ? activeimage : image}
                    style={{
                        width: 28,
                        height: 28
                    }}
                /> */}
            </View>
        );
    }
}

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
                            initial
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
                            key='HotelDetail'

                            component={HotelDetail}
                            title='HotelDetail'
                            hideNavBar={true}
                            sceneStyle={{ backgroundColor: 'white' }}
                        />
                        <Scene
                            key='HotelSearch'

                            component={HotelSearch}
                            title='HotelSearch'
                            hideNavBar={true}
                            sceneStyle={{ backgroundColor: 'white' }}
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
                                        component={FlightSearch}
                                    />

                                    <Scene

                                        key="FlightBookConfirm"
                                        hideNavBar={true}
                                        title='Search Result'
                                        titleStyle={{ color: 'white' }}
                                        navigationBarStyle={{ backgroundColor: colors.primary }}
                                        component={FlightBookConfirm}
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