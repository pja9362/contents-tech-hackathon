import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);

  useState(() => {
    setCurrentStep(1);
  }, []);

  const onNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate("Welcome");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: "40%",
          width: 150,
          height: 150,
          borderRadius: 75,
          backgroundColor: "lightgray",
        }}
      ></View>

      {currentStep === 1 && (
        <Text style={styles.mainText}>나의 식물을 골라주세요~!</Text>
      )}
      {currentStep === 2 && (
        <Text style={styles.mainText}>내 반려식물의 이름은?!</Text>
      )}
      <View
        style={{ width: "70%", height: 42, backgroundColor: "lightgray" }}
      ></View>

      <Text style={styles.indexText}>{currentStep}/2</Text>

      <TouchableOpacity style={styles.button} onPress={onNextStep}>
        <Text>{currentStep === 2 ? "완료" : "다음"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 50,
  },
  indexText: {
    fontSize: 12,
    marginTop: 70,
    marginBottom: 30,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
