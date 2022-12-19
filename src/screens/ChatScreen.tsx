import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Avatar } from "@rneui/themed";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../../App";

type ChatScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Chat"
>;

type Props = {
  navigation: ChatScreenNavigationProp;
  route: { params: { id: string; chatName: string } };
};

const ChatScreen = ({ navigation, route }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={styles.headerCenter}>
          <Avatar
            rounded
            source={{
              uri: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
            }}
          />
          <Text style={styles.headerCenterText}>{route.params.chatName}</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerLeftArrow}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  headerCenter: { flexDirection: "row", alignItems: "center" },
  headerCenterText: {
    color: "white",
    marginLeft: 10,
    fontWeight: "700",
  },
  headerLeftArrow: {
    marginLeft: 10,
  },
});
