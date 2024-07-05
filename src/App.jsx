import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Beranda from './screens/Beranda';

import Setelan from './screens/Setelan';
import Notifikasi from './screens/Notifikasi';
import BookingDetails from './screens/BookingDetails'; // Sesuaikan dengan path file Anda

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} options={{
          tabBarLabel: 'Beranda', headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Album" component={Notifikasi} options={{
          tabBarLabel: 'Album',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="album" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Setelan" component={Setelan}options={{
          tabBarLabel: 'Setelan',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})