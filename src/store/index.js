import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';

//import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';



import thunk from 'redux-thunk';
import reducer from '../reducer/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
    // blacklist: ['signup', 'forgot']
};

const persistedReducer = persistReducer(persistConfig, reducer);

const loggerMiddleware = createLogger();
const middlewares = [thunk];

if (__DEV__) {
    middlewares.push(loggerMiddleware);
}

function configureStore() {
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(persistedReducer, enhancer);
    const persistor = persistStore(store);
    return { store, persistor };
}

const store = configureStore();

export default store;