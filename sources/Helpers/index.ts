import {Dimensions, PixelRatio, Platform} from 'react-native';
import {getStatusBarHeight} from './iphoneXHelper';
import {PERMISSIONS, RESULTS} from 'react-native-permissions';
import color from './color';
import fontSize from './fontSize';
import padding from './padding';
import timer from './timer';
import * as languageUtils from './languageUtils';

const width = Dimensions.get('window').width;
const scale = width / 375;

const responsivePixel = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const device = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
const measure = {
  inputHeight: responsivePixel(36),
  buttonHeight: responsivePixel(40),
  buttonHeaderWidth: responsivePixel(36),
  headerHeight: responsivePixel(36),
  bottomTabBarHeight: responsivePixel(57),
  tabBarPaddingBottom: responsivePixel(20),
  iconBtmH: responsivePixel(29),
  cardHeight: responsivePixel(55),
};

const dimension = {
  headerHeight: responsivePixel(55),
};

const statusBar = getStatusBarHeight(true);

const permissions = {
  MICROPHONE:
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.MICROPHONE
      : PERMISSIONS.ANDROID.RECORD_AUDIO,
  CAMERA:
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  LOCATION:
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  PHOTO_LIBRARY:
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  ANDROID_WRITE_STORAGE: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
};

const resultPermission = {
  UNAVAILABLE: RESULTS.UNAVAILABLE,
  BLOCKED: RESULTS.BLOCKED,
  DENIED: RESULTS.DENIED,
  GRANTED: RESULTS.GRANTED,
};

const appTimer = new timer();

export {
  responsivePixel,
  device,
  measure,
  dimension,
  statusBar,
  permissions,
  resultPermission,
  color,
  fontSize,
  padding,
  languageUtils,
  appTimer,
};
