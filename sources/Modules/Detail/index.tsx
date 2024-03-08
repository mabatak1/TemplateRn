/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AppContainer} from '../../Components';
import {styles} from './styles';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {color, fontSize, padding} from '../../Helpers';
import {Rating} from '@kolking/react-native-rating';

let dummyData = {
  productId: '123456',
  productName: 'Áo Polo Nam',
  category: 'Quần Áo',
  brand: 'ABC Clothing',
  price: 29.99,
  currency: 'USD',
  description:
    'Áo Polo thời trang cho nam giới với chất liệu vải thoáng khí, phong cách đẹp mắt.',
  colors: ['black', 'white', 'green', 'red'],
  sizes: ['S', 'M', 'L', 'XL'],
  images: [
    'https://example.com/images/product/1.jpg',
    'https://example.com/images/product/2.jpg',
    'https://example.com/images/product/3.jpg',
  ],
  ratings: {
    average: 4.5,
    total: 120,
  },
  reviews: [
    {
      userId: 'user123',
      userName: 'John Doe',
      rating: 5,
      comment: 'Sản phẩm rất tuyệt vời, tôi rất hài lòng!',
    },
    {
      userId: 'user456',
      userName: 'Jane Smith',
      rating: 4,
      comment: 'Chất lượng sản phẩm khá tốt, giá cả hợp lý.',
    },
    // Thêm đánh giá khác nếu cần thiết
  ],
  availability: true,
  stockQuantity: 150,
};

export default () => {
  const [activeColor, setActiveColor] = useState(dummyData.colors[1]);
  useEffect(() => {}, []);
  return (
    <>
      <AppContainer
        title="Detail"
        iconRight="cart-outline"
        isBack
        onRightPress={() => {}}>
        <View style={{flex: 1, padding: padding.p12}}>
          <View style={styles.containerSwiper}>
            <SwiperFlatList
              style={{borderRadius: padding.p12}}
              // autoplay
              // autoplayDelay={2}
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: padding.p12,
            }}>
            {dummyData.colors.map((i, idx) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setActiveColor(i);
                  }}
                  key={idx}
                  style={{
                    width: padding.p24,
                    height: padding.p24,
                    borderRadius: padding.p4,
                    backgroundColor: i,
                    marginRight: padding.p12,
                    borderColor: color.black,
                    borderWidth: activeColor == i ? 2 : 0,
                  }}
                />
              );
            })}
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: padding.p12,
            }}>
            <Text
              style={{
                fontSize: fontSize.f24,
                fontWeight: '700',
                fontFamily: 'Georgia',
              }}>
              {dummyData.productName}
            </Text>
            <Text
              style={{
                fontSize: fontSize.f18,
                fontWeight: '500',
                fontFamily: 'Courier New',
                color: color.greenLimeade,
                marginTop: padding.p12,
              }}>
              {dummyData.price} $
            </Text>
            <Text
              style={{
                fontSize: fontSize.f16,
                fontWeight: '400',
                marginVertical: padding.p12,
                fontFamily: 'Verdana',
              }}>
              Chi tiết : {dummyData.description}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: fontSize.f16, marginRight: padding.p6}}>
                Size:
              </Text>
              {dummyData.sizes.map((i, idx) => {
                return (
                  <View
                    key={idx}
                    style={{
                      paddingHorizontal: padding.p12,
                      paddingVertical: padding.p4,
                      borderRadius: padding.p4,
                      backgroundColor: color.white,
                      marginRight: padding.p8,
                    }}>
                    <Text style={{color: color.grayAbbey, fontWeight: '600'}}>
                      {i}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View>
              <Text style={{fontSize: fontSize.f16, fontWeight: '600'}}>
                Reviews{`(${dummyData.reviews.length})`}
              </Text>
              <View style={{marginLeft: padding.p12, marginTop: padding.p8}}>
                {dummyData.reviews.map((review, idx) => {
                  return (
                    <View key={idx} style={{marginBottom: padding.p12}}>
                      <Text style={{fontSize: fontSize.f14, fontWeight: '600'}}>
                        {review.userName}
                      </Text>
                      <Rating
                        size={16}
                        rating={review.rating}
                        variant="stars"
                        disabled
                        style={{marginVertical: padding.p8}}
                      />
                      <Text style={{fontSize: fontSize.f12, fontWeight: '500'}}>
                        {review.comment}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </AppContainer>
    </>
  );
};
