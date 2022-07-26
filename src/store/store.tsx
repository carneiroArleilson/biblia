import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import VersionReducer from './version/Version.reducer';
import MyVersionReducer from './myVersion/MyVersion.reducer';

const rootReducer = combineReducers({
  version: VersionReducer,
  myversion: MyVersionReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  rootReducer,
);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);
