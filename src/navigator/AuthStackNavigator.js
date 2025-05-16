import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // ✅ Simple stack navigator
import SignInScreen from '../screens/signInScreen';
import SignUpScreen from '../screens/signUpScreen';

const Stack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
