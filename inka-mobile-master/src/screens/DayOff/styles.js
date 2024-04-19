/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions } from "react-native";
import { expenses } from "../../AppStyles";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
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

  facilitieContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
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
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10, 
  },
  addButton: {
    color: "#070f12",
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
});

export default styles;
