import React, { useState, useEffect} from 'react';
import { ImageBackground, View, StyleSheet, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { CountryList } from 'react-native-country-codes-picker';
import AddVehicle from './addVehicleScreen';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen({ navigation, switchScreen }) {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Default India code
  const [otp, setOtp] = useState('');
  const [hasElectricVehicle, setHasElectricVehicle] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false); // State for controlling picker visibility

  return (
    <ImageBackground
      source={require('../assets/splash-icon.png')} // Use dark background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to ChargeQ</Text>
        <Text style={styles.subtitle}>Complete the sign up process to get started</Text>

        <View style={styles.inputContainer}>
          {/* Custom Button for Country Picker */}
          <TouchableOpacity
            style={styles.countryPickerButton}
            onPress={() => setShowCountryPicker(true)}
          >
            <Text style={styles.countryPickerText}>
              {countryCode} {/* Show selected country code */}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {showCountryPicker && (
          <CountryList
            lang={'en'}
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
              setShowCountryPicker(false);
            }}
            onBackdropPress={() => setShowCountryPicker(false)}
            show={showCountryPicker}
            containerStyle={styles.countryListContainer} // Full screen style
            pickerButtonStyle={styles.countryPickerListButton}
          />
        )}

        <TextInput
          style={styles.otpInput}
          placeholder="Verify OTP"
          keyboardType="numeric" // Changed to numeric for OTP
          value={otp}
          onChangeText={setOtp}
        />

        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Do you want to add your Electric Vehicle?</Text>
          <View style={styles.radioOptions}>
            <Pressable
              style={styles.radioButton}
              onPress={() => {
                setHasElectricVehicle(true);
                switchScreen('AddVehicle')
              }}
            >
              <View style={[styles.radioCircle, hasElectricVehicle === true && styles.radioSelected]} />
              <Text style={styles.radioText}>Yes</Text>
            </Pressable>

            <Pressable
              style={styles.radioButton}
              onPress={() => setHasElectricVehicle(false)}
            >
              <View style={[styles.radioCircle, hasElectricVehicle === false && styles.radioSelected]} />
              <Text style={styles.radioText}>No</Text>
            </Pressable>
          </View>
        </View>

        <TouchableOpacity
          style={styles.otpButton}
          onPress={() => alert(`OTP sent to ${countryCode} ${phoneNumber}`)}
        >
          <Text style={styles.otpButtonText}>Get OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={switchScreen}>
          <Text style={styles.link}>Already have an account? Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.link}>Go to Home</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'start',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    color: '#000',
    marginBottom: 5,
    marginTop: '25%',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 40,
    textAlign: 'start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#E5E4E2',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 6,
  },
  countryPickerButton: {
    padding: 10,
    backgroundColor: '#E5E4E2',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    height: '100%',
  },
  countryPickerText: {
    fontSize: 16,
    color: '#000',
  },
  phoneInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  otpInput: {
    width: '100%',
    padding: 15,
    marginBottom: 30,
    borderRadius: 8,
    backgroundColor: '#E5E4E2',
    color: '#000',
  },
  radioContainer: {
    width: '100%',
    marginBottom: 60,
    alignItems: 'start',
  },
  radioLabel: {
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },
  radioOptions: {
    flexDirection: 'row',
    width: '100%',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'start',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
    justifyContent: 'start',
    alignItems: 'start',
  },
  radioSelected: {
    backgroundColor: '#1A34BD',
    borderColor: '#fff',
  },
  radioText: {
    color: '#000',
    fontSize: 16,
    marginRight: 10,
  },
  otpButton: {
    backgroundColor: '#1A34BD',
    padding: 15,
    borderRadius: 8,


  },
  otpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    marginTop: 20,
    color: '#1A34BD',
    fontSize: 16,
    textAlign: 'center',
  },
  countryListContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  countryPickerListButton: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E4E2',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});