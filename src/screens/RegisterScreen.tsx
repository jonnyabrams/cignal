import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, Button, Input } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect, useState } from "react";

import { RootStackParamList } from "../../App";
import { auth } from "../../firebase";

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
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const register = async () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser!.user!.updateProfile({
          displayName: name,
          photoURL: imageUrl,
        });
      })
      .catch((error) => alert(error.message));
  };

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
          autoCapitalize="none"
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Confirm password"
          value={confirmPassword}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Input
          placeholder="Profile picture URL (optional)"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          autoCapitalize="none"
          onSubmitEditing={register}
        />
      </View>

      <Button
        style={styles.button}
        raised
        onPress={register}
        title="Register"
      />
      <View style={{ height: 200 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
