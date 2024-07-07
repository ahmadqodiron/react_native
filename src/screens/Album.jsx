import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const productsData = [
  { id: '1', name: 'Manggung', price: 'Rp 2,000,000/Show' },
  { id: '2', name: '+Dekorasi Pagi', price: 'Rp 3,000,000/Show' },
  { id: '3', name: '+Dekorasi Malam', price: 'Rp 3,500,000/Show' },
  { id: '4', name: 'Sewa Penari 2', price: 'Rp 1,000,000/Show' },
  { id: '5', name: 'Sewa Penari 3', price: 'Rp 1,500,000/Show' },
  // Tambahkan produk lainnya sesuai kebutuhan
];

const HomeScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implementasikan perubahan tema di sini, misalnya dengan menyimpan preferensi pengguna
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.itemContainer, { backgroundColor: isDarkMode ? '#333' : '#f0f0f0' }]} 
      onPress={() => navigation.navigate('BookingDetails', { item })}>
      <Text style={[styles.itemName, { color: isDarkMode ? '#fff' : '#007BFF' }]}>{item.name}</Text>
      <Text style={[styles.itemPrice, { color: isDarkMode ? '#ccc' : '#555' }]}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#333' }]}>Daftar Barang Sewaan</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
        />
      </View>
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity 
        style={[styles.addButton, { backgroundColor: isDarkMode ? '#28a745' : '#007BFF' }]}
        onPress={() => navigation.navigate('AddBooking')}>
        <Text style={styles.addButtonText}>Tambah Booking Baru</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemContainer: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    marginTop: 4,
  },
  addButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
