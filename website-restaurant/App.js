import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const image = { src: "website-restaurant\assets\header-bg.png" };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>      
      <Text style={styles.mastheadSubheading}>Discover Italy at Ristorante Alba</Text>
      <Text style={styles.mastheadHeading}>Benvenuti alla Nostra Casa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mastheadSubheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mastheadHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Add other styles for different sections or components here
});
