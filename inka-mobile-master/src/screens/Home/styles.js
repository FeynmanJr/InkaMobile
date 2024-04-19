/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions, Platform } from "react-native";
import { expenses } from "../../AppStyles";
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
  facilitieContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    width: "100%",
  },
  itemContainer: {
    alignSelf: "center",
    borderTopColor: "rgba(214, 214, 214, 0.4)",
    borderTopWidth: Platform.OS === "ios" ? 0.5 : 1,
    padding: 10,
    paddingLeft: 10,
    width: "100%",
  },
  timeOffDailyContainer: {
    flex: 1,
    flexDirection: "column",
    borderTopColor: "rgba(214, 214, 214, 0.4)",
    borderTopWidth: Platform.OS === "ios" ? 0.5 : 1,
    padding: 10,
    paddingLeft: 10,
    width: "100%",
  },
  itemIcon: {
    alignSelf: "center",
    borderRadius: 20,
    height: 30,
    marginLeft: 10,
    marginRight: 20,
    width: 30,
    //lineHeight: 30
  },
  itemMoney: {
    color: "#070f12",
    fontSize: 18,
    lineHeight: 30,
  },
  itemText: {
    color: "#070f12",
    fontSize: 16,
    marginTop: 5,
  },
  itemTitle: {
    color: "#7F7D80",
    fontSize: 12,
    fontWeight: "600",
  },
  itemTxtContainer: {
    // lineHeight: 34,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  dailyContainer: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    color: "#070f12",
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  viewTxt: {
    color: "#7f7d80",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default styles;
