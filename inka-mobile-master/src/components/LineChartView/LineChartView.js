/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
import LineChart from "react-native-responsive-linechart";

const TABLE_ITEM_OFFSET = 10;
const TABLE_ITEM_MARGIN = TABLE_ITEM_OFFSET * 2;

const chartStyles = StyleSheet.create({
  activeChartTxt: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  chartTxt: {
    color: "black",
    fontSize: 14,
  },
});

const LineChartView = (props) => {
  const [activeChart, setActiveChart] = useState(0);

  const renderTable = (item, index) => (
    <TouchableHighlight
      onPress={() => setActiveChart(index)}
      underlayColor="rgba(73,182,77,1,0.9)"
      key={index}
      style={{
        justifyContent: "center",
        backgroundColor: activeChart === index ? "#617180" : "white",
        borderRadius: 5,
        flex: 1,
        alignItems: "center",
        margin: TABLE_ITEM_OFFSET,
        width:
          (SCREEN_WIDTH - TABLE_ITEM_MARGIN) / props.lineChartTables.length -
          TABLE_ITEM_OFFSET,
        height:
          (SCREEN_WIDTH - TABLE_ITEM_MARGIN) / props.lineChartTables.length -
          TABLE_ITEM_OFFSET,
        maxWidth: 50,
        maxHeight: 50,
      }}
    >
      <Text
        style={
          activeChart === index
            ? chartStyles.activeChartTxt
            : chartStyles.chartTxt
        }
      >
        {item}
      </Text>
    </TouchableHighlight>
  );

  return (
    <View>
      <LineChart
        style={{
          width: SCREEN_WIDTH - 20,
          height: 220,
          alignSelf: "center",
          justifyContent: "center",
          marginTop: 0,
          marginBottom: 0,
          margin: 20,
        }}
        config={props.lineChartConfig}
        data={props.lineChartData[activeChart]}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        {props.lineChartTables.map((data, index) => renderTable(data, index))}
      </View>
    </View>
  );
};

export default LineChartView;
