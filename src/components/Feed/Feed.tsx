import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const Feed = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={styles.mainView}>
      <Text style={styles.Heading}>Feed</Text>
      <TextInput
        style={styles.TextInput}
        value={searchInput}
        onChangeText={(val) => setSearchInput(val)}
        placeholder={"Enter search"}
        placeholderTextColor={"#000"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  Heading: {
    fontSize: 32,
    marginTop: 60,
    marginLeft: 15,
    fontWeight: "bold",
  },
  TextInput: {
    fontSize: 14,
  },
});

export default Feed;
