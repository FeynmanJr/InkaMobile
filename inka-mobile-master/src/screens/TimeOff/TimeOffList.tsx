import React, { useEffect, useState } from "react";
import { View, Text, FlatList} from "react-native";
import styles from "./styles";
import { useTranslation } from "react-i18next";
import useAuth from "../../hooks/useAuth";
import { dispatch, useSelector } from "../../store";
import { Pagination } from "../../types/pagination";
import { buildQueryString } from "../../helpers/request";
import { getTimeOffRequestByUserId } from "../../store/slices/employeeTimeOff";
import { TimeOffRequest } from "../../types/employeeTimeOffRequest";
import { Button } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { PaginationList } from "types/paginationList";

interface Props {
  navigation: any;
  timeOffs: PaginationList<TimeOffRequest>;
  deleteTimeOffRequestHandler: (id: string) => void;
  updatedTimeOffRequestHandler: (timeoff: TimeOffRequest) => void;
  fetchData: (pagination?: Pagination) => void;
}

const TimeOffList = ({
  navigation,
  timeOffs,
  deleteTimeOffRequestHandler,
  updatedTimeOffRequestHandler,
  fetchData,
}: Props) => {
  const { authUser } = useAuth();
  const { t } = useTranslation();

  const renderTimeOffs = ({ item }: { item: TimeOffRequest }) => (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View>
          <Text>{item.startDate}</Text>
          <Text>{item.endDate}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={timeOffs?.items || []}
        renderItem={renderTimeOffs}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export default TimeOffList;