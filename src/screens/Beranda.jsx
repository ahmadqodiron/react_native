import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'Pemesanan 1', date: '2023-07-01' },
  { id: '2', name: 'Pemesanan 2', date: '2023-07-02' },
  // Tambahkan data pemesanan lain di sini
];

const Beranda = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate('BookingDetails', { item })}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Beranda Pemesanan</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddBooking')}>
        <Text style={styles.addButtonText}>Tambah Pemesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8ff', // Warna latar belakang biru muda
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Warna teks header
  },
  itemContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
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
    color: '#007BFF', // Warna teks nama item
  },
  itemDate: {
    fontSize: 14,
    color: '#666', // Warna teks tanggal item
  },
  addButton: {
    backgroundColor: '#28a745', // Warna tombol hijau
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

export default Beranda;
