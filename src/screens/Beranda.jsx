import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from 'react-native';

const data = [
  { id: '1', name: 'Pemesanan 1', date: '2023-07-01', purchaseOrder: 'PO-001' },
  { id: '2', name: 'Pemesanan 2', date: '2023-07-02', purchaseOrder: 'PO-002' },
  // Tambahkan data pemesanan lain di sini
];

const Beranda = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newPurchaseOrder, setNewPurchaseOrder] = useState('');

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity 
        style={styles.itemContainer} 
        onPress={() => navigation.navigate('BookingDetails', { item })}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
        <Text style={styles.itemPurchaseOrder}>PO: {item.purchaseOrder}</Text>
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => {
            setSelectedItem(item);
            setNewPurchaseOrder(item.purchaseOrder);
            setModalVisible(true);
          }}>
          <Text style={styles.editButtonText}>Ubah PO</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  const handleSavePurchaseOrder = () => {
    // Lakukan validasi atau pemrosesan lainnya di sini sebelum menyimpan
    // Misalnya, jika menggunakan state management atau API untuk menyimpan data
    // Di sini hanya menampilkan log untuk demonstrasi
    console.log(`Simpan PO baru untuk ${selectedItem.name}: ${newPurchaseOrder}`);
    setModalVisible(false);
  };

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

      {/* Modal untuk mengubah Purchase Order */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Purchase Order baru"
              value={newPurchaseOrder}
              onChangeText={text => setNewPurchaseOrder(text)}
            />
            <Button title="Simpan" onPress={handleSavePurchaseOrder} />
          </View>
        </View>
      </Modal>
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
  itemPurchaseOrder: {
    fontSize: 16,
    color: '#555', // Warna teks Purchase Order
    marginTop: 8,
  },
  editButton: {
    backgroundColor: '#ffc107', // Warna tombol kuning
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#333',
    fontSize: 14,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 300,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Beranda;
