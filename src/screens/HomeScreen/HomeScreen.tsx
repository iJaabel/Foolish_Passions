import { View, Text, StyleSheet } from "react-native";
import  Feed from "../../components/Feed";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Feed /> */}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
});

export default HomeScreen;
