import React, { forwardRef } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";

const BottomSheetComponent = forwardRef((props, ref) => {
  const snapPoints = ["20%", "50%", "80%"];

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={styles.bottomSheet}
    >
      <View style={styles.sheetContent}>
        <Text style={styles.welcomeText}>Hi Prafull, Welcome to Kazam EV</Text>

        {/* Wallet Section */}
        <View style={styles.walletContainer}>
          <View style={styles.walletText}>
            <Text style={styles.walletAmount}>₹0.00</Text>
            <TouchableOpacity style={styles.rechargeButton}>
              <Text style={styles.rechargeText}>Recharge now</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("../assets/card.png")} style={styles.cardImage} />
        </View>

        {/* Explore Stations */}
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreText}>Explore Stations</Text>
          <FontAwesome name="plus-square" size={24} color="black" />
        </View>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetContent: { padding: 20 },
  welcomeText: { fontSize: 20, fontWeight: "bold", color: "black", marginBottom: 15 },
  walletContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
  },
  walletText: { flex: 1 },
  walletAmount: { fontSize: 18, color: "black", fontWeight: "bold" },
  rechargeButton: { marginTop: 5, backgroundColor: "#ddd", padding: 8, borderRadius: 5 },
  rechargeText: { color: "black", fontSize: 14 },
  cardImage: { width: 80, height: 50, resizeMode: "contain" },
  exploreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  exploreText: { fontSize: 16, color: "black" },
});

export default BottomSheetComponent;
