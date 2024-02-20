import React, {ReactNode} from 'react';
import {LogBox} from 'react-native';
import MainApp from './sources';

const App: () => ReactNode = () => {
  LogBox.ignoreAllLogs(true);
  return <MainApp />;
};

export default App;
