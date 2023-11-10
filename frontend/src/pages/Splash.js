import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import splashImg from "../images/splash.png";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.image}
        onPress={() => navigation.navigate("Auth")}
      >
        <Image source={splashImg} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Splash;
