import {Formik} from 'formik';
import React, {useCallback} from 'react';
import {ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {AppButton, AppInputField} from '../../Components';
import {userActions} from '../../Redux/Actions';
import styles from './styles';

const validateLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('abc email sai r')
    .required('Must be required field'),
  password: Yup.string().required('Must be required field'),
});

export default () => {
  const dispatch = useDispatch();

  const onLogin = useCallback(() => {
    dispatch(userActions.loginSuccess({accessToken: 'ok'}));
  }, [dispatch]);

  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
      }}>
      <SafeAreaView style={styles.container}>
        {/* <AppText>Đăng nhập</AppText> */}
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          // validationSchema={validateLoginSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={onLogin}>
          {({handleSubmit}) => (
            <View style={{paddingHorizontal: 20}}>
              <AppInputField
                name="email"
                placeholder="Email input"
                memo
                iconLeft="account-box"
                customContainerInput={{
                  borderWidth: 0,
                  backgroundColor: 'rgba(255, 255, 255, .4)',
                }}
              />
              <AppInputField
                name="password"
                placeholder="Password input"
                memo
                iconLeft="lock"
                customContainerInput={{
                  borderWidth: 0,
                  backgroundColor: 'rgba(255, 255, 255, .4)',
                }}
              />
              <AppButton title={'Đăng nhập'} onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </ImageBackground>
  );
};
