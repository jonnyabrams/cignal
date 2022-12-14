import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View className="items-center justify-center flex-1">
        <StatusBar style="auto" />
        <Text className="text-red-500">Oi oi oioioi</Text>
      </View>
    </NavigationContainer>
  );
}
