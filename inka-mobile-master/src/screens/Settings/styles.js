/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f6f9",
    flex: 1,
  },
  mainContainer: {
    marginBottom: 40,
  },
  settingContainer: {
    backgroundColor: "white",
    borderBottomColor: "rgba(214, 214, 214, 0.4)",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    //borderBottomColor: 'silver',
  },
  settingTxt: {
    color: "black",
    fontSize: 17,
  },
  settingTxt2: {
    color: "silver",
    fontSize: 17,
  },
  title: {
    color: "#070f12",
    fontSize: 13,
    // fontWeight: 'bold',
    margin: 10,
  },
});

export default styles;
