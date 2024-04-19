/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  notificationContainer: {
    borderBottomWidth: 1,
    borderColor: "#e1ddf5",
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  notificationIcon: {
    alignSelf: "center",
    height: 25,
    marginLeft: 10,
    marginRight: 15,
    tintColor: "#9B9B9B",
    width: 25,
  },
  notificationText: {
    color: "#2d3142",
    fontSize: 14,
    fontWeight: "400",
    margin: 5,
  },
  notificationTime: {
    color: "#9B9B9B",
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "400",
    margin: 5,
  },
  notificationTitle: {
    color: "#9B9B9B",
    fontSize: 11,
    fontWeight: "600",
    margin: 5,
  },
  rowContainer: {
    flexDirection: "row",
    width: "80%",
  },
  unreadMark: {
    backgroundColor: "#f4771f",
    borderRadius: 10,
    height: 10,
    position: "absolute",
    right: 15,
    top: 15,
    width: 10,
    zIndex: 1,
  },
});

export default styles;
