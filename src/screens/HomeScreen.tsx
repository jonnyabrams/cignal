import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import CustomListItem from "../components/CustomListItem";

const HomeScreen = () => {
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
