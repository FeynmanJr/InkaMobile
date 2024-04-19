/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";
import { expenses } from "../../AppStyles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  facilitieContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    //marginTop: 70,
    marginBottom: 20,
    marginTop: 10,
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
});

export default styles;
