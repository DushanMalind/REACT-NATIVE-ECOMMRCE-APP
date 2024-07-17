import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Text, View } from 'react-native';
import LoginScreen from "./Apps/Screen/LoginScreen";
import {ClerkProvider, SignedIn, SignedOut} from "@clerk/clerk-expo";

export default function App() {
  return (
   /* <View style={styles.container items-center justify-center }>*/
      <ClerkProvider publishableKey='pk_test_dG91Y2hlZC1yYXQtOTUuY2xlcmsuYWNjb3VudHMuZGV2JA'>
          <View className="flex-1 bg-white">
              {/*<Text className="text-[40px] text-green-400">Welcome Dushan</Text>*/}
              <StatusBar style="auto" />

              <SignedIn>
                  <Text className="mt-20">Hello</Text>
              </SignedIn>
              <SignedOut>
                  <LoginScreen/>
              </SignedOut>
          </View>
      </ClerkProvider>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
