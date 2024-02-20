/* eslint-disable react-native/no-inline-styles */
import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleProp,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {appTimer, color, fontSize, languageUtils} from '../../Helpers';
import AppHeader from '../AppHeader';
import AppText from '../AppText';
import styles from './styles';

const {stringToSlug} = languageUtils;

interface Item {
  value: any;
  id: any;
}

export interface DropDownProps {
  data?: Array<{label: string; value: string}>;
  title?: string;
  titleDropDown?: string;
  value?: any;
  onChoose?: (item: Item) => void;
  disabled?: boolean;
  require?: boolean;
  isSearch?: boolean;
  loading?: boolean;
  customContainer?: StyleProp<ViewStyle>;
}

export default (props: DropDownProps) => {
  const {title, onChoose, data, value: valueDefault, isSearch, loading} = props;
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(valueDefault ? valueDefault : '');
  const [dataLocal, setDataLocal] = useState(data);

  const [loadingLocal, setLoading] = useState(false);

  const handleData = (itemSelected: Item) => () => {
    setOpen(!isOpen);
    setValue(itemSelected.value);
    onChoose && onChoose(itemSelected.value);
  };

  const getStyle = (index: number) => {
    if (index % 2 === 0) {
      return styles.selectValue0;
    } else {
      return styles.selectValue1;
    }
  };

  const renderItem = (itemProps: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        onPress={handleData(itemProps.item)}
        style={getStyle(itemProps.index)}>
        <AppText style={{color: color.black, fontSize: fontSize.f16}}>
          {itemProps.item.label}
        </AppText>
      </TouchableOpacity>
    );
  };

  const closeModal = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    setDataLocal(props.data);
  }, [props.data]);

  let label = '';
  const seletedValue =
    props.data &&
    props.data.filter(
      elm => value && elm.value.toString() === value.toString(),
    );
  if (seletedValue && seletedValue.length > 0) {
    label = seletedValue[0].label;
  }

  const deboundSearch = (txt: string) => {
    const newData = (_.cloneDeep(props.data) || []).filter(elm => {
      const labelItem = stringToSlug(elm.label).toLowerCase();
      const txtInput = stringToSlug(txt).toLowerCase();
      return labelItem.includes(txtInput);
    });
    setDataLocal(newData);
    setLoading(false);
  };

  const onSearch = (txt: string) => {
    setLoading(true);
    appTimer.debounce(() => deboundSearch(txt), 800);
  };

  return (
    <>
      <View style={[styles.container, props.customContainer]}>
        <View style={styles.content}>
          {title && (
            <AppText
              style={[styles.txtTitle, {opacity: props.disabled ? 0.5 : 1}]}>
              {title}
              {props.require && <AppText style={styles.require}> (*)</AppText>}
            </AppText>
          )}
          <TouchableOpacity
            disabled={props.disabled}
            style={[styles.multiSelectBtn, {opacity: props.disabled ? 0.5 : 1}]}
            onPress={() => setOpen(!isOpen)}>
            <AppText numberOfLines={1} style={styles.txtValueSelected}>
              {value && label.trim()}
            </AppText>
            {loading ? (
              <ActivityIndicator size="small" />
            ) : (
              <MIcon name="chevron-down" style={styles.iconDown} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ReactNativeModal
        style={styles.containerModal}
        useNativeDriver
        isVisible={isOpen}
        onBackdropPress={closeModal}
        animationIn="slideInUp"
        animationOut="slideOutDown">
        <AppHeader
          iconLeft="chevron-left"
          onLeftPress={closeModal}
          title={props.titleDropDown}
        />
        {isSearch && (
          <TextInput
            style={styles.searchBox}
            placeholder="Tìm kiếm"
            onChangeText={onSearch}
          />
        )}
        <FlatList
          data={dataLocal}
          refreshing={loadingLocal}
          onRefresh={() => {}}
          renderToHardwareTextureAndroid
          decelerationRate={0.95}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item && item.value.toString()}
        />
      </ReactNativeModal>
    </>
  );
};
