import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from "firebase";

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
  const [imageUrl, setImageUrl] = useState("")

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
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        chatName: input,
        chatImageUrl: imageUrl
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
        autoCapitalize="none"
        leftIcon={<Icon name="wechat" size={24} color="#000" />}
      />
      <Input
          placeholder="Chat image URL (optional)"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          autoCapitalize="none"
          leftIcon={<Icon name="image" size={24} color="#000" />}
          onSubmitEditing={createChat}
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
