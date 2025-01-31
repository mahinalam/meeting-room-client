import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

const ReactDatesRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div>
      <h2>Select Date Range</h2>
      <DateRangePicker
        startDate={startDate}
        startDateId="start_date_id"
        endDate={endDate}
        endDateId="end_date_id"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        isOutsideRange={() => false} // Allow past and future dates
        displayFormat="MM/DD/YYYY" // Customize date format
      />
      <div>
        <p>
          Start Date:{" "}
          {startDate ? startDate.format("MM/DD/YYYY") : "Not selected"}
        </p>
        <p>
          End Date: {endDate ? endDate.format("MM/DD/YYYY") : "Not selected"}
        </p>
      </div>
    </div>
  );
};

export default ReactDatesRangePicker;
