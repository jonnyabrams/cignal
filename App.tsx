import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='items-center justify-center flex-1'>
      <StatusBar style="auto" />
      <Text className="text-red-500">Oi oi oioioi</Text>
    </View>
  );
}

