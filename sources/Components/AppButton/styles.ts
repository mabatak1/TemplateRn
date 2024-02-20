import {StyleSheet} from 'react-native';
import {color, measure, padding, fontSize} from '../../Helpers';

export default StyleSheet.create({
  defaultStyle: {
    backgroundColor: color.greenLimeade,
    height: measure.buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: padding.p12,
    borderRadius: padding.p8,
  },
  defaultTextStyle: {
    color: color.white,
    fontSize: fontSize.f14,
    fontWeight: '700',
  },
});
