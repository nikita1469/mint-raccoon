import { useEffect, useState } from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { BottomSheet, Button } from "@/shared/ui";
import { styles } from "./DatePicker.styles";
import { LARGEST_MONTHS } from "./const";
import { MONTHS_NAMES, PALETTE_COLORS } from "@/shared/const";
import { DatePickerProps } from "./DatePicker.types";

import moment from "moment";

const DatePicker = <T extends { [K in keyof T]: T[K] }, S = string>(
  props: DatePickerProps<T, S>
): React.ReactElement => {
  const { form, setForm, field, setShowBottomSheet, isFullDate } = props;

  const currentDate = moment();
  const currentYear = currentDate.year();
  const currentMonth = MONTHS_NAMES[currentDate.month()];
  const currentDay = currentDate.date().toString();

  const [selectedDay, setSelectedDay] = useState<string>(() =>
    form[field] ? parseInt((form[field] as string).split("-")[2]).toString() : currentDay
  );
  const [selectedMonth, setSelectedMonth] = useState<string>(() =>
    form[field] ? MONTHS_NAMES[parseInt((form[field] as string).split("-")[1]) - 1] : currentMonth
  );
  const [year, setYear] = useState<number>(() =>
    form[field] ? parseInt((form[field] as string).split("-")[0]) : currentYear
  );
  const [days, setDays] = useState<string[]>([]);

  const years = Array.from({ length: currentYear - 1970 + 1 }, (_, i) => (1970 + i).toString()).reverse();

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  useEffect(() => {
    const monthIndex = MONTHS_NAMES.indexOf(selectedMonth);
    const daysInMonth = getDaysInMonth(new Date(year, monthIndex));
    let updatedDays = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());

    if (selectedMonth === currentMonth) {
      updatedDays = updatedDays.filter((day) => parseInt(day) >= parseInt(currentDay));
    }

    setDays(updatedDays);
  }, [selectedMonth, year, currentDay]);

  const handleChangeMonth = (itemValue: string) => {
    const selectedMonthIndex = MONTHS_NAMES.indexOf(itemValue);
    const currentMonthIndex = MONTHS_NAMES.indexOf(currentMonth);

    if (selectedMonthIndex < currentMonthIndex) {
      return;
    }

    let newDay = selectedDay;

    if (newDay === "31" && !LARGEST_MONTHS.includes(itemValue)) {
      newDay = "1";
    } else if (itemValue === MONTHS_NAMES[1]) {
      const daysInFebruary = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
      if (parseInt(selectedDay, 10) > daysInFebruary) {
        newDay = "1";
      }
    }

    if (itemValue === currentMonth && parseInt(newDay) < parseInt(currentDay)) {
      newDay = currentDay;
    }

    setSelectedMonth(itemValue);
    setSelectedDay(newDay);
  };

  const handleAddDate = () => {
    const monthIndex = (MONTHS_NAMES.indexOf(selectedMonth) + 1).toString().padStart(2, "0");
    const day = selectedDay.padStart(2, "0");
    setForm({ ...form, [field]: `${year}-${monthIndex}-${day}` });
    setShowBottomSheet(null);
  };

  const handleClearDate = () => {
    setForm({ ...props.form, [field]: currentDate.format("YYYY-MM-DD") });
    setShowBottomSheet(null);
  };

  return (
    <BottomSheet {...props} backgroundColor={PALETTE_COLORS.background} snapPoints={["35%"]}>
      <View style={styles.pickerWrapper as StyleProp<ViewStyle>}>
        <View style={styles.pickerContainer as StyleProp<ViewStyle>}>
          <Picker
            selectedValue={selectedDay}
            onValueChange={(itemValue) => setSelectedDay(itemValue)}
            style={styles.pickerDayContainer as StyleProp<TextStyle>}
            itemStyle={styles.pickerText as StyleProp<TextStyle>}
          >
            {days.map((day) => (
              <Picker.Item key={day} label={day} value={day} />
            ))}
          </Picker>
          <Picker
            selectedValue={selectedMonth}
            onValueChange={(itemValue) => handleChangeMonth(itemValue)}
            style={styles.pickerMonthContainer as StyleProp<TextStyle>}
            itemStyle={styles.pickerText as StyleProp<TextStyle>}
          >
            {MONTHS_NAMES.map((month, index) => (
              <Picker.Item key={index} label={month} value={month} />
            ))}
          </Picker>
          {isFullDate && (
            <Picker
              selectedValue={year.toString()}
              onValueChange={(itemValue) => setYear(parseInt(itemValue))}
              style={styles.pickerYearContainer as StyleProp<TextStyle>}
              itemStyle={styles.pickerText as StyleProp<TextStyle>}
            >
              {years.map((yearValue) => (
                <Picker.Item key={yearValue} label={yearValue} value={yearValue} />
              ))}
            </Picker>
          )}
        </View>
        <Button onPress={handleAddDate} style={styles.button}>
          Применить
        </Button>
      </View>
    </BottomSheet>
  );
};

export default DatePicker;
