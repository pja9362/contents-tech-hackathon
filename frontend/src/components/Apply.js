import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import getDummyImage from "../utils/getDummyImage";
import { Ionicons } from "@expo/vector-icons";
import CustomPopup from "./CustomPopup";

const Apply = ({ selectedCafe }) => {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  if (!selectedCafe) {
    return (
      <View>
        <Text>No cafe selected</Text>
      </View>
    );
  }

  const handleApply = () => {
    setAlertMessage("신청이 완료되었습니다\n🐬🦋🐠🧢🚙");
    setIsVisibleAlert(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={getDummyImage(selectedCafe.id - 1)}
          style={styles.image}
        />
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="cafe" size={24} color="#6D371E" />
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 700,
              textAlign: "right",
              paddingVertical: 12,
            }}
          >
            {selectedCafe.name}
          </Text>
          <Text>{selectedCafe.description}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 12,
            }}
          >
            <Text style={styles.infoText}>영업시간: 10:00-22:00</Text>
            <Text style={styles.infoText}>|</Text>
            <Text style={styles.infoText}>031-522-0854</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleApply()}>
          <Text style={styles.buttonText}>신청하기</Text>
        </TouchableOpacity>
      </View>

      <CustomPopup
        isVisible={isVisibleAlert}
        message={alertMessage}
        onClose={() => setIsVisibleAlert(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    flex: 7,
    marginVertical: 15,
  },
  image: {
    width: "90%",
    height: 335,
    borderRadius: 20,
    marginBottom: 20,
  },
  infoContainer: {
    flex: 2.5,
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: "10%",
    borderWidth: 3,
    borderColor: "#CCDF9D",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: "50%",
    height: 40,
    backgroundColor: "#CCDF9D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6D371E",
  },
  infoText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "darkgray",
    paddingTop: 3,
  },
});

export default Apply;
