import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../components/Header";
import NearCafes from "../components/NearCafes";
import SearchPlants from "../components/SearchPlants";

const Main = ({ navigation }) => {
  const Tab = createMaterialTopTabNavigator();
  const [selectedTab, setSelectedTab] = useState("Cafe");

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={ selectedTab === 'Cafe' ? styles.activeTab : styles.tab }
          onPress={() => setSelectedTab("Cafe")}
        >
          <Text
            style={
              selectedTab === "Cafe"
                ? [styles.activeTabText, styles.activeTabBackground]
                : styles.tabText
            }
          >
            주변 상점
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ selectedTab === 'Plant' ? styles.activeTab : styles.tab }
          onPress={() => setSelectedTab("Plant")}
        >
          <Text
            style={
              selectedTab === "Plant"
                ? [styles.activeTabText, styles.activeTabBackground]
                : styles.tabText
            }
          >
            식물 찾기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedTab === "Cafe" ? (
            <NearCafes />
        ) : (
            <SearchPlants />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C5C2D",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#4C5C2D",
    marginHorizontal: 20,
    marginTop: 35,
    alignItems: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#AA5535',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  activeTab: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8DB",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabText: {
    color:  "#F8F8DB",
    fontSize: 17,
    paddingVertical: 15,
  },
  activeTabText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 15,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F8F8DB",
    marginHorizontal: 20,
    marginBottom: 35,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});

export default Main;
