import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import Icon from 'react-native-vector-icons/FontAwesome'

import { RootStackParamList } from "../../App";

type AddChatScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
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

  const createChat = () => {
    
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" size={24} color="#000" />
        }
      />
      <Button onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {},
});
