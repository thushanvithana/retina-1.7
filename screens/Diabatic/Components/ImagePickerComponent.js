import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "../Components/styles";

export default function ImagePickerComponent({ onImagePick }) {
  return (
    <>
      <TouchableOpacity
        style={styles.imagePicker}
        onPress={() => onImagePick("gallery")}
      >
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePickerText}>
            <FontAwesome name="photo" size={24} color="#ccc" /> Select file
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => onImagePick("camera")}
      >
        <Text style={styles.cameraButtonText}>
          <FontAwesome name="camera" size={20} color="#109BE7" /> Open Camera &
          Take Photo
        </Text>
      </TouchableOpacity>
    </>
  );
}
