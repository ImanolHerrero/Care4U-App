import React from 'react';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = ({ initialDate = new Date().toISOString().split('T')[0], markedDates, onDayPress }) => {
   return (
      <Calendar
         initialDate={initialDate}
         markedDates={markedDates}
         onDayPress={onDayPress}
         theme={{
            todayTextColor: '#00adf5',
            arrowColor: '#00adf5',
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
         }}
      />
   );
};

export default CalendarComponent;
