import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
//import RNSpeedometer from "react-native-speedometer";
import FontAwesome from "@expo/vector-icons/FontAwesome"; // Importing FontAwesome

export default function RetinopathyResult({ route, navigation }) {
  const { prediction, responseData } = route.params;

  console.log(prediction);
  // Assuming "1" and 1 are positive, and "0" or 0 are negative
  const isPositive = prediction === "Positive" || prediction === 1;

  // Correctly map the prediction to the speedometer value
  const speedometerValue = isPositive ? 100 : 0; // 100 for positive, 0 for negative

  console.log("Prediction:", prediction);
  console.log("Is Positive:", isPositive);
  console.log("Speedometer Value:", speedometerValue);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Review Summary</Text>
          </View>

          <View style={styles.profileSection}>
            {/* <RNSpeedometer
              value={speedometerValue}
              size={105}
              maxValue={120}
              labels={[
                {
                  name: "Negative",
                  labelColor: "#14eb6e",
                  activeBarColor: "#14eb6e",
                  range: [0, 50], // Adjust the range as per your logic
                },
                {
                  name: "You have prob to eye blind",
                  labelColor: "#ff2900",
                  activeBarColor: "#ff2900",
                  range: [51, 10], // Adjust the range as per your logic
                },
              ]}
            /> */}

            <View style={styles.container}>
              <Text style={styles.doctorName}>Dr. Jonny Wilson</Text>
              <View style={styles.verifiedSection}>
                <Text style={styles.specialization}>Ophthalmologist</Text>
                <FontAwesome
                  name="check-circle"
                  size={18}
                  color="#007bff"
                  style={styles.iconVerified}
                />
              </View>
              <View style={styles.locationSection}>
                <FontAwesome name="map-marker" size={18} color="#777" />
                <Text style={styles.location}>Colombo, Sri Lanka</Text>
              </View>
            </View>
          </View>

          <View style={styles.hr} />

          <View style={styles.pricingSection}>
            {responseData && (
              <View style={styles.responseDataContainer}>
                {Object.entries(responseData).map(([key, value]) => (
                  <View
                    key={key}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 5,
                    }}
                  >
                    <Text style={styles.pricingText}>{key}:</Text>
                    <Text style={styles.price}>
                      {Array.isArray(value) ? value[0] : value}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            <View style={styles.hr} />
          </View>

          {isPositive ? (
            <View style={styles.paymentSection}>
              <View style={styles.paymentIconSection}>
                <FontAwesome name="credit-card" size={18} color="#007bff" />
                <Text style={styles.paymentText}>Locations</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Locations")}
              >
                <Text style={styles.changeText}>View nearest location</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.paymentSection}>
              <View style={styles.paymentIconSection}>
                <FontAwesome name="credit-card" size={18} color="#007bff" />
                <Text style={styles.paymentText}>HealthTips</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("HealthTips")}
              >
                <Text style={styles.changeText}>View</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.paymentSection}>
            <View style={styles.paymentIconSection}>
              <FontAwesome name="credit-card" size={18} color="#007bff" />
              <Text style={styles.paymentText}>Next screen</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("NextScreening")}
            >
              <Text style={styles.changeText}>View next screening</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  verifiedSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  iconVerified: {
    marginLeft: 5,
  },
  specialization: {
    fontSize: 16,
    color: "#777",
  },
  locationSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: 14,
    color: "#777",
    marginLeft: 5,
  },
  infoSection: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  pricingSection: {
    marginBottom: 20,
  },
  pricingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  pricingText: {
    fontSize: 16,
    color: "#555",
  },
  price: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  paymentSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  paymentIconSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 5,
  },
  changeText: {
    fontSize: 16,
    color: "#007bff",
  },
  payButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  hr: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 15,
  },
});
