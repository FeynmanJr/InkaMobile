/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "rgba(214, 214, 214, 0.4)",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 50,
    marginTop: 50,
    padding: 10,
    width: SCREEN_WIDTH - 40,
  },
  btnTxt: {
    color: "#070f12",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  infoContainer: {
    marginBottom: 40,
    //marginTop: 80
    marginTop: 30,
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
  userImg: {
    alignSelf: "center",
    borderRadius: 100,
    height: 100,
    marginBottom: 20,
    width: 100,
  },
  userName: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;
