import React, { useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import { PieChart } from "react-native-chart-kit";
import { FlatList } from "react-native-gesture-handler";
import {
  spendingArray,
  expensesData,
  chartConfig,
  payments,
} from "../../data/dataArrays";
import { buildQueryString } from "../../helpers/request";
import { Pagination } from "../../types/pagination";
import { getExpenseByUserId } from "../../store/slices/employeeExpense";
import { dispatch, useSelector } from "../../store";
import useAuth from "../../hooks/useAuth";
import { Expense as ExpenseType } from "../../types/expense";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const Expense = ({ navigation }) => {
  const { authUser } = useAuth();
  const { employeeExpenses } = useSelector((state) => state.employeeExpense);
  const { parameter } = useSelector((state) => state.client);
  const { t } = useTranslation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (pagination?: Pagination) => {
    const queryString = pagination ? buildQueryString(pagination) : "";

    dispatch(getExpenseByUserId(authUser?.userId!, queryString));
  };

  console.log(employeeExpenses);

  const renderItem = ({ item }: { item: ExpenseType }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate("Transactions", {
          item: item,
          payments: payments,
          backScreen: "Expenses",
        })
      }
    >
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          {/* <Image style={styles.itemIcon} source={{ uri: item.icon }} /> */}
          <View style={styles.itemTxtContainer}>
            <Text style={styles.itemTitle}>
              {item.expenseDate &&
                format(new Date(item.expenseDate), "dd/MM/yyyy")}
            </Text>
            <Text style={styles.itemText}>
              {parameter.find((p) => p.id === item.expenseTypeId)?.value}
            </Text>
          </View>
        </View>
        <Image
          style={styles.rightArrow}
          source={require("../../../assets/icons/rightArrow.png")}
        />
      </View>
    </TouchableOpacity>
  );

  const onPressViewCategories = () => {
    navigation.navigate("AllSpendingCategories", { spendingArray });
  };

  const onPressButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ display: "flex", flex: 3 }}>
          <Text style={styles.title}>{t("MY.EXPENSE")}</Text>
        </View>
        <View style={{ display: "flex", flex: 3 }}>
          <TouchableHighlight
            style={styles.btnContainer}
            onPress={onPressButton}
            underlayColor="rgba(73,182,77,1,0.9)"
          >
            <Text style={styles.btnTxt}>Trade</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={employeeExpenses.items.slice(0, 4)}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={onPressViewCategories}
        >
          <Text style={styles.viewTxt}>View all categories</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Expense;
