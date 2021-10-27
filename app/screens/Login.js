import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate("Home");
    } else {
      setError("Fill in credentials");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#32e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#fff", fontSize: 30, marginBottom: 50 }}>
          Welcome To Our Shop
        </Text>
      </View>
      {error && (
        <View>
          <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
        </View>
      )}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          name="username"
          onChange={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          name="password"
          secureTextEntry
          onChange={(text) => setPassword(text)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    width: 300,
    marginHorizontal: 30,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#22BB33",
    padding: 10,
    width: 300,
    marginHorizontal: 30,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
