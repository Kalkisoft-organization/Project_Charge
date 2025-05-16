import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Map View */}
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
        <TextInput
          placeholder="Search for EV chargers"
          style={styles.searchInput}
        />
        <MaterialIcons name="tune" size={24} color="gray" />
      </View>

      {/* Floating Buttons */}
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

      {/* Scrollable Charger Cards */}
      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            { city: 'Bengaluru', dist: '~0.0 km', rate: '₹0 /kW' },
            { city: 'Mumbai', dist: '~2.5 km', rate: '₹4.5 /kW' },
            { city: 'Delhi', dist: '~5.0 km', rate: '₹6.0 /kW' },
          ].map((item, index) => (
            <View style={styles.bottomCard} key={index}>
              <Text style={styles.availableText}>Available</Text>
              <Text style={styles.locationText}>KA | {item.city} | M...</Text>
              <Text style={styles.distanceText}>{item.dist}</Text>
              <View style={styles.rateContainer}>
                <Text style={styles.rateText}>Rate: {item.rate}</Text>
                <Ionicons name="star" size={20} color="gold" />
              </View>
              <TouchableOpacity style={styles.navigateButton}>
                <Text style={styles.navigateText}>Navigate →</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { ...StyleSheet.absoluteFillObject },
  searchBar: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  floatingIcons: {
    position: 'absolute',
    right: 20,
    top: '35%',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 30,
    marginVertical: 10,
    elevation: 5,
  },
  scrollContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  bottomCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
    width: 300,
  },
  availableText: { color: 'green', fontWeight: 'bold', fontSize: 16 },
  locationText: { fontSize: 16, fontWeight: 'bold' },
  distanceText: { fontSize: 14, color: 'gray' },
  rateContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  rateText: { fontSize: 14, marginRight: 5 },
  navigateButton: {
    backgroundColor: '#1A34BD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  navigateText: { color: 'white', fontWeight: 'bold' },
});

export default HomeScreen;
