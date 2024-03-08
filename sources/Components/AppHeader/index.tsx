/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {ViewProps, View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import AppText from '../AppText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, DrawerActions} from '@react-navigation/native';
// import {useDrawerStatus} from '@react-navigation/drawer';

export interface HeaderProps extends ViewProps {
  isBack?: boolean;
  isMenu?: boolean;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  iconLeft?: string;
  iconRight?: string;
  title?: string;
}

export default (props: HeaderProps) => {
  const navigation = useNavigation();
  // const isDrawerOpen = useDrawerStatus();

  const onBackPress = () => navigation.goBack();

  const onPressMenu = () => {
    // if (isDrawerOpen) {
    //   navigation.dispatch(DrawerActions.closeDrawer);
    //   return;
    // }
    // navigation.dispatch(DrawerActions.openDrawer);
  };

  const onLeftPress = () => props.onLeftPress && props.onLeftPress();

  const onRightPress = () => props.onRightPress && props.onRightPress();

  const RenderLeft = useCallback(() => {
    if (props.isBack) {
      return (
        <TouchableOpacity onPress={onBackPress}>
          <MIcon name="chevron-left" style={styles.iconLeftBack} />
        </TouchableOpacity>
      );
    }
    if (props.isMenu) {
      return (
        <TouchableOpacity onPress={onPressMenu}>
          <MIcon name="menu" style={styles.iconLeftBack} />
        </TouchableOpacity>
      );
    }
    if (props.iconLeft) {
      return (
        <TouchableOpacity onPress={onLeftPress}>
          <MIcon name={props.iconLeft} style={styles.iconRigth} />
        </TouchableOpacity>
      );
    }
    return null;
  }, [props.isBack, props.isMenu, props.iconLeft]);

  const RenderTitle = useCallback(() => {
    return (
      <View style={styles.titleWrap}>
        <AppText style={styles.txtTitle}>{props.title}</AppText>
      </View>
    );
  }, [props.title]);

  const RenderRight = useCallback(() => {
    if (props.iconRight) {
      return (
        <TouchableOpacity onPress={onRightPress}>
          <MIcon name={props.iconRight} style={styles.iconRigth} />
        </TouchableOpacity>
      );
    }
    return <MIcon name="chevron-left" style={styles.iconRightInvisible} />;
  }, [props.iconRight]);

  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <RenderLeft />
        <RenderTitle />
        <RenderRight />
      </View>
    </View>
  );
};
