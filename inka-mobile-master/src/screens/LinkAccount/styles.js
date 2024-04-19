/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions } from "react-native";
// screen sizing
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const ICONNumColums = 3;
// item size
const ICON_ITEM_OFFSET = 20;
const ICON_ITEM_MARGIN = ICON_ITEM_OFFSET * 2;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    backgroundColor: "#ffff",
    borderColor: "#ffff",
    flex: 1,
    height: 30,
    justifyContent: "center",
    margin: ICON_ITEM_OFFSET,
    marginTop: 20,
    width: (SCREEN_WIDTH - ICON_ITEM_OFFSET) / ICONNumColums - ICON_ITEM_MARGIN,
  },
  cardImg: {
    borderRadius:
      ((SCREEN_WIDTH - ICON_ITEM_OFFSET) / ICONNumColums -
        ICON_ITEM_MARGIN -
        30) /
      2,
    height:
      (SCREEN_WIDTH - ICON_ITEM_OFFSET) / ICONNumColums - ICON_ITEM_MARGIN - 30,
    width:
      (SCREEN_WIDTH - ICON_ITEM_OFFSET) / ICONNumColums - ICON_ITEM_MARGIN - 30,
  },
  cardTitle: {
    color: "#768695",
    fontSize: 12,
    marginBottom: 30,
    textAlign: "center",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  selectedCardTitle: {
    color: "#4a7bd0",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
});

export default styles;
