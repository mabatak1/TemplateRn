import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import styles from './styles';

interface AppTextProps extends TextProps {
  children?: any;
  style?: StyleProp<TextStyle>;
}

export default (props: AppTextProps) => {
  return (
    <Text {...props} style={[styles.defaultText, props.style]}>
      {props.children}
    </Text>
  );
};
