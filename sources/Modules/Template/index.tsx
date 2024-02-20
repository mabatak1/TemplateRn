/* eslint-disable react-hooks/exhaustive-deps */
import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {Alert, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../Redux/Reducers';
import * as Yup from 'yup';
import {
  AppButton,
  AppContainer,
  AppDropDown,
  AppInputField,
} from '../../Components';
import AppCheckboxField from '../../Components/AppCheckboxField';
import CalendarModule from '../../NativeModule/CalendarModule';
import {userActions} from '../../Redux/Actions';
import styles from './styles';
import TestView from './TestView';

const validateLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('abc email sai r')
    .required('Must be required field'),
  userName: Yup.string()
    .length(15, 'Tên đăng nhập')
    .required('Must be required field'),
});

interface Props {}

export default () => {
  const user = useSelector((state: RootState) => state.userReducer);
  console.log(
    '🔪🔪🔪🔪🔪🔪🔪🔪🔪 ---> file: index.tsx ---> line 32 ---> user',
    user,
  );
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const onSignOut = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  const onSubmit = (e: any) => {
    console.log('onSubmit -> e', e);
  };

  return (
    <AppContainer
      isBack
      iconRight="magnify"
      title="Template"
      onRightPress={() => Alert.alert('right press')}>
      {/* <FlashList
        renderItem={({item}) => renderItem(item)}
        data={data}
        estimatedItemSize={50}
      /> */}
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <AppDropDown
          value=""
          isSearch
          title="dropdown"
          titleDropDown="dropdown"
          data={[
            {value: 'dropdown1', label: 'dropdown 1'},
            {value: 'dropdown2', label: 'dropdown 2'},
            {value: 'dropdown3', label: 'dropdown 3'},
            {value: 'dropdown4', label: 'dropdown 4'},
          ]}
          onChoose={value => console.log(value)}
        />
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={validateLoginSchema}
          initialValues={{email: '', userName: '', checkbox: true}}
          onSubmit={onSubmit}>
          {({handleSubmit}) => (
            <View>
              <AppInputField
                name="email"
                placeholder="Email input"
                memo
                customInputStyle={styles.customInputStyle}
              />
              <AppInputField
                name="email"
                placeholder="Email input"
                customInputStyle={styles.customInputStyle1}
              />
              <View style={styles.checkboxContainer}>
                <AppCheckboxField name="checkbox1" title="checkbox 1" />
                <AppCheckboxField name="checkbox2" title="checkbox 2" />
                <AppCheckboxField name="checkbox3" title="checkbox 3" />
              </View>
              <AppButton title={'Submit'} onPress={handleSubmit} />
            </View>
          )}
        </Formik>

        <AppButton
          title={'NativeModule'}
          onPress={() => {
            CalendarModule?.createCalendarEvent('foo', 'bar');
          }}
        />
        <AppButton title={'Đăng xuất'} onPress={onSignOut} />
      </View>
      <TestView />
    </AppContainer>
  );
};
