import React from "react";
import { View, Text, Switch, ScrollView, FlatList } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import { connect } from "react-redux";

const SettingsScreen = (props) => {
  const renderSetting = ({ item }) => (
    <View style={styles.settingContainer}>
      <Text style={styles.settingTxt}>{item.title}</Text>
      <Switch onValueChange={() => props.update(item.id)} value={item.switch} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>General Settings</Text>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={props.settings.slice(0, 5)}
            renderItem={renderSetting}
            extraData={props.settings}
            keyExtractor={(item) => `${item.id}`}
            listKey="0"
          />
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Stocks Notifications</Text>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={props.settings.slice(5, 7)}
            renderItem={renderSetting}
            extraData={props.settings}
            keyExtractor={(item) => `${item.id}`}
            listKey="1"
          />
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Maximum Distance</Text>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={props.settings.slice(7, 9)}
            renderItem={renderSetting}
            extraData={props.settings}
            keyExtractor={(item) => `${item.id}`}
            listKey="2"
          />
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (id) => dispatch({ type: "UPDATE_SETTINGS", id }),
  };
};

const mapStateToProps = (state) => {
  return {
    settings: state.setting.settings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
