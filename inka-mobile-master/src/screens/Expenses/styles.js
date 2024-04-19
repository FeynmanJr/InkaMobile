/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions } from "react-native";
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
  itemContainer: expenses.itemContainer,
  itemIcon: expenses.itemIcon,
  itemMoney: expenses.itemMoney,
  itemText: expenses.itemText,
  itemTitle: expenses.itemTitle,
  itemTxtContainer: expenses.itemTxtContainer,
  mainContainer: expenses.mainContainer,
  rightArrow: expenses.rightArrow,
  rowContainer: expenses.rowContainer,
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
