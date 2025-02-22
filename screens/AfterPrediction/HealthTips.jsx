import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function HealthTips({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Retinopathy Health Tips</Text>
      <TouchableOpacity style={styles.seeAllBtn}>
        <Text style={styles.seeAllText}>See All</Text>
      </TouchableOpacity>

      {/* Tip Card 1 */}
      <View style={styles.tipCard}>
        <View style={[styles.tipCardContent, { backgroundColor: "#d9a4f4" }]}>
          {/* GIF Image */}
          <Image
            source={require("../../assets/thu.gif")} // Make sure to replace with your GIF path or URL
            style={styles.gifImage}
          />
          <Text style={styles.tipTitle}>Check Vision Task</Text>
          <Text style={styles.tipDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity style={styles.learnMoreBtn}>
            <Text style={styles.learnMoreText}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tip Card 2 */}
      <View style={styles.tipCard}>
        <View style={[styles.tipCardContent, { backgroundColor: "#8cd4f5" }]}>
          {/* GIF Image */}
          <Image
            source={require("../../assets/thu.gif")} // Make sure to replace with your GIF path or URL
            style={styles.gifImage}
          />
          <Text style={styles.tipTitle}>Eye Exercise</Text>
          <Text style={styles.tipDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity style={styles.learnMoreBtn}>
            <Text style={styles.learnMoreText}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tip Card 3 */}
      <View style={styles.tipCard}>
        <View style={[styles.tipCardContent, { backgroundColor: "#f5b48c" }]}>
          {/* GIF Image */}
          <Image
            source={require("../../assets/thu.gif")} // Make sure to replace with your GIF path or URL
            style={styles.gifImage}
          />
          <Text style={styles.tipTitle}>Healthy Foods</Text>
          <Text style={styles.tipDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity style={styles.bookNowBtn}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Repeat for other cards as needed */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  seeAllBtn: {
    alignSelf: "flex-end",
  },
  seeAllText: {
    color: "#109BE7",
    fontSize: 16,
  },
  tipCard: {
    marginBottom: 16,
  },
  tipCardContent: {
    borderRadius: 10,
    padding: 16,
  },
  gifImage: {
    width: "100%", // Adjust the width as needed
    height: 150, // Adjust the height as needed
    borderRadius: 10,
    marginBottom: 16,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    marginBottom: 16,
    color: "#555",
  },
  learnMoreBtn: {
    backgroundColor: "#4a4a4a",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  learnMoreText: {
    color: "#fff",
    fontSize: 14,
  },
  bookNowBtn: {
    backgroundColor: "#109BE7",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  bookNowText: {
    color: "#fff",
    fontSize: 14,
  },
});
