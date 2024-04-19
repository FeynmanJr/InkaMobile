/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  itemContainer: {
    borderBottomColor: "rgba(214, 214, 214, 0.4)",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 13,
    paddingTop: 13,
    width: "100%",
    //borderBottomColor: 'silver',
  },
  itemIcon: {
    alignSelf: "center",
    height: 25,
    marginRight: 10,
    width: 25,
  },
  itemTitle: {
    alignSelf: "center",
    color: "#070f12",
    fontSize: 17,
  },
  rightArrow: {
    alignSelf: "center",
    height: 15,
    width: 15,
  },
  rowContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
});

export default styles;
