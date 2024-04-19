import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Avatar } from "react-native-elements";
import stringToColor from "../../helpers/stringToColor";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";
import { SpecialDays } from "types/dashboard";

const Celebration = ({ item }: { item: SpecialDays }) => {
  const { t } = useTranslation();
  console.log(item);
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      //   onPress={() =>
      //     navigation.navigate("Transactions", {
      //       item: item,
      //       payments: payments,
      //       backScreen: "Expenses",
      //     })
      //   }
    >
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          {item.fullName && (
            <Avatar
              size="small"
              rounded
              title={`${item.fullName!.split(" ")[0][0]}${
                item.fullName!.split(" ")[1][0]
              }`}
              containerStyle={{ marginRight: 10 }}
              overlayContainerStyle={{
                backgroundColor: stringToColor(item.fullName!),
              }}
            />
          )}
          {/* <Image style={styles.itemIcon} source={{ uri: item.icon }} /> */}
          <View>
            <Text style={styles.itemTitle}>{item.fullName}</Text>
            <Text style={styles.itemText}>
              {item?.speacialDayType === "Birthday"
                ? format(new Date(item.birthday!), "d MMMM", {
                    locale: tr,
                  })
                : item?.speacialDayType === "BusinessAnniversary"
                ? format(new Date(item.hiringDate!), "d MMMM", {
                    locale: tr,
                  })
                : format(new Date(item.day!), "d MMMM", {
                    locale: tr,
                  })}
            </Text>
          </View>
        </View>
        <View>
          {item?.speacialDayType === "Holiday" ? (
            <Text style={styles.itemText}>
              {t("CELEBRATION.HOLIDAY")}
              <Icon name="gift" size={24} color={"red"} />
            </Text>
          ) : item?.speacialDayType === "Birthday" ? (
            <Text style={styles.itemText}>
              {t("CELEBRATION.BIRTHDAY")}
              <Icon name="cake-candles" size={18} color="grey" />
            </Text>
          ) : (
            <Text style={styles.itemText}>
              {t("CELEBRATION.ANNIVERSARY", {
                year:
                  new Date().getFullYear() -
                  new Date(item.hiringDate!).getFullYear(),
              })}
              <Icon name="gift" size={18} color="grey" />
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Celebration;
