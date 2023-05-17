import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-gray-950 h-screen flex-1 items-center justify-center'>
      <Text className='text-zinc-50 font-bold text-5xl'>Hello world!</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 48
//   }
// });