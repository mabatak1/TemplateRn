import { StyleSheet } from 'react-native';
import { color, fontSize, measure, padding, responsivePixel, statusBar } from '../../Helpers';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: padding.p4,
    width: '100%',
  },
  content: {
    height: measure.inputHeight,
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: color.grayBoder,
    paddingHorizontal: padding.p4,
  },
  txtTitle: {
    color: color.grayAbbey,
    fontSize: fontSize.f16,
    paddingBottom: padding.p2,
  },
  multiSelectBtn: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingLeft: padding.p12,
    paddingBottom: padding.p2,
    height: measure.inputHeight,
  },
  iconDown: {
    fontSize: fontSize.f24,
    marginLeft: padding.p4,
    marginBottom: padding.p2,
    color: color.grayAbbey,
  },
  selectedValue: {
    backgroundColor: color.primary,
    minHeight: responsivePixel(42),
    justifyContent: 'center',
    paddingHorizontal: padding.p12,
  },
  selectValue0: {
    backgroundColor: color.white,
    minHeight: responsivePixel(42),
    justifyContent: 'center',
    paddingHorizontal: padding.p12,
  },
  selectValue1: {
    backgroundColor: '#E0E7EE',
    minHeight: responsivePixel(42),
    justifyContent: 'center',
    paddingHorizontal: padding.p12,
  },
  headerWrap: {
    height: responsivePixel(50) + statusBar,
    backgroundColor: color.primary,
    justifyContent: 'center',
  },
  backButton: {
    paddingTop: statusBar,
  },
  containerModal: {
    margin: 0,
    backgroundColor: color.white,
  },
  require: {
    fontSize: fontSize.f16,
    color: color.black,
  },
  searchBox: {
    borderBottomWidth: 1,
    borderColor: color.grayBoder,
    minHeight: measure.inputHeight,
    marginVertical: padding.p8,
    paddingHorizontal: padding.p12,
    fontSize: fontSize.f16,
  },
  txtValueSelected: {
    maxWidth: '95%',
    fontSize: fontSize.f16,
    color: color.grayAbbey,
  },
});
export default styles;
