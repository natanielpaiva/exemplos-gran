import React, { useState } from "react";
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event) => {
    const slideWidth = Dimensions.get("window").width;
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / slideWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        {children}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {React.Children.map(children, (_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: "100%",
    height: 200,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: "#000",
  },
});

export default Carousel;