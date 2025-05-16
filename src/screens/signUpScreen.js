import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
  Alert,
  Animated,
  Easing,
  Image,
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export default function SignUpScreen({navigation}) {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    emailOtp: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  const handleChange = (key, value) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const sendEmailOtp = async () => {
    try {
      const response = await axios.post(
        'https://www.kalkinso.com/api/users/send-email-otp',
        {
          email: form.email,
        },
      );
      if (response.data.msg) {
        Toast.show({type: 'success', text1: 'OTP sent to email'});
        setEmailOtpSent(true);
        setTimer(90);
      }
    } catch (err) {
      Alert.alert('Error', err.response?.data?.msg || 'Failed to send OTP');
    }
  };

  const submitSignup = async () => {
    if (!form.terms)
      return Alert.alert('Required', 'Please accept the terms and conditions.');
    if (form.password !== form.confirmPassword)
      return Alert.alert('Error', 'Passwords do not match');

    try {
      const res = await axios.post('https://www.kalkinso.com/api/users', {
        ...form,
        terms_conditions: form.terms,
      });
      if (res.data.token) {
        Toast.show({type: 'success', text1: 'Account Created Successfully 🎉'});
        navigation.replace('Home'); // Redirect to Home
      }
    } catch (err) {
      Alert.alert('Signup Failed', err.response?.data?.[0]?.msg || err.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput
          placeholder="First Name"
          style={styles.input}
          value={form.first_name}
          onChangeText={text => handleChange('first_name', text)}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.input}
          value={form.last_name}
          onChangeText={text => handleChange('last_name', text)}
        />
        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          style={styles.input}
          value={form.email}
          onChangeText={text => handleChange('email', text)}
        />

        {/* OTP Row */}
        <View style={styles.otpRow}>
          <TextInput
            style={styles.otpInput}
            placeholder="Enter Email OTP"
            keyboardType="numeric"
            value={form.emailOtp}
            onChangeText={text => handleChange('emailOtp', text)}
          />
          <TouchableOpacity
            style={[styles.otpButton, timer > 0 && {backgroundColor: '#ccc'}]}
            onPress={sendEmailOtp}
            disabled={timer > 0}>
            <Text style={styles.otpButtonText}>
              {timer > 0 ? `${timer}s` : 'Send OTP'}
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Mobile Number"
          style={styles.input}
          keyboardType="phone-pad"
          value={form.mobile}
          onChangeText={text => handleChange('mobile', text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={form.password}
          onChangeText={text => handleChange('password', text)}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.input}
          value={form.confirmPassword}
          onChangeText={text => handleChange('confirmPassword', text)}
        />

        {/* Custom Checkbox */}
        <View style={styles.termsRow}>
          <TouchableOpacity
            onPress={() => handleChange('terms', !form.terms)}
            style={styles.customCheckBox}>
            <View
              style={[
                styles.checkboxBox,
                form.terms && styles.checkboxChecked,
              ]}>
              {form.terms && <Text style={styles.checkmark}>✓</Text>}
            </View>
          </TouchableOpacity>
          <Text
            style={styles.termsText}
            onPress={() => Linking.openURL('https://google.com')}>
            I agree to the Terms & Conditions
          </Text>
        </View>

        {/* Signup Button */}
        <TouchableOpacity style={styles.signUpBtn} onPress={submitSignup}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Google Signup Option */}
        <TouchableOpacity style={styles.googleBtn}>
          <Image
            source={require('../assets/googleLogo1.png')}
            style={styles.googleLogo}
          />
          <Text style={styles.googleText}>Sign Up with Google</Text>
        </TouchableOpacity>

              {/* login back  */}
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.loginRedirect}>
            Already have an account?{' '}
            <Text style={styles.loginLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>

        <Toast />
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1A34BD',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  otpRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  otpInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  otpButton: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#1A34BD',
  },
  otpButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  customCheckBox: {
    marginRight: 8,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#1A34BD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  checkboxChecked: {
    backgroundColor: '#1A34BD',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 14,
    color: '#000',
  },
  signUpBtn: {
    backgroundColor: '#1A34BD',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  googleBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 30,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: '#fff',
    fontSize: 16,
  },
  loginRedirect: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    color: '#1A34BD',
    fontWeight: '600',
  },  
});
