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

const Welcome = ({ navigation }) => {
  const [plantName, setPlantName] = useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("plantName");
      if (value !== null && value !== undefined) {
        setPlantName(value);
      }
    } catch (error) {
      console.error("로컬 스토리지 에러:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const onNextStep = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <Image source={topLogo} style={styles.topLogo} />
      <Text style={styles.welcomeText}>Hello {plantName}!</Text>
      <View style={styles.imageContainer}>
        <Image source={mainPlant} style={styles.mainPlant} />
      </View>

      <View style={styles.bottomSheet}>
        <Text style={styles.mainText}>
          입장을 환영합니다.{"\n"}마음놓고 보호하는 서비스
        </Text>

        <TouchableOpacity style={styles.button} onPress={onNextStep}>
          <Text style={styles.buttonText}>ENTER</Text>
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
    color: "#6D371E",
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
    marginVertical: 50,
    textAlign: "center",
    lineHeight: 25,
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

export default Welcome;
