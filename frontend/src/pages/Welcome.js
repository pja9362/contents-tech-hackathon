import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Welcome = ({ navigation }) => {

    const onNextStep = () => {
        navigation.navigate('Main');
    }

  return (
    <View style={styles.container}>
      {/* image */}
      <View
        style={{
          marginTop: "40%",
          width: 150,
          height: 150,
          borderRadius: 75,
          backgroundColor: "lightgray",
        }}
      ></View>

      <Text style={styles.mainText}>입장을 환영합니다~</Text>

      <TouchableOpacity style={styles.button} onPress={onNextStep}>
        <Text>입장</Text>
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
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
