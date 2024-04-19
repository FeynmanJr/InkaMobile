/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";
import { chart, card } from "../../AppStyles";

const styles = StyleSheet.create({
  chartContainer: {
    ...chart.chartContainer,
    //marginTop: 80,
    marginBottom: 40,
    marginTop: 15,
    paddingBottom: 40,
  },
  container: {
    backgroundColor: "#f4f6f9",
    flex: 1,
  },
  facilitieContainer: card.facilitieContainer,
  greenItemProcent: card.greenItemProcent,
  greenProcentContainer: card.greenProcentContainer,
  itemContainer: card.itemContainer,
  itemIcon: card.itemIcon,
  itemMoney: card.itemMoney,
  itemText: card.itemText,
  itemTitle: card.itemTitle,
  itemTxtContainer: card.itemTxtContainer,
  mainContainer: card.mainContainer,
  redItemProcent: card.redItemProcent,
  redProcentContainer: card.redProcentContainer,
  rowContainer: card.rowContainer,
  viewTxt: card.viewTxt,
});

export default styles;
