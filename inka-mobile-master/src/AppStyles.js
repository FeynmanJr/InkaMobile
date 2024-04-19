/* eslint-disable comma-dangle */
import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

export const landing = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 50,
  },
  input: {
    color: "black",
    fontSize: 17,
    marginLeft: 10,
    textAlign: "center",
  },
  loginContainer: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#2c65c9",
    borderColor: "#2c65c9",
    borderRadius: 60,
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    marginTop: 20,
    padding: 12,
    width: SCREEN_WIDTH - 100,
  },
  title: {
    color: "#2d65c9",
    fontSize: 28,
    fontWeight: "bold",
    margin: 30,
    textAlign: "left",
  },
  whiteBoldTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export const chart = StyleSheet.create({
  activeChartTxt: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  chartContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    width: SCREEN_WIDTH - 20,
  },
  chartTxt: {
    color: "black",
    fontSize: 14,
  },
  chartTxtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
//portfolio card
//card with image left,double text middle, and procent right
export const card = StyleSheet.create({
  facilitieContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    width: "96%",
  },
  greenItemProcent: {
    color: "#34936A",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  greenProcentContainer: {
    alignSelf: "center",
    backgroundColor: "#EAF4F0",
    borderColor: "#EAF4F0",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    padding: 10,
    width: 80,
  },
  itemContainer: {
    alignSelf: "center",
    borderBottomColor: "rgba(214, 214, 214, 0.4)",
    borderBottomWidth: 1,
    padding: 20,
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
    color: "#7f7d80",
    fontSize: 12,
  },
  itemTitle: {
    color: "#070f12",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemTxtContainer: {
    lineHeight: 34,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  redItemProcent: {
    color: "#CF696C",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  redProcentContainer: {
    alignSelf: "center",
    backgroundColor: "#FAEFF0",
    borderColor: "#FAEFF0",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    padding: 10,
    width: 80,
  },
  rowContainer: {
    alignSelf: "center",
    flexDirection: "row",
    width: "65%",
  },
  viewTxt: {
    color: "#7f7d80",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
  },
});
//home card
//card with img on left,double text mid,and money text right
export const card2 = StyleSheet.create({
  itemContainer: {
    alignSelf: "center",
    borderTopColor: "rgba(214, 214, 214, 0.4)",
    borderTopWidth: Platform.OS === "ios" ? 0.5 : 1,
    padding: 20,
    paddingLeft: 10,
    width: "100%",
    //borderTopColor: '#eff2f6',
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
    alignSelf: "center",
    color: "#070f12",
    fontSize: 18,
    lineHeight: 30,
  },
  itemText: {
    color: "#070f12",
    fontSize: 16,
  },
  itemTitle: {
    color: "#7f7d80",
    fontSize: 12,
  },
  itemTxtContainer: {
    lineHeight: 34,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowContainer: {
    alignSelf: "center",
    flexDirection: "row",
    width: "65%",
  },
});
//card wiht img left,double text mid,and left arrow icon right
export const expenses = StyleSheet.create({
  itemContainer: {
    alignSelf: "center",
    borderTopColor: "rgba(214, 214, 214, 0.4)",
    //borderTopColor: '#7f7d80',
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
});
//style for buy and sell Screens
export const buyStyle = StyleSheet.create({
  blueTxt: {
    color: "#4072CE",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  boldTxt: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnContainer: {
    alignSelf: "center",
    backgroundColor: "#2d65c9",
    borderColor: "#2d65c9",
    borderRadius: 7,
    borderWidth: 2,
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 30,
    padding: 10,
    width: "80%",
  },
  btnTxt: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  greyTxt: {
    color: "#9b9b9b",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  inputTxt: {
    color: "#4072CE",
    fontSize: 16,
    textAlign: "right",
  },
  mainContainer: {
    marginTop: 40,
    paddingTop: 0,
    padding: 10,
  },
  rowContainer: {
    alignItems: "center",
    borderBottomColor: "rgba(214, 214, 214, 0.4)",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20,
  },
});

//style for Crypto and Stock screens
export const crypto = StyleSheet.create({
  btnContainer: {
    alignSelf: "center",
    backgroundColor: "#2d65c9",
    borderRadius: 5,
    justifyContent: "center",
    padding: 10,
    width: "48%",
  },
  btnTxt: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  btnsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
  infoContainer: {
    backgroundColor: "white",
    marginBottom: 20,
    padding: 10,
    paddingTop: 0,
    width: "100%",
  },
  infoTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    margin: 20,
    marginLeft: 10,
  },
  itemContainer: {
    alignSelf: "center",
    //borderTopColor: '#7f7d80',
    borderTopColor: "rgba(214, 214, 214, 0.4)",
    borderTopWidth: Platform.OS === "ios" ? 0.5 : 1,
    padding: 20,
    paddingLeft: 10,
    width: "100%",
  },
  leftContainer: {
    alignContent: "flex-start",
    width: "45%",
  },
  mainTxt: {
    color: "#768695",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    textTransform: "uppercase",
  },
  rightContainer: {
    justifyContent: "flex-start",
    width: "45%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
  },
  rowBorderContainer: {
    borderBottomColor: "#E5E3E6",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginBottom: 5,
    marginTop: 5,
    paddingBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  secTxt: {
    color: "black",
    fontSize: 14,
    textAlign: "left",
  },
  storyDate: {
    color: "#768695",
    fontSize: 12,
    margin: 5,
  },
  storyTitle: {
    color: "#070f12",
    fontSize: 16,
    fontWeight: "bold",
    margin: 5,
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

export const transactions = StyleSheet.create({
  itemContainer: {
    alignSelf: "center",
    // /borderTopColor: '#7f7d80',
    borderTopColor: "rgba(214, 214, 214, 0.4)",
    borderTopWidth: Platform.OS === "ios" ? 0.5 : 1,
    padding: 20,
    paddingLeft: 10,
    width: "100%",
  },
  itemDate: {
    alignSelf: "center",
    color: "#9B9B9B",
    fontSize: 12,
    lineHeight: 30,
  },
  itemIcon: {
    alignSelf: "center",
    height: 20,
    width: 20,
  },
  itemIconContainer: {
    alignSelf: "center",
    backgroundColor: "#979797",
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
  },
  itemMoney: {
    alignSelf: "center",
    color: "#070f12",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 30,
  },
  itemTitle: {
    color: "#070f12",
    fontSize: 12,
    textAlign: "left",
  },
  itemTitleContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  itemTxtContainer: {
    lineHeight: 34,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowContainer: {
    alignSelf: "center",
    flexDirection: "row",
    width: "55%",
  },
  txtContainer: {
    alignSelf: "flex-end",
    width: "20%",
  },
});
