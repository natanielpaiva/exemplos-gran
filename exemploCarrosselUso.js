import React from "react";
import { Image, StyleSheet } from "react-native";
import Carousel from "./Carousel";

export default function App() {
  return (
    <Carousel>
      <Image source={{ uri: "https://via.placeholder.com/300" }} style={styles.image} />
      <Image source={{ uri: "https://via.placeholder.com/300" }} style={styles.image} />
      <Image source={{ uri: "https://via.placeholder.com/300" }} style={styles.image} />
    </Carousel>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: 200,
  },
});