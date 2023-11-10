import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const API_URL = "http://192.168.0.29:3000";

  const [currentStep, setCurrentStep] = useState(1);
  const [plantType, setPlantType] = useState("");
  const [plantName, setPlantName] = useState("");
  const [username, setUsername] = useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null && value !== undefined) {
        setUsername(value);
        console.log("유저 정보:", value);
      } else {
        console.log("유저 정보 없음");
      }
    } catch (error) {
      console.error("로컬 스토리지 에러:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onNextStep = async () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const response = await fetch(`${API_URL}/plants/enrollPlant`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            plantType: plantType,
            plantName: plantName,
          }),
        });

        if (response.status === 200) {
          alert("식물 등록이 완료되었습니다.");
          navigation.navigate("Welcome");
        } else {
          alert("올바른 정보를 입력해주세요");
        }
      } catch (err) {
        console.error(err);
      }
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
        <View>
          <Text style={styles.mainText}>나의 식물을 골라주세요~!</Text>
          <View >
            <TextInput
              placeholder="나의 식물 종류를 골라주세요~!"
              onChangeText={(text) => setPlantType(text)}
              value={plantType}
            />
          </View>
        </View>
      )}
      {currentStep === 2 && (
        <View>
          <Text style={styles.mainText}>내 반려식물의 이름은?!</Text>
          <View>
            <TextInput
              placeholder="내 반려식물의 이름은?!"
              onChangeText={(text) => setPlantName(text)}
              value={plantName}
            />
          </View>
        </View>
      )}

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
