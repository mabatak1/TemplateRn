/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect} from 'react';
import {Text, TextInput, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {AppContainer} from '../../Components';
import FastImage from 'react-native-fast-image';
import Icon, {Icons} from '../../Components/Icon';
import {color, fontSize, padding} from '../../Helpers';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const array = [
  {
    ten: 'Sản phẩm A',
    sku: 'SP001',
    gia: 50.0,
    moTa: 'Mô tả chi tiết về sản phẩm A',
    anh: 'https://chimkudo.com/wp-content/uploads/2021/03/2022-05-09-02-41-10-BRadius8Smoothing10.jpg',
    soLuongTonKho: 20,
    danhMuc: 'Danh mục A',
    nhaSanXuat: 'Nhà sản xuất XYZ',
    ngaySanXuat: '2022-01-15',
    hanSuDung: '2023-01-15',
    trangThai: 'Đang bán',
  },
  {
    ten: 'Sản phẩm B',
    sku: 'SP002',
    gia: 75.0,
    moTa: 'Mô tả chi tiết về sản phẩm B',
    anh: 'https://chimkudo.com/wp-content/uploads/2021/03/2022-05-09-02-41-10-BRadius8Smoothing10.jpg',
    soLuongTonKho: 15,
    danhMuc: 'Danh mục B',
    nhaSanXuat: 'Nhà sản xuất ABC',
    ngaySanXuat: '2022-02-20',
    hanSuDung: '2024-02-20',
    trangThai: 'Đang bán',
  },
  {
    ten: 'Sản phẩm C',
    sku: 'SP003',
    gia: 120.0,
    moTa: 'Mô tả chi tiết về sản phẩm C',
    anh: 'https://studiovietnam.com/wp-content/uploads/2022/08/mau-anh-chup-my-pham-01-scaled.jpg',
    soLuongTonKho: 10,
    danhMuc: 'Danh mục C',
    nhaSanXuat: 'Nhà sản xuất DEF',
    ngaySanXuat: '2022-03-10',
    hanSuDung: '2023-03-10',
    trangThai: 'Đang bán',
  },
  // Thêm các sản phẩm khác vào đây nếu cần
];

export default () => {
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const renderItem = (item: any, idx: number) => {
    return (
      <TouchableOpacity
        key={idx}
        style={{
          backgroundColor: 'white',
          width: '49%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: padding.p12,
          padding: padding.p8,
        }}
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <FastImage
          style={{height: 200, width: '100%', borderRadius: padding.p12}}
          source={{
            uri: item?.anh,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View
          style={{
            marginTop: padding.p8,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            padding: padding.p8,
          }}>
          <Text
            style={{
              fontSize: fontSize.f16,
              fontWeight: '700',
            }}>{`${item?.gia} $`}</Text>
          <Text
            style={{
              marginVertical: padding.p4,
              fontSize: fontSize.f12,
              color: color.grayBoder,
            }}>
            {item?.sku}
          </Text>
          <Text style={{fontSize: fontSize.f14}}>{item?.ten}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <AppContainer title="HOME">
      <View style={{flex: 1, padding: padding.p12}}>
        <View style={styles.viewSearch}>
          <TextInput style={styles.inputSearch} />
          <Icon
            name={'search-outline'}
            type={Icons.Ionicons}
            size={padding.p24}
          />
        </View>
        <View style={{height: '30%', marginTop: padding.p12}}>
          <View style={styles.containerSwiper}>
            <SwiperFlatList
              style={{borderRadius: padding.p12}}
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={2}
              showPagination>
              <View style={[styles.child, {backgroundColor: 'tomato'}]}>
                <Text style={styles.text}>1</Text>
              </View>
              <View style={[styles.child, {backgroundColor: 'thistle'}]}>
                <Text style={styles.text}>2</Text>
              </View>
              <View style={[styles.child, {backgroundColor: 'skyblue'}]}>
                <Text style={styles.text}>3</Text>
              </View>
              <View style={[styles.child, {backgroundColor: 'teal'}]}>
                <Text style={styles.text}>4</Text>
              </View>
            </SwiperFlatList>
          </View>
        </View>
        <View style={{flex: 1, marginTop: padding.p12}}>
          <FlatList
            data={array}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item: any, index) => index?.toString()}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            numColumns={2}
            contentContainerStyle={{gap: padding.p8}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        </View>
      </View>
    </AppContainer>
  );
};
