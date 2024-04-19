import { buildQueryString } from "../../helpers/request";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { dispatch, useSelector } from "../../store";
import {
  cleanEmployeeReportState,
  deleteEmployeeReport,
  getEmployeeReportByUserId,
} from "../../store/slices/employeeReport";
import { Pagination } from "../../types/pagination";
import { EmployeeReport } from "types/employeeReport";
import SickReportList from "./SickReportList";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const SickReport = ({ navigation }) => {
  const { authUser } = useAuth();
  const {
    employeeReports,
    deletedEmployeeReport,
    addedEmployeeReport,
    updatedEmployeeReport,
  } = useSelector((state) => state.employeeReport);

  const [updateEmployeeReport, setUpdateEmployeeReport] =
    useState<EmployeeReport | null>(null);

  const fetchData = (pagination?: Pagination) => {
    const queryString = pagination ? buildQueryString(pagination) : "";

    dispatch(getEmployeeReportByUserId(authUser?.userId!, queryString));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!!deletedEmployeeReport) {
      fetchData();
      // Silme Alert
    }
  }, [deletedEmployeeReport]);

  useEffect(() => {
    if (!!addedEmployeeReport) {
      fetchData();
      // Ekleme Alert
    }
  }, [addedEmployeeReport]);

  useEffect(() => {
    if (!!updatedEmployeeReport) {
      fetchData();
      // Güncelleme Alert
    }
  }, [updatedEmployeeReport]);

  useEffect(() => {
    return () => {
      dispatch(cleanEmployeeReportState());
    };
  }, []);

  const deleteEmployeeReportHandler = (id: string) => {
    dispatch(deleteEmployeeReport(id));
  };

  const updateEmployeeReportHandler = (
    employeeReport: EmployeeReport | null
  ) => {
    if (employeeReport) {
      setUpdateEmployeeReport(employeeReport);
    }
  };

  return (
    <>
      <View style={styles.reportView}>
        <Text style={styles.report}>Raporlarım</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SickReportAdd")}>
          <Text style={styles.reportAdded}>Rapor Ekle</Text>
        </TouchableOpacity>
      </View>
      <SickReportList
        navigation={navigation}
        employeeReports={employeeReports}
        deleteEmployeeReportHandler={deleteEmployeeReportHandler}
        updateEmployeeReportHandler={updateEmployeeReportHandler}
        fetchData={fetchData}
      />
    </>
  );
};

export default SickReport;
