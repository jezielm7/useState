import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, StatusBar } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#282a40"/>
      <TextInput
        style={styles.input}
        placeholder="Search 🔎"
        onChangeText={setText}
      />

      <Text style={styles.text}>
        Searching for {text === "" ? `" "` : `"${text}"`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282a40"
  },
  input: {
    height: 50,
    margin: 10,
    fontSize: 20,
    color: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    borderColor: "#304050",
  },
  text: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center"
  }
});