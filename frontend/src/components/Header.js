import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import topLogo from "../images/top_logo_light.png";
import { MaterialCommunityIcons, Ionicons, AntDesign } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={topLogo} style={styles.topLogo} />
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Ionicons name="ios-search-sharp" size={28} color="#F8F8DB" />
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialCommunityIcons name="bell" size={28} color="#F8F8DB" />
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialCommunityIcons name="dots-vertical" size={28} color="#F8F8DB" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  topLogo: {
    width: 140,
    height: 35,
    resizeMode: "contain",
    marginTop: 45,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    gap: 7,
    marginTop: 45,
  },
});

export default Header;
