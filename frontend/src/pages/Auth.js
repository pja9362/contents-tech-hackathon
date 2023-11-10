import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth = ({ navigation }) => {
  const API_URL = "http://192.168.0.29:3000";
  const [username, setUsername] = useState("");

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
        alert("회원가입이 완료되었습니다.");
        navigation.navigate("Home");
      } else if (response.status === 409) {
        console.log("중복된 닉네임입니다.");
        alert("닉네임을 확인해주세요!");
      }
    } catch (err) {
      console.log(err);
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

      <View>
        <Text style={styles.mainText}>닉네임을 입력해주세요!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="닉네임을 입력해주세요"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onSubmit(username)}>
        <Text>시작하기</Text>
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
    marginVertical: 10,
  },
  indexText: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Auth;
