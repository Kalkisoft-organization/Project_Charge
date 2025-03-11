import react from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/homeScreen";
import BookingScreen from "../screens/bookingScreen";
import ScanqrScreen from "../screens/scanQrScreen";
import WalletScreen from "../screens/walletScreen";
import ProfileScreen from "../screens/profileScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Booking') iconName = 'calendar';
          else if (route.name === 'Scan QR') iconName = 'qr-code';
          else if (route.name === 'Wallet') iconName = 'wallet';
          else if (route.name === 'Profile') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1A34BD', // Active tab color
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}  options={{headerShown : false}}/>
      <Tab.Screen name="Booking" component={BookingScreen} options={{headerShown : false}}/>
      <Tab.Screen name="Scan QR" component={ScanqrScreen} options={{headerShown : false}} />
      <Tab.Screen name="Wallet" component={WalletScreen} options={{headerShown : false}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown : false}}/>
    </Tab.Navigator>
  )
}