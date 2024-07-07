import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, useColorScheme, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon set

const Setelan = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State untuk menandai apakah aplikasi dalam mode gelap atau tidak
  const colorScheme = useColorScheme(); // Hook untuk mendapatkan skema warna perangkat (light/dark)

  // Fungsi untuk menoggle mode gelap atau terang
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openTiktok = () => {
    Linking.openURL('https://youtube.com/@lancenktresnapercussion9837?si=B6Ha9_giXSiW10Nc');  // Ganti dengan URL profil TikTok Anda
  };

  const openTwitter = () => {
    Linking.openURL('https://twitter.com');  // Ganti dengan URL profil Twitter Anda
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/lancenktresna?igsh=OGZmMzVlMzBsZmky');  // Ganti dengan URL profil Instagram Anda
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#333' }]}></Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
        />
      </View>

      <Image
        style={styles.avatar}
        source={require('../assets/images/logo1.png')}
      />
      <Text style={[styles.username, { color: isDarkMode ? '#fff' : 'blue' }]}>Lancenk Tresna</Text>
      <Text style={[styles.bio, { color: isDarkMode ? '#ddd' : 'gray' }]}>Musik Tradisi Daul Madura Pamekasan</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={openTiktok} style={styles.iconContainer}>
          <Icon name="youtube-square" size={30} color={isDarkMode ? '#ff0000' : '#ff0000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openTwitter} style={styles.iconContainer}>
          <Icon name="twitter-square" size={30} color={isDarkMode ? '#1da1f2' : '#1da1f2'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openInstagram} style={styles.iconContainer}>
          <Icon name="instagram" size={30} color={isDarkMode ? '#e4405f' : '#e4405f'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    margin: 85,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign:'center',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    paddingHorizontal: 20,
  },
  darkModeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  darkModeButtonText: {
    color: '#fff',
  },
});

export default Setelan;
