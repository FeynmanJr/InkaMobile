/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";
import { crypto } from "../../AppStyles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  itemContainer: crypto.itemContainer,
  storyDate: crypto.storyDate,
  storyTitle: crypto.storyTitle,
});

export default styles;
