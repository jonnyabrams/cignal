import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, Button, Input } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { RootStackParamList } from "../../App";

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const register = () => {

  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Cignal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full name"
          autoFocus
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Confirm password"
          value={confirmPassword}
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Input
          placeholder="Profile picture URL (optional)"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        style={styles.button}
        raised
        onPress={register}
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {},
  button: {}
});
