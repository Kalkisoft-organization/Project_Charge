import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WalletScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      {/* 🔹 Header */}
      <Text style={styles.headerText}>Wallet</Text>

      {/* 🔹 Wallet Balance Card */}
      <TouchableOpacity style = {styles.card} onPress={() => navigation.navigate("Transaction")}>
        <Text style={styles.walletText}>Wallet Balance</Text>
        <Text style={styles.walletAmount}>₹ 0.00</Text>

        {/* 🔹 Razorpay Branding */}
        <View style={styles.razorpayContainer}>
          <Text style={styles.poweredByText}>Powered by</Text>
          <Image 
            source={require("../../assets/razorpay.png")} 
            style={styles.razorpayLogo} 
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      {/* 🔹 KYC Card */}
      <TouchableOpacity style = {styles.kycCard} onPress={() => navigation.navigate("KYCVerification")}>
        <View style={{ flex: 1 }}>
          <Text style={styles.kycTitle}>Complete Minimum KYC</Text>
          <Text style={styles.kycText}>
            To add money in the wallet, complete minimum KYC.
          </Text>

          <Image 
            source={require("../../assets/arrow.png")} 
            style={styles.arrowIcon}
            resizeMode="contain"/>
        </View>

        {/* 🔹 KYC Right Side Image */}
        <Image 
          source={require("../../assets/creditCards.png")} 
          style={styles.kycImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 40,
    marginTop : 10,
    marginLeft : 10,
  },
  card: {
    backgroundColor: "#f3f4f6",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 16,
  },
  walletText: {
    color: "#666",
    fontSize: 16,
  },
  walletAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  razorpayContainer: {
    flexDirection: "row",
    alignItems : "flex-end",
    justifyContent: "flex-end",
    marginTop:10,
  },
  poweredByText: {
    fontSize: 9,
    color: "#666",
  },
  razorpayLogo: {
    width: 100,
    height : 70,
    marginLeft : -15,
    marginBottom : -30,
   
  },
  kycCard: {
    backgroundColor: "#f3f4f6",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 16,
  },
  kycTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  kycText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  kycImage: {
    width: 150,
    height: 150,
    marginBottom : -20,
  },
  arrowIcon: {
    width: 40,
    height: 40,
    marginTop : 10,
  },
});
