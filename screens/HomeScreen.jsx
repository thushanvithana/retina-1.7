import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Maps"
        onPress={() => navigation.navigate("Locations")}
      />

      <Button
        title="Go to Diabatic"
        onPress={() => navigation.navigate("Diabatic")}
      />

      
<Button
        title="Go to Diabatic Ony using Image"
        onPress={() => navigation.navigate("DiabaticImageUsing")}
      />

      <Button
        title="Go to Retinopathy"
        onPress={() => navigation.navigate("Check eye blindness")}
      />

      <Button
        title="health tips"
        onPress={() => navigation.navigate("HealthTips")}
      />

      <Button
        title="next screening"
        onPress={() => navigation.navigate("NextScreening")}
      />

      {/*             
<Button
        title="Diabetic result"
        onPress={() => navigation.navigate("ResultScreen")}
      />


            
<Button
        title="Retinopathy result"
        onPress={() => navigation.navigate("RetinopathyResult")}
      /> */}

      <Button
        title="Go to Hospital Clinical Trails"
        onPress={() => navigation.navigate("ClinicalTrails")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
