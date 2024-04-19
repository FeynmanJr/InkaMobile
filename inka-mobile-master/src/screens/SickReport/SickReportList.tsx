import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { useTranslation } from "react-i18next";
import useAuth from "../../hooks/useAuth";
import { dispatch, useSelector } from "../../store";
import { Pagination } from "../../types/pagination";
import { buildQueryString } from "../../helpers/request";
import { getTimeOffRequestByUserId } from "../../store/slices/employeeTimeOff";
import { TimeOffRequest } from "../../types/employeeTimeOffRequest";
import {
  getEmployeeReportById,
  getEmployeeReportByUserId,
} from "../../store/slices/employeeReport";
import { Employee } from "types/employee";
import { EmployeeReport } from "../../types/employeeReport";
import { Button } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { PaginationList } from "types/paginationList";

interface Props {
  navigation: any;
  employeeReports: PaginationList<EmployeeReport>;
  deleteEmployeeReportHandler: (id: string) => void;
  updateEmployeeReportHandler: (employeeReport: EmployeeReport) => void;
  fetchData: (pagination?: Pagination) => void;
}

const SickReportList = ({
  navigation,
  employeeReports,
  deleteEmployeeReportHandler,
  updateEmployeeReportHandler,
  fetchData,
}: Props) => {
  const { authUser } = useAuth();
  const { t } = useTranslation();

  const renderTimeOffs = ({ item }: { item: EmployeeReport }) => (
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
        // ListHeaderComponent={
        //   <Text style={styles.title}>{t("CELEBRATION")}</Text>
        // }
        showsVerticalScrollIndicator={false}
        data={employeeReports.items}
        renderItem={renderTimeOffs}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export default SickReportList;
