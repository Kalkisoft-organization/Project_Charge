import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ChargerBooking = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date()); // Current Date
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date()); // Current Time
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [duration, setDuration] = useState(30); // Default 30 min
  const [selectedCharger, setSelectedCharger] = useState(null);

  const chargers = [
    { label: "3 Pin Socket", value: "3_pin" },
    { label: "Type 2 Charger", value: "type_2" },
    { label: "CCS Charger", value: "ccs" },
  ];

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>Charger Booking</Text>
      </TouchableOpacity>

    {/* location */}
      <View style={styles.box1}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={styles.label}> Current location</Text>
      </View>

      {/* Date */}
      <View style={styles.box}>
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.value}>{date.toDateString()}</Text>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      {/* 🔹 Time Picker */}
      <View style={styles.box}>
        <Text style={styles.label}>Time</Text>
        <TouchableOpacity onPress={() => setShowTimePicker(true)}>
          <Text style={styles.value}>
            {time.getHours() % 12 || 12}:
            {time.getMinutes().toString().padStart(2, "0")}
            {time.getHours() >= 12 ? " PM" : " AM"}
          </Text>
        </TouchableOpacity>
      </View>

      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (selectedTime) setTime(selectedTime);
          }}
        />
      )}

      {/* 🔹 Duration Selector */}
      <View style={styles.box}>
        <Text style={styles.label}>Duration</Text>
        <View style={styles.durationContainer}>
          <TouchableOpacity
            onPress={() => setDuration(Math.max(10, duration - 10))}
            style={styles.durationButton}
          >
            <Text style={styles.durationText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{duration} min</Text>
          <TouchableOpacity
            onPress={() => setDuration(duration + 10)}
            style={styles.durationButton}
          >
            <Text style={styles.durationText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔹 Charger Type Dropdown */}
      <View style={styles.box}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedCharger(value)}
          items={chargers}
          placeholder={{ label: "Select Charger Type", value: null }}
          style={{
            inputAndroid: styles.value,
            inputIOS: styles.value,
          }}
        />
      </View>

      {/* 🔹 Search Button */}
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchText}>Search for chargers</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  box: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  box1: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
    marginBottom: 20,
  },
  headerText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,  
  },

  label: {
    flexDirection: "row",
    color: "#000",
    fontSize: 16,
    fontWeight: 600,
  },
  value: {
    flexDirection: "row",
    color: "#000",
    fontSize: 14,
    marginTop: 5,
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  durationButton: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 5,
  },
  durationText: {
    color: "000",
    fontSize: 18,
  },
  searchButton: {
    backgroundColor: "#1A34BD",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  searchText: {
    color: "white",
    fontSize: 18,
  },
};

export default ChargerBooking;