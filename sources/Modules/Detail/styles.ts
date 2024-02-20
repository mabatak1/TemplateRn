import {Dimensions, StyleSheet} from 'react-native';
import {padding} from '../../Helpers';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  containerSwiper: {height: '100%', backgroundColor: 'white'},
  child: {width, justifyContent: 'center', borderRadius: padding.p12},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});
