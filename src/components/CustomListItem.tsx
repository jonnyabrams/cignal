import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";

interface IProps {
  id: string;
  chatName: string;
  enterChat: string;
}

const CustomListItem = ({ id, chatName, enterChat}: IProps) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri:
            // chatMessages?.[0]?.photoURL ||
            "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Everton Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Chat about the mighty Blues. Up the Toffees! est. 1978
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
