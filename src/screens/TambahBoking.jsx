import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddBooking = ({ navigation }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSaveBooking = () => {
    // Lakukan validasi atau pemrosesan lainnya di sini sebelum menyimpan
    // Misalnya, jika menggunakan state management atau API untuk menyimpan data
    console.log('Simpan booking dengan nama:', name, 'dan durasi:', duration);

    // Kembali ke halaman sebelumnya (Beranda)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tambah Booking Baru</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama barang"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Masukkan durasi sewa (hari)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleSaveBooking}
      >
        <Text style={styles.addButtonText}>Simpan Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddBooking;
