import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/pages/Auth';
import HomeScreen from './src/pages/Home';
import WelcomeScreen from './src/pages/Welcome';
import MainScreen from './src/pages/Main';
import CafeListScreen from './src/pages/CafeList';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" options={{headerShown: false}} component={AuthScreen} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Main" options={{headerShown: false}} component={MainScreen} />
        <Stack.Screen name="CafeList" options={{headerShown: false}} component={CafeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;