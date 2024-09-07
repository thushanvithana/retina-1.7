import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "../Components/styles";

export default function Header({ navigation }) {
  return (
    <View style={styles.headerButtons}>
      <Text style={styles.title}>Diabatic Checker</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Retinopathy")}
        style={styles.topButton}
      >
        <FontAwesome name="forward" size={24} color="#D3D3D3" />
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert("Info", "This is an info button.")}
        style={styles.topButton}
      >
        <FontAwesome name="info-circle" size={24} color="#D3D3D3" />
      </TouchableOpacity>
    </View>
  );
}
