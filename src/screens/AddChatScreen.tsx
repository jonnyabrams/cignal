import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";

import { RootStackParamList } from "../../App";
import { db } from "../../firebase";

type AddChatScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddChat"
>;

type Props = {
  navigation: AddChatScreenNavigationProp;
};

const AddChatScreen = ({ navigation }: Props) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={<Icon name="wechat" size={24} color="#000" />}
      />
      <Button onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%"
  },
});
