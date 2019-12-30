/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { StatusBar, Text, View, ActivityIndicator, SafeAreaView, Platform } from 'react-native';
import { Root } from 'native-base';


import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Config from 'react-native-config'
//import SplashScreen from 'react-native-smart-splash-screen';

import store from './store';
//import { Colors } from './config/colors'

import RootNavigation from './navigation/RootNavigation';
// import TermsReadMore from './containers/Authentication/TermsReadMore';
// import WherePracticeScreen from './containers/Authentication/WherePracticeScreen';

class App extends Component {
    componentDidMount() {
        console.log(Config, 'ConfigConfigConfig')
        Text.defaultProps = Text.defaultProps || {};
        Text.defaultProps.allowFontScaling = false;
    }
    content = () => {
        return (
            <Provider store={store.store}>
                <PersistGate loading={<ActivityIndicator />} persistor={store.persistor}>
                    <View style={{ flex: 1, backgroundColor: "#6e78f7" }}>
                        <StatusBar translucent backgroundColor={"#6e78f7"} />
                        <Root>
                            <RootNavigation />
                        </Root>
                    </View>
                </PersistGate>
            </Provider>
        )
    }

    render() {
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;

        if (Platform.OS == 'android') {
            return (
                <SafeAreaView forceInset={{ top: 'always', bottom: 'never' }} style={{
                    flex: 1,
                    backgroundColor: "#6e78f7",
                    paddingTop: Platform.OS === 'android' ? 25 : 0
                }}>
                    {this.content()}
                </SafeAreaView>

            );
        } else {
            return (
                <View style={{ flex: 1, }}>
                    {this.content()}
                </View>
            )
        }
    }
}

export default App;