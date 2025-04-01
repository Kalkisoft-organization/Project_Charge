import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AB</Text>
        </View>
        <Text style={styles.userName}>Arya Bandhu</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.menuItem}>
          <MaterialIcons name="person" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Profile details</Text>
        </View>
      </View>

      {/* Activity Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activity</Text>

        <View style={styles.menuItem}>
          <Ionicons name="time-outline" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>My chargers</Text>
        </View>

        <View style={styles.menuItem}>
          <FontAwesome5 name="map-marker-alt" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Trip Planner</Text>
        </View>

        <View style={styles.menuItem}>
          <MaterialIcons name="directions-car" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>My vehicles</Text>
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="flash-outline" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Charging history</Text>
        </View>

        <View style={styles.menuItem}>
          <Feather name="bookmark" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>My bookings</Text>
        </View>

        <View style={styles.menuItem}>
          <FontAwesome5 name="heart" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Favourites</Text>
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Manage notification</Text>
        </View>
      </View>

      {/* Actions Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actions</Text>

        <View style={styles.menuItem}>
          <MaterialIcons name="share" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Share the App</Text>
        </View>

      </View>

      {/* Resources Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resources</Text>

        <View style={styles.menuItem}>
          <FontAwesome5 name="info-circle" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Support</Text>
        </View>

        <View style={styles.menuItem}>
          <MaterialIcons name="video-library" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Tutorial</Text>
        </View>
      </View>

      {/* Policies Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Policies</Text>

        <View style={styles.menuItem}>
          <MaterialIcons name="privacy-tip" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Privacy policy</Text>
        </View>

        <View style={styles.menuItem}>
          <MaterialIcons name="policy" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Return policy</Text>
        </View>

        <View style={styles.menuItem}>
          <Feather name="file-text" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Terms & Conditions</Text>
        </View>
      </View>

      <View style={styles.logoutSection}>
        <View style={styles.menuItem}>
          <MaterialIcons name="logout" size={20} color="#FF3B30" />
          <Text style={[styles.menuText, { color: "#FF3B30" }]}>Logout</Text>
        </View>
      </View>

      <View style={styles.DeleteSection}>
        <View style={styles.deleteItem}>
          <Text style={[styles.deleteText , {color: '#FF3B30'}]}>Delete my account</Text>
        </View>
        <View style={styles.deleteItem}>
          <Text style={[styles.deleteText , {color: '#00000' , marginTop: 20 , fontSize: 12}]}>Version : 1.0</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  DeleteSection: {
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center'
  },
  deleteItem: {
    flexDirection: 'row', 
  },
  deleteText: {
    fontSize: 14,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logoutSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 80,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#666',
    fontSize: 14,
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
  },
  menuText: {
    color: '#333',
    fontSize: 16,
    marginLeft: 10,
    },
});