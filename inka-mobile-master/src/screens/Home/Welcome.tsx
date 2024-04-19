import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Avatar } from "react-native-elements";
import stringToColor from "../../helpers/stringToColor";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { HiringDate } from "../../types/dashboard";

const Welcome = ({ item }: { item: HiringDate }) => {
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
          <View>
            <Text style={styles.itemTitle}>{item.fullName}</Text>
            <Text style={styles.itemText}>{item.departmentName}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.itemText}>
              {item.hiringDate &&
                format(new Date(item.hiringDate), "d MMMM", {
                  locale: tr,
                })}
            </Text>
            <Text style={styles.itemTitle}>{item.companyName}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Welcome;
