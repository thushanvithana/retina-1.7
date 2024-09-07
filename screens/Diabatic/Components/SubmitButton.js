import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function SubmitButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Predict Diabetic Retinopathy</Text>
    </TouchableOpacity>
  );
}
