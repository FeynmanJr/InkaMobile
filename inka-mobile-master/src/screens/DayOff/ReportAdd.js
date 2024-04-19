import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
//import DocumentPicker from "react-native-document-picker";
import { useNavigation } from "@react-navigation/native";

const ReportAdd = () => { 
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [description, setDescription] = useState("");

  const handleStartDateChange = (event, selectedDate) => {
    setStartDate(selectedDate || startDate);
  };
  const navigation = useNavigation();

  const handleEndDateChange = (event, selectedDate) => {
    setEndDate(selectedDate || endDate);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };
  const handleSaveReport = () => {
    const newReport = {
      startDate,
      endDate,
      description,
    };

    navigation.navigate("DayOffScreen", {
      newReport: newReport,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateTimePickerContainer}>
        <Text>Başlangıç Tarihi:</Text>
        <DateTimePicker
          value={startDate}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={handleStartDateChange}
        />
      </View>

      <View style={styles.dateTimePickerContainer}>
        <Text>İşbaşı Tarihi:</Text>
        <DateTimePicker
          value={endDate}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={handleEndDateChange}
        />
      </View>

      <View style={styles.textInputContainer}>
        <Text>Açıklama:</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          onChangeText={handleDescriptionChange}
          value={description}
        />
      </View>
      {/* <Button title="Rapor Dosyası Ekle" onPress={selectDocument} /> */}

      <Button title="Kaydet" onPress={handleSaveReport} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  dateTimePickerContainer: {
    marginBottom: 16,
  },
  textInputContainer: {
    marginBottom: 16,
  },
  textInput: {
    height: 80,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
  },
});

export default ReportAdd;
