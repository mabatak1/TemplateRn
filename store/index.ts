import AsyncStorage from '@react-native-async-storage/async-storage';
// import {applyMiddleware, compose, createStore} from 'redux';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';

import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sources/Redux/Sagas';
import rootReducer from '../sources/Redux/Reducers';

const persistConfig = {
  // Root
  key: 'root',
  timeout: 0,
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['authReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
if (__DEV__) {
  middleware.push(createLogger());
}
const enhancers = [applyMiddleware(...middleware)];
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, undefined, compose(...enhancers));

const config: any = {enhancers};

const persistor = persistStore(store, config, async () => {
  const stateData = store.getState();
  console.log(
    '🔪🔪🔪🔪🔪🔪🔪🔪🔪 ---> file: index.ts ---> line 39 ---> persistor ---> stateData',
    stateData,
  );
});

sagaMiddleware.run(sagas);

export {store, persistor};
