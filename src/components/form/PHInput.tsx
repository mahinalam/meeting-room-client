/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  defaultValue?: any;
};

const PHInput = ({
  type,
  name,
  label,
  disabled,
  defaultValue,
}: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} className="font-semibold mb-0">
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              disabled={disabled}
              className="font-semibold"
              defaultValue={defaultValue}
            />
            {error && <small className="text-red">{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
