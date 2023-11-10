import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import topLogo from "../images/top_logo.png";
import mainPlant from "../images/mainPlant.png";
import { AntDesign } from "@expo/vector-icons";
import StepIndicator from "../components/StepIndicator";

const Home = ({ navigation }) => {
  const API_URL = "http://192.168.0.29:3000";

  const [currentStep, setCurrentStep] = useState(1);
  const [plantType, setPlantType] = useState("");
  const [plantName, setPlantName] = useState("");
  const [username, setUsername] = useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
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
          AsyncStorage.setItem("plantName", plantName);
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
      <Image source={topLogo} style={styles.topLogo} />
      <Text style={styles.welcomeText}>Hello Plant!</Text>
      <View style={styles.imageContainer}>
        <Image source={mainPlant} style={styles.mainPlant} />
      </View>
      <View style={styles.bottomSheet}>
        {currentStep === 1 && (
          <>
            <Text style={styles.mainText}>반려 식물을 선택해주세요</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="나의 식물 종류를 골라주세요~!"
                onChangeText={(text) => setPlantType(text)}
                value={plantType}
              />
            </View>
          </>
        )}
        {currentStep === 2 && (
          <>
            <Text style={styles.mainText}>반려 식물의 이름이 무엇인가요?</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="내 반려 식물의 이름은?!"
                onChangeText={(text) => setPlantName(text)}
                value={plantName}
              />
            </View>
          </>
        )}
      <View style={{marginTop: '50%'}}>
        <StepIndicator steps={['1', '2']} currentStep={currentStep - 1} />
        </View>
        <TouchableOpacity style={styles.button} onPress={onNextStep}>
          <Text style={styles.buttonText}>NEXT</Text>
          <AntDesign name="right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topLogo: {
    width: 160,
    height: 40,
    resizeMode: "contain",
    marginTop: 40,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 65,
    marginTop: 10,
    color: '#6D371E'
  },
  imageContainer: {
    width: "60%",
    marginHorizontal: "20%",
    marginTop: 60,
    marginBottom: -15,
    zIndex: 2,
    aspectRatio: 1,
    borderRadius: 125,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#CCDF9D",
  },
  mainPlant: {
    width: 320,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 25,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 25,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#D6EAD6",
    paddingHorizontal: 20,
  },
  bottomSheet: {
    backgroundColor: "#F4F8E9",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  button: {
    width: "50%",
    height: 40,
    backgroundColor: "#CCDF9D",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    bottom: 100,
    position: "absolute",
    borderRadius: 20,
    flexDirection: "row",
    gap: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6D371E",
    paddingLeft: 10,
  },
});

export default Home;
