import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Location from "expo-location";

const CafeList = () => {
  const [location, setLocation] = useState(null);

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
      // 서버로 현재 위치 정보 전송
      // 이후 서버에서 해당 위치 주변의 카페 데이터를 가져옴
      try {
        const response = await fetch(
          `YOUR_SERVER_URL/nearbyCafes?latitude=${latitude}&longitude=${longitude}`
        );
        const cafeData = await response.json();
        console.log("Nearby Cafes:", cafeData);
        // 여기서 카페 데이터를 상태에 저장하거나 필요에 따라 처리합니다.
      } catch (error) {
        console.error("Error fetching nearby cafes:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Cafe List</Text>
      <Button title="Fetch Nearby Cafes" onPress={fetchNearbyCafes} />
      {/* 여기에 카페 목록을 렌더링하는 부분을 추가하세요. */}
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
});
export default CafeList;
