/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View, Dimensions, Text} from 'react-native';
import {AppContainer} from '../../Components';
import {styles} from './styles';
import {color, fontSize, padding} from '../../Helpers';
import MIcon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

export default () => {
  const renderItem = (icon: string, name: string, txt: string) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginBottom: padding.p16,
        }}>
        <View style={{width: '15%'}}>
          <MIcon
            name={icon}
            style={{fontSize: fontSize.f28, marginHorizontal: padding.p4}}
          />
        </View>
        <View style={{width: '85%'}}>
          <Text style={{fontSize: fontSize.f18, color: color.grayBoder}}>
            {name}
          </Text>
          <Text style={{fontSize: fontSize.f18, marginTop: padding.p8}}>
            {txt}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <AppContainer title="Profile">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: 150,
              width: Dimensions.get('screen').width - 32,
              backgroundColor: 'red',
              borderRadius: padding.p12,
            }}>
            <FastImage
              style={{
                height: 150,
                width: Dimensions.get('screen').width - 32,
                borderRadius: padding.p12,
              }}
              source={{
                uri: 'https://cdn.vectorstock.com/i/preview-1x/57/56/template-banner-for-online-store-with-shopping-vector-42935756.jpg',
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View
            style={{
              height: 120,
              width: 120,
              backgroundColor: 'blue',
              position: 'absolute',
              bottom: -60,
              borderRadius: padding.p24,
            }}>
            <FastImage
              style={{
                height: 120,
                width: 120,
                borderRadius: padding.p24,
              }}
              source={{
                uri: 'https://hienthao.com/wp-content/uploads/2023/05/c6e56503cfdd87da299f72dc416023d4.jpg',
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
        </View>
        <View style={{marginTop: 80}}>
          <Text style={{fontSize: fontSize.f28, fontWeight: '700'}}>
            Le Van Nam
          </Text>
        </View>
        <View style={{marginTop: padding.p28, paddingHorizontal: padding.p12}}>
          {renderItem('person-outline', 'Name', 'Le Van Nam')}
          {renderItem('mail-outline', 'Email', 'abc@gmail.com')}
          {renderItem('call-outline', 'Số điện thoại', '09876554422')}
          {renderItem('home-outline', 'Địa chỉ', 'Cầu giấy , Hà Nội')}
        </View>
      </ScrollView>
    </AppContainer>
  );
};
