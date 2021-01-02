import { FormControl, FormLabel } from '@chakra-ui/react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import React from 'react';

const DatePicker = ({ label, isRequired }) => {
  const [selectedDays, setSelectedDays] = React.useState([]);

  console.log('selected', selectedDays);

  const handleDayClick = (day, { selected }) => {
    if (selected) {
      const selectedIndex = selectedDays.findIndex((selectedDay) =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    setSelectedDays({ selectedDays });
  };

  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <DayPicker
        selectedDays={selectedDays}
        onDayClick={handleDayClick}
        disabledDays={[{ before: new Date() }]}
      />
    </FormControl>
  );
};

export default DatePicker;
