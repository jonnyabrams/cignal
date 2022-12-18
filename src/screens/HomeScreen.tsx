import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../App";

import CustomListItem from "../components/CustomListItem";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Cignal",
      headerStyle: {backgroundColor: "#fff"},
      headerTitleStyle: {color: "black"},
      headerTintColor: "black"
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem id="" chatName="" enterChat="" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
