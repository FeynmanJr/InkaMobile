import React from "react";
import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  Image,
  FlatList,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import BackButton from "../../components/BackButton/BackButton";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";

const NotificationsScreen = ({ notifications, update }) => {
  const renderUnreadMark = (read) => {
    if (!read) {
      return <View style={styles.unreadMark} />;
    }
  };

  const renderNotification = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => update(item.id)}
    >
      <View style={styles.notificationContainer}>
        <View style={styles.rowContainer}>
          <Image style={styles.notificationIcon} source={{ uri: item.icon }} />
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationText}>{item.text}</Text>
            <Text style={styles.notificationTime}>{item.date}</Text>
          </View>
        </View>
        {renderUnreadMark(item.read)}
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={renderNotification}
          extraData={notifications}
          keyExtractor={(item) => `${item.id}`}
          listKey="0"
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (id) => dispatch({ type: "UPDATE_NOTIFICATIONS", id }),
  };
};

const mapStateToProps = (state) => {
  return {
    notifications: state.notification.notifications,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsScreen);
