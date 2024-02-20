import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 32,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 24,
  },
  userBio: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 24,
    color: 'darkgray',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  reviewContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 12,
    marginBottom: 16,
  },
  reviewText: {
    fontSize: 16,
  },
  reviewAuthor: {
    fontSize: 14,
    marginTop: 8,
    fontStyle: 'italic',
  },
  addressText: {
    fontSize: 16,
    marginBottom: 16,
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    color: 'darkgray',
  },
});
