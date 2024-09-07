import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";

export default function ProgressBar({ progress, loadingText }) {
  return (
    <View style={styles.progressContainer}>
      <ActivityIndicator size="large" />
      <Text style={styles.progressText}>{loadingText} {progress}%</Text>
    </View>
  );
}
