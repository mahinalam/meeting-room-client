// // import React, { useEffect, useState } from "react";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";

// // const CustomDateRangepicker: React.FC = () => {
// //   const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
// //     null,
// //     null,
// //   ]);

// //   const [startDate, setStartDate] = useState<Date | undefined>(undefined);
// //   const [endDate, setEndDate] = useState<Date | undefined>(undefined);

// //   useEffect(() => {
// //     if (dateRange[0]) {
// //       setStartDate(dateRange[0]);
// //     } else {
// //       setStartDate(undefined);
// //     }

// //     if (dateRange[1]) {
// //       setEndDate(dateRange[1]);
// //     } else {
// //       setEndDate(undefined);
// //     }
// //   }, [dateRange]);

// //   return (
// //     <DatePicker
// //       selectsRange={true}
// //       startDate={startDate}
// //       endDate={endDate}
// //       onChange={(update) => setDateRange(update)}
// //       calendarStartDay={1}
// //       className="bg-purple-200"
// //     />
// //   );
// // };

// // export default CustomDateRangepicker;

// import React from "react";
// import { DatePicker, Space } from "antd";

// const { RangePicker } = DatePicker;

// const CustomDateRangePicker = () => {
//   return (
//     <div>
//       <Space direction="vertical" size={12}>
//         <RangePicker renderExtraFooter={() => "extra footer"} />
//       </Space>
//     </div>
//   );
// };

// export default CustomDateRangePicker;

"use client";
import { DatePicker, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Reset Ant Design styles
import "./CustomDateRangePicker.css"; // Custom CSS for further tweaks

const { RangePicker } = DatePicker;

const BookingStyleDatePicker = () => {
  return (
    <div className="">
      <Space direction="vertical" size={12}>
        <RangePicker
          style={{
            width: "100%", // Full width
            maxWidth: "100%", // Prevent shrinking
            padding: 0,
          }}
          format="MMM DD, YYYY"
          separator={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 "
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          }
          allowClear={false}
          suffixIcon={null}
          className="booking-calendar"
          renderExtraFooter={() => "Select your dates"}
          placeholder={["Check-in", "Check-out"]}
          size="small"
        />
      </Space>
    </div>
  );
};

export default BookingStyleDatePicker;
