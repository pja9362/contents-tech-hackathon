import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Home = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [nickName, setNickName] = useState("");
  const [isNickNameAvailable, setIsNickNameAvailable] = useState(true);
  const [plantType, setPlantType] = useState("");
  const [plantName, setPlantName] = useState("");

  const onCheckNickName = () => {};

  const onNextStep = () => {
    if (currentStep === 1 && !isNickNameAvailable) {
      alert("닉네임 중복 확인이 필요합니다.");
      return;
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      //   navigation.navigate("Welcome");
      setCurrentStep(1);
      alert('완료!');
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
        <View style={{ alignItems: "center" }}>
          <Text style={styles.mainText}>닉네임을 입력해주세요</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              maxWidth: "80%",
            }}
          >
            <TextInput
              style={{ ...styles.input, flex: 1 }}
              placeholder="닉네임 입력"
              value={nickName}
              onChangeText={(text) => setNickName(text)}
            />
            <TouchableOpacity onPress={onCheckNickName}>
              <Text>중복 확인</Text>
            </TouchableOpacity>
          </View>
          {isNickNameAvailable === false && (
            <Text style={styles.errorMessage}>
              닉네임이 이미 사용 중입니다.
            </Text>
          )}
        </View>
      )}

      {currentStep === 2 && (
        <View>
          <Text style={styles.mainText}>나의 식물을 골라주세요~!</Text>
          <TextInput
            value={plantType}
            onChangeText={(text) => setPlantType(text)}
            style={styles.input}
            placeholder="식물 종류 입력"
          />
        </View>
      )}
      {currentStep === 3 && (
        <View>
          <Text style={styles.mainText}>내 반려식물의 이름은?!</Text>
          <TextInput
            value={plantName}
            onChangeText={(text) => setPlantName(text)}
            style={styles.input}
            placeholder="식물 애칭 입력"
          />
        </View>
      )}

      <Text style={styles.indexText}>{currentStep}/3</Text>

      <TouchableOpacity style={styles.button} onPress={onNextStep}>
        <Text>{currentStep === 3 ? "완료" : "다음"}</Text>
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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    marginBottom: 10,
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
  indexText: {
    fontSize: 12,
    marginVertical: 40,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
