/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AppContainer} from '../../Components';
import {color, fontSize, padding} from '../../Helpers';
import FastImage from 'react-native-fast-image';
import MIcon from 'react-native-vector-icons/Ionicons';

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
];

export default () => {
  const [checkBox, setCheckBox] = useState(false);
  useEffect(() => {}, []);

  const renderItem = (item: any, index: number) => {
    return (
      <View
        key={index}
        style={{
          marginBottom: padding.p12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <FastImage
          style={{height: 80, width: 65, borderRadius: padding.p12}}
          source={{
            uri: item?.anh,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            height: 50,
            width: '50%',
          }}>
          <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>
            {item.ten}
          </Text>
          <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>x1</Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 50,
          }}>
          <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>60$</Text>
        </View>
      </View>
    );
  };

  const renderDetail = (txt: string, number: number) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: padding.p12,
        }}>
        <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>{txt}</Text>
        <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>
          {number}$
        </Text>
      </View>
    );
  };
  return (
    <>
      <AppContainer title="Giỏ Hàng" isBack>
        <ScrollView style={{padding: padding.p12, flex: 1}}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: padding.p16,
              borderRadius: padding.p8,
              marginBottom: padding.p12,
            }}>
            <Text style={{fontSize: fontSize.f16, fontWeight: '600'}}>
              Item
            </Text>
            <FlatList
              data={array}
              renderItem={({item, index}) => renderItem(item, index)}
              keyExtractor={(item: any, index) => index?.toString()}
              showsVerticalScrollIndicator={false}
              style={{marginTop: padding.p16}}
            />
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              padding: padding.p16,
              borderRadius: padding.p8,
              marginBottom: padding.p12,
            }}>
            <Text style={{fontSize: fontSize.f16, fontWeight: '600'}}>
              Price
            </Text>
            {renderDetail('Subtotal', 60)}
            {renderDetail('Shipping Free', 20)}
            {renderDetail('Coupon', 0)}
            <View
              style={{
                marginTop: padding.p16,
                borderTopWidth: 1,
                borderTopColor: color.grayBoder,
              }}>
              {renderDetail('Order Total', 60)}
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              padding: padding.p16,
              borderRadius: padding.p8,
              marginBottom: padding.p12,
            }}>
            <Text
              style={{
                fontSize: fontSize.f16,
                fontWeight: '600',
                marginBottom: padding.p12,
              }}>
              Địa chỉ nhận hàng
            </Text>
            <View style={{flexDirection: 'row', marginBottom: padding.p12}}>
              <View style={{width: '30%'}}>
                <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>
                  Địa chỉ :
                </Text>
              </View>
              <View style={{width: '70%'}}>
                <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>
                  117 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '30%'}}>
                <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>
                  Sdt :
                </Text>
              </View>
              <View style={{width: '70%'}}>
                <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>
                  (+84) 123456789
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              padding: padding.p16,
              borderRadius: padding.p8,
            }}>
            <Text
              style={{
                fontSize: fontSize.f16,
                fontWeight: '600',
                marginBottom: padding.p16,
              }}>
              Phương thức thanh toán
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: padding.p12,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setCheckBox(!checkBox);
                }}>
                <MIcon
                  name={
                    checkBox ? 'ellipse-outline' : 'checkmark-circle-outline'
                  }
                  style={{fontSize: fontSize.f24, marginHorizontal: padding.p4}}
                />
              </TouchableOpacity>
              <Text style={{fontSize: fontSize.f16, fontWeight: '400'}}>
                Thanh toán khi nhận hàng
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: padding.p12,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setCheckBox(!checkBox);
                }}>
                <MIcon
                  name={
                    !checkBox ? 'ellipse-outline' : 'checkmark-circle-outline'
                  }
                  style={{fontSize: fontSize.f24, marginHorizontal: padding.p4}}
                />
              </TouchableOpacity>
              <FastImage
                style={{height: 30, width: 30, borderRadius: padding.p12}}
                source={{
                  uri: 'https://vnpay.vn/s1/statics.vnpay.vn/2023/9/06ncktiwd6dc1694418196384.png',
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: color.blueCerulean,
              paddingHorizontal: padding.p16,
              paddingVertical: padding.p12,
              borderRadius: padding.p12,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: padding.p32,
            }}>
            <Text
              style={{
                fontSize: fontSize.f20,
                fontWeight: '600',
                color: color.white,
              }}>
              Xác Nhận
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </AppContainer>
    </>
  );
};
