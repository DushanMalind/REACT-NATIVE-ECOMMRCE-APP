import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Text, View } from 'react-native';

export default function App() {
  return (
   /* <View style={styles.container}>*/
      <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-[40px] text-green-400">Welcome Dushan</Text>
      <StatusBar style="auto" />
    </View>
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
