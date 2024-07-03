import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Setelan = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../images/logo.jpg')}
      />
      <Text style={[styles.username, { color: 'blue' }]}>Lanceng Tresna</Text>
      <Text style={[styles.bio, { color: 'gray' }]}>Daol Madura Pamekasan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Setelan;