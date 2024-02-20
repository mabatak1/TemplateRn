import get from 'lodash/get';
import React, {useCallback} from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {color} from '../../Helpers';
import AppField from '../AppField';
import AppText from '../AppText';
import Icon, {Icons} from '../Icon';
import styles from './styles';
interface Props {
  name: any;
  form?: any;
  field?: any;
  onChangeCustom?: any;
  placeholder?: any;
  memo?: boolean;
  customInputStyle?: any;
  iconRight?: string;
  iconLeft?: string;
  iconRightStyle?: any;
  iconLeftStyle?: any;
  customErrorText?: any;
  customContainerInput?: any;
  typeIcon?: any;
  title?: string;
}

const Input = (props: Props) => {
  const {
    form,
    field,
    onChangeCustom,
    placeholder,
    customInputStyle,
    iconRight,
    iconRightStyle,
    iconLeft,
    iconLeftStyle,
    customErrorText,
    customContainerInput,
    typeIcon,
    title,
  } = props;
  const {name, value} = field;
  const {errors, setFieldValue, touched} = form;

  const error = get(errors, name);
  const isTouched = get(touched, name);

  const onChange = useCallback(
    (text: any) => {
      setFieldValue(name, text);
    },
    [name, setFieldValue],
  );

  return (
    <>
      {title && (
        <View style={styles.title}>
          <AppText style={styles.txtTitle}>{title}</AppText>
        </View>
      )}
      <View
        style={[
          styles.containerInput,
          (customErrorText || error) && styles.inputError,
          customContainerInput,
        ]}>
        {iconLeft && (
          <Icon
            type={Icons.MaterialCommunityIcons || typeIcon}
            name={iconLeft || 'shield-account'}
            style={[styles.iconLeft, iconLeftStyle]}
          />
        )}
        <TextInput
          name={name}
          onChangeText={onChangeCustom || onChange}
          placeholder={placeholder || name}
          value={value}
          placeholderTextColor={color.gray}
          style={[styles.input, customInputStyle]}
        />
        {iconRight && (
          <Icon
            type={Icons.MaterialCommunityIcons || typeIcon}
            name={iconRight || 'shield-account'}
            style={[iconRightStyle, styles.iconRight]}
          />
        )}
      </View>
      <AppText style={styles.errorTxt}>
        {isTouched && (customErrorText || error)}
      </AppText>
    </>
  );
};

export default (props: Props) => {
  const {memo, name, ...remainProps} = props;
  if (memo) {
    return <AppField name={name} component={Input} {...remainProps} />;
  }
  return <AppField name={name} component={Input} {...remainProps} />;
};
