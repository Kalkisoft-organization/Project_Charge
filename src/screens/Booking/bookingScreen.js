import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BookingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My bookings</Text>
      <View style={styles.emptyContainer}>
        <Image source={require("../../assets/booking.png")} style={styles.image} />
        <Text style={styles.noBookingText}>No booking sessions yet</Text>
        <Text style={styles.subText}>Start your first charging session at the nearest charging point</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChargerBooking")}
        >
          <Text style={styles.buttonText}>Find nearby chargers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "start",
    paddingTop: 40,
  },
  header: {
    fontSize: 18 ,
    fontWeight: "bold",
    marginTop : 10,
    marginBottom: 20,
    marginLeft : 20,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  noBookingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 150,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#1A34BD",
    width : "90%",
    justifyContent : "center",
    height : 50,
    padding : 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BookingScreen;