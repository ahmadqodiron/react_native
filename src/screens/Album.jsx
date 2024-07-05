import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { launchImageLibrary } from 'react-native-image-picker';

// Komponen untuk layar album
const Album = ({ navigation }) => {
  const [photos, setPhotos] = useState([
    { id: '1', source: require('../images/logo.jpg') }, 
    { id: '2', source: require('../images/Hanabi.jpg') }, // Gambar dari URL
    // Tambahkan data foto lain di sini
  ]);

  const selectPhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setPhotos((prevPhotos) => [...prevPhotos, source]);
      }
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate('Detail', { item })}>
      <Image source={item.uri ? { uri: item.uri } : item.source} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Album Foto</Text>
      <Button title="Tambahkan Foto" onPress={selectPhoto} />
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

// Komponen untuk layar detail
const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detail Foto</Text>
      <Image source={item.uri ? { uri: item.uri } : item.source} style={styles.imageDetail} />
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
    textAlign: 'center',
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  imageDetail: {
    width: '100%',
    height: 300,
  },
});

export default Album;
