import React from "react";
import { Modal, View, Text, ScrollView, Pressable, Image } from "react-native";
import styles from "./styles";

export default function ModalComponent({ isVisible, extractedText, image, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Extracted Text</Text>
          {image && (
            <Image source={{ uri: image }} style={{ width: 400, height: 300, objectFit: "contain" }} />
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
