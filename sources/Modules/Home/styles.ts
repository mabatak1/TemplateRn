import {Dimensions, StyleSheet} from 'react-native';
import {color, fontSize, padding} from '../../Helpers';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: padding.p12,
    alignItems: 'center',
    paddingVertical: padding.p12,
  },
  viewSearch: {
    flexDirection: 'row',
    paddingHorizontal: padding.p12,
    backgroundColor: color.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: padding.p4,
  },
  inputSearch: {
    height: 50,
    fontSize: fontSize.f16,
    flex: 1,
  },
  containerSwiper: {height: '100%', backgroundColor: 'white'},
  child: {width, justifyContent: 'center', borderRadius: padding.p12},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});
