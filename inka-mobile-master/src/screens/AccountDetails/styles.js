/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f6f9",
    flex: 1,
  },
  inputTxt: {
    alignSelf: "flex-end",
    color: "black",
    fontSize: 17,
    marginLeft: 10,
    marginRight: 10,
  },
  mainContainer: {
    marginBottom: 20,
  },
  settingContainer: {
    backgroundColor: "white",
    borderBottomColor: "rgba(214, 214, 214, 0.4)",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    width: "100%",
  },
  settingTxt: {
    alignSelf: "center",
    color: "black",
    fontSize: 17,
  },
  settingTxt2: {
    color: "silver",
    fontSize: 17,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: "#070f12",
    fontSize: 13,
    margin: 10,
  },
});

export default styles;
