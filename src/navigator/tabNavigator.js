import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Home/homeScreen';
import BookingScreen from '../screens/Booking/bookingScreen';
import ScanqrScreen from '../screens/ScanQR/scanQrScreen';
import WalletScreen from '../screens/Wallet/walletScreen';
import ProfileScreen from '../screens/Profile/profileScreen';

const Tab = createBottomTabNavigator();

function TabBarIcon({route, color, size}) {
  let iconName;
  let labelText;

  if (route.name === 'Home') {
    iconName = 'home';
    labelText = 'Home';
  } else if (route.name === 'Bookings') {
    iconName = 'calendar';
    labelText = 'Bookings';
  } else if (route.name === 'ScanQR') {
    iconName = 'qr-code';
    labelText = 'Scan QR';
  } else if (route.name === 'Wallet') {
    iconName = 'wallet';
    labelText = 'Wallet';
  } else if (route.name === 'Profile') {
    iconName = 'person';
    labelText = 'Profile';
  }

  if (route.name === 'ScanQR') {
    return (
      <View style={styles.scanButton}>
        <Ionicons name={iconName} size={30} color="#fff" />
      </View>
    );
  } else {
    return (
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={size} color={color} />
        <Text style={{fontSize: 12, color: color, marginTop: 4}}>
          {labelText}
        </Text>
      </View>
    );
  }
}

// ✅ Yeh alag se function bana diya
const screenOptions = ({ route }) => {
  return {
    tabBarIcon: (props) => <TabBarIcon {...props} route={route} />,
    tabBarStyle: route.name === 'ScanQR'
      ? { display: 'none' } // ✅ hide tab bar on QR screen
      : {
          height: '8%',
          backgroundColor: '#121212',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          elevation: 10,
        },
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
    tabBarShowLabel: false,
  };
};


export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookings" component={BookingScreen} />
      <Tab.Screen
        name="ScanQR"
        component={ScanqrScreen}
        options={{
          tabBarStyle: {display: 'none'}, // Hide tab bar when this screen is active
        }}
      />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = {
  scanButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#1A34BD',
    justifyContent: 'center',
    alignItems: 'center',
    top: -15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
    height: 30,
    marginTop: 35,
  },
};
