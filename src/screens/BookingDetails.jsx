import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{item.name}</Text>
      <Text style={styles.date}>{item.date}</Text>
      {/* Tambahkan detail lain yang diperlukan di sini */}
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
    marginBottom: 8,
  },
  date: {
    fontSize: 18,
    color: '#666',
  },
});

export default BookingDetails;
