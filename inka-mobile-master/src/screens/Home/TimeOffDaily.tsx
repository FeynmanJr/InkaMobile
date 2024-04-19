import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Avatar } from "react-native-elements";
import stringToColor from "../../helpers/stringToColor";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";
import { useSelector } from "../../store";
import { EmployeeDailyTimeOff } from "../../types/dashboard";
import { useEffect, useState } from "react";

const TimeOffDaily = () => {
  const { t } = useTranslation();
  const { employeeDailyTimeOff, loadingEmployeeDailyTimeOff } = useSelector(
    (state) => state.dashboard
  );
  const [todayTimeOff, setTodayTimeOff] = useState<EmployeeDailyTimeOff[] | []>(
    []
  );
  const [tomorrowTimeOff, setTomorrowTimeOff] = useState<
    EmployeeDailyTimeOff[] | []
  >([]);

  useEffect(() => {
    if (employeeDailyTimeOff.items.length > 0) {
      const newTodayTimeOff = employeeDailyTimeOff.items.filter(
        (dailyTimeOff) => dailyTimeOff.dayType === "Today"
      );

      const newTomorrowTimeOff = employeeDailyTimeOff.items.filter(
        (dailyTimeOff) => dailyTimeOff.dayType === "Tomorrow"
      );

      setTodayTimeOff(newTodayTimeOff);
      setTomorrowTimeOff(newTomorrowTimeOff);
    }
  }, [employeeDailyTimeOff]);

  return (
    <View style={styles.timeOffDailyContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{t("TIME.OFF.DAILY.TITLE")}</Text>
      </View>
      {employeeDailyTimeOff.items.length ? (
        <View style={styles.dailyContainer}>
          <View style={{ flex: 3 }}>
            <Text>{t("TIME.OFF.DAILY.TODAY")}</Text>
            {todayTimeOff.map((tto, index) => (
              <Avatar
                size="small"
                rounded
                title={`${tto.employeeFullName!.split(" ")[0][0]}${
                  tto.employeeFullName!.split(" ")[1][0]
                }`}
                containerStyle={{ marginRight: 10 }}
                overlayContainerStyle={{
                  backgroundColor: stringToColor(tto.employeeFullName!),
                }}
              />
            ))}
          </View>
          <View style={{ flex: 3 }}>
            <Text>{t("TIME.OFF.DAILY.TOMORROW")}</Text>
            {tomorrowTimeOff.map((tto, index) => (
              <Avatar
                size="small"
                rounded
                title={`${tto.employeeFullName!.split(" ")[0][0]}${
                  tto.employeeFullName!.split(" ")[1][0]
                }`}
                containerStyle={{ marginRight: 10 }}
                overlayContainerStyle={{
                  backgroundColor: stringToColor(tto.employeeFullName!),
                }}
              />
            ))}
          </View>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default TimeOffDaily;
