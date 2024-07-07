import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{item.name}</Text>
      <Text style={styles.label}>Durasi Sewa:</Text>
      <Text style={styles.value}>{item.duration} hari</Text>
      <Text style={styles.label}>Harga Sewa per Show:</Text>
      <Text style={styles.value}>{item.price}</Text>
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
  label: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});

export default BookingDetailsScreen;
