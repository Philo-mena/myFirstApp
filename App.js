import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import picture from "./assets/picture.jpg";

function App() {
  return (
    <View style={styles.container}>
      <Image source={picture} style={styles.image} />
      <View style={styles.secondContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={[styles.info, styles.label]}>Cassanda Williams</Text>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.info, styles.label]}>cassy@gmail.com</Text>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.label}>Gender</Text>
        <Text style={[styles.info, styles.label]}>Female</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },

  image: {
    marginTop: 100,
    width: 150,
    height: 150,
    marginBottom: 30,
    alignSelf: "center",
    borderRadius: 75,
  },

  secondContainer: {
    flexDirection: "row",
    marginVertical: 3,
  },

  label: {
    borderColor: "black",
    borderWidth: "1",
    fontSize: 20,
    flex: 2.5,
    paddingHorizontal: 5,
  },

  info: {
    flex: 7.5,
  },
});

export default App;
