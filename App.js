// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator} from '@react-navigation/stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import SplashScreen from './components/SplashScreen'; 
import SignInScreen from './screens/signInScreen'; 
import SignUpScreen from './screens/signUpScreen'; 
import AddVehicle from './screens/addVehicleScreen';
import TabNavigator from './navigator/tabNavigator';
import ChargerBooking from './screens/Booking/chargerBooking';
import Transaction from './screens/Wallet/transaction';
import KYCVerification from './screens/Wallet/kycVerification';

const Stack = createStackNavigator();

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      {isSplashVisible ? (
        <SplashScreen onFinish={() => setIsSplashVisible(false)} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignInScreen} options={{headerTransparent: true, headerTitle: '', headerTintColor: 'white'}} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerTransparent: true, headerTitle: "", headerTintColor: 'white'}} />
            <Stack.Screen name="AddVehicle" component={AddVehicle} options={{headerTransparent: true, headerTitle: "", headerTintColor: 'white'}} />
            <Stack.Screen name="Home" component={TabNavigator} options={{headerShown: false}} />
            <Stack.Screen name = "ChargerBooking" component={ChargerBooking} options={{headerShown: false}}/>
            <Stack.Screen name = "Transaction" component={Transaction} options= {{headerShown : false}} />
            <Stack.Screen name = "KYCVerification" component={KYCVerification} options= {{headerShown : false}} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </GestureHandlerRootView>
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