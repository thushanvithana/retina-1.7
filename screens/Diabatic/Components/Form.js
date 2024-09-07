import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../Components/styles";

export default function Form({ formData, setFormData, errors, handleSubmit }) {
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={styles.inputContainer}>
      {Object.keys(formData).map((key) => (
        <View key={key} style={styles.inputGroup}>
          <Text style={styles.label}>{key}</Text>
          <TextInput
            style={styles.input}
            placeholder={key}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange(key, text)}
            value={formData[key]}
          />
          {errors[key] && <Text style={styles.errorText}>{errors[key]}</Text>}
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Predict Diabetic Retinopathy</Text>
      </TouchableOpacity>
    </View>
  );
}
