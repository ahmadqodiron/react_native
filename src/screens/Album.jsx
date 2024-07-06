import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const Album = () => {
  const navigation = useNavigation();

  const [photos, setPhotos] = useState([
    { id: '1', source: require('../images/logo.jpg'), title: 'Logo', harga: 3000000 }, 
    { id: '2', source: require('../images/Hanabi.jpg'), title: 'Hanabi', harga: 2000000 },
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
        const newPhoto = { id: String(Math.random()), source };
        setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
      }
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate('Detail', { item })}>
      <Image source={item.uri ? { uri: item.uri } : item.source} style={styles.image} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemHarga}>Harga: RP{item.harga}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Album Foto</Text>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={selectPhoto}>
        <Text style={styles.addButtonText}>Tambahkan Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8ff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
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
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  itemHarga: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#28a745',
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

export default Album;
