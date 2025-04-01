import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function KYCVerification() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [idType, setIdType] = useState("Pan card");
  const [idNumber, setIdNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isIdValid, setIsIdValid] = useState(true);

  // Email Validation
  const validateEmail = (text) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(text));
  };

  // ID Validation
  const validateId = (text) => {
    setIdNumber(text);
    let idRegex;
    if (idType === "Pan card") {
      idRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    } else if (idType === "Driving License") {
      idRegex = /^[A-Z0-9]{10,15}$/;
    } else if (idType === "Voter ID") {
      idRegex = /^[A-Z]{3}[0-9]{7}$/;
    }
    setIsIdValid(idRegex ? idRegex.test(text) : true);
  };

  const getPlaceholder = () => {
    switch (idType) {
      case "Pan card":
        return "Enter PAN Number";
      case "Driving License":
        return "Enter Driving License Number";
      case "Voter ID":
        return "Enter Voter ID Number";
      default:
        return "Enter ID Number";
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.title}>KYC Verification</Text>
      </TouchableOpacity>

      {/* Updated Layout for Text and Image */}
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>
            Complete Minimum KYC to start using ChargeQ wallet.
          </Text>
          <Text style={styles.smallText}>
            Minimum KYC is mandatory as per RBI guidelines. On completion, you
            get ₹10,000 monthly & ₹1,20,000 yearly balance limit.
          </Text>
        </View>
        <Image source={require("../../assets/creditCards.png")} style={styles.image} />
      </View>

      {/* Inputs */}
      <TextInput style={styles.input} placeholder="Enter Name" value={name} onChangeText={setName} />

      <TextInput
        style={[styles.input, !isEmailValid && styles.errorBorder]}
        placeholder="Enter Email"
        value={email}
        onChangeText={validateEmail}
      />
      {!isEmailValid && <Text style={styles.errorText}>Invalid Email</Text>}

      <TextInput style={styles.input} placeholder="DOB (DD/MM/YYYY)" value={dob} onChangeText={setDob} />

      {/* Dropdown */}
      <View style={styles.pickerContainer}>
        <Picker selectedValue={idType} onValueChange={(item) => setIdType(item)}>
          <Picker.Item label="Pan card" value="Pan card" />
          <Picker.Item label="Driving License" value="Driving License" />
          <Picker.Item label="Voter ID" value="Voter ID" />
        </Picker>
      </View>

      {/* ID Input */}
      <TextInput
        style={[styles.input, !isIdValid && styles.errorBorder]}
        placeholder={getPlaceholder()}
        value={idNumber}
        onChangeText={validateId}
      />
      {!isIdValid && <Text style={styles.errorText}>Invalid {idType} Number</Text>}

      {/* Checkbox Replacement */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setIsChecked(!isChecked)}
      >
        <View style={styles.checkbox}>
          {isChecked && <Text style={styles.checkmark}>✔</Text>}
        </View>
        <Text style={styles.checkboxText}>
          By continuing, you agree to the Terms and Conditions
        </Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isChecked ? "#1A34BD" : "grey" }]}
        disabled={!isChecked}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  headerContainer: { flexDirection: "row", alignItems: "center", marginTop: "10%", marginBottom: 30 },
  title: { fontSize: 18, fontWeight: "bold", color: "#333", marginLeft: 10 },
  titleContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 },
  textContainer: { flex: 1 },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 5 },
  smallText: { fontSize: 14, color: "#777" },
  image: { width: 80, height: 80, resizeMode: "contain", marginLeft: 10 },
  input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 8, paddingHorizontal: 15, marginBottom: 10, backgroundColor: "#fff" },
  pickerContainer: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 10, backgroundColor: "#fff" },
  errorBorder: { borderColor: "red" },
  errorText: { color: "red", marginBottom: 10 },
  checkboxContainer: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  checkbox: { width: 24, height: 24, borderRadius: 5, borderWidth: 2, borderColor: "#1A34BD", alignItems: "center", justifyContent: "center" },
  checkmark: { color: "#1A34BD", fontSize: 16 },
  checkboxText: { marginLeft: 10, color: "#555" },
  button: { height: 50, borderRadius: 8, justifyContent: "center", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
};
