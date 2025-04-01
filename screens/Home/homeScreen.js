import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Map Background */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 12.9716,
          longitude: 77.5946,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Search for EV chargers" style={styles.searchInput} />
        <MaterialIcons name="tune" size={24} color="gray" />
      </View>

      {/* Right-Side Floating Icons */}
      <View style={styles.floatingIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="logo-whatsapp" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="location" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Bottom Scrollable Cards */}
      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.bottomCard}>
            <Text style={styles.availableText}>Available</Text>
            <Text style={styles.locationText}>KA | Bengaluru | M...</Text>
            <Text style={styles.distanceText}>~ 0.0 km</Text>
            <View style={styles.rateContainer}>
              <Text style={styles.rateText}>Rate: ₹0 /kW</Text>
              <Ionicons name="star" size={20} color="gold" />
            </View>
            <TouchableOpacity style={styles.navigateButton}>
              <Text style={styles.navigateText}>Navigate →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomCard}>
            <Text style={styles.availableText}>Available</Text>
            <Text style={styles.locationText}>KA | Mumbai | M...</Text>
            <Text style={styles.distanceText}>~ 2.5 km</Text>
            <View style={styles.rateContainer}>
              <Text style={styles.rateText}>Rate: ₹4.5 /kW</Text>
              <Ionicons name="star" size={20} color="gold" />
            </View>
            <TouchableOpacity style={styles.navigateButton}>
              <Text style={styles.navigateText}>Navigate →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomCard}>
            <Text style={styles.availableText}>Available</Text>
            <Text style={styles.locationText}>KA | Delhi | M...</Text>
            <Text style={styles.distanceText}>~ 5.0 km</Text>
            <View style={styles.rateContainer}>
              <Text style={styles.rateText}>Rate: ₹6.0 /kW</Text>
              <Ionicons name="star" size={20} color="gold" />
            </View>
            <TouchableOpacity style={styles.navigateButton}>
              <Text style={styles.navigateText}>Navigate →</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { ...StyleSheet.absoluteFillObject },
  searchBar: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  floatingIcons: {
    position: "absolute",
    right: 20,
    top: "35%",
    alignItems: "center",
  },
  iconButton: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 30,
    marginVertical: 10,
    elevation: 5,
  },
  scrollContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  bottomCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
    width: 300,
  },
  availableText: { color: "green", fontWeight: "bold", fontSize: 16 },
  locationText: { fontSize: 16, fontWeight: "bold" },
  distanceText: { fontSize: 14, color: "gray" },
  rateContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  rateText: { fontSize: 14, marginRight: 5 },
  navigateButton: {
    backgroundColor: "#1A34BD",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  navigateText: { color: "white", fontWeight: "bold" },
});

export default HomeScreen;
