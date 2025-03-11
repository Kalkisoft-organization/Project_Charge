import react, { useState } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground, TouchableOpacity,Image } from "react-native";
import { CountryList } from 'react-native-country-codes-picker';

export default function SignInScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Default India code
  const [showCountryPicker, setShowCountryPicker] = useState(false); // State for controlling picker visibility

  return (
    <ImageBackground
      source={require('../assets/splash-icon.png')} // Use dark background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Join the ChargeQ community</Text>

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
        <TouchableOpacity
          style={styles.otpButton}
          onPress={() => alert(`OTP sent to ${countryCode} ${phoneNumber}`)}
        >
          <Text style={styles.otpButtonText}>Get OTP</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>


        <TouchableOpacity style={styles.googleButton} onPress= {() => navigation.navigate('SignUp')}>
          <Image
            source={require('../assets/googleLogo1.png')}
            style={styles.googleLogo}
          />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 backgroundImage : {
  flex: 1,
  width : '100%',
  height : '100%',
 },
 container : {
  flex : 1,
  justifyContent: 'center',
  alignItems : 'start',
  padding : '20',
 },
title : {
  fontSize : 32,
  fontWeight : 600,
  color : '#000000',
  marginTop : '25%',
  marginBottom : 5,
},
subtitle : {
  fontSize : 16,
  color : '#000000',
  marginBottom:50,
},
inputContainer : {
  flexDirection : 'row',
  alignItems: 'center',
    width: '100%',
    marginBottom: 25,
    backgroundColor: '#E5E4E2',
    borderRadius: 8,
    overflow: 'hidden',
    padding : 6,
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
  otpButton : {
    padding : 15,
    backgroundColor : '#1A34BD',
    borderRadius : 8,

  },

  otpButtonText : {
    color : '#fff',
   textAlign : 'center',
   fontWeight : 500,
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom :50,
    marginTop : 50,
    borderRadius : 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000000',
    opacity : 0.3,
  },
  orText: {
    marginHorizontal: 10,
    color: '#000000',
    fontSize:15,
    fontWeight : 300,
    opacity : 0.3,

  },
  googleButton: {
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,

  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
    alignItems : 'center',
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign : 'center',
    padding : 8,
},

link : {
  textAlign : 'center',
  color : '#1A34BD',
},

})