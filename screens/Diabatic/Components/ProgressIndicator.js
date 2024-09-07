import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { styles } from "../Components/styles";

export default function ProgressIndicator({ loading, progress }) {
  if (!loading) return null;

  return (
    <View style={styles.progressContainer}>
      <ActivityIndicator size="large" />
      <Text style={styles.progressText}>Processing {progress}%</Text>
    </View>
  );
}
