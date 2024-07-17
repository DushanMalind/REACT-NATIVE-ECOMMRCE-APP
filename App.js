import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./Apps/Screens/LoginScreen";

export default function App() {
  return (
      <View className="flex-1  bg-white">
      <StatusBar style="auto" />
          <LoginScreen/>
    </View>
  );
}


