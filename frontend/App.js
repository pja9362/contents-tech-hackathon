import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "./src/pages/Splash";
import AuthScreen from "./src/pages/Auth";
import HomeScreen from "./src/pages/Home";
import WelcomeScreen from "./src/pages/Welcome";
import MainScreen from "./src/pages/Main";

import homeIcon from "./src/images/home_icon.png";
import myIcon from "./src/images/my_icon.png";
import { FontAwesome5 } from "@expo/vector-icons";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const getTabBarIcon = (routeName, focused) => {
    let iconSource;

    if (routeName === "Home") {
      iconSource = homeIcon;
    } else if (routeName === "Profile") {
      iconSource = myIcon;
    }

    return (
      <Image
        source={iconSource}
        style={focused ? styles.activeIcon : styles.inactiveIcon}
      />
    );
  };

  const MainStack = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused),
        tabBarStyle: {
          backgroundColor: "#F7FAEC",
          padding: 8,
          paddingHorizontal: 25
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          color: "#4C5C2D",
          marginTop: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false, tabBarLabel: "홈" }}
        component={MainScreen}
      />
      <Tab.Screen
        name="Plus"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity style={styles.plusButton}>
              <FontAwesome5 name="plus" size={25} color="#4C5C2D" />
            </TouchableOpacity>
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false, tabBarLabel: "내 정보" }}
        component={MainScreen}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* bottom nav 가 없어야함 */}
        {/* <Stack.Screen name="Splash" options={{headerShown: false}} component={SplashScreen} />
        <Stack.Screen name="Auth" options={{headerShown: false}} component={AuthScreen} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} /> */}
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />

        {/* bottom nav 가 있으면 좋겠음 */}
        <Stack.Screen name="MainStack" options={{ headerShown: false }}>
          {() => <MainStack />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  activeIcon: {
    width: 30,
    height: 30,
    padding: 5,
  },
  inactiveIcon: {
    width: 25,
    height: 25,
    padding: 5,
  },
  plusButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 5, 
    left: "50%",
    transform: [{ translateX: -20 }],
    backgroundColor: "#ACC26F",
    borderRadius: 25,
    padding: 10,
    width: 50,
    height: 50,
  },
});

export default App;
