import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-rn';

export default function App() {
  const image = require('./assets/header-bg.png'); // Assuming the image is located in the assets folder

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <ImageBackground source={image} style={tw`flex-1 w-full h-full`}>
        <Text style={tw`text-white font-bold text-lg mb-5`}>Discover Italy at Ristorante Alba</Text>
        <Text style={tw`text-white font-bold text-xl mb-8`}>Benvenuti alla Nostra Casa</Text>
      </ImageBackground>
    </View>
  );
}