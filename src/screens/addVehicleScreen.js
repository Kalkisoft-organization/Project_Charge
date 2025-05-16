import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddVehicle() {

  const navigation = useNavigation();

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [showVehicleDropdown, setShowVehicleDropdown] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [brandModalVisible, setBrandModalVisible] = useState(false);
  const [vehicleModalVisible, setVehicleModalVisible] = useState(false);

  const brands = {
    'Tesla': ['Model S', 'Model 3', 'Model X', 'Model Y'],
    'BMW': ['i3', 'i8', 'X5 Hybrid'],
    'Nissan': ['Leaf', 'Ariya'],
    'Hyundai': ['Kona Electric', 'Ioniq 5'],
  };

  return (

    <ImageBackground
     source={require('../assets/splash-icon.png')} // Use dark background image
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Add your Vehicle</Text>

      {/* Brand Selection */}
      <TouchableOpacity 
        style={styles.dropdown} 
        onPress={() => setBrandModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{selectedBrand || "Select Your Brand"}</Text>
      </TouchableOpacity>

      {/* Brand Modal */}
      <Modal visible={brandModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={Object.keys(brands)}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.modalItem} 
                  onPress={() => {
                    setSelectedBrand(item);
                    setShowVehicleDropdown(true);
                    setSelectedVehicle('');
                    setShowContinue(false);
                    setBrandModalVisible(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Vehicle Selection */}
      {showVehicleDropdown && (
        <TouchableOpacity 
          style={styles.dropdown} 
          onPress={() => setVehicleModalVisible(true)}
        >
          <Text style={styles.dropdownText}>{selectedVehicle || "Select Your Vehicle"}</Text>
        </TouchableOpacity>
      )}

      {/* Vehicle Modal */}
      <Modal visible={vehicleModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={brands[selectedBrand]}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.modalItem} 
                  onPress={() => {
                    setSelectedVehicle(item);
                    setShowContinue(true);
                    setVehicleModalVisible(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Continue Button */}
      {showContinue && (
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'start',
    padding : 20,
    marginTop : '55%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign : 'center',
  },
  dropdown: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E5E4E2',
    backgroundColor : '#E5E4E2',
    marginBottom: 20,
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: '#1A34BD',
    padding: 15,
    borderRadius: 8,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    justifyContent : 'center',
    padding: 20,
    width: '80%',
    borderRadius: 10,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

