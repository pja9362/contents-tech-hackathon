import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import getPlantDummyImage from "../utils/getPlantDummyImage";
import NoSearchImage from "../images/noSearchImage.png";

const SearchCafes = () => {
  const dummyItems = [
    {
      storeName: "행복부동산 수원성대점",
      plantType: "우리집 막내",
      plantName: "다육이",
      image: getPlantDummyImage(1),
    },
    {
      storeName: "킨텍스부동산",
      plantType: "허브",
      plantName: "땅콩",
      image: getPlantDummyImage(2),
    },
    {
      storeName: "신라호텔 잠실나루점",
      plantType: "뽀삐",
      plantName: "스노우 사파이어",
      image: getPlantDummyImage(3),
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(dummyItems);

  const handleSearch = () => {
    const results = dummyItems.filter(
      (item) =>
        item.plantType.toLowerCase().includes(searchText.toLowerCase()) ||
        item.plantName.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleHashtagClick = (hashtag) => {
    setSearchText(hashtag);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={24}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="검색어를 입력하세요"
          placeholderTextColor="#666"
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
          value={searchText}
        />
      </View>

      <Text style={{ marginVertical: 8, fontWeight: "bold", fontSize: 16 }}>
        인기 검색어
      </Text>

      <View style={styles.hashtagsContainer}>
        {["허브", "사과나무", "인생나무", "다육이"].map((hashtag, index) => (
          <TouchableOpacity
            key={index}
            style={styles.hashtag}
            onPress={() => handleHashtagClick(hashtag)}
          >
            <Text style={styles.hashtagText}># {hashtag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.itemList}>
        {searchResults.length === 0 ? (
          <View style={styles.noResultsContainer}>
            <Image source={NoSearchImage} style={styles.noResultsImage} />
            <Text style={styles.noResultsText}>검색 결과가 없습니다..</Text>
          </View>
        ) : (
          searchResults.map((item, index) => (
            <View key={index} style={styles.item}>
              <View style={styles.itemInfo}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}
                >
                  {item.storeName}
                </Text>
                <Text
                  style={{
                    marginTop: 30,
                    fontWeight: "bold",
                    fontSize: 13,
                    textAlign: "right",
                    paddingVertical: 3,
                  }}
                >
                  {item.plantType}
                </Text>
                <Text style={{ fontSize: 12, textAlign: "right" }}>
                  {item.plantName}
                </Text>
              </View>
              <Image source={item.image} style={styles.itemImage} />
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: "#D6EAD6",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  hashtagsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  hashtag: {
    marginRight: 8,
    padding: 8,
    borderRadius: 15,
    backgroundColor: "#CCDF9D",
  },
  hashtagText: {
    color: "#6D371E",
    fontWeight: "bold",
  },
  itemList: {
    flex: 1,
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#CCDF9D",
    borderWidth: 2,
    marginBottom: 16,
  },
  itemInfo: {
    width: "40%",
    padding: 15,
  },
  itemImage: {
    width: "60%",
    height: 140,
    borderRadius: 30,
  },
  noResultsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  noResultsImage: {
    width: 150,
    height: 200,
    marginBottom: 10,
  },
  noResultsText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
  },
});

export default SearchCafes;
