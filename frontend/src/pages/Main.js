import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Main = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>메인페이지</Text>
            <TouchableOpacity style={styles.cafeBtn} onPress={() => navigation.navigate("CafeList")}>
                <Text>주변 카페</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent:'center',
    },
    cafeBtn: {
        backgroundColor: 'skyblue',
        padding: 20,
        margin: 20
    }
});

export default Main;