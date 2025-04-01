import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home/homeScreen";
import BookingScreen from "../screens/Booking/bookingScreen";
import ScanqrScreen from "../screens/ScanQr/scanQrScreen";
import WalletScreen from "../screens/Wallet/walletScreen";
import ProfileScreen from "../screens/Profile/profileScreen";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            let labelText;
            
            if (route.name === "Home") {
              iconName = "home";
              labelText = "Home";
            } else if (route.name === "Bookings") {
              iconName = "calendar";
              labelText = "Bookings";
            } else if (route.name === "ScanQR") {
              iconName = "qr-code";
              labelText = "Scan QR";
            } else if (route.name === "Wallet") {
              iconName = "wallet";
              labelText = "Wallet";
            } else if (route.name === "Profile") {
              iconName = "person";
              labelText = "Profile";
            }

            if (route.name === "ScanQR") {
              // Floating Button
              return (
                <View
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                    backgroundColor: "#1A34BD",
                    justifyContent: "center",
                    alignItems: "center",
                    top: -15, // Raised effect
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    elevation: 5, // For Android shadow
                  }}
                >
                  <Ionicons name={iconName} size={30} color="#fff" />
                </View>
              );
            } else {
              // Normal Icon + Label
              return (
                <View style={{ alignItems: "center", justifyContent: "center", minWidth: 60, height: 30 , marginTop: 35}}>
                  <Ionicons name={iconName} size={size} color={color} />
                  <Text style={{ fontSize: 12, color: color, marginTop: 4 }}>
                    {labelText}
                  </Text>
                </View>
              );
            }
          },
          tabBarStyle: {
            height: "8%",
            backgroundColor: "#121212",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: "absolute",
            elevation: 10,
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarShowLabel: false, // 🛠 FIX: Remove default labels
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Bookings" component={BookingScreen} />
        <Tab.Screen name="ScanQR" component={ScanqrScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

  );
}