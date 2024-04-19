import React, { useEffect, useState, useTransition } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./styles";
import { addDays, subDays } from "date-fns";
import { useFormik } from "formik";
import * as yup from "yup";
import { dispatch, useSelector } from "../../store";
import useAuth from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import {
  getEmployeeReportById,
  postEmployeeReport,
  putEmployeeReport,
} from "../../store/slices/employeeReport";
import { Button } from "react-native-elements";
import CustomDateTimePicker from "../../components/custom/CustomDateTimePicker";
import Toast from "react-native-toast-message";
// import DocumentPicker from "react-native-document-picker";


const SickReportAdd = ({ route, navigation }) => {
  const { authUser } = useAuth();
  const { t } = useTranslation();
  const [minDate, setMinDate] = useState<Date | null>(null);
  const [maxDate, setMaxDate] = useState<Date | null>(null);
  const { parameter, parameterGroup, holiday } = useSelector(
    (state) => state.client
  );
  const { employeeReport, employeeReports } = useSelector(
    (state) => state.employeeReport
  );
  let isUpdate = false;

  const onPressButton = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (route.params?.id) {
      isUpdate = false;
      dispatch(getEmployeeReportById(route.params?.id));
    }
  }, [route]);

  const title = route.params?.title;
  // const selectDocument = async () => {
  //   try {
  //     const doc = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //     console.log(doc);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err))
  //       console.log("Yükleme iptal edildi", err);
  //     else
  //       console.log(err);
  //   }
  // };

  const timeOfRestrictionList = parameter
    .filter((item) => {
      return (
        item.parameterGroupId ===
        parameterGroup.find((item) => item.code === "TIMEOFRESTRICTION")?.id
      );
    })
    .sort(function (x, y) {
      return x.order! - y.order!;
    });

  useEffect(() => {
    if (
      timeOfRestrictionList.length > 0 &&
      minDate == null &&
      maxDate == null
    ) {
      const newMaxDate = addDays(
        new Date(),
        parseInt(
          timeOfRestrictionList.find((item) => item.value === "İleri")?.code!
        )
      );

      const newMinDate = subDays(
        new Date(),
        parseInt(
          timeOfRestrictionList.find((item) => item.value === "Geri")?.code!
        )
      );
      setMinDate(newMinDate);
      setMaxDate(newMaxDate);
    }
  }, [timeOfRestrictionList]);

  const validationSchema = yup.object({
    usedTimeOffDay: yup.string().required(t("GLOBAL.REQUIRED")),
    startDate: yup.string().required(t("GLOBAL.REQUIRED")),
    endDate: yup.string().required(t("GLOBAL.REQUIRED")),
    description: yup.string().nullable(),
    reportPath: !isUpdate
      ? yup.string().required(t("GLOBAL.REQUIRED"))
      : yup.string(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userId: authUser?.userId!,
      companyId: isUpdate ? employeeReport?.companyId : authUser?.companyId,
      departmentId: isUpdate
        ? employeeReport?.departmentId
        : authUser?.departmentId,
      usedTimeOffDay: isUpdate ? employeeReport?.usedTimeOffDay : "",
      startDate: isUpdate ? employeeReport?.startDate : "",
      endDate: isUpdate ? employeeReport?.endDate : "",
      description: isUpdate ? employeeReport?.description : "",
      reportPath: isUpdate ? employeeReport?.reportPath : "",
    },
    validationSchema,
    onSubmit: (values) => {
      const timeOffDaysUsedBefore = isTimeOffDaysUsedBefore();

      if (timeOffDaysUsedBefore) {
        // Hata Alert: O tarihler arasında rapor kullanılmış
        return;
      }

      dispatch(
        isUpdate
          ? putEmployeeReport({
              ...values,
              id: employeeReport?.id,
            })
          : postEmployeeReport(values)
      )
        .then((response) => {
         
          Toast.show({
            type: "success",
            text1: "Başarılı",
            text2: "Rapor başarıyla eklendi.",
          });

          navigation.goBack();
        })
        .catch((error) => {
         
          Toast.show({
            type: "error",
            text1: "Hata",
            text2: "Rapor eklenirken bir hata oluştu.",
          });
        });
    },
  });

  const isTimeOffDaysUsedBefore = () => {
    const startDateTime = new Date(formik.values.startDate!).getTime();
    const endDateTime = new Date(formik.values.endDate!).getTime();
    let reportList = employeeReports.items;

    if (isUpdate) {
      reportList = employeeReports.items.filter(
        (item) => item.id !== employeeReport?.id
      );
    }
    const isDateInRange = reportList.some((leave) => {
      const leaveStartDate = new Date(leave.startDate!).getTime();
      const leaveEndDate =
        new Date(leave.endDate!).getTime() - 24 * 60 * 60 * 1000;

      return startDateTime <= leaveEndDate && endDateTime >= leaveStartDate;
    });

    return isDateInRange;
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.blueTxt}>
            {t("TIME.OFF.START.DATE")} {title}
          </Text>
          <CustomDateTimePicker
            value={formik.values.startDate}
            format="YYYY-MM-DD"
            mode="datetime"
            id="startDate"
            onChange={(selectedDate: any) => {
              formik.setFieldValue("startDate", selectedDate);
            }}
          />
          {/* <TextInput
            style={styles.inputTxt}
            id="startDate"
            multiline
            onChangeText={formik.handleChange}
            value={formik.values.startDate}            
          /> */}
          {Boolean(formik.errors.startDate) && formik.touched.startDate && (
            <View style={styles.errorView}>
              <Text style={styles.errorText}>{formik.errors.startDate}</Text>
            </View>
          )}
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.blueTxt}>
            {t("TIME.OFF.END.DATE")} {title}
          </Text>
          <CustomDateTimePicker
            value={formik.values.endDate}
            format="YYYY-MM-DD"
            mode="datetime"
            id="endDate"
            onChange={(selectedDate: any) => {
              formik.setFieldValue("endDate", selectedDate);
            }}
          />
          {/* <TextInput
            style={styles.inputTxt}
            id="endDate"
            multiline
            onChangeText={formik.handleChange}
            value={formik.values.endDate}
          /> */}
          {Boolean(formik.errors.endDate) && formik.touched.endDate && (
            <View style={styles.errorView}>
              <Text style={styles.errorText}>{formik.errors.endDate}</Text>
            </View>
          )}
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.blueTxt}>
            {t("GLOBAL.DESCRIPTION")} {title}
          </Text>
          <TextInput
            style={styles.inputTxt}
            id="description"
            multiline
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {Boolean(formik.errors.description) && formik.touched.description && (
            <View style={styles.errorView}>
              <Text style={styles.errorText}>{formik.errors.description}</Text>
            </View>
          )}
        </View>
        {/* <Button title="Rapor Dosyası Ekle" onPress={selectDocument} /> */}

        {/* <View style={styles.rowContainer}>
          <Text style={styles.blueTxt}>MKT PRICE</Text>
        </View> */}
        {/* <View style={styles.rowContainer}></View> */}
      </View>
      <Button
        onPress={() => {
          formik.handleSubmit();
        }}
        title={isUpdate ? "GÜNCELLE" : "EKLE"}
      />
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Kapat"
      />

      <TouchableHighlight
        style={styles.btnContainer}
        onPress={() => formik.handleSubmit()}
        underlayColor="rgba(73,182,77,1,0.9)"
      >
        <Text style={styles.btnTxt}>Trade</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SickReportAdd;
