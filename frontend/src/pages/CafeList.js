import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Location from "expo-location";

const CafeList = () => {
  const API_URL = "http://192.168.0.29:3000";
  const [location, setLocation] = useState(null);
  const [cafes, setCafes] = useState([]);
  const [distance, setDistance] = useState(1000);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      console.log("Location:", location);
    }
  }, [location]);

  const fetchNearbyCafes = async () => {
    if (location) {
      const { latitude, longitude } = location.coords;

      try {
        const response = await fetch(
          `${API_URL}/cafe/nearbyCafes?latitude=${latitude}&longitude=${longitude}&distance=${distance}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const cafeData = await response.json();
        console.log("Nearby Cafes:", cafeData);
        setCafes(cafeData); 
      } catch (error) {
        console.error("Error fetching nearby cafes:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Cafe List</Text>
      <View style={styles.distanceButtons}>
        <Button title="1km" onPress={() => setDistance(1000)} />
        {/* <Button title="3km" onPress={() => setDistance(3000)} />
        <Button title="5km" onPress={() => setDistance(5000)} /> */}
      </View>
      <Button title="내 주변 카페" onPress={fetchNearbyCafes} />
      {cafes.map((cafe, index) => (
        <Text key={index}>{cafe.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  distanceButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});

export default CafeList;