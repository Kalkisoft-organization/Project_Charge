// components/SplashScreen.js
import React, { useEffect } from 'react';
import { View, ImageBackground, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/splash-background.png')} // Background image ka path
        style={styles.backgroundImage}
      >
        <Image
          source={require('../assets/app-logo.png')} // Logo image ka path
          style={styles.logo}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Logo ko vertically center karne ke liye
    alignItems: 'center',     // Logo ko horizontally center karne ke liye
  },
  logo: {
    width: 200,    // Logo ki width apne hisaab se adjust karo
    height: 200,   // Logo ki height apne hisaab se adjust karo
    resizeMode: 'contain', // Logo ka aspect ratio maintain rahega
  },
});