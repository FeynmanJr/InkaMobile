/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";
import { chart } from "../../AppStyles";

const styles = StyleSheet.create({
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
  facilitieContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    marginBottom: 20,
    marginTop: 20,
    width: "100%",
  },
});

export default styles;
