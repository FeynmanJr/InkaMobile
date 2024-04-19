import { buildQueryString } from "../../helpers/request";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { dispatch, useSelector } from "../../store";
import {
  cleanTimeOffRequestState,
  getTimeOffRequestByUserId,
  deleteTimeOffRequest,
} from "../../store/slices/employeeTimeOff";
import { Pagination } from "../../types/pagination";
import { TimeOffRequest } from "types/employeeTimeOffRequest";
import TimeOffList from "./TimeOffList";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { EmployeeTimeOffStateProps } from "../../types/employeeTimeOffRequest"


const TimeOff = ({ navigation }) => {
  const { authUser } = useAuth();
  const {
    timeOffs,
    deletedTimeOffRequest,
    addedTimeOffRequest,
    updatedTimeOffRequest,
  } = useSelector((state) => state.employeeTimeOff);

  const [updateEmployeeReport, setUpdateEmployeeReport] =
    useState<TimeOffRequest | null>(null);

  const fetchData = (pagination?: Pagination) => {
    const queryString = pagination ? buildQueryString(pagination) : "";

    dispatch(getTimeOffRequestByUserId(authUser?.userId!, queryString));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!!deletedTimeOffRequest) {
      fetchData();
      // Silme Alert
    }
  }, [deletedTimeOffRequest]);

  useEffect(() => {
    if (!!addedTimeOffRequest) {
      fetchData();
      // Ekleme Alert
    }
  }, [addedTimeOffRequest]);

  useEffect(() => {
    if (!!updatedTimeOffRequest) {
      fetchData();
      // Güncelleme Alert
    }
  }, [updatedTimeOffRequest]);

  useEffect(() => {
    return () => {
      dispatch(cleanTimeOffRequestState());
    };
  }, []);

  const deleteTimeOffRequestHandler = (id: string) => {
    dispatch(deleteTimeOffRequest(id));
  };

  const updatedTimeOffRequestHandler = (
    timeOff: TimeOffRequest | null
  ) => {
    if (timeOff) {
      setUpdateEmployeeReport(timeOff);
    }
  };

  return (
    <>
      <View style={styles.timeOffView}>
        <Text style={styles.timeoff}>İzinlerim</Text>
        <TouchableOpacity onPress={() => navigation.navigate("TimeOffAdd")}>
          <Text style={styles.timeOffAdded}>İzin Ekle</Text>
        </TouchableOpacity>
      </View>
      <TimeOffList
        navigation={navigation}
        timeOffs={timeOffs}
        deleteTimeOffRequestHandler={deleteTimeOffRequestHandler}
        updatedTimeOffRequestHandler={updatedTimeOffRequestHandler}
        fetchData={fetchData}
      />
    </>
  );
};

export default TimeOff;
