import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import styles from "./styles";
import { storiesArray } from "../../data/dataArrays";
import StoryView from "../../components/StoryView/StoryView";

const NewsScreen = ({ navigation }) => {
  const renderStory = ({ item }) => (
    <StoryView
      item={item}
      onPress={() => navigation.navigate("NewsWebView", { item })}
    />
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={storiesArray}
          renderItem={renderStory}
          keyExtractor={(item) => `${item.id}`}
          listKey="0"
        />
      </View>
    </View>
  );
};

export default NewsScreen;
