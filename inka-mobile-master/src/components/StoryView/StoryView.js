import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

const StoryView = ({ item, onPress }) => {
  return (
    <TouchableHighlight
      onPress={() => onPress()}
      underlayColor="rgba(73,182,77,1,0.9)"
    >
      <View style={styles.itemContainer}>
        <Text style={styles.storyTitle}>{item.title}</Text>
        <Text style={styles.storyDate}>{item.date}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default StoryView;
