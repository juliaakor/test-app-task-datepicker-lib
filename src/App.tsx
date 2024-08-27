import React from 'react';
import { DateTime } from 'luxon';
import { Container } from './App.style';
import { Calendar, View, RangeCalendar } from 'task-datepicker-lib';

export const defaultConfig = {
  enableHolidays: false,
  enableTasks: true,
  enableViewToggle: true,
  enableWeekends: false,
};

export const defaultCustomHolidays = {
  customHolidays: [
    {
      endDate: '2024-08-22',
      id: '12345',
      name: 'Random Holiday',
      startDate: '2024-08-22',
    },
    {
      endDate: '2024-08-22',
      id: '1234',
      name: 'Random Holiday 2',
      startDate: '2024-08-22',
    },
  ],
};

const setup = {
  config: defaultConfig,
  isOpen: false,
  isWeekStartOnMonday: false,
  label: 'Date',
  showWeekends: true,
  supportedViews: [View.Month, View.Year, View.Week],
}

const rangeSetup = {
  isWeekStartOnMonday: false,
  label: 'RangeDate',
  maxDate: DateTime.local().plus({ years: 1 }),
  minDate: DateTime.local().minus({ years: 1 }),
  showWeekends: true,
}

function App() {
  return (
    <>
      <Container>
        <Calendar {...setup} />
      </Container>
      <Container>
        <RangeCalendar {...rangeSetup} />
      </Container>
    </>
  );
}

export default App;
