import {Image, ScrollView, Text, View} from 'react-native';
import {AppContainer} from '../../Components';
import {styles} from './styles';

export default () => {
  return (
    <AppContainer>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{uri: 'https://example.com/path/to/profile-image.jpg'}}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
        <Text style={styles.userBio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          ligula vitae augue laoreet luctus. Pellentesque euismod nisi vel
          sapien laoreet, et luctus odio fermentum.
        </Text>
        <Text style={styles.sectionHeader}>Đánh Giá</Text>
        {/* Hiển thị danh sách đánh giá ở đây */}
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewText}>
            "Sản phẩm rất tuyệt vời, tôi rất hài lòng!"
          </Text>
          <Text style={styles.reviewAuthor}>- Jane Smith</Text>
        </View>
        {/* Thêm nhiều đánh giá khác nếu cần thiết */}
        <Text style={styles.sectionHeader}>Địa Chỉ</Text>
        <Text style={styles.addressText}>
          123 Đường ABC, Quận XYZ, Thành Phố
        </Text>
        <Text style={styles.sectionHeader}>Sản Phẩm Đã Mua</Text>
        {/* Hiển thị danh sách sản phẩm đã mua ở đây */}
        <View style={styles.productContainer}>
          {/* Hiển thị sản phẩm 1 */}
          <Image
            source={{uri: 'https://example.com/path/to/product1-image.jpg'}}
            style={styles.productImage}
          />
          {/* Thêm thông tin sản phẩm như tên, giá, và mô tả */}
          <Text style={styles.productName}>Tên Sản Phẩm 1</Text>
          <Text style={styles.productPrice}>$29.99</Text>
          <Text style={styles.productDescription}>
            Mô tả ngắn về sản phẩm 1.
          </Text>
        </View>
        {/* Thêm các sản phẩm khác nếu cần thiết */}
      </ScrollView>
    </AppContainer>
  );
};
