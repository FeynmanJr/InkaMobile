/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";
import { chart, crypto } from "../../AppStyles";

const styles = StyleSheet.create({
  btnContainer: crypto.btnContainer,
  btnTxt: crypto.btnTxt,
  btnsContainer: crypto.btnsContainer,
  chartContainer: {
    ...chart.chartContainer,
    //marginTop: 80,
    marginBottom: 20,
    marginTop: 15,
  },
  container: {
    backgroundColor: "#f4f6f9",
    flex: 1,
  },
  facilitieContainer: crypto.facilitieContainer,
  infoContainer: crypto.infoContainer,
  infoTitle: crypto.infoTitle,
  itemContainer: crypto.itemContainer,
  leftContainer: crypto.leftContainer,
  mainTxt: crypto.mainTxt,
  rightContainer: crypto.rightContainer,
  row: crypto.row,
  rowBorderContainer: crypto.rowBorderContainer,
  rowContainer: crypto.rowContainer,
  secTxt: crypto.secTxt,
  storyDate: crypto.storyDate,
  storyTitle: crypto.storyTitle,
  title: crypto.title,
  viewTxt: crypto.viewTxt,
  wishListIcon: {
    alignSelf: "center",
    height: 25,
    marginRight: 10,
    width: 25,
  },
});

export default styles;
