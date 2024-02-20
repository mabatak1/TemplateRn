import { StyleSheet } from 'react-native';
import { measure, padding, color, fontSize } from '../../Helpers';

export default StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: fontSize.f18,
    marginRight: padding.p4,
  },
});
