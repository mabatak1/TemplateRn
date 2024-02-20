import React from 'react';
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import styles from './styles';

interface AppButtonProps extends GenericTouchableProps {
  children?: any;
  title?: any;
  textStyle?: TextStyle;
  transparent?: boolean;
  style?: StyleProp<ViewStyle>;
}
const AppButton = (props: AppButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[!props.transparent && styles.defaultStyle, props.style]}>
      {props.title ? <Text style={[styles.defaultTextStyle, props.textStyle]}>{props.title}</Text> : props.children}
    </TouchableOpacity>
  );
};
export default AppButton;
