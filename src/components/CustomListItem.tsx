import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";

interface IProps {
  id: string;
  chatName: string;
  chatDesc: string;
  chatImageUrl: string;
  enterChat: (id: string, chatName: string) => void;
}

const CustomListItem = ({
  id,
  chatName,
  chatDesc,
  chatImageUrl,
  enterChat,
}: IProps) => {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
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
          {chatDesc}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
