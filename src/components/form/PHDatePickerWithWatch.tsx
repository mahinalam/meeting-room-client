import { DatePicker, Form } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import "./PHDatePickerWithWatch.css";

type TDatePickerProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
};

const PHDatePicker = ({
  name,
  label,
  onValueChange,
  disabled,
}: TDatePickerProps) => {
  const method = useFormContext();
  const inputValue = useWatch({
    control: method.control,
    name,
  });

  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue, onValueChange]);

  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              size="large"
              style={{ width: "100%" }}
              allowClear={false}
              inputReadOnly
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
