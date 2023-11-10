import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import locationIcon from "../images/location_icon.png";
import * as Location from "expo-location";
import getDummyImage from "../utils/getDummyImage";
import { Ionicons } from "@expo/vector-icons";

const NearCafes = () => {
  const API_URL = "http://192.168.0.29:3000";
  const [location, setLocation] = useState(null);
  const [cafes, setCafes] = useState([
    {
      name: "자명문",
      description: "안녕하세요 노티드입니다. 저희는 다육이 잘키워요.",
    },
    {
      name: "스타벅스 고양킨텍스 2호점",
      description: "반갑습니다. 저희는 힘없는 반려식물들이 다시 살려냅니다",
    },
    {
      name: "투썸플레이스 대화점",
      description: "저희 투썸은 전자파를 받지않고, 늘 좋은 노래를 틀어요.",
    },
    {
      name: "테일러커피",
      description: "카페에서 공부하는 학생들이 식물을 보고 너무 좋아해요.",
    },
  ]);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const city = reverseGeocode[0]?.city || "";
      const district = reverseGeocode[0]?.district || "";
      const neighborhood = reverseGeocode[0]?.name || "";

      const formattedAddress = `${city} ${district} ${neighborhood}`;
      setAddress(formattedAddress);
    };

    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.currentPlace}>
        <Image source={locationIcon} style={styles.image} />
        <Text style={styles.locationText}>{address}</Text>
      </View>
      <View style={styles.cafeContainer}>
        {cafes.map((cafe, index) => (
          <TouchableOpacity key={index} style={styles.cafeCard}>
            <Image source={getDummyImage(index)} style={styles.cafeImage} />
            <View style={styles.nameContainer}>
              <Ionicons name="cafe" size={20} color="black" />
              <Text style={styles.cafeName}>{cafe.name}</Text>
            </View>
            <Text style={styles.cafeDescription}>{cafe.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  currentPlace: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cafeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
  },
  cafeCard: {
    width: "48%",
    marginVertical: 8,
    borderRadius: 8,
  },
  cafeName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    lineHeight: 20,
    paddingHorizontal: 7,
  },
  cafeDescription: {
    fontSize: 12,
    paddingHorizontal: 7,
    lineHeight: 18,
    marginBottom: 6,
  },
  cafeImage: {
    width: "100%",
    height: 120,
    marginBottom: 8,
    borderRadius: 8,
  },
  nameContainer: {
    flexDirection: "row",
    paddingRight: 15,
  },
});

export default NearCafes;
