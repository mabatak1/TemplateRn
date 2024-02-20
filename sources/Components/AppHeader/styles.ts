import {StyleSheet} from 'react-native';
import {color, fontSize, measure} from '../../Helpers';

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: color.primary,
    // paddingTop: statusBar,
  },
  contentHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: measure.headerHeight,
    // paddingHorizontal: padding.p8,
  },
  iconLeftBack: {
    color: color.white,
    fontSize: fontSize.f36,
  },
  iconRigth: {
    color: color.black,
    fontSize: fontSize.f24,
  },
  titleWrap: {
    flex: 1,
    alignItems: 'center',
  },
  txtTitle: {
    color: color.white,
    fontSize: fontSize.f18,
    fontWeight: '700',
  },
  iconRightInvisible: {
    color: color.white,
    fontSize: fontSize.f36,
    opacity: 0,
  },
});
