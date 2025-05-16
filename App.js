import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, Appearance } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SplashScreen from './src/components/SplashScreen';
import TabNavigator from './src/navigator/tabNavigator';
import AuthStackNavigator from './src/navigator/AuthStackNavigator';

// 🔒 Force light mode for entire app
Appearance.setColorScheme('light');

// 🎨 Optional: Customize navigation container to match light theme
const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff', // Ensures white background
    card: '#ffffff', // Header or tab background if needed
    text: '#000000', // Text color for titles etc.
  },
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userLoggedIn = true; // Replace with actual check (e.g., AsyncStorage)
      setIsLoggedIn(userLoggedIn);
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer theme={MyLightTheme}>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      {isLoading ? (
        <SplashScreen />
      ) : isLoggedIn ? (
        <TabNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
