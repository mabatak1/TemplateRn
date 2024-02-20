import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './Routes';
import {store, persistor} from '../store';
import {LogBox, StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {color} from './Helpers';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  'DevTools failed to load SourceMap',
]);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      SplashScreen.hide();
    }, 800);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          backgroundColor={color.backgroundColor}
          barStyle="light-content"
        />
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
