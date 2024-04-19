/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions } from "react-native";
import { buyStyle, expenses } from "../../AppStyles";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    color: "#070f12",
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  listContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    width: "100%",
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

  chartContainer: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 15,
    padding: 15,
    width: "100%",
  },

  wishListIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    alignSelf: "center",
  },
  // itemContainer: expenses.itemContainer,
  // itemIcon: expenses.itemIcon,
  itemMoney: expenses.itemMoney,
  itemText: expenses.itemText,
  // itemTitle: expenses.itemTitle,
  itemTxtContainer: expenses.itemTxtContainer,
  mainContainer: expenses.mainContainer,
  // rightArrow: expenses.rightArrow,
  // rowContainer: expenses.rowContainer,

  viewTxt: {
    color: "#7f7d80",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
  },
  infoTitle: {
    color: "#070f12",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoText: {
    color: "#7f7d80",
    fontSize: 15,
    fontWeight: "bold",
  },
  blueTxt: buyStyle.blueTxt,
  boldTxt: buyStyle.boldTxt,
  btnContainer: {
    alignSelf: "center",
    backgroundColor: "#2d65c9",
    borderColor: "#2d65c9",
    borderRadius: 7,
    borderWidth: 2,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    width: "80%",
  },
  btnTxt: buyStyle.btnTxt,
  // container: buyStyle.container,
  greyTxt: buyStyle.greyTxt,
  inputTxt: buyStyle.inputTxt,
  // mainContainer: buyStyle.mainContainer,
  // rowContainer: buyStyle.rowContainer,
});

export default styles;
