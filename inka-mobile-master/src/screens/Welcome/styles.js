/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions } from "react-native";
import { landing } from "../../AppStyles";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: landing.container,
  description: {
    color: "#070f12",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  logContainer: {
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 60,
    marginTop: 20,
  },
  logTxt: landing.whiteBoldTxt,
  loginContainer: landing.loginContainer,
  logo: {
    alignSelf: "center",
    height: 150,
    width: 200,
  },
  signTxt: {
    color: "#070f12",
    fontSize: 20,
    fontWeight: "bold",
  },
  signupContainer: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "#070f12",
    borderRadius: 60,
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    marginTop: 20,
    padding: 12,
    width: SCREEN_WIDTH - 100,
  },
  title: {
    color: "#2c65c9",
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  titleContainer: {
    alignSelf: "center",
    marginBottom: 25,
    marginTop: 25,
  },
});

export default styles;
