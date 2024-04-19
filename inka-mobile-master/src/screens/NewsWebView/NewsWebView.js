import React from "react";
import { WebView } from "react-native-webview";

const NewsWebView = ({ route }) => {
  const { item } = route.params;

  return <WebView source={{ uri: item.url }} />;
};

export default NewsWebView;
