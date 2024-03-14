import get from 'lodash/get';
import React from 'react';
import {ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppField from '../AppField';
import AppText from '../AppText';
import styles from './styles';

interface Props {
  name: any;
  form?: any;
  field?: any;
  onChangeCustom?: any;
  placeholder?: any;
  memo?: boolean;
  customInputStyle?: ViewStyle;
  title: string;
}

const Input = (props: Props) => {
  const {form, field} = props;
  const {name, value} = field;
  const {errors, setFieldValue} = form;

  const error = get(errors, name);

  const onPress = () => {
    setFieldValue(name, !value);
  };

  return (
    <>
      <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <MIcon
          name={value ? 'check-box-outline' : 'checkbox-blank-outline'}
          style={styles.icon}
        />
        <AppText>{props.title}</AppText>
      </TouchableOpacity>
      <AppText>{error}</AppText>
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
