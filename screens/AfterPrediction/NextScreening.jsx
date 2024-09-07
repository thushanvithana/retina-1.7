import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function NextScreening({ navigation }) {
  const [nextScreeningDate, setNextScreeningDate] = useState("");
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    // Calculate the next screening date 24 months from today
    const calculateNextScreening = () => {
      const today = new Date();
      const nextDate = new Date(today.setMonth(today.getMonth() + 24));

      const formattedDate = nextDate.toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      });

      setNextScreeningDate(formattedDate);
      calculateCountdown(nextDate);
    };

    // Calculate the countdown to the next screening date
    const calculateCountdown = (nextDate) => {
      const now = new Date();
      const timeDifference = nextDate - now;

      const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const monthsLeft = Math.floor(daysLeft / 30);
      const remainingDays = daysLeft % 30;

      setCountdown(`${monthsLeft} months, ${remainingDays} days`);

      // Check if the countdown is within a specific range and send notification
      if (daysLeft <= 7 && daysLeft >= 0) {
        sendNotification(daysLeft);
      }
    };

    // Function to send a notification using Alert
    const sendNotification = (daysLeft) => {
      Alert.alert(
        "Screening Reminder",
        `Your next screening is in ${daysLeft} days. Please prepare accordingly.`,
        [{ text: "OK", onPress: () => console.log("Alert closed") }]
      );
    };

    calculateNextScreening();

    // Update countdown every day
    const interval = setInterval(() => {
      calculateNextScreening();
    }, 86400000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.screeningCard}>
        {/* Add your GIF Image here */}
        <Image
          source={{
            uri: "https://ask.libreoffice.org/uploads/asklibo/original/3X/0/d/0de586544bba6cc70466cd97b45686d5dcbca532.gif",
          }} // Replace with your GIF URL or local file
          style={styles.gifImage}
          resizeMode="contain"
        />
        <Text style={styles.screeningTitle}>Next screening</Text>
        <Text style={styles.screeningInterval}>Screening interval</Text>
        <Text style={styles.intervalValue}>24 months</Text>
        <Text style={styles.dateTitle}>Date</Text>
        <Text style={styles.dateValue}>{nextScreeningDate}</Text>
        <Text style={styles.countdownTitle}>Countdown</Text>
        <Text style={styles.countdownValue}>{countdown}</Text>
      </View>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  screeningCard: {
    backgroundColor: "#109BE7",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  gifImage: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 20,
  },
  screeningTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  screeningInterval: {
    fontSize: 16,
    color: "#fff",
  },
  intervalValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 5,
  },
  dateTitle: {
    fontSize: 16,
    color: "#fff",
  },
  dateValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 5,
  },
  countdownTitle: {
    fontSize: 16,
    color: "#fff",
  },
  countdownValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 5,
  },
  doneButton: {
    backgroundColor: "#00ADEF",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  doneButtonText: {
    fontSize: 18,
    color: "#fff",
  },
});
