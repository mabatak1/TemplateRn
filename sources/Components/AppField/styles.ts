import { StyleSheet } from 'react-native';
import { measure, padding } from '../../Helpers';

export default StyleSheet.create({
  input: {
    height: measure.inputHeight,
    paddingHorizontal: padding.p8,
    borderBottomWidth: 1,
  },
});
