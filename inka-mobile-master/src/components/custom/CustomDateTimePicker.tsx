import React, { useState } from "react";
import { StyleSheet, Pressable, Text, View, Platform } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const CustomDateTimePicker = (props:any) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate:any) => {
    hideDatePicker();

    if (selectedDate) {
      props.onChange(selectedDate);
    }
  };

  return (
    <View>
      <Pressable style={styles.textInput} onPress={showDatePicker}>
        <Text>
          {props.value
            ? moment(props.value).format(props.format)
            : props.placeHolder}
        </Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={props.mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={props.value instanceof Date ? props.value : new Date()}
        confirmTextIOS="Tamam"
        cancelTextIOS="İptal"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: "auto",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  errorInput: {
    borderColor: "red",
  },
});

export default CustomDateTimePicker;
