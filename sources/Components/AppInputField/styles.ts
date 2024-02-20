import {StyleSheet} from 'react-native';
import {color, fontSize, measure, padding} from '../../Helpers';

export default StyleSheet.create({
  input: {
    height: measure.inputHeight,
    paddingHorizontal: padding.p8,
    paddingVertical: 0,
    flex: 1,
  },
  iconRight: {
    fontSize: fontSize.f24,
    color: color.black,
    paddingHorizontal: padding.p8,
  },
  iconLeft: {
    fontSize: fontSize.f24,
    color: color.black,
    paddingHorizontal: padding.p8,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: color.black,
    borderWidth: 1,
    borderRadius: padding.p8,
    width: '100%',
  },
  title: {
    marginVertical: padding.p8,
  },
  txtTitle: {
    color: color.black,
    fontSize: fontSize.f16,
    textAlign: 'left',
    fontWeight: '700',
  },
  inputError: {
    borderWidth: 1,
    borderColor: color.redAlert,
  },
  errorTxt: {
    textAlign: 'left',
    paddingVertical: padding.p4,
    color: color.redAlert,
  },
});
