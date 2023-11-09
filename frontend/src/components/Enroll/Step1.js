import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const Step1 = ({ nextStep, handleChange, values }) => {
  return (
    <View>
      <Text style={styles.mainText}>닉네임을 입력해주세요</Text>
      <TextInput
        style={styles.input}
        placeholder="닉네임 입력"
        value={nickName}
        onChangeText={(text) => setNickName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onCheckNickName}>
        <Text>중복 확인</Text>
      </TouchableOpacity>
      {isNickNameAvailable === false && (
        <Text style={styles.errorMessage}>닉네임이 이미 사용 중입니다.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 50,
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
});

export default Step1;
