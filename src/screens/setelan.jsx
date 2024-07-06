import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon set

const Setelan = () => {
  const openTiktok = () => {
    Linking.openURL('https://youtube.com/@lancenktresnapercussion9837?si=B6Ha9_giXSiW10Nc');  // Replace with your TikTok profile URL
  };

  const openTwitter = () => {
    Linking.openURL('https://twitter.com');  // Replace with your Twitter profile URL
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/lancenktresna?igsh=OGZmMzVlMzBsZmky');  // Replace with your Instagram profile URL
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../images/logo.jpg')}
      />
      <Text style={[styles.username, { color: 'blue' }]}>Lancenk Tresna</Text>
      <Text style={[styles.bio, { color: 'gray' }]}>Daol Madura Pamekasan</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={openTiktok} style={styles.iconContainer}>
          <Icon name="youtube-square" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openTwitter} style={styles.iconContainer}>
          <Icon name="twitter-square" size={30} color="#1da1f2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openInstagram} style={styles.iconContainer}>
          <Icon name="instagram" size={30} color="#e4405f" />
        </TouchableOpacity>
      </View>
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
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  iconContainer: {
    paddingHorizontal: 15,
  },
});

export default Setelan;
