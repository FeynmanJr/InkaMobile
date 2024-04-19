/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: "center",
    backgroundColor: "#4a7bd0",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 10,
    padding: 15,
    width: SCREEN_WIDTH - 30,
  },
  btnTxt: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  container: {
    backgroundColor: "#f4f6f9",
    flex: 1,
  },
  facilitieContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    //marginTop: 60,
    marginBottom: 20,
    width: "100%",
  },
});

export default styles;
