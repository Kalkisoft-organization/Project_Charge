// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './components/SplashScreen'; // Splash screen import
import SignInScreen from './screens/signInScreen'; // Sign-in screen import
import SignUpScreen from './screens/signUpScreen'; // Sign-up screen import
import AddVehicle from './screens/addVehicleScreen';
import TabNavigator from './navigator/tabNavigator';

const Stack = createStackNavigator();

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <>
    <StatusBar backgroundColor="transparent" translucent= {true} barStyle="dark-content" />

    {isSplashVisible ? (
      <SplashScreen onFinish={() => setIsSplashVisible(false)} />
    ) : (
      <NavigationContainer>

        <Stack.Navigator initialRouteName = "SignIn">

          <Stack.Screen name = "SignIn" component={SignInScreen} 
          options={{headerTransparent : true, headerTitle : '', headerTintColor : 'white'}}/>

          <Stack.Screen name = "SignUp" component={SignUpScreen} 
          options={{headerTransparent : true, headerTitle : "", headerTintColor : 'white'}}/>

          <Stack.Screen name = "AddVehicle" component={AddVehicle} 
          options={{headerTransparent : true, headerTitle : "", headerTintColor : 'white'}}/>

          <Stack.Screen name = "Home" component={TabNavigator}  options={{headerShown : false}}/>

        </Stack.Navigator>
      </NavigationContainer>
    )}
    </>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});