import React, { useState } from "react";
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
import CustomPopup from "../components/CustomPopup";

const Auth = ({ navigation }) => {
  const API_URL = "http://192.168.0.29:3000";
  const [username, setUsername] = useState("");

  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const onSubmit = async (name) => {
    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
        }),
      });

      if (response.ok) {
        AsyncStorage.setItem("username", name);
        setAlertMessage('반가워요\n🌿☘️🌴🌱🍃🍐');
        setIsVisibleAlert(true);

        navigation.navigate("Home");
      } else if (response.status === 409) {
        setAlertMessage('중복된 닉네임입니다.');
        setIsVisibleAlert(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={topLogo} style={styles.topLogo} />
      <View style={styles.imageContainer}>
        <Image source={mainPlant} style={styles.mainPlant} />
      </View>
      <View style={styles.bottomSheet}>
        <Text style={styles.mainText}>보호자의 이름을 알려주세요!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="닉네임을 입력해주세요"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onSubmit(username)}
        >
          <Text style={styles.buttonText}>시작하기</Text>
          <AntDesign name="right" size={20} color="white" />
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
    flex: 1,
    backgroundColor: "#fff",
  },
  topLogo: {
    width: 160,
    height: 40,
    resizeMode: "contain",
    marginTop: 45,
  },
  imageContainer: {
    width: '60%',
    marginHorizontal: '20%',
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
    height: "55%",
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

export default Auth;
