import React from "react";
import { Modal, View, Text, Image, ScrollView, Pressable } from "react-native";
import { styles } from "../Components/styles";

export default function ExtractedTextModal({ visible, extractedText, image, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Extracted Text</Text>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 400, height: 300, resizeMode: "contain" }}
            />
          )}
          <ScrollView style={styles.modalScrollView}>
            <Text style={styles.modalText}>{extractedText}</Text>
          </ScrollView>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
