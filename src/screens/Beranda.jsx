import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, Switch, useColorScheme } from 'react-native';

const productsData = [
  { id: 1, name: 'Manggung', image: require('../assets/images/gambar1.jpeg'), price: 'Rp 2,000,000/Show' },
  { id: 2, name: '+Dekorasi Pagi', image: require('../assets/images/gambar2.jpeg'), price: 'Rp 3,000,000/Show' },
  { id: 3, name: '+Dekorasi Malam', image: require('../assets/images/gambar3.jpeg'), price: 'Rp 3,500,000/Show' },
  { id: 4, name: 'Sewa Penari 2', image: require('../assets/images/gambar4.jpeg'), price: 'Rp 1,000,000/Show' },
  { id: 5, name: 'Sewa Penari 3', image: require('../assets/images/gambar5.jpeg'), price: 'Rp 1,500,000/Show' },
  // Tambahkan produk lainnya sesuai kebutuhan
];

const ProductItem = ({ product }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.productItem, { backgroundColor: isDarkMode ? '#333' : '#f0f0f0' }]}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={[styles.productName, { color: isDarkMode ? '#fff' : '#000' }]}>{product.name}</Text>
      <Text style={[styles.productPrice, { color: isDarkMode ? '#fff' : '#000' }]}>{product.price}</Text>
    </View>
  );
};

const Beranda = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/Hanabi.jpg')}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.darkModeButton}>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: isDarkMode ? '#fff' : '#000' }]}>Penyewaan Musik Daul</Text>
      </View>
      <FlatList
        data={productsData}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  darkModeButton: {
    position: 'absolute',
    top: 10,
    right: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  productList: {
    alignItems: 'center',
  },
  productItem: {
    marginBottom: 20,
    borderRadius: 10,
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  productName: {
    paddingVertical: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Beranda;
