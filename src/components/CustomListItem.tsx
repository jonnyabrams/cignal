import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

interface IProps {
  id: string;
  chatName: string;
  chatImageUrl: string;
  enterChat: (id: string, chatName: string, chatImageUrl: string) => void;
}

const CustomListItem = ({
  id,
  chatName,
  chatImageUrl,
  enterChat,
}: IProps) => {
  const [chatMessages, setChatMessages] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );
    return unsubscribe;
  }, []);

  return (
    <ListItem
      onPress={() => enterChat(id, chatName, chatImageUrl)}
      key={id}
      bottomDivider
    >
      <Avatar
        rounded
        source={{
          uri:
            chatImageUrl ||
            "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages.length > 0 && `${chatMessages?.[0]?.displayName}: ${chatMessages?.[0]?.message}`}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
