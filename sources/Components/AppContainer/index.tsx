import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader, {HeaderProps} from '../AppHeader';
import styles from './styles';

interface Props extends HeaderProps {
  children?: any;
}

export default (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader {...props} />
      <View style={styles.content}>{props.children}</View>
    </SafeAreaView>
  );
};
