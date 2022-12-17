import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";

const CustomListItem = () => {
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
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
