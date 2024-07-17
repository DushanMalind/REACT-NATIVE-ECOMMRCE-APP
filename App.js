import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import LoginScreen from "./Apps/Screens/LoginScreen";
import {ClerkProvider, SignedIn, SignedOut} from "@clerk/clerk-expo";

export default function App() {
  return (
      <ClerkProvider publishableKey='pk_test_ZHluYW1pYy1nYW5uZXQtMjIuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View className="flex-1  bg-white">
      <StatusBar style="auto" />
          <SignedIn>
              <Text>Login</Text>
          </SignedIn>
          <SignedOut>
              <LoginScreen />
          </SignedOut>

      </View>
      </ClerkProvider>
  );
}


