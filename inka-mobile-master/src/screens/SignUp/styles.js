/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions } from "react-native";
import { landing } from "../../AppStyles";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: landing.container,
  input: landing.input,
  inputContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "#070f12",
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: SCREEN_WIDTH - 100,
  },
  logContainer: { marginBottom: 40 },
  signContainer: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#3b5998",
    borderColor: "#3b5998",
    borderRadius: 60,
    borderWidth: 1,
    height: 50,
    marginBottom: 40,
    marginTop: 40,
    padding: 12,
    width: SCREEN_WIDTH - 160,
  },
  signTxt: landing.whiteBoldTxt,
  title: landing.title,
});

export default styles;
