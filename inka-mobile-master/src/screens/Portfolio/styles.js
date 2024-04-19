/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions } from "react-native";
import { card } from "../../AppStyles";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  chartContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    //marginTop: 80,
    marginBottom: 20,
    marginTop: 15,
    width: SCREEN_WIDTH - 20,
  },
  container: {
    backgroundColor: "#f4f6f9",
    flex: 1,
  },

  facilitieContainer: card.facilitieContainer,
  itemContainer: card.itemContainer,
  storyDate: { color: "silver", fontSize: 12, fontWeight: "bold", margin: 5 },
  storyTitle: { color: "#070f12", fontSize: 16, fontWeight: "bold", margin: 5 },
  title: {
    color: "#070f12",
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  viewContainer: {
    alignSelf: "center",
    padding: 20,
    paddingLeft: 10,
    width: "100%",
  },
  viewTxt: card.viewTxt,
});

export default styles;
